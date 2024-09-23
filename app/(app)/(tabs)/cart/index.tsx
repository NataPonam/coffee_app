import { Colors } from '@/constants/Colors';
import { Link, router } from 'expo-router';
import React from 'react';
import { View, Pressable, Text, StyleSheet } from 'react-native';

export default function Cart() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Cart</Text>
      <Link href="./success">
        <Text style={styles.text}>Оформить заказ</Text>
      </Link>
      <Link href="./address">
        <Text
          style={{
            ...styles.text,
            color: Colors.accentBrownHover,
          }}
        >
          Изменить адрес
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
  },
  text: {
    fontSize: 24,
    fontWeight: '400',
    fontStyle: 'normal',
    alignSelf: 'center',
    color: Colors.black,
  },
});
