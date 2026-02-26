'use client';

import { UserContext } from '@/providers/UserProvider';
import { use } from 'react';
import Link from 'next/link';
import LogoutButton from '../logoutButton/LogoutButton';

export default function UserControls() {
  const user = use(UserContext);

  return user ? (
    <>
      <div className="flex justify-center items-start gap-2">
        <div>{user.login}</div>
        <LogoutButton />
      </div>
    </>
  ) : (
    <Link href="/login">Войти</Link>
  );
}
