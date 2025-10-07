'use client';

import { useContext } from 'react';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { CheckCircle2, Mic, Wind } from 'lucide-react';
import { AppContext } from '@/context/AppContext';
import Header from '@/components/Header';

export default function Home() {
  const { noiseScore, particulateScore, certificateGenerated } = useContext(AppContext);

  const noiseModuleCompleted = noiseScore !== null;
  const particulateModuleCompleted = particulateScore !== null;

  const canGenerateCertificate = noiseScore !== null && noiseScore >= 70 && particulateScore !== null && particulateScore >= 70;

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 container mx-auto p-4 md:p-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-2">Bienvenido a la Capacitación</h1>
          <p className="text-lg text-muted-foreground">
            Selecciona un módulo para comenzar tu aprendizaje sobre seguridad laboral.
          </p>
        </div>

        {canGenerateCertificate && !certificateGenerated && (
          <Card className="mb-8 bg-green-50 border-green-200 dark:bg-green-900/20 dark:border-green-800">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-green-700 dark:text-green-400">
                <CheckCircle2 />
                ¡Felicidades!
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-green-600 dark:text-green-300">Has aprobado ambas evaluaciones. Ahora puedes generar tu certificado.</p>
            </CardContent>
            <CardFooter>
              <Button asChild className="bg-green-600 hover:bg-green-700 text-white">
                <Link href="/certificate">Generar Certificado</Link>
              </Button>
            </CardFooter>
          </Card>
        )}

        <div className="grid md:grid-cols-2 gap-8">
          <Card className="flex flex-col">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center gap-3">
                  <Mic className="text-accent" size={28} />
                  Ruido Laboral
                </CardTitle>
                {noiseModuleCompleted && <Badge variant={noiseScore >= 70 ? "default" : "destructive"} className={noiseScore >= 70 ? 'bg-green-500' : ''}>{noiseScore}%</Badge>}
              </div>
              <CardDescription>Aprende sobre los riesgos del ruido en el entorno de trabajo y cómo mitigarlos.</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-sm text-muted-foreground">10 diapositivas y una evaluación de 10 preguntas.</p>
            </CardContent>
            <CardFooter>
              <Button asChild className="w-full">
                <Link href="/noise">{noiseModuleCompleted ? 'Revisar Módulo' : 'Comenzar Módulo'}</Link>
              </Button>
            </CardFooter>
          </Card>

          <Card className="flex flex-col">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center gap-3">
                  <Wind className="text-accent" size={28} />
                  Material Particulado
                </CardTitle>
                {particulateModuleCompleted && <Badge variant={particulateScore >= 70 ? "default" : "destructive"} className={particulateScore >= 70 ? 'bg-green-500' : ''}>{particulateScore}%</Badge>}
              </div>
              <CardDescription>Entiende los peligros del material particulado y el uso correcto de protección respiratoria.</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-sm text-muted-foreground">10 diapositivas y una evaluación de 10 preguntas.</p>
            </CardContent>
            <CardFooter>
              <Button asChild className="w-full">
                <Link href="/particulate">{particulateModuleCompleted ? 'Revisar Módulo' : 'Comenzar Módulo'}</Link>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </main>
    </div>
  );
}
