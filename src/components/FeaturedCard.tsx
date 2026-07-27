'use client';

import { motion } from 'framer-motion';

export function FeaturedCard({ item }: { item: { title: string; score: number; price: string; pros: string[]; cons: string[] } }) {
  return (
    <motion.article
      whileHover={{ y: -8 }}
      className="overflow-hidden rounded-[2rem] border border-slate-200/80 bg-white/90 p-6 shadow-soft transition-shadow duration-300 hover:shadow-xl"
    >
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-saffron">Ranking</p>
          <h3 className="mt-3 text-2xl font-semibold text-navy">{item.title}</h3>
        </div>
        <div className="rounded-3xl bg-slate-950 px-4 py-3 text-center text-sm font-semibold text-white">
          {item.score}
        </div>
      </div>
      <div className="mt-6 rounded-3xl bg-slate-50 p-5">
        <p className="text-sm text-slate-500">Starting at</p>
        <p className="mt-2 text-xl font-semibold text-navy">{item.price}</p>
      </div>
      <div className="mt-6 grid gap-3 text-sm">
        <div className="rounded-3xl bg-slate-50 p-4">
          <p className="font-semibold text-slate-800">Pros</p>
          <ul className="mt-2 space-y-1 text-slate-600">
            {item.pros.map((pro) => (
              <li key={pro}>{pro}</li>
            ))}
          </ul>
        </div>
        <div className="rounded-3xl bg-slate-50 p-4">
          <p className="font-semibold text-slate-800">Cons</p>
          <ul className="mt-2 space-y-1 text-slate-600">
            {item.cons.map((con) => (
              <li key={con}>{con}</li>
            ))}
          </ul>
        </div>
      </div>
      <button className="mt-6 inline-flex items-center justify-center rounded-full bg-brandgreen px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#0a6e34]">
        View Details
      </button>
    </motion.article>
  );
}
