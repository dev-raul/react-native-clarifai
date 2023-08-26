import 'styled-components/native';

declare module 'styled-components/native' {
  export interface DefaultTheme {
    colors: {
      background: {
        primary: string;
        secundary: string;
      };
      shade: {
        primary: string;
      };
      text: {
        primary: string;
        secundary: string;
      };
    };
  }
}
