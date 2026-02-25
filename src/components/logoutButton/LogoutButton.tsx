'use client';

import { UserContext } from '@/providers/UserProvider';
import { BASE_URL } from '@/utils/constants';
import { use, useTransition } from 'react';

const handleLogout = async () => {
  await fetch(`${BASE_URL}/auth/logout`, {
    credentials: 'include',
    method: 'DELETE',
  });

  location.assign('/');
};

export default function LogoutButton() {
  const user = use(UserContext);

  const [isPending, startTransition] = useTransition();

  if (!user) {
    return null;
  }

  return (
    <button
      type="button"
      className="border rounded-md px-2 py-1 max-w-md self-center w-full cursor-pointer hover:bg-amber-400 mb-4"
      onClick={() => startTransition(handleLogout)}
      disabled={isPending}
    >
      Выйти
    </button>
  );
}
