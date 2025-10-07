'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import type { Slide } from '@/lib/data';
import { ArrowLeft, ArrowRight, Home, Mic, Wind } from 'lucide-react';
import * as LucideIcons from 'lucide-react';

type SlideViewerProps = {
  slides: Slide[];
  moduleName: string;
  title: string;
  iconName: 'Mic' | 'Wind';
};

const icons = {
  Mic: Mic,
  Wind: Wind,
};

const DynamicIcon = ({ name }: { name: string }) => {
    const Icon = LucideIcons[name as keyof typeof LucideIcons] as React.ElementType;
    if (!Icon) {
      return null;
    }
    return <Icon className="w-16 h-16 text-accent mb-4" />;
};


export default function SlideViewer({ slides, moduleName, title, iconName }: SlideViewerProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const progress = ((currentSlide + 1) / slides.length) * 100;
  
  const ModuleIcon = icons[iconName];
  const slide = slides[currentSlide];

  return (
    <Card className="w-full max-w-3xl shadow-2xl">
      <CardHeader>
        <div className="flex justify-between items-start">
            <div>
                <CardTitle className="flex items-center gap-3 text-2xl mb-2">
                    <ModuleIcon className="text-accent" size={28} />
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
      <CardContent className="min-h-[300px] flex flex-col items-center justify-center text-center p-6 md:p-8">
        <DynamicIcon name={slide.icon} />
        <h3 className="text-xl md:text-2xl font-semibold text-primary mb-4">{slide.title}</h3>
        <div className="text-foreground/90 space-y-2 text-left whitespace-pre-wrap">
            {slide.content}
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline" onClick={() => setCurrentSlide(currentSlide - 1)} disabled={currentSlide === 0}>
          <ArrowLeft className="mr-2" />
          Anterior
        </Button>
        {currentSlide < slides.length - 1 ? (
          <Button onClick={() => setCurrentSlide(currentSlide + 1)}>
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
