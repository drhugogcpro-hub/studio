'use client';

import { useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { AppContext } from '@/context/AppContext';
import { useToast } from '@/hooks/use-toast';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { certificateConfig } from '@/lib/data';
import { AlertCircle, Download, Send } from 'lucide-react';
import { Skeleton } from './ui/skeleton';

export default function CertificateFlow() {
  const router = useRouter();
  const { toast } = useToast();
  const { noiseScore, particulateScore, setCertificateGenerated } = useContext(AppContext);
  const [workerName, setWorkerName] = useState('');
  const [isEligible, setIsEligible] = useState<boolean | null>(null);

  useEffect(() => {
    if (noiseScore !== null && particulateScore !== null) {
      const eligible = noiseScore >= 70 && particulateScore >= 70;
      if (!eligible) {
        toast({
          title: 'Acceso Denegado',
          description: 'No cumples con los requisitos para generar un certificado.',
          variant: 'destructive',
        });
        router.push('/');
      } else {
        setIsEligible(true);
      }
    } else if (noiseScore === null || particulateScore === null) {
        // Scores are not loaded yet or not completed
        // Keep isEligible null to show loading state
    }
  }, [noiseScore, particulateScore, router, toast]);

  const generateCertificateHTML = () => {
    const today = new Date().toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' });
    const expiry = new Date();
    expiry.setFullYear(expiry.getFullYear() + 1);
    const expiryDate = expiry.toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' });

    return `
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Certificado - ${workerName}</title>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;700&family=Georgia&display=swap');
    body { font-family: 'Georgia', serif; background-color: #f0f2f5; margin: 0; padding: 20px; display: flex; justify-content: center; align-items: center; min-height: 100vh; }
    .cert-container { width: 21cm; height: 29.7cm; background: white; box-shadow: 0 10px 30px rgba(0,0,0,0.1); display: flex; flex-direction: column; position: relative; }
    .cert-border { border: 10px solid ${certificateConfig.primaryColor}; flex-grow: 1; margin: 20px; display: flex; flex-direction: column; padding: 2.5cm; box-sizing: border-box; }
    .cert-border::before { content: ''; position: absolute; top: 35px; left: 35px; right: 35px; bottom: 35px; border: 2px solid ${certificateConfig.secondaryColor}; pointer-events: none; }
    .header { text-align: center; color: ${certificateConfig.primaryColor}; font-family: 'Inter', sans-serif; }
    .header h1 { font-size: 36px; margin: 0; text-transform: uppercase; letter-spacing: 2px; }
    .header p { font-size: 16px; margin: 10px 0; }
    .worker-name { font-family: 'Georgia', serif; font-size: 48px; font-weight: bold; color: ${certificateConfig.secondaryColor}; margin: 20px 0; }
    .content { text-align: center; font-family: 'Inter', sans-serif; font-size: 18px; line-height: 1.6; flex-grow: 1; }
    .content ul { list-style: none; padding: 0; display: inline-block; text-align: left; margin: 20px 0; }
    .content li { margin-bottom: 10px; }
    .footer { display: flex; justify-content: space-between; align-items: flex-end; margin-top: 40px; font-family: 'Inter', sans-serif; font-size: 14px; border-top: 1px solid #ccc; padding-top: 20px; }
    .signature-block, .info-block { width: 45%; }
    .signature-img { max-height: 60px; margin-bottom: 5px; }
    .signature-line { border-top: 1px solid #333; margin: 0; }
    .info-block p, .signature-block p { margin: 5px 0; }
    @media print { body { background-color: white; padding: 0; } .cert-container { box-shadow: none; } }
  </style>
</head>
<body>
  <div class="cert-container">
    <div class="cert-border">
      <div class="header">
        <h1>Certificado de Capacitación</h1>
        <p>Este certifica que</p>
        <h2 class="worker-name">${workerName}</h2>
        <p>ha completado satisfactoriamente la capacitación en:</p>
      </div>
      <div class="content">
        <ul>
          <li>✔️ <strong>Ruido Laboral</strong> (Calificación: ${noiseScore}%)</li>
          <li>✔️ <strong>Material Particulado</strong> (Calificación: ${particulateScore}%)</li>
        </ul>
        <p>Este entrenamiento cumple con los estándares recomendados para la concientización sobre seguridad en el lugar de trabajo.</p>
      </div>
      <div class="footer">
        <div class="info-block">
          <p><strong>Fecha de emisión:</strong> ${today}</p>
          <p><strong>Validez hasta:</strong> ${expiryDate}</p>
          <p><strong>Empresa:</strong> ${certificateConfig.companyName}</p>
        </div>
        <div class="signature-block" style="text-align: center;">
          ${certificateConfig.signatureURL ? `<img src="${certificateConfig.signatureURL}" alt="Firma" class="signature-img">` : ''}
          <hr class="signature-line">
          <p>${certificateConfig.doctorName}</p>
          <p>Licencia: ${certificateConfig.doctorLicense}</p>
          <p>Capacitador</p>
        </div>
      </div>
    </div>
  </div>
</body>
</html>`;
  };

  const handleDownload = () => {
    if (!workerName.trim()) {
      toast({
        title: 'Nombre Requerido',
        description: 'Por favor, ingresa tu nombre completo.',
        variant: 'destructive',
      });
      return;
    }

    const certHTML = generateCertificateHTML();
    const blob = new Blob([certHTML], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `Certificado_${workerName.replace(/\s+/g, '_')}.html`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    
    setCertificateGenerated(true);

    toast({
      title: '¡Descarga Iniciada!',
      description: 'Tu certificado se está descargando como un archivo HTML.',
      action: <Button variant="outline" onClick={() => router.push('/')}>Volver al inicio</Button>
    });
  };

  if (isEligible === null) {
      return (
        <Card className="w-full max-w-lg">
            <CardHeader><CardTitle>Verificando...</CardTitle></CardHeader>
            <CardContent className="space-y-4">
                <Skeleton className="h-4 w-3/4" />
                <Skeleton className="h-10 w-full" />
                <Skeleton className="h-4 w-1/2" />
            </CardContent>
            <CardFooter>
                 <Skeleton className="h-10 w-32" />
            </CardFooter>
        </Card>
      )
  }

  return (
    <Card className="w-full max-w-lg shadow-2xl">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-2xl">
          <Download />
          Generar Certificado
        </CardTitle>
        <CardDescription>
          ¡Felicidades por aprobar! Ingresa tu nombre para generar tu certificado descargable.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="workerName">Nombre Completo del Trabajador</Label>
          <Input
            id="workerName"
            type="text"
            placeholder="Ej: Juan Pérez"
            value={workerName}
            onChange={(e) => setWorkerName(e.target.value)}
          />
        </div>
        <div className="flex items-start gap-3 text-sm text-muted-foreground bg-secondary p-3 rounded-md">
          <AlertCircle className="w-5 h-5 mt-0.5 shrink-0" />
          <p>El certificado se descargará como un archivo HTML. Ábrelo en tu navegador para imprimirlo o guardarlo como PDF.</p>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full" onClick={handleDownload} disabled={!workerName.trim()}>
          <Send className="mr-2 h-4 w-4" />
          Generar y Descargar
        </Button>
      </CardFooter>
    </Card>
  );
}
