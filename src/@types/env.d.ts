declare module 'react-native-config' {
  export interface NativeConfig {
    CLARIFAI_ID: string;
    CLARIFAI_USER_ID: string;
    CLARIFAI_MODEL_ID: string;
    CLARIFAI_MODEL_VERSION_ID: string;
    CLARIFAI_API_KEY: string;
  }
  export const Config: NativeConfig;
  export default Config;
}

declare namespace NodeJS {
  export interface Global {
    __DEV__: boolean;
  }
}
