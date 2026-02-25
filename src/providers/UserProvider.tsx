'use client';

import { IUser } from '@/utils/types.dto';
import { createContext, FC, PropsWithChildren } from 'react';

interface Props extends PropsWithChildren {
  user: IUser | undefined;
}

export const UserContext = createContext<IUser | undefined>(undefined);

export const UserProvider: FC<Props> = ({ children, user }) => {
  return <UserContext value={user}>{children}</UserContext>;
};
