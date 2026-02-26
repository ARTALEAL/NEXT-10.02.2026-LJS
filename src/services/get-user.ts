import { BASE_URL } from '@/utils/constants';
import { IUser, Response } from '@/utils/types.dto';
import { cookies } from 'next/headers';

export const getUser = async (): Response<IUser> => {
  const cookieStore = await cookies();

  const result = await fetch(`${BASE_URL}/auth/user`, {
    credentials: 'include',
    headers: {
      Cookie: cookieStore.toString(),
    },
  });

  if (result.status === 401) {
    return { isError: false, data: undefined };
  }

  if (!result.ok) {
    return { isError: true, data: undefined };
  }

  const data: { user: IUser } = await result.json();

  return { isError: false, data: data.user };
};
