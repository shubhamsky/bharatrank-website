import { Footer } from '@/components/Footer';
import { Navbar } from '@/components/Navbar';
import { ProductCard } from '@/components/ProductCard';
import { cars } from '@/data/cars';

export default function RankPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <Navbar />
      <section className="bg-gradient-to-br from-slate-950 via-navy to-slate-900 py-20 text-white">
        <div className="mx-auto max-w-[1200px] px-6 sm:px-8 lg:px-12">
          <p className="text-sm uppercase tracking-[0.3em] text-saffron">Rankings</p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">Top 10 Cars Under ₹10 Lakh</h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300">
            The most trusted car ranking for Indian buyers, with in-depth pros and cons for every top budget model.
          </p>
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            <div className="rounded-[2rem] bg-white/10 p-8 backdrop-blur-xl">
              <p className="text-sm uppercase tracking-[0.3em] text-saffron">Launch focus</p>
              <h2 className="mt-3 text-3xl font-semibold">Budget cars only</h2>
              <p className="mt-4 text-sm text-slate-300">Every choice is vetted for price, performance, and ownership comfort.</p>
            </div>
            <div className="rounded-[2rem] bg-white/10 p-8 backdrop-blur-xl">
              <p className="text-sm uppercase tracking-[0.3em] text-saffron">Market insight</p>
              <h2 className="mt-3 text-3xl font-semibold">Indian value</h2>
              <p className="mt-4 text-sm text-slate-300">We prioritize strength in service, resale and everyday usability.</p>
            </div>
            <div className="rounded-[2rem] bg-white/10 p-8 backdrop-blur-xl">
              <p className="text-sm uppercase tracking-[0.3em] text-saffron">Verified by</p>
              <h2 className="mt-3 text-3xl font-semibold">BharatRank data</h2>
              <p className="mt-4 text-sm text-slate-300">Scores are based on a balanced Indian-market evaluation.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 py-16 sm:px-8 lg:px-12">
        <div className="grid gap-12 xl:grid-cols-[0.9fr_0.7fr]">
          <div className="space-y-10">
            <div className="rounded-[2rem] border border-slate-200/80 bg-white/95 p-8 shadow-soft">
              <h2 className="text-3xl font-semibold text-navy">Complete top 10 ranking</h2>
              <p className="mt-3 text-slate-600">Choose from the top budget cars in India with detailed strengths and weaknesses.</p>
              <div className="mt-8 grid gap-6">
                {cars.map((car) => (
                  <ProductCard key={car.rank} car={car} />
                ))}
              </div>
            </div>
          </div>

          <aside className="space-y-8">
            <div className="rounded-[2rem] border border-slate-200/80 bg-white/95 p-8 shadow-soft">
              <h3 className="text-2xl font-semibold text-navy">Key ranking factors</h3>
              <ul className="mt-6 space-y-4 text-sm text-slate-600">
                <li className="rounded-3xl bg-slate-50 p-4">
                  <strong className="block text-slate-900">Safety & reliability</strong>
                  Evaluated for crash-worthiness, build quality, and service support in India.
                </li>
                <li className="rounded-3xl bg-slate-50 p-4">
                  <strong className="block text-slate-900">Ownership cost</strong>
                  Includes fuel efficiency, maintenance, warranty coverage and resale potential.
                </li>
                <li className="rounded-3xl bg-slate-50 p-4">
                  <strong className="block text-slate-900">Everyday usability</strong>
                  Focused on comfort, space, driving convenience and real-world practicality.
                </li>
              </ul>
            </div>
            <div className="rounded-[2rem] border border-slate-200/80 bg-white/95 p-8 shadow-soft">
              <h3 className="text-2xl font-semibold text-navy">Launch note</h3>
              <p className="mt-4 text-slate-600">This list is the first release of BharatRank, and it is intentionally narrow to deliver a polished budget-car ranking experience.</p>
            </div>
          </aside>
        </div>
      </section>

      <Footer />
    </main>
  );
}
