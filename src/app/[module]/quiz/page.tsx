import { notFound } from 'next/navigation';
import Quiz from '@/components/Quiz';
import Header from '@/components/Header';
import { noiseQuiz } from '@/lib/modules/noise-data';
import { particulateQuiz } from '@/lib/modules/particulate-data';

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
  let iconName;

  if (module === 'noise') {
    questions = noiseQuiz;
    title = 'Ruido Laboral';
    iconName = 'Mic';
  } else if (module === 'particulate') {
    questions = particulateQuiz;
    title = 'Material Particulado';
    iconName = 'Wind';
  } else {
    notFound();
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 container mx-auto p-4 md:p-8 flex items-center justify-center">
        <Quiz questions={questions} moduleName={module} title={title} iconName={iconName} />
      </main>
    </div>
  );
}
