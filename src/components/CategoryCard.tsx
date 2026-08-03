'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const iconMap: Record<string, JSX.Element> = {
  Car: <ArrowRight className="h-5 w-5" />,
  Smartphone: <ArrowRight className="h-5 w-5" />,
  Laptop: <ArrowRight className="h-5 w-5" />,
  Monitor: <ArrowRight className="h-5 w-5" />,
  Snowflake: <ArrowRight className="h-5 w-5" />,
  Fridge: <ArrowRight className="h-5 w-5" />,
  Motorbike: <ArrowRight className="h-5 w-5" />,
  Scooter: <ArrowRight className="h-5 w-5" />,
  Banknote: <ArrowRight className="h-5 w-5" />,
  CreditCard: <ArrowRight className="h-5 w-5" />,
  Shield: <ArrowRight className="h-5 w-5" />,
};

export function CategoryCard({ category }: { category: { title: string; icon: string } }) {
  const comingSoon = category.title !== 'Cars';

  return (
    <motion.article
      whileHover={{ y: -6 }}
      className={`group overflow-hidden rounded-[1.75rem] border ${comingSoon ? 'border-slate-200/70 bg-slate-100/80' : 'border-slate-200/80 bg-white/90'} p-6 shadow-soft transition-shadow duration-300 hover:shadow-xl ${comingSoon ? 'opacity-80' : ''}`}
    >
      <div className={`flex h-14 w-14 items-center justify-center rounded-3xl ${comingSoon ? 'bg-slate-200 text-slate-500' : 'bg-saffron/10 text-saffron'}`}>
        {iconMap[category.icon]}
      </div>
      <div className="mt-6 flex items-center justify-between gap-3">
        <h3 className="text-xl font-semibold text-navy">{category.title}</h3>
        {comingSoon && <span className="rounded-full bg-slate-200 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-slate-600">Coming soon</span>}
      </div>
      <p className="mt-3 text-sm text-slate-500">Expert rankings and buyer guidance for every category.</p>
      {!comingSoon && (
        <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brandgreen">
          <span>Discover</span>
          <ArrowRight className="h-4 w-4" />
        </div>
      )}
    </motion.article>
  );
}
