import { TouchableOpacityProps } from 'react-native';

export type IButtonProps = {
  title: string;
  prefix?: React.ReactNode;
  sufix?: React.ReactNode;
} & TouchableOpacityProps;
