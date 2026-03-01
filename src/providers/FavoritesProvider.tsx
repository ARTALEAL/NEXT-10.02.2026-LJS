'use client';

import { createContext, use, useState } from 'react';
import { UserContext } from './UserProvider';
import { BASE_URL } from '@/utils/constants';

interface IFavoritesContext {
  favorites: number[];
  toggleFavorite: (productId: number) => Promise<void>;
  isFavorite: (productId: number) => boolean;
  isLoading: boolean;
}

export const FavoritesContext = createContext<IFavoritesContext>({
  favorites: [],
  toggleFavorite: async () => {},
  isFavorite: () => false,
  isLoading: false,
});

export function FavoritesProvider({ children }: { children: React.ReactNode }) {
  const user = use(UserContext);
  const [favorites, setFavorites] = useState<number[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const toggleFavorite = async (productId: number) => {
    if (!user) return;
    setIsLoading(true);
    const isCurrentlyFavorite = favorites.includes(productId);
    const url = `${BASE_URL}/product/${productId}/favorite`;

    try {
      const response = await fetch(url, {
        credentials: 'include',
        method: isCurrentlyFavorite ? 'DELETE' : 'POST',
      });

      if (response.ok) {
        setFavorites((prev) =>
          isCurrentlyFavorite
            ? prev.filter((id) => id !== productId)
            : [...prev, productId],
        );
      }
    } catch (error) {
      console.error('Ошибка изменения статуса:', error);
    } finally {
      setIsLoading(false);
    }
  };
  const isFavorite = (productId: number) => favorites.includes(productId);
  return (
    <FavoritesContext
      value={{
        favorites,
        toggleFavorite,
        isFavorite,
        isLoading,
      }}
    >
      {children}
    </FavoritesContext>
  );
}
