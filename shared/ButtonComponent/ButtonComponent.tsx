import React from 'react'
import { Colors } from '@/constants/Colors';
import { Pressable, Text, StyleSheet } from 'react-native';
import { router } from 'expo-router';
export function ButtonComponent({ text }: { text: string }) {

  return (
    <Pressable style={styles.container} onPress={() => router.push('/test')} >
      <Text style={styles.text}>{text}</Text>
    </Pressable >
  )
}
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 62,
    borderRadius: 16,
    backgroundColor: Colors.accentBrown
  },

  text: {
    color: Colors.white,
    // fontFamily: "Sora",
    fontSize: 16,
    fontWeight: "600",
    fontStyle: "normal",
    textAlign: 'center'
  },

});
