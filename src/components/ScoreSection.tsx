'use client';

import { motion } from 'framer-motion';

const scoring = [
  { label: 'Fuel Economy', value: 92 },
  { label: 'Safety', value: 95 },
  { label: 'Performance', value: 90 },
  { label: 'Features', value: 88 },
  { label: 'Maintenance', value: 86 },
  { label: 'Reliability', value: 94 },
  { label: 'Price', value: 89 },
];

export function ScoreSection() {
  return (
    <section className="mt-20 rounded-[2rem] border border-slate-200/80 bg-white/90 p-8 shadow-soft sm:p-12">
      <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-saffron">How BharatRank Scores</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-navy sm:text-4xl">A transparent scoring engine for every ranking.</h2>
          <p className="mt-5 max-w-xl text-base leading-8 text-slate-600">
            Our methodology balances the most important buying criteria for Indian consumers. Every ranking is scored with clear category weights that reflect true ownership experience.
          </p>
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {scoring.map((item) => (
              <div key={item.label} className="rounded-3xl border border-slate-200/80 bg-slate-50 p-5">
                <p className="text-sm text-slate-500">{item.label}</p>
                <p className="mt-3 text-3xl font-semibold text-navy">{item.value}%</p>
              </div>
            ))}
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="rounded-[2rem] border border-slate-200/80 bg-slate-950/95 p-8 text-white shadow-soft"
        >
          <div className="flex items-center justify-between gap-4 rounded-3xl bg-slate-900/90 px-5 py-4">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-saffron">Overall Score</p>
              <p className="mt-2 text-4xl font-semibold">95/100</p>
            </div>
            <div className="h-28 w-28 rounded-full border border-saffron/40 bg-slate-900/80 flex items-center justify-center text-2xl font-semibold text-saffron">
              95
            </div>
          </div>
          <div className="mt-8 grid gap-3">
            {scoring.map((item) => (
              <div key={item.label}>
                <div className="flex items-center justify-between text-sm text-slate-400">
                  <span>{item.label}</span>
                  <span>{item.value}%</span>
                </div>
                <div className="mt-2 h-2 overflow-hidden rounded-full bg-slate-800">
                  <div className="h-full rounded-full bg-gradient-to-r from-saffron to-brandgreen" style={{ width: `${item.value}%` }} />
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
