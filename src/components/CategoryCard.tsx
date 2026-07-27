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
  return (
    <motion.article
      whileHover={{ y: -6 }}
      className="group overflow-hidden rounded-[1.75rem] border border-slate-200/80 bg-white/90 p-6 shadow-soft transition-shadow duration-300 hover:shadow-xl"
    >
      <div className="flex h-14 w-14 items-center justify-center rounded-3xl bg-saffron/10 text-saffron">
        {iconMap[category.icon]}
      </div>
      <h3 className="mt-6 text-xl font-semibold text-navy">{category.title}</h3>
      <p className="mt-3 text-sm text-slate-500">Expert rankings and buyer guidance for every category.</p>
      <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brandgreen">
        <span>Discover</span>
        <ArrowRight className="h-4 w-4" />
      </div>
    </motion.article>
  );
}
