'use client';

import Link from 'next/link';
import { Search } from 'lucide-react';
import { ThemeToggle } from '@/components/ThemeToggle';
import { Logo } from '@/components/Logo';

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur-xl dark:border-slate-800 dark:bg-slate-950/90">
      <div className="mx-auto flex max-w-[1400px] items-center justify-between gap-4 px-6 py-4 sm:px-8 lg:px-12">
        <Link href="/" className="flex items-center gap-3 text-slate-950 dark:text-slate-100">
          <Logo className="h-10 w-[190px] text-slate-950 dark:text-slate-100" />
        </Link>
        <nav className="hidden gap-8 text-sm font-medium text-slate-700 lg:flex">
          <a href="#cars" className="transition hover:text-navy">Cars</a>
          <a href="#mobiles" className="transition hover:text-navy">Mobiles</a>
          <a href="#electronics" className="transition hover:text-navy">Electronics</a>
          <a href="#finance" className="transition hover:text-navy">Finance</a>
          <a href="#compare" className="transition hover:text-navy">Compare</a>
          <a href="#news" className="transition hover:text-navy">News</a>
          <a href="#about" className="transition hover:text-navy">About</a>
        </nav>
        <div className="flex items-center gap-3">
          <button className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 transition hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-800">
            <Search className="h-5 w-5" />
          </button>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
