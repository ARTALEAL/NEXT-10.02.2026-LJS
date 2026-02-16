'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface NavLinkProps {
  href: string;
  title: string;
  activeClassName?: string;
  className?: string;
}

export default function NavLink({
  href,
  title,
  activeClassName = 'text-amber-300',
  className = '',
}: NavLinkProps) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <li className={isActive ? activeClassName : ''}>
      <Link href={href} className={className}>
        {title}
      </Link>
    </li>
  );
}
