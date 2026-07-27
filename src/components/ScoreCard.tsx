export function ScoreCard({ label, value }: { label: string; value: number }) {
  return (
    <div className="rounded-3xl border border-slate-200/80 bg-slate-50 p-5">
      <div className="flex items-center justify-between text-sm text-slate-500">
        <span>{label}</span>
        <span>{value}%</span>
      </div>
      <div className="mt-3 h-2 overflow-hidden rounded-full bg-slate-200">
        <div className="h-full rounded-full bg-gradient-to-r from-saffron to-brandgreen" style={{ width: `${value}%` }} />
      </div>
    </div>
  );
}
