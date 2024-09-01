import { Colors } from '@/constants/Colors';
import { router } from 'expo-router';
import React from 'react';
import { View, Pressable, Text, StyleSheet, ScrollView, Image, FlatList } from 'react-native';

const logo = {
  uri: 'https://reactnative.dev/img/tiny_logo.png',
  width: 64,
  height: 64,
};
export default function Success() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Заказ оформлен! Ура!</Text>
      <Pressable onPress={() => router.back()}>
        <Text style={styles.text}>Назад</Text>
      </Pressable>
      {/* 
      <ScrollView horizontal={true}>
        <Image source={logo} />
        <Image source={logo} />
        <Image source={logo} />
        <Image source={logo} />
        <Image source={logo} />
        <Image source={logo} />
        <Image source={logo} />
        <Image source={logo} />
        <Image source={logo} />
        <Image source={logo} />
      </ScrollView> */}

      <FlatList
        horizontal={true}
        data={[
          { key: 'Все' },
          { key: 'Капучино' },
          { key: 'Макиато' },
          { key: 'Латте' },
          { key: 'Американо' },
          { key: 'Моккачино' },
          { key: 'Флэт Уайт' },
        ]}
        renderItem={({ item }) => <Text style={styles.item}>{item.key}</Text>}
      />
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
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});
