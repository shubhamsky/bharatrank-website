'use client';

import { motion } from 'framer-motion';

const features = [
  {
    title: 'Unbiased Rankings',
    description: 'Rankings based purely on data and performance, not paid promotions.',
  },
  {
    title: 'Real World Data',
    description: 'We analyze real user feedback, specs, and market trends for fair scores.',
  },
  {
    title: 'Expert Analysis',
    description: 'Industry experts validate every ranking list and scoring rule.',
  },
  {
    title: 'Transparent Methodology',
    description: 'See how every score is calculated with clear category weights.',
  },
];

export function WhySection() {
  return (
    <section className="mt-20 rounded-[2rem] border border-slate-200/80 bg-white/90 p-8 shadow-soft sm:p-12">
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-saffron">Why BharatRank</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-navy sm:text-4xl">Ranking that consumers can trust.</h2>
          <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600">
            Every product ranking is built on verified performance, affordability, and real-world value. Our goal is to make every buyer confident in their next purchase.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {features.map((feature) => (
            <motion.article
              key={feature.title}
              whileHover={{ y: -6 }}
              className="overflow-hidden rounded-[1.75rem] border border-slate-200/80 bg-slate-50 p-6 shadow-sm transition-shadow duration-300 hover:shadow-lg"
            >
              <h3 className="text-xl font-semibold text-navy">{feature.title}</h3>
              <p className="mt-3 text-sm text-slate-600">{feature.description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
