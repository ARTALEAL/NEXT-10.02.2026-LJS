import Link from 'next/link';

export default function NotFoundPage() {
  return (
    <main className="main flex flex-col justify-center items-center gap-3">
      <span>404 | Такой страницы не существует</span>
      <Link
        href="/"
        className="p-3 border border-amber-300 rounded-md font-bold hover:bg-amber-300"
      >
        На главную
      </Link>
    </main>
  );
}
