export function FAQ({ items }: { items: { question: string; answer: string }[] }) {
  return (
    <div className="grid gap-4">
      {items.map((item) => (
        <details key={item.question} className="rounded-[1.5rem] border border-slate-200/80 bg-slate-50 p-6">
          <summary className="cursor-pointer text-lg font-semibold text-navy">{item.question}</summary>
          <p className="mt-4 text-sm leading-7 text-slate-600">{item.answer}</p>
        </details>
      ))}
    </div>
  );
}
