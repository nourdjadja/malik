"use client";
import Link from 'next/link';

export default function Exemple() {
  return (
    <div className="bg-black min-h-screen flex items-center justify-center">
      <Link href="/experience" className="PersoLink text-xl">
        Experience
      </Link>
    </div>
  );
}
