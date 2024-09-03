import { Colors } from '@/constants/Colors';
import { router } from 'expo-router';
import React from 'react';
import { Link } from 'expo-router';
import { View, Pressable, Text, StyleSheet } from 'react-native';

export default function Catalog() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Catalog</Text>
      <Link href="/catalog/id">
        <Text
          style={{
            ...styles.text,
            color: Colors.accentBrownHover,
          }}
        >
          Выбранный кофеёк
        </Text>
      </Link>
      <Link href="/catalog/cart">
        <Text
          style={{
            ...styles.text,
            color: Colors.accentBrownHover,
          }}
        >
          В корзину
        </Text>
      </Link>

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
    padding: 30,
  },
  text: {
    fontSize: 24,
    fontWeight: '400',
    fontStyle: 'normal',
    alignSelf: 'center',
    color: Colors.black,
    // fontFamily: Fonts.regular,
  },
});
