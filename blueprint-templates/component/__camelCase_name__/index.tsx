import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export interface {{name}}Props {};

export const {{ name }}: React.FC<{{name}}Props> = (props) => {
  const { } = props
  return (
    <View style={styles.container}>
      <Text>{{ name }}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
