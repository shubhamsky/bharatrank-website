'use client';

import Image from 'next/image';
import BharatLogo from '@/images/logo/BharatLogo.png';

export function Logo({ className }: { className?: string }) {
  return (
    <div className={className}>
      <Image src={BharatLogo} alt="BharatRank logo" className="h-full w-auto object-contain" />
    </div>
  );
}
