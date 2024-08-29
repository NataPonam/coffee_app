import React from 'react'
import { Colors } from '@/constants/Colors';
import { Pressable, Text, StyleSheet, Animated } from 'react-native';
import { router } from 'expo-router';
export function ButtonComponent({ text }: { text: string }) {
  const animatedValue = new Animated.Value(100);
  const bgColor = animatedValue.interpolate({
    inputRange: [0, 100],
    outputRange: [Colors.accentBrownHover, Colors.accentBrown]
  });
  const onPressButtonIn = () => {
    Animated.timing(animatedValue, {
      toValue: 0,
      duration: 200,
      useNativeDriver: true
    }).start();
  }
  const onPressButtonOut = () => {
    Animated.timing(animatedValue, {
      toValue: 100,
      duration: 200,
      useNativeDriver: true
    }).start();
  }
  return (
    <Pressable onPressIn={onPressButtonIn} onPressOut={onPressButtonOut}>
      <Animated.View style={{ ...styles.container, backgroundColor: bgColor }} >
        <Text style={styles.text}>{text}</Text>
      </Animated.View>
    </Pressable >
  )
}
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 62,
    borderRadius: 16,
    // backgroundColor: Colors.accentBrown
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
