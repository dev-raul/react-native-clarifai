import { Asset } from 'react-native-image-picker';

export type IHomeContext = {
  selectedImage: Asset | undefined;
  setSelectedImage: React.Dispatch<React.SetStateAction<Asset | undefined>>;
};
