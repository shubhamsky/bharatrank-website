'use client';

'use client';

import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { CarData } from '@/data/cars';

export function ProductCard({ car }: { car: CarData }) {
  return (
    <motion.article
      whileHover={{ y: -8 }}
      className="overflow-hidden rounded-[2rem] border border-slate-200/80 bg-white/95 p-6 shadow-soft transition-shadow duration-300 hover:shadow-xl"
    >
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-saffron">#{car.rank}</p>
          <h3 className="mt-3 text-2xl font-semibold text-navy">{car.name}</h3>
          <p className="mt-2 text-sm text-slate-500">{car.brand}</p>
        </div>
        <div className="rounded-3xl bg-slate-900 px-4 py-3 text-white">
          <p className="text-sm">Score</p>
          <p className="mt-2 text-2xl font-semibold">{car.score}</p>
        </div>
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <div className="rounded-3xl bg-slate-50 p-4">
          <p className="text-sm text-slate-500">Price</p>
          <p className="mt-2 text-lg font-semibold text-navy">{car.price}</p>
        </div>
        <div className="rounded-3xl bg-slate-50 p-4">
          <p className="text-sm text-slate-500">Rating</p>
          <div className="mt-2 flex items-center gap-2 text-sm text-slate-700">
            <Star className="h-4 w-4 text-saffron" />
            <span>{car.rating} / 5</span>
          </div>
        </div>
      </div>

      <div className="mt-6 grid gap-3 text-sm text-slate-600 sm:grid-cols-2">
        <div className="rounded-3xl bg-slate-50 p-4">
          <p className="font-semibold text-slate-800">Body</p>
          <p className="mt-2">{car.bodyType}</p>
        </div>
        <div className="rounded-3xl bg-slate-50 p-4">
          <p className="font-semibold text-slate-800">Fuel</p>
          <p className="mt-2">{car.fuelType}</p>
        </div>
        <div className="rounded-3xl bg-slate-50 p-4">
          <p className="font-semibold text-slate-800">Transmission</p>
          <p className="mt-2">{car.transmission}</p>
        </div>
        <div className="rounded-3xl bg-slate-50 p-4">
          <p className="font-semibold text-slate-800">Mileage</p>
          <p className="mt-2">{car.mileage}</p>
        </div>
      </div>

      <div className="mt-6 grid gap-3 text-sm text-slate-600 sm:grid-cols-2">
        <div className="rounded-3xl bg-slate-50 p-4">
          <p className="font-semibold text-slate-800">Pros</p>
          <ul className="mt-2 space-y-1">
            {car.pros.map((pro) => (
              <li key={pro}>• {pro}</li>
            ))}
          </ul>
        </div>
        <div className="rounded-3xl bg-slate-50 p-4">
          <p className="font-semibold text-slate-800">Cons</p>
          <ul className="mt-2 space-y-1">
            {car.cons.map((con) => (
              <li key={con}>• {con}</li>
            ))}
          </ul>
        </div>
      </div>

      <button className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-navy px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-950">
        View Details
      </button>
    </motion.article>
  );
}
