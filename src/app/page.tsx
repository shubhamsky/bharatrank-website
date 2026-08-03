import Link from 'next/link';
import { Footer } from '@/components/Footer';
import { HeroSection } from '@/components/HeroSection';
import { Navbar } from '@/components/Navbar';
import { ProductCard } from '@/components/ProductCard';
import { cars } from '@/data/cars';

export default function HomePage() {
  return (
    <main className="relative overflow-hidden bg-slate-50">
      <Navbar />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-72 bg-hero-glow blur-3xl opacity-80" />
      <div className="mx-auto max-w-[1400px] px-6 pb-24 pt-6 sm:px-8 lg:px-12">
        <HeroSection />

        <section id="top10" className="mt-20">
          <div className="mb-8 max-w-3xl">
            <p className="text-sm uppercase tracking-[0.3em] text-saffron">Initial Launch</p>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight text-navy sm:text-4xl">Top Ranked Cars Under ₹10 Lakh in India</h2>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              Discover the most trusted budget cars chosen for India’s families and urban commuters.
            </p>
          </div>

          <div className="grid gap-8 xl:grid-cols-2">
            {cars.map((car) => (
              <ProductCard key={car.rank} car={car} />
            ))}
          </div>
        </section>

        <section className="mt-20 rounded-[2rem] border border-slate-200/80 bg-white/95 p-10 shadow-soft">
          <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div>
              <h3 className="text-3xl font-semibold text-navy">Other categories are coming soon</h3>
              <p className="mt-4 max-w-2xl text-slate-600">
                We are launching BharatRank with the top 10 budget cars first. More categories will be added once the initial ranking experience is polished and ready.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-[1.75rem] border border-slate-200 bg-slate-50 p-6 text-slate-600">
                <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Mobiles</p>
                <p className="mt-4 text-lg font-semibold text-slate-900">Coming soon</p>
              </div>
              <div className="rounded-[1.75rem] border border-slate-200 bg-slate-50 p-6 text-slate-600">
                <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Laptops</p>
                <p className="mt-4 text-lg font-semibold text-slate-900">Coming soon</p>
              </div>
              <div className="rounded-[1.75rem] border border-slate-200 bg-slate-50 p-6 text-slate-600">
                <p className="text-sm uppercase tracking-[0.3em] text-slate-500">TVs</p>
                <p className="mt-4 text-lg font-semibold text-slate-900">Coming soon</p>
              </div>
              <div className="rounded-[1.75rem] border border-slate-200 bg-slate-50 p-6 text-slate-600">
                <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Insurance</p>
                <p className="mt-4 text-lg font-semibold text-slate-900">Coming soon</p>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </main>
  );
}
