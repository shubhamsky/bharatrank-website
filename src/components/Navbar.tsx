'use client';

import Link from 'next/link';
import { ThemeToggle } from '@/components/ThemeToggle';
import { Logo } from '@/components/Logo';

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur-xl dark:border-slate-800 dark:bg-slate-950/90">
      <div className="mx-auto flex max-w-[1400px] items-center justify-between gap-4 px-6 py-4 sm:px-8 lg:px-12">
        <Link href="/" className="flex items-center gap-3 text-slate-950 dark:text-slate-100">
          <Logo className="h-10 w-[190px]" />
        </Link>
        <nav className="hidden gap-8 text-sm font-medium text-slate-700 lg:flex">
          <Link href="/" className="transition hover:text-navy">Home</Link>
          <Link href="/rank" className="transition hover:text-navy">Rank</Link>
          <Link href="/cars/under-10-lakh" className="transition hover:text-navy">Budget Cars</Link>
          <Link href="#about" className="transition hover:text-navy">About</Link>
        </nav>
        <div className="flex items-center gap-3">
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
