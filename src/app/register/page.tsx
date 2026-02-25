'use client';

import { useActionState, useEffect } from 'react';
import { registerAction } from './register-action';

export default function RegisterForm() {
  const [{ error, redirectTo }, action, pending] = useActionState(
    registerAction,
    {
      error: '',
      redirectTo: undefined,
    },
  );

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
          Зарегистрироваться
        </button>
      </form>
    </main>
  );
}
