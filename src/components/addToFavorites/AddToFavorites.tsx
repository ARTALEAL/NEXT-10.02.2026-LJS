'use client';

import { FavoritesContext } from '@/providers/FavoritesProvider';
import { UserContext } from '@/providers/UserProvider';
import { use, useState } from 'react';

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
  const { toggleFavorite, isLoading } = use(FavoritesContext);
  const [isFavorite, setIsFavorite] = useState(
    data.userData?.isFavorite ?? false,
  );

  const productId = data.id;

  if (!user) {
    return null;
  }

  const handleClick = async () => {
    await toggleFavorite(productId);
    setIsFavorite(!isFavorite);
  };

  return (
    <div className="flex gap-2">
      <label
        htmlFor="isfavoriteButton"
        className={`rounded-md cursor-pointer w-10 h-10 border ${isFavorite ? 'bg-amber-400' : ''}`}
      ></label>
      <button
        id="isfavoriteButton"
        className={`cursor-pointer border p-2 hover:bg-amber-400 ${isLoading ? 'opacity-50' : ''}`}
        onClick={handleClick}
        disabled={isLoading}
      >
        {isFavorite ? (
          <span>Удалить из избранного для {user.login}</span>
        ) : (
          <span>Добавить в избранное для {user.login}</span>
        )}
      </button>
    </div>
  );
}
