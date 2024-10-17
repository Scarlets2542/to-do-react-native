import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const DoneScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Done Tasks</Text>
      {/* Add your Done task management UI here */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
  },
});

export default DoneScreen;