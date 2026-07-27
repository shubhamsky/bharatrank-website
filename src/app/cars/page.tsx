import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { ProductCard } from '@/components/ProductCard';
import { cars } from '@/data/cars';

export default function CarsPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <Navbar />
      <section className="bg-gradient-to-br from-slate-950 via-navy to-slate-900 py-20 text-white">
        <div className="mx-auto max-w-[1200px] px-6 sm:px-8 lg:px-12">
          <p className="text-sm uppercase tracking-[0.3em] text-saffron">Cars</p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">Top car rankings for India</h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
            Discover the best cars for every budget, body type and fuel choice. Filter by budget, brand, transmission and more.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 py-16 sm:px-8 lg:px-12">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <aside className="space-y-6 rounded-[2rem] border border-slate-200/80 bg-white/95 p-6 shadow-soft">
            <div>
              <h2 className="text-xl font-semibold text-navy">Filters</h2>
              <p className="mt-2 text-sm text-slate-500">Select your budget and preferences.</p>
            </div>
            <div className="grid gap-4">
              {['Budget', 'Fuel Type', 'Body Type', 'Transmission', 'Brand'].map((filter) => (
                <div key={filter} className="rounded-3xl border border-slate-200 bg-slate-50 p-4">
                  <p className="text-sm font-semibold text-slate-800">{filter}</p>
                  <div className="mt-3 space-y-2 text-sm text-slate-600">
                    <button className="w-full rounded-2xl bg-white px-4 py-3 text-left transition hover:bg-slate-100">Choose {filter}</button>
                  </div>
                </div>
              ))}
            </div>
          </aside>

          <div className="space-y-8">
            <div className="rounded-[2rem] border border-slate-200/80 bg-white/95 p-6 shadow-soft">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-sm uppercase tracking-[0.3em] text-saffron">Rankings</p>
                  <h2 className="mt-2 text-3xl font-semibold text-navy">Cars under ₹10 Lakh</h2>
                </div>
                <div className="inline-flex items-center gap-4 rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-600">
                  Sort by: <span className="font-semibold text-navy">BharatRank Score</span>
                </div>
              </div>
            </div>

            <div className="grid gap-6">
              {cars.map((car) => (
                <ProductCard key={car.rank} car={car} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
