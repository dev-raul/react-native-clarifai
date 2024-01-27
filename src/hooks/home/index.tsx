import React from 'react';
import { launchImageLibrary } from 'react-native-image-picker';
import { Image } from 'react-native-compressor';

import { HomeContext } from '../../providers/home';
import { serviceClarifai } from '../../providers/services/modules/clarifai';

export const useHome = () => {
  const context = React.useContext(HomeContext);

  const foodDetected = React.useCallback(
    async (imageBase64: string) => {
      const data = await serviceClarifai.getImageRecognition(imageBase64);
      context.setListFoods(data.outputs?.[0]?.data?.concepts);
    },
    [context],
  );

  const getImage = React.useCallback(async () => {
    try {
      const response = await launchImageLibrary({
        mediaType: 'photo',
        selectionLimit: 1,
        includeBase64: true,
      });
      const image = response?.assets?.[0];

      if (response.didCancel && !image?.uri) return;

      context.setIsLoading(true);

      context.setSelectedImage(image);

      const compressedImageBase64 = await Image.compress(image?.uri as string, {
        compressionMethod: 'manual',
        returnableOutputType: 'base64',
        maxWidth: 900,
        output: 'jpg',
        quality: 0.5,
      });

      await foodDetected(compressedImageBase64);
    } finally {
      context.setIsLoading(false);
    }
  }, [context]);

  return {
    ...context,
    getImage,
  };
};
