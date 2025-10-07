'use client';

import { useState, useContext, useMemo } from 'react';
import { useRouter } from 'next/navigation';
import { AppContext } from '@/context/AppContext';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Progress } from '@/components/ui/progress';
import { useToast } from '@/components/ui/use-toast';
import type { QuizQuestion } from '@/lib/data';
import type { LucideIcon } from 'lucide-react';
import { CheckCircle, Home, RotateCw, Send, ThumbsDown, ThumbsUp, XCircle } from 'lucide-react';

type QuizProps = {
  questions: QuizQuestion[];
  moduleName: string;
  title: string;
  Icon: LucideIcon;
};

export default function Quiz({ questions, moduleName, title, Icon }: QuizProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<(number | null)[]>(Array(questions.length).fill(null));
  const [submitted, setSubmitted] = useState(false);
  const router = useRouter();
  const { toast } = useToast();
  const { noiseScore, particulateScore, setNoiseScore, setParticulateScore } = useContext(AppContext);

  const score = useMemo(() => {
    return answers.reduce((correct, answer, index) => {
      return answer === questions[index].a ? correct + 1 : correct;
    }, 0);
  }, [answers, questions]);
  
  const scorePercent = Math.round((score / questions.length) * 100);

  const handleSelectAnswer = (choice: string) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = parseInt(choice);
    setAnswers(newAnswers);
  };

  const handleSubmit = () => {
    if (answers.includes(null)) {
      toast({
        title: 'Respuestas Incompletas',
        description: 'Por favor, responde todas las preguntas antes de enviar.',
        variant: 'destructive',
      });
      return;
    }

    if (moduleName === 'noise') {
      setNoiseScore(scorePercent);
    } else {
      setParticulateScore(scorePercent);
    }
    setSubmitted(true);
  };

  if (submitted) {
    const passed = scorePercent >= 70;
    const isFirstQuizDone = moduleName === 'noise' && particulateScore === null;
    const bothQuizzesDone = (moduleName === 'noise' && particulateScore !== null) || (moduleName === 'particulate' && noiseScore !== null);
    const canGetCertificate = noiseScore >= 70 && particulateScore >= 70;

    return (
      <Card className="w-full max-w-2xl shadow-2xl">
        <CardHeader>
          <CardTitle className="text-2xl">Resultados de la Evaluación: {title}</CardTitle>
          <CardDescription>Tu puntuación final y retroalimentación.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="text-center mb-6 p-6 rounded-lg bg-secondary">
            <h3 className="text-lg font-medium text-secondary-foreground">Tu Puntuación</h3>
            <p className={`text-5xl font-bold ${passed ? 'text-green-600' : 'text-destructive'}`}>{scorePercent}%</p>
            {passed ? (
              <p className="flex items-center justify-center gap-2 mt-2 text-green-600"><ThumbsUp/> ¡Aprobado!</p>
            ) : (
              <p className="flex items-center justify-center gap-2 mt-2 text-destructive"><ThumbsDown/> Necesitas 70% para aprobar.</p>
            )}
          </div>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="feedback">
              <AccordionTrigger>Ver Retroalimentación Detallada</AccordionTrigger>
              <AccordionContent>
                <div className="space-y-4 mt-4">
                  {questions.map((q, i) => (
                    <div key={i} className="p-3 border rounded-md">
                      <p className="font-semibold">{i + 1}. {q.q}</p>
                      <p className="text-sm">Tu respuesta: <span className="font-medium">{answers[i] !== null ? q.opts[answers[i]] : 'No respondida'}</span></p>
                      {answers[i] === q.a ? (
                        <p className="text-sm text-green-600 flex items-center gap-1"><CheckCircle size={16}/> Correcto</p>
                      ) : (
                        <>
                          <p className="text-sm text-destructive flex items-center gap-1"><XCircle size={16}/> Incorrecto</p>
                          <p className="text-sm text-muted-foreground mt-1"><strong>Explicación:</strong> {q.exp}</p>
                        </>
                      )}
                    </div>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </CardContent>
        <CardFooter className="flex-col sm:flex-row justify-end gap-2">
            {!passed && (
                <Button variant="outline" onClick={() => router.refresh()}>
                    <RotateCw className="mr-2 h-4 w-4" />
                    Reintentar
                </Button>
            )}
            { isFirstQuizDone && <Button onClick={() => router.push('/particulate')}>Iniciar Módulo de Material Particulado</Button>}
            { bothQuizzesDone && canGetCertificate && <Button className="bg-green-600 hover:bg-green-700" onClick={() => router.push('/certificate')}>Generar Certificado</Button>}
            <Button onClick={() => router.push('/')}>
                <Home className="mr-2 h-4 w-4" />
                Volver al inicio
            </Button>
        </CardFooter>
      </Card>
    );
  }

  return (
    <Card className="w-full max-w-2xl shadow-2xl">
      <CardHeader>
        <div className="flex justify-between items-start">
            <CardTitle className="flex items-center gap-3 text-2xl">
                <Icon className="text-accent" size={28} />
                Evaluación: {title}
            </CardTitle>
            <Button variant="ghost" size="icon" asChild>
                <Link href="/"><Home size={20}/></Link>
            </Button>
        </div>
        <CardDescription>Pregunta {currentQuestion + 1} de {questions.length}</CardDescription>
        <Progress value={((currentQuestion + 1) / questions.length) * 100} className="w-full mt-4" />
      </CardHeader>
      <CardContent className="min-h-[200px]">
        <h3 className="text-lg font-semibold mb-4">{questions[currentQuestion].q}</h3>
        <RadioGroup value={answers[currentQuestion]?.toString()} onValueChange={handleSelectAnswer}>
          {questions[currentQuestion].opts.map((opt, i) => (
            <div key={i} className="flex items-center space-x-2 p-3 rounded-md hover:bg-secondary transition-colors">
              <RadioGroupItem value={i.toString()} id={`q${currentQuestion}-opt${i}`} />
              <Label htmlFor={`q${currentQuestion}-opt${i}`} className="flex-1 cursor-pointer">{opt}</Label>
            </div>
          ))}
        </RadioGroup>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline" onClick={() => setCurrentQuestion(currentQuestion - 1)} disabled={currentQuestion === 0}>
          Anterior
        </Button>
        {currentQuestion < questions.length - 1 ? (
          <Button onClick={() => setCurrentQuestion(currentQuestion + 1)}>Siguiente</Button>
        ) : (
          <Button className="bg-accent hover:bg-accent/90" onClick={handleSubmit}>
            <Send className="mr-2 h-4 w-4" />
            Enviar Evaluación
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}
