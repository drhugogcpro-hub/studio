import Link from 'next/link';
import { GraduationCap } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-card border-b shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2 text-primary hover:opacity-80 transition-opacity">
          <GraduationCap size={28} />
          <span className="text-xl font-bold">Safe Workplace Training</span>
        </Link>
      </div>
    </header>
  );
}
