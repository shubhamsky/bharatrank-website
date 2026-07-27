import { Github, Linkedin, Twitter } from 'lucide-react';

export function Footer() {
  return (
    <footer className="mt-20 border-t border-slate-200/80 py-12 text-slate-600">
      <div className="mx-auto flex max-w-[1400px] flex-col gap-12 px-6 sm:px-8 lg:px-12">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr_0.8fr_0.8fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-saffron">BharatRank</p>
            <h3 className="mt-4 text-2xl font-semibold text-navy">India's Product Ranking Engine</h3>
            <p className="mt-4 max-w-lg text-sm leading-7 text-slate-600">
              Trusted rankings, data-led recommendations and transparent ratings for Indian buyers.
            </p>
          </div>
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-saffron">Categories</p>
            <ul className="mt-5 space-y-3 text-sm">
              <li>Cars</li>
              <li>Mobiles</li>
              <li>Electronics</li>
              <li>Finance</li>
            </ul>
          </div>
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-saffron">Resources</p>
            <ul className="mt-5 space-y-3 text-sm">
              <li>About</li>
              <li>Privacy</li>
              <li>Terms</li>
              <li>Contact</li>
            </ul>
          </div>
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-saffron">Connect</p>
            <div className="mt-5 flex items-center gap-4 text-slate-500">
              <Github className="h-5 w-5" />
              <Twitter className="h-5 w-5" />
              <Linkedin className="h-5 w-5" />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4 border-t border-slate-200/80 pt-6 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 BharatRank. Built for Indian consumers.</p>
          <p>Designed for transparent product decisions.</p>
        </div>
      </div>
    </footer>
  );
}
