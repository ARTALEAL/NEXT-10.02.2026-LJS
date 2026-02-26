import UserControls from '../user-controls/UserControls';
import NavLink from './navLink';

const navLinks = [
  { href: '/', title: 'Главная', activeClassName: 'text-amber-300' },
  { href: '/rackets', title: 'Ракетки', activeClassName: 'text-amber-300' },
];

export default function NavMenu() {
  return (
    <nav>
      <ul className="flex gap-5">
        {navLinks.map(({ href, title, activeClassName }) => {
          return (
            <NavLink
              key={title}
              href={href}
              activeClassName={activeClassName}
              title={title}
            />
          );
        })}
        <li>
          <UserControls />
        </li>
      </ul>
    </nav>
  );
}
