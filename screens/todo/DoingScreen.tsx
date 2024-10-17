import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const DoingScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Doing Tasks</Text>
      {/* Add your Doing task management UI here */}
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

export default DoingScreen;