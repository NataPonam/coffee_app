import { Colors, Fonts } from '@/constants/Colors';
import { ButtonComponent } from '@/shared/ButtonComponent/ButtonComponent';
import { router } from 'expo-router';
import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

export default function UnmatchedPage() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Страница не найдена!</Text>
      <Image source={require('../../assets/images/coffee.png')} style={styles.img} />
      <ButtonComponent text="Вернуться назад" onPress={() => router.back()} style={styles.button} />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.white,
    gap: 40,
    padding: 30,
  },
  text: {
    fontSize: 24,
    fontStyle: 'normal',
    alignSelf: 'center',
    color: Colors.accentBrown,
    fontFamily: Fonts.semibold,
  },
  img: {
    height: 150,
    width: 150,
  },
  button: {
    width: '100%',
  },
});
