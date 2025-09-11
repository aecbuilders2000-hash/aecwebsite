'use client';
import React from 'react';
import { usePathname } from 'next/navigation';

// Adds top padding on all pages except home so content doesn't sit under the fixed Navbar
export default function LayoutWrapper({ children }) {
  const pathname = usePathname();
  const isHome = pathname === '/' || pathname === '';
  return (
    <div className={isHome ? '' : 'pt-[12vh] md:pt-[14vh] transition-[padding] duration-300'}>
      {children}
    </div>
  );
}
