import React from 'react';
import { Text as RNText } from 'react-native';

export interface TextProps {
  text: string;
}

export const Text = ({ text }: TextProps) => {
  return <RNText>{text}</RNText>;
};
