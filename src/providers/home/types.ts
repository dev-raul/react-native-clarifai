import { Asset } from 'react-native-image-picker';
import { IConcepts } from '../../@types/clarifai';

export type IHomeContext = {
  selectedImage: Asset | undefined;
  isLoading: boolean;
  listFoods: IConcepts[];
  setSelectedImage: React.Dispatch<React.SetStateAction<Asset | undefined>>;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  setListFoods: React.Dispatch<React.SetStateAction<IConcepts[]>>;
};
