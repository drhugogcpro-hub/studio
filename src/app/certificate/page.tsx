import CertificateFlow from '@/components/CertificateFlow';
import Header from '@/components/Header';

export const metadata = {
    title: 'Generar Certificado'
}

export default function CertificatePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 container mx-auto p-4 md:p-8 flex items-center justify-center">
        <CertificateFlow />
      </main>
    </div>
  );
}
