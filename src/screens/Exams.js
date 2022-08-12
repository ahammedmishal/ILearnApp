import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Exams = () => {
  return (
    <View style={styles.container}>
     <Text>I am exam</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export default Exams;