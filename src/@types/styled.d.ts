import 'styled-components';

declare module 'styled-components' {
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
