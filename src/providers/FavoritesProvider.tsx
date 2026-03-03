'use client';

import { createContext, use, useState, useTransition } from 'react';
import { UserContext } from './UserProvider';
import { BASE_URL } from '@/utils/constants';

interface IFavoritesContext {
  favorites: number[];
  toggleFavorite: (productId: number) => Promise<void>;
  isFavorite: (productId: number) => boolean;
  isPending: boolean;
}

export const FavoritesContext = createContext<IFavoritesContext>({
  favorites: [],
  toggleFavorite: async () => {},
  isFavorite: () => false,
  isPending: false,
});

export function FavoritesProvider({ children }: { children: React.ReactNode }) {
  const user = use(UserContext);
  const [favorites, setFavorites] = useState<number[]>([]);
  const [isPending, startTransition] = useTransition();

  const toggleFavorite = async (productId: number) => {
    if (!user) return;
    const isCurrentlyFavorite = favorites.includes(productId);
    const url = `${BASE_URL}/product/${productId}/favorite`;

    startTransition(() => {
      setFavorites((prev) =>
        isCurrentlyFavorite
          ? prev.filter((id) => id !== productId)
          : [...prev, productId],
      );
    });

    try {
      const response = await fetch(url, {
        credentials: 'include',
        method: isCurrentlyFavorite ? 'DELETE' : 'POST',
      });
      if (!response.ok) {
        startTransition(() => {
          setFavorites((prev) =>
            isCurrentlyFavorite
              ? [...prev, productId]
              : prev.filter((id) => id !== productId),
          );
        });
        console.error('Ошибка изменения статуса:', response.statusText);
      }
    } catch (error) {
      startTransition(() => {
        setFavorites((prev) =>
          isCurrentlyFavorite
            ? [...prev, productId]
            : prev.filter((id) => id !== productId),
        );
      });
      console.error('Ошибка изменения статуса:', error);
    }
  };
  const isFavorite = (productId: number) => favorites.includes(productId);
  return (
    <FavoritesContext
      value={{
        favorites,
        toggleFavorite,
        isFavorite,
        isPending,
      }}
    >
      {children}
    </FavoritesContext>
  );
}
