import { notFound } from 'next/navigation';
import { noiseSlides, particulateSlides } from '@/lib/data';
import SlideViewer from '@/components/SlideViewer';
import Header from '@/components/Header';

type Props = {
  params: { module: string };
};

export function generateMetadata({ params }: Props) {
    const { module } = params;
    const title = module === 'noise' ? 'Ruido Laboral' : 'Material Particulado';
    return {
        title: `Módulo: ${title}`
    }
}

export default function ModulePage({ params }: Props) {
  const { module } = params;
  let slides;
  let title;
  let iconName;

  if (module === 'noise') {
    slides = noiseSlides;
    title = 'Ruido Laboral';
    iconName = 'Mic';
  } else if (module === 'particulate') {
    slides = particulateSlides;
    title = 'Material Particulado';
    iconName = 'Wind';
  } else {
    notFound();
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 container mx-auto p-4 md:p-8 flex items-center justify-center">
        <SlideViewer slides={slides} moduleName={module} title={title} iconName={iconName} />
      </main>
    </div>
  );
}
