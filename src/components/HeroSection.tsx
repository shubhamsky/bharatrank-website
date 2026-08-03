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
          className="relative flex h-full items-center justify-center rounded-[2rem] bg-slate-950/95 p-8 shadow-soft"
        >
          <div className="relative w-full rounded-[2rem] border border-white/10 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 p-8 text-white shadow-2xl">
            <div className="absolute -left-8 top-12 hidden h-28 w-28 rounded-full bg-saffron/20 blur-3xl md:block" />
            <div className="absolute -right-8 bottom-12 hidden h-28 w-28 rounded-full bg-brandgreen/20 blur-3xl md:block" />
            <div className="relative space-y-8">
              <div className="rounded-[1.8rem] border border-white/10 bg-slate-950/90 p-8 shadow-inner">
                <p className="text-sm uppercase tracking-[0.3em] text-saffron">Launch Focus</p>
                <h3 className="mt-4 text-3xl font-semibold text-white">Top 10 cars under ₹10 Lakh</h3>
                <p className="mt-4 max-w-xl text-slate-300">
                  A clean, expert-curated ranking for India’s most reliable budget cars, delivered with practical insights and verified engine performance data.
                </p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-6">
                  <p className="text-sm uppercase tracking-[0.28em] text-slate-400">Why it matters</p>
                  <p className="mt-3 text-lg font-semibold text-white">Decision-ready guidance for first-time car buyers.</p>
                </div>
                <div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-6">
                  <p className="text-sm uppercase tracking-[0.28em] text-slate-400">What’s included</p>
                  <p className="mt-3 text-lg font-semibold text-white">Real market trends, power & BHP details, and pros/cons for every model.</p>
                </div>
                <div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-6">
                  <p className="text-sm uppercase tracking-[0.28em] text-slate-400">Trusted process</p>
                  <p className="mt-3 text-lg font-semibold text-white">Made for India with verified pricing and segment-relevant recommendations.</p>
                </div>
                <div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-6">
                  <p className="text-sm uppercase tracking-[0.28em] text-slate-400">Coming soon</p>
                  <p className="mt-3 text-lg font-semibold text-white">Mobiles, laptops, TVs, and insurance rankings next.</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
