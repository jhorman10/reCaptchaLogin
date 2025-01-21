import React, { ReactNode, useEffect, useState } from 'react';
import { fetchHeroes } from '../api';
import { Result } from '../Dashboard/pages/interface/hero.interface';
import { userMocks } from '../mocks';
import { MockContext } from './mockContext';

type Props = {
  children: ReactNode;
};

export const MockContextProvider: React.FC<Props> = ({ children }: Props) => {
  const [heroes, setHeroes] = useState<Result[]>([]);

  useEffect(() => {
    const loadHeroes = async () => {
      const response = await fetchHeroes();
      if (Array.isArray(response)) {
        setHeroes(response);
      } else {
        console.error('Invalid data format:', response);
      }
    };

    loadHeroes();
  }, []);

  const contextValue = {
    users: userMocks,
    Hero: heroes,
  };

  return (
    <MockContext.Provider value={contextValue}>{children}</MockContext.Provider>
  );
};
