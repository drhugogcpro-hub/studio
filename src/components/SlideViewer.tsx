'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import type { Slide } from '@/lib/data';
import type { LucideIcon } from 'lucide-react';
import { ArrowLeft, ArrowRight, Home } from 'lucide-react';

type SlideViewerProps = {
  slides: Slide[];
  moduleName: string;
  title: string;
  Icon: LucideIcon;
};

export default function SlideViewer({ slides, moduleName, title, Icon }: SlideViewerProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const progress = ((currentSlide + 1) / slides.length) * 100;

  const goToNext = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const goToPrev = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  return (
    <Card className="w-full max-w-2xl shadow-2xl">
      <CardHeader>
        <div className="flex justify-between items-start">
            <div>
                <CardTitle className="flex items-center gap-3 text-2xl mb-2">
                    <Icon className="text-accent" size={28} />
                    {title}
                </CardTitle>
                <CardDescription>Diapositiva {currentSlide + 1} de {slides.length}</CardDescription>
            </div>
            <Button variant="ghost" size="icon" asChild>
                <Link href="/"><Home size={20}/></Link>
            </Button>
        </div>
        <Progress value={progress} className="w-full mt-4" />
      </CardHeader>
      <CardContent className="min-h-[200px] flex flex-col justify-center">
        <h3 className="text-xl font-semibold text-primary mb-4">{slides[currentSlide].title}</h3>
        <p className="text-foreground/90">{slides[currentSlide].content}</p>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline" onClick={goToPrev} disabled={currentSlide === 0}>
          <ArrowLeft className="mr-2" />
          Anterior
        </Button>
        {currentSlide < slides.length - 1 ? (
          <Button onClick={goToNext}>
            Siguiente
            <ArrowRight className="ml-2" />
          </Button>
        ) : (
          <Button asChild className="bg-accent hover:bg-accent/90">
            <Link href={`/${moduleName}/quiz`}>Comenzar Evaluación</Link>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}
