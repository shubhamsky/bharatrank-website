'use client';

import { motion } from 'framer-motion';

const trendingItems = [
  { title: 'Top 10 Cars Under ₹10 Lakh', subtitle: 'Budget SUVs, sedans and hatchbacks that deliver maximum value.' },
  { title: 'Top Mobiles Under ₹15,000', subtitle: 'Best smartphones for performance, camera and battery.' },
  { title: 'Best ACs', subtitle: 'Energy-efficient cooling for modern Indian homes.' },
  { title: 'Best Washing Machines', subtitle: 'Reliable cleaning with the top drum and front loaders.' },
  { title: 'Best Laptops', subtitle: 'Student-friendly laptops with long battery life.' },
];

export function TrendingSection() {
  return (
    <section className="mt-20">
      <div className="mb-10 flex items-center justify-between gap-4">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-saffron">Trending Rankings</p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight text-navy sm:text-4xl">What Indian shoppers are exploring</h2>
        </div>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
        {trendingItems.map((item) => (
          <motion.article
            key={item.title}
            whileHover={{ y: -8 }}
            className="overflow-hidden rounded-[2rem] border border-slate-200/80 bg-white/95 p-8 shadow-soft transition-shadow duration-300 hover:shadow-xl"
          >
            <div className="rounded-3xl border border-slate-100 bg-slate-50 p-4 text-slate-900">
              <p className="text-sm uppercase tracking-[0.28em] text-slate-500">Trending</p>
            </div>
            <h3 className="mt-6 text-2xl font-semibold text-navy">{item.title}</h3>
            <p className="mt-4 text-sm leading-7 text-slate-600">{item.subtitle}</p>
            <div className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-brandgreen">
              <span>View ranking</span>
              <span aria-hidden="true">→</span>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
