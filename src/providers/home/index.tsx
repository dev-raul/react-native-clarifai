import React from 'react';
import { IHomeContext } from './types';
import { Asset } from 'react-native-image-picker';

export const HomeContext = React.createContext({} as IHomeContext);

export const HomeProvider: React.FC<{ children: JSX.Element }> = ({
  children,
}) => {
  const [selectedImage, setSelectedImage] = React.useState<Asset>();
  return (
    <HomeContext.Provider
      value={{
        selectedImage,
        setSelectedImage,
      }}>
      {children}
    </HomeContext.Provider>
  );
};
