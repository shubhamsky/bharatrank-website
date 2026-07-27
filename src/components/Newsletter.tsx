export function Newsletter() {
  return (
    <section className="mt-20 rounded-[2rem] border border-slate-200/80 bg-gradient-to-r from-saffron/10 via-white to-brandgreen/10 p-8 shadow-soft sm:p-12">
      <div className="mx-auto flex max-w-4xl flex-col gap-8 rounded-[2rem] bg-white/95 p-8 shadow-sm sm:px-12">
        <div className="max-w-2xl">
          <p className="text-sm uppercase tracking-[0.3em] text-saffron">Stay informed</p>
          <h2 className="mt-3 text-3xl font-semibold text-navy sm:text-4xl">Subscribe to rankings, reviews and deals</h2>
          <p className="mt-4 text-base leading-7 text-slate-600">
            Get weekly updates on the latest product rankings, buying guides, and market insights tailored for Indian shoppers.
          </p>
        </div>
        <form className="grid gap-4 sm:grid-cols-[1.5fr_auto]">
          <input
            type="email"
            placeholder="Enter your email address"
            className="rounded-3xl border border-slate-200 bg-slate-50 px-5 py-4 text-base text-slate-900 outline-none focus:border-saffron focus:ring-2 focus:ring-saffron/20"
          />
          <button type="submit" className="rounded-3xl bg-navy px-6 py-4 text-sm font-semibold text-white transition hover:bg-slate-950">
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
}
