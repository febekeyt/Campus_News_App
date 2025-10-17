import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to CampusNewsApp 🏫</Text>
      <Text style={styles.subtitle}>Your campus updates in one place!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f4f7',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#2e3a59',
  },
  subtitle: {
    fontSize: 16,
    color: '#6c7a9c',
    marginTop: 8,
  },
});
