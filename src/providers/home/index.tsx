import React from 'react';
import { IHomeContext } from './types';
import { Asset } from 'react-native-image-picker';
import { IConcepts } from '../../@types/clarifai';

export const HomeContext = React.createContext({} as IHomeContext);

export const HomeProvider: React.FC<{ children: JSX.Element }> = ({
  children,
}) => {
  const [selectedImage, setSelectedImage] = React.useState<Asset>();
  const [listFoods, setListFoods] = React.useState<IConcepts[]>([]);
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  return (
    <HomeContext.Provider
      value={{
        selectedImage,
        isLoading,
        listFoods,
        setSelectedImage,
        setIsLoading,
        setListFoods,
      }}>
      {children}
    </HomeContext.Provider>
  );
};
