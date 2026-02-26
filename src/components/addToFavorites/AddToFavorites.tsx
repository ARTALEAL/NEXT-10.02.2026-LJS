'use client';

import { UserContext } from '@/providers/UserProvider';
import { use } from 'react';

interface IUserData {
  userData: {
    isFavorite: string;
  };
}

export default function AddToFavorites(userData: IUserData) {
  const user = use(UserContext);
  if (!user) {
    return null;
  }
  return (
    <div>
      <button className="cursor-pointer border p-2 hover:bg-amber-400">
        <span>Добавить в избранное для {user.login}</span>
      </button>
    </div>
  );
}
