import { CarData } from '@/data/cars';

export function ComparisonTable({ cars }: { cars: CarData[] }) {
  return (
    <div className="overflow-hidden rounded-[2rem] border border-slate-200/80 bg-white/95 shadow-soft">
      <div className="grid gap-0 border-b border-slate-200 bg-slate-100 px-5 py-4 text-sm uppercase tracking-[0.25em] text-slate-600 sm:grid-cols-6">
        <div>Rank</div>
        <div>Name</div>
        <div>Price</div>
        <div>Fuel</div>
        <div>Transmission</div>
        <div>Score</div>
      </div>
      <div className="divide-y divide-slate-200">
        {cars.map((car) => (
          <div key={car.rank} className="grid gap-0 px-5 py-4 text-sm text-slate-700 sm:grid-cols-6">
            <div className="font-semibold">#{car.rank}</div>
            <div>{car.name}</div>
            <div>{car.price}</div>
            <div>{car.fuelType}</div>
            <div>{car.transmission}</div>
            <div className="font-semibold text-navy">{car.score}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
