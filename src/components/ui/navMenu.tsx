'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function NavMenu() {
  const path = usePathname();
  return (
    <nav>
      <ul className="flex gap-5">
        <li className={path === '/' ? 'text-amber-300' : ''}>
          <Link href="/">Главная</Link>
        </li>
        <li className={path === '/rackets' ? 'text-amber-300' : ''}>
          <Link href="/rackets">Ракетки</Link>
        </li>
      </ul>
    </nav>
  );
}
