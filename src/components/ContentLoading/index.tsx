import React from 'react';
import { ActivityIndicator, View } from 'react-native';
import { ContentLoadingProps } from './types';
import { useTheme } from 'styled-components';

export const ContentLoading: React.FC<ContentLoadingProps> = ({
  loading,
  children,
}) => {
  const { colors } = useTheme();
  if (loading)
    return <ActivityIndicator size="large" color={colors.shade.primary} />;

  return <>{children}</>;
};
