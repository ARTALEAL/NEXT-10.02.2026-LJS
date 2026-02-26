'use server';

import { BASE_URL } from '@/utils/constants';
import { parseSetCookie } from '@/helpers/parse-set-cookie';
import { cookies } from 'next/headers';

interface IState {
  error: string;
  redirectTo: string | undefined;
}

export const loginAction = async (state: IState, formData: FormData) => {
  const login = formData.get('login')?.toString() ?? '';
  const password = formData.get('password')?.toString() ?? '';

  const result = await fetch(`${BASE_URL}/auth/login`, {
    method: 'POST',
    body: JSON.stringify({ login, password }),
    headers: { 'Content-Type': 'application/json' },
  });

  if (result.status !== 200) {
    return { error: 'неверное имя или пароль', redirectTo: undefined };
  }

  const cookiesStore = await cookies();
  const setCookieHeaders = result.headers.getSetCookie();

  if (setCookieHeaders) {
    const parsed = parseSetCookie(setCookieHeaders);
    for (const cookie of parsed) {
      cookiesStore.set(cookie.name, cookie.value, cookie.options);
    }
  }

  return { error: '', redirectTo: '/' };
};
