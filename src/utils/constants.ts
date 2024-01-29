import { NativeModules, Platform, StatusBar } from 'react-native';

const { StatusBarManager } = NativeModules;

export const STATUS_BAR_HEIGHT = Platform.select({
  ios: StatusBarManager.HEIGHT,
  android: 0,
  default: 0,
});
