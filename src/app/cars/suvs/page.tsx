import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { ProductCard } from '@/components/ProductCard';
import { suvs } from '@/data/suvs';

export default function SUVsPage() {
  return (
    <main className="min-h-screen bg-slate-50 dark:bg-slate-950">
      <Navbar />
      <section className="bg-gradient-to-br from-slate-950 via-navy to-slate-900 py-20 text-white">
        <div className="mx-auto max-w-[1200px] px-6 sm:px-8 lg:px-12">
          <p className="text-sm uppercase tracking-[0.3em] text-saffron">SUVs</p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">Best SUVs available in India now</h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
            The most popular SUVs in India, ranked for value, safety and real-world ownership.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 py-16 sm:px-8 lg:px-12">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <aside className="space-y-6 rounded-[2rem] border border-slate-200/80 bg-white/95 p-6 shadow-soft dark:border-slate-800 dark:bg-slate-900/90">
            <div>
              <h2 className="text-xl font-semibold text-navy dark:text-slate-100">Filters</h2>
              <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">Compare SUVs by budget, features and seating.</p>
            </div>
            <div className="grid gap-4">
              {['Budget', 'Fuel Type', 'Transmission', 'Seating', 'Safety'].map((filter) => (
                <div key={filter} className="rounded-3xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-800 dark:bg-slate-900/90">
                  <p className="text-sm font-semibold text-slate-800 dark:text-slate-100">{filter}</p>
                  <button className="mt-3 w-full rounded-2xl bg-white px-4 py-3 text-left text-sm text-slate-600 transition hover:bg-slate-100 dark:bg-slate-950 dark:text-slate-300 dark:hover:bg-slate-900">Select {filter}</button>
                </div>
              ))}
            </div>
          </aside>

          <div className="space-y-8">
            <div className="rounded-[2rem] border border-slate-200/80 bg-white/95 p-6 shadow-soft dark:border-slate-800 dark:bg-slate-900/90">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-sm uppercase tracking-[0.3em] text-saffron">Ranking</p>
                  <h2 className="mt-2 text-3xl font-semibold text-navy dark:text-slate-100">Top SUVs for Indian buyers</h2>
                </div>
                <div className="inline-flex items-center gap-4 rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-600 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-300">
                  Sort by: <span className="font-semibold text-navy dark:text-slate-100">BharatRank Score</span>
                </div>
              </div>
            </div>

            <div className="grid gap-6">
              {suvs.map((suv) => (
                <ProductCard key={suv.rank} car={{
                  rank: suv.rank,
                  name: suv.name,
                  brand: suv.brand,
                  price: suv.price,
                  score: suv.score,
                  rating: suv.rating,
                  bodyType: 'SUV',
                  fuelType: suv.fuelType,
                  transmission: suv.transmission,
                  mileage: suv.mileage,
                  power: suv.seating,
                  bootSpace: suv.bootSpace,
                  pros: suv.pros,
                  cons: suv.cons,
                }} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
