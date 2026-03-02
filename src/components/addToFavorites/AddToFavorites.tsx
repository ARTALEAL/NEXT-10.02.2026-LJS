'use client';

import { FavoritesContext } from '@/providers/FavoritesProvider';
import { UserContext } from '@/providers/UserProvider';
import { use } from 'react';

interface IProps {
  data: {
    id: number;
    userData?: {
      isFavorite: boolean;
    };
  };
}

export default function AddToFavorites({ data }: IProps) {
  const user = use(UserContext);
  const { isFavorite, toggleFavorite, isPending } = use(FavoritesContext);

  const productId = data.id;
  const isProductFavorite = isFavorite(productId);

  if (!user) {
    return null;
  }

  const handleClick = async () => {
    await toggleFavorite(productId);
  };

  return (
    <div className="flex gap-2">
      <label
        htmlFor="isfavoriteButton"
        className={`rounded-md cursor-pointer w-10 h-10 border ${isProductFavorite ? 'bg-amber-400' : ''}`}
      ></label>
      <button
        id="isfavoriteButton"
        className={`cursor-pointer border p-2 hover:bg-amber-400 ${isPending ? 'opacity-50' : ''} disabled:opacity-50`}
        onClick={handleClick}
        disabled={isPending}
      >
        {isProductFavorite ? (
          <span>Удалить из избранного для {user.login}</span>
        ) : (
          <span>Добавить в избранное для {user.login}</span>
        )}
      </button>
    </div>
  );
}
