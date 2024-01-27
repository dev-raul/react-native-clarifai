import React from 'react';
import { launchImageLibrary } from 'react-native-image-picker';
import { HomeContext } from '../../providers/home';

export const useHome = () => {
  const context = React.useContext(HomeContext);

  const getImage = React.useCallback(async () => {
    const response = await launchImageLibrary({
      mediaType: 'photo',
      selectionLimit: 1,
      includeBase64: true,
    });

    if (response.didCancel) return;

    context.setSelectedImage(response?.assets?.[0]);
  }, [context]);

  return {
    ...context,
    getImage,
  };
};
