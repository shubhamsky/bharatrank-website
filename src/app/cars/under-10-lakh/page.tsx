import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { ComparisonTable } from '@/components/ComparisonTable';
import { FAQ } from '@/components/FAQ';
import { ProductCard } from '@/components/ProductCard';
import { ScoreCard } from '@/components/ScoreCard';
import { cars } from '@/data/cars';

const details = {
  description:
    'Our Top 10 Cars Under ₹10 Lakh list balances performance, safety and long-term ownership costs for Indian families and daily commuters.',
  lastUpdated: 'July 2026',
  overallScore: 95,
};

const faqItems = [
  {
    question: 'How are these cars ranked?',
    answer: 'We rank cars based on a weighted score that includes safety, fuel economy, maintenance, value for money and customer feedback.',
  },
  {
    question: 'Which car is best for city driving?',
    answer: 'Hatchbacks like the Maruti Suzuki Baleno are ideal for city driving due to compact dimensions and excellent fuel economy.',
  },
  {
    question: 'Should I choose petrol or diesel?',
    answer: 'Petrol is generally more suitable for city commuting and lower running costs, while diesel works better for higher daily mileage.',
  },
];

export default function Under10LakhPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <Navbar />
      <section className="bg-gradient-to-br from-slate-950 via-navy to-slate-900 py-20 text-white">
        <div className="mx-auto max-w-[1200px] px-6 sm:px-8 lg:px-12">
          <p className="text-sm uppercase tracking-[0.3em] text-saffron">Ranking</p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">Top 10 Cars Under ₹10 Lakh</h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">A curated list of the best budget cars in India, ranked for safety, ownership cost and driving comfort.</p>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            <div className="rounded-3xl bg-slate-900/90 p-6">
              <p className="text-sm uppercase tracking-[0.3em] text-saffron">Last Updated</p>
              <p className="mt-3 text-2xl font-semibold">{details.lastUpdated}</p>
            </div>
            <div className="rounded-3xl bg-slate-900/90 p-6">
              <p className="text-sm uppercase tracking-[0.3em] text-saffron">Overall Score</p>
              <p className="mt-3 text-2xl font-semibold">{details.overallScore}/100</p>
            </div>
            <div className="rounded-3xl bg-slate-900/90 p-6">
              <p className="text-sm uppercase tracking-[0.3em] text-saffron">Category</p>
              <p className="mt-3 text-2xl font-semibold">Budget Cars</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 py-16 sm:px-8 lg:px-12">
        <div className="grid gap-12 xl:grid-cols-[0.9fr_0.7fr]">
          <div className="space-y-10">
            <div className="rounded-[2rem] border border-slate-200/80 bg-white/95 p-8 shadow-soft">
              <h2 className="text-3xl font-semibold text-navy">Top Ranked Cars</h2>
              <p className="mt-3 text-slate-600">Compare the best cars under ₹10 Lakh with features, scores, and buying guidance.</p>
              <div className="mt-8 grid gap-6">
                {cars.map((car) => (
                  <ProductCard key={car.rank} car={car} />
                ))}
              </div>
            </div>

            <div className="rounded-[2rem] border border-slate-200/80 bg-white/95 p-8 shadow-soft">
              <h3 className="text-2xl font-semibold text-navy">Why this ranking matters</h3>
              <p className="mt-4 text-slate-600">We prioritize cars that deliver overall ownership value, rather than just headline specs. This helps Indian buyers choose vehicles that hold up in real conditions and over time.</p>
            </div>

            <div className="rounded-[2rem] border border-slate-200/80 bg-white/95 p-8 shadow-soft">
              <h3 className="text-2xl font-semibold text-navy">FAQ</h3>
              <div className="mt-6">
                <FAQ items={faqItems} />
              </div>
            </div>
          </div>

          <aside className="space-y-8">
            <div className="rounded-[2rem] border border-slate-200/80 bg-white/95 p-8 shadow-soft">
              <h3 className="text-2xl font-semibold text-navy">Key comparison</h3>
              <div className="mt-6">
                <ComparisonTable cars={cars} />
              </div>
            </div>

            <div className="rounded-[2rem] border border-slate-200/80 bg-white/95 p-8 shadow-soft">
              <h3 className="text-2xl font-semibold text-navy">Scoring Breakdown</h3>
              <div className="mt-6 grid gap-4">
                {[
                  { label: 'Fuel Economy', value: 92 },
                  { label: 'Safety', value: 95 },
                  { label: 'Performance', value: 90 },
                  { label: 'Features', value: 88 },
                  { label: 'Maintenance', value: 86 },
                  { label: 'Reliability', value: 94 },
                  { label: 'Value for Money', value: 89 },
                ].map((stat) => (
                  <ScoreCard key={stat.label} label={stat.label} value={stat.value} />
                ))}
              </div>
            </div>
          </aside>
        </div>
      </section>

      <Footer />
    </main>
  );
}
