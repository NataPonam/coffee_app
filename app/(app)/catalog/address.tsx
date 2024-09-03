import { Colors } from '@/constants/Colors';
import { router } from 'expo-router';
import React from 'react';
import { View, Pressable, Text, StyleSheet } from 'react-native';

export default function Address() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Address</Text>
      <Pressable onPress={() => router.back()}>
        <Text style={styles.text}>Назад</Text>
      </Pressable>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
  },
  text: {
    fontSize: 24,
    fontWeight: '400',
    fontStyle: 'normal',
    alignSelf: 'center',
    color: Colors.black,
  },
});
