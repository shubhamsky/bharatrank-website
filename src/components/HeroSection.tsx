'use client';

import { motion } from 'framer-motion';
import { Search, ArrowRight, Sparkles } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="relative overflow-hidden rounded-[2rem] border border-white/60 bg-white/95 px-6 py-12 shadow-soft backdrop-blur-xl sm:px-10 lg:px-14">
      <div className="absolute inset-0 bg-gradient-to-br from-saffron/20 via-transparent to-brandgreen/10" />
      <div className="relative grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div className="max-w-2xl space-y-6">
          <span className="inline-flex items-center rounded-full bg-saffron/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.28em] text-saffron">
            Ranking India. Powering Trust.
          </span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-semibold tracking-tight text-navy sm:text-5xl lg:text-6xl"
          >
            India&apos;s Most Trusted Product Ranking Engine
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="max-w-xl text-lg leading-8 text-slate-600"
          >
            Helping millions of Indians discover the best products through unbiased rankings.
          </motion.p>
          <div className="grid gap-4 sm:grid-cols-[1.1fr_auto]">
            <div className="relative rounded-3xl border border-slate-200 bg-slate-50 p-4 shadow-sm">
              <Search className="mb-2 h-5 w-5 text-saffron" />
              <input
                type="search"
                placeholder="Search products, cars, mobiles, banks..."
                className="w-full border-0 bg-transparent text-lg text-slate-900 outline-none placeholder:text-slate-500"
              />
            </div>
            <button className="inline-flex items-center justify-center rounded-3xl bg-navy px-6 py-4 text-sm font-semibold text-white transition hover:bg-slate-950">
              Explore Rankings
            </button>
          </div>
          <div className="flex flex-wrap gap-4 text-sm text-slate-600 sm:gap-6">
            <div className="inline-flex items-center gap-2 rounded-3xl border border-slate-200 bg-white/90 px-4 py-3 shadow-sm">
              <Sparkles className="h-4 w-4 text-saffron" />
              Unbiased, expert-curated rankings
            </div>
            <div className="inline-flex items-center gap-2 rounded-3xl border border-slate-200 bg-white/90 px-4 py-3 shadow-sm">
              <ArrowRight className="h-4 w-4 text-brandgreen" />
              Trusted by Indian shoppers
            </div>
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="relative flex h-full items-center justify-center rounded-[2rem] bg-gradient-to-br from-slate-900 via-navy to-slate-800 p-8 shadow-soft"
        >
          <div className="relative h-[420px] w-full rounded-[2rem] border border-white/10 bg-slate-950/90 p-6 shadow-2xl">
            <div className="absolute -left-8 top-10 hidden h-24 w-24 rounded-full bg-saffron/20 blur-3xl md:block" />
            <div className="absolute -right-8 bottom-10 hidden h-24 w-24 rounded-full bg-brandgreen/20 blur-3xl md:block" />
            <div className="relative h-full rounded-[1.75rem] border border-white/10 bg-gradient-to-br from-slate-900 to-slate-950 p-6 text-white">
              <div className="flex items-center justify-between rounded-3xl bg-slate-900/80 px-4 py-3 text-sm">
                <span>Ranking preview</span>
                <span className="rounded-full bg-white/10 px-3 py-1 text-xs uppercase tracking-[0.25em] text-slate-200">Live</span>
              </div>
              <div className="mt-8 space-y-5">
                <div className="rounded-3xl border border-slate-800 bg-slate-950/90 p-5 shadow-inner">
                  <p className="text-xs uppercase tracking-[0.24em] text-slate-500">Top category</p>
                  <h3 className="mt-2 text-xl font-semibold">Cars under ₹10 Lakh</h3>
                  <p className="mt-2 text-sm text-slate-400">The most trusted rating list for budget families.</p>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  {['Sedan', 'SUV', 'Hatchback', 'Compact'].map((item) => (
                    <div key={item} className="rounded-3xl border border-slate-800 bg-slate-900/85 p-4 text-sm text-slate-300">
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
