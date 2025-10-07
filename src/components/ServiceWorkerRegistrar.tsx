'use client';

import { useEffect } from 'react';
import { useToast } from '@/hooks/use-toast';

export default function ServiceWorkerRegistrar() {
  const { toast } = useToast();

  useEffect(() => {
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.service-worker
          .register('/sw.js')
          .then((registration) => {
            console.log('Service Worker registered with scope:', registration.scope);
          })
          .catch((error) => {
            console.error('Service Worker registration failed:', error);
            toast({
              title: 'Error de Conexión',
              description: 'No se pudo activar el modo sin conexión.',
              variant: 'destructive',
            });
          });
      });
    }
  }, [toast]);

  return null;
}
