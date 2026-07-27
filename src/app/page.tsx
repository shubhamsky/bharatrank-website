import { CategoryCard } from '@/components/CategoryCard';
import { FeaturedCard } from '@/components/FeaturedCard';
import { Footer } from '@/components/Footer';
import { HeroSection } from '@/components/HeroSection';
import { Navbar } from '@/components/Navbar';
import { Newsletter } from '@/components/Newsletter';
import { ScoreSection } from '@/components/ScoreSection';
import { TrendingSection } from '@/components/TrendingSection';
import { WhySection } from '@/components/WhySection';
import { categories } from '@/data/categories';
import { featuredRankings } from '@/data/featuredRankings';

export default function HomePage() {
  return (
    <main className="relative overflow-hidden bg-slate-50">
      <Navbar />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-72 bg-hero-glow blur-3xl opacity-80" />
      <div className="mx-auto max-w-[1400px] px-6 pb-24 pt-6 sm:px-8 lg:px-12">
        <HeroSection />
        <section className="mt-20">
          <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-saffron">Top Categories</p>
              <h2 className="mt-2 text-3xl font-semibold tracking-tight text-navy sm:text-4xl">Explore Indian product categories</h2>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {categories.map((category) => (
              <CategoryCard key={category.title} category={category} />
            ))}
          </div>
        </section>

        <TrendingSection />

        <section className="mt-20">
          <div className="mb-10 flex items-center justify-between gap-4">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-saffron">Featured Rankings</p>
              <h2 className="mt-2 text-3xl font-semibold tracking-tight text-navy sm:text-4xl">Premium picks for Indian shoppers</h2>
            </div>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {featuredRankings.map((item) => (
              <FeaturedCard key={item.title} item={item} />
            ))}
          </div>
        </section>

        <WhySection />
        <ScoreSection />
        <Newsletter />
        <Footer />
      </div>
    </main>
  );
}
