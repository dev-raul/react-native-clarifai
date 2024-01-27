import Config from 'react-native-config';
import api from '../api';
import { IClarifaiReponse } from '../../../@types/clarifai';

export const serviceClarifai = {
  getImageRecognition: async (imageBase64: string) => {
    const { data } = await api.post<IClarifaiReponse>(
      `/v2/models/${Config.CLARIFAI_MODEL_ID}/versions/${Config.CLARIFAI_MODEL_VERSION_ID}/outputs`,
      {
        user_app_id: {
          user_id: Config.CLARIFAI_USER_ID,
          app_id: Config.CLARIFAI_ID,
        },
        inputs: [
          {
            data: {
              image: { base64: imageBase64 },
            },
          },
        ],
      },
    );

    return data;
  },
};
