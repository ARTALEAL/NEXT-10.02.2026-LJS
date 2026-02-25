'use client';
import Link from 'next/link';
import { loginAction } from './login-action';
import { useActionState, useEffect } from 'react';

export default function LoginForm() {
  const [{ error, redirectTo }, action, pending] = useActionState(loginAction, {
    error: '',
    redirectTo: undefined,
  });

  useEffect(() => {
    if (redirectTo) {
      location.assign(redirectTo);
    }
  }, [redirectTo]);

  return (
    <main className="main">
      <h2 className="text-center text-2xl mb-4">Вход в аккаунт</h2>

      <form action={action} className="flex flex-col">
        <div className="flex flex-col mb-4">
          <label htmlFor="login" className="font-bold">
            Имя
          </label>
          <input
            className="border rounded-md p-1"
            id="login"
            type="text"
            name="login"
          />
        </div>
        <div className="flex flex-col mb-4">
          <label htmlFor="password" className="font-bold">
            Пароль
          </label>
          <input
            className="border rounded-md p-1"
            id="password"
            type="password"
            name="password"
          />
        </div>
        {error && <div className="text-red-600 text-center p-4">{error}</div>}
        <button
          type="submit"
          className="border rounded-md px-2 py-1 max-w-md self-center w-full cursor-pointer hover:bg-amber-400 mb-4"
          disabled={pending}
        >
          Войти
        </button>
        <Link href="/register" className="text-center">
          Или зарегистрируйтесь
        </Link>
      </form>
    </main>
  );
}
