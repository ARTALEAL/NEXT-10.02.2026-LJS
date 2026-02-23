'use client';
import Link from 'next/link';

export default function Error({ error }: { error: Error }) {
  return (
    <main className="main flex flex-col justify-center items-center gap-3">
      <span>{error.message}</span>
      <Link
        href="/"
        className="p-3 border border-amber-300 rounded-md font-bold hover:bg-amber-300"
      >
        На главную
      </Link>
    </main>
  );
}
