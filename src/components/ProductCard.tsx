'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { CarData } from '@/data/cars';

export function ProductCard({ car }: { car: CarData }) {
  return (
    <motion.article
      whileHover={{ y: -8 }}
      className="overflow-hidden rounded-[2rem] border border-slate-200/80 bg-white/95 shadow-soft transition-shadow duration-300 hover:shadow-xl"
    >
      {car.image ? (
        <div className="overflow-hidden rounded-[2rem] bg-slate-100">
          <Image
            src={car.image}
            alt={car.name}
            width={900}
            height={520}
            className="h-52 w-full object-cover"
          />
        </div>
      ) : (
        <div className="flex h-52 items-center justify-center rounded-[2rem] bg-gradient-to-r from-slate-100 via-slate-200 to-slate-100 text-slate-600">
          <span className="text-base font-semibold">Image coming soon</span>
        </div>
      )}

      <div className="p-6">
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
            <p className="font-semibold text-slate-800">Engine</p>
            <ul className="mt-2 space-y-1">
              {car.engineOptions.map((option) => (
                <li key={option}>{option}</li>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl bg-slate-50 p-4">
            <p className="font-semibold text-slate-800">Max power</p>
            <p className="mt-2">{car.powerBhp}</p>
            <p className="mt-3 text-xs text-slate-500">{car.power} peak</p>
          </div>
          <div className="rounded-3xl bg-slate-50 p-4">
            <p className="font-semibold text-slate-800">Boot space</p>
            <p className="mt-2">{car.bootSpace}</p>
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
      </div>
    </motion.article>
  );
}
