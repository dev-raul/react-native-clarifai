import React from 'react';
import { HomeProvider } from './home';

export const Providers: React.FC<{ children: JSX.Element }> = ({
  children,
}) => {
  return <HomeProvider>{children}</HomeProvider>;
};
