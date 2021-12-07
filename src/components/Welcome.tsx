import React from 'react';
import { View, Text } from 'react-native';

interface IProps {
  title: string
}

export const Welcome = (props: IProps) => {
  return (
    <View>
      <Text>{props.title}</Text>
    </View>
  )
}
