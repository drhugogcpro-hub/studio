import { notFound } from 'next/navigation';
import { noiseQuiz, particulateQuiz } from '@/lib/data';
import Quiz from '@/components/Quiz';
import Header from '@/components/Header';
import { Mic, Wind } from 'lucide-react';

type Props = {
  params: { module: string };
};

export function generateMetadata({ params }: Props) {
    const { module } = params;
    const title = module === 'noise' ? 'Ruido Laboral' : 'Material Particulado';
    return {
        title: `Evaluación: ${title}`
    }
}

export default function QuizPage({ params }: Props) {
  const { module } = params;
  let questions;
  let title;
  let Icon;

  if (module === 'noise') {
    questions = noiseQuiz;
    title = 'Ruido Laboral';
    Icon = Mic;
  } else if (module === 'particulate') {
    questions = particulateQuiz;
    title = 'Material Particulado';
    Icon = Wind;
  } else {
    notFound();
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 container mx-auto p-4 md:p-8 flex items-center justify-center">
        <Quiz questions={questions} moduleName={module} title={title} Icon={Icon} />
      </main>
    </div>
  );
}
