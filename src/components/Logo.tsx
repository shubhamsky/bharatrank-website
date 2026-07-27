'use client';

export function Logo({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 220 60" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="0" y="20" width="16" height="28" rx="5" fill="#FF6B00" />
      <rect x="22" y="12" width="16" height="36" rx="5" fill="#FF6B00" />
      <rect x="44" y="4" width="16" height="44" rx="5" fill="#FF6B00" />
      <path d="M68 38L86 20L104 38" stroke="#0F8A3B" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
      <text x="118" y="38" fontFamily="Inter, sans-serif" fontWeight="700" fontSize="22" fill="currentColor">
        Bharat
      </text>
      <text x="118" y="55" fontFamily="Inter, sans-serif" fontWeight="700" fontSize="22" fill="#0F8A3B">
        Rank
      </text>
    </svg>
  );
}
