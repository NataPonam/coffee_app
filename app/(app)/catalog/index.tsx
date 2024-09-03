import { Colors, Fonts } from '@/constants/Colors';
import { router } from 'expo-router';
import React, { useState } from 'react';
import { Link } from 'expo-router';
import { View, Pressable, Text, StyleSheet, TextInput, FlatList } from 'react-native';
import SearchIcon from '@/assets/icons/SearchIcon';
import EditIcon from '@/assets/icons/EditIcon';

export default function Catalog() {
  const [text, onChangeText] = useState('');
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.textHeader}>Адрес</Text>
        <View style={styles.textContainer}>
          <Text style={styles.textAddress}>Москва, Новослободская 23</Text>
          <Pressable>
            <EditIcon />
          </Pressable>
        </View>
        <View style={styles.inputWrapper}>
          <TextInput
            style={styles.input}
            placeholder="Найти кофе"
            placeholderTextColor={Colors.placeholder}
            onChangeText={onChangeText}
            value={text}
          />
          <Pressable style={styles.icon}>
            <SearchIcon />
          </Pressable>
        </View>
      </View>
      <View style={styles.body}>
        <View>
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
            renderItem={({ item }) => (
              <Pressable>
                <Text style={styles.item}>{item.key}</Text>
              </Pressable>
            )}
          />
        </View>
      </View>
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
  },
  header: {
    backgroundColor: Colors.black,
    padding: 30,
  },
  textHeader: {
    fontSize: 12,
    fontWeight: '400',
    fontStyle: 'normal',
    letterSpacing: 1,
    color: Colors.textGray,
    fontFamily: Fonts.regular,
    marginBottom: 4,
  },
  textAddress: {
    fontSize: 14,
    fontStyle: 'normal',
    color: Colors.textGray,
    fontFamily: 'Sora-SemiBold',
  },
  textContainer: {
    flexDirection: 'row',
    marginBottom: 28,
    gap: 4,
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: '400',
    fontStyle: 'normal',
    alignSelf: 'center',
    color: Colors.black,
    fontFamily: Fonts.regular,
  },

  input: {
    width: '100%',
    height: 52,
    borderRadius: 16,
    backgroundColor: Colors.input,
    padding: 16,
    paddingLeft: 48,
    fontSize: 14,
    fontWeight: '400',
    fontStyle: 'normal',
    fontFamily: Fonts.regular,
    color: Colors.white,
  },
  icon: {
    width: 20,
    height: 20,
    position: 'absolute',
    top: 16,
    left: 16,
  },
  inputWrapper: {
    width: '100%',
  },
  body: {
    padding: 30,
  },
  item: {
    paddingHorizontal: 16,
    paddingTop: 8,
    paddingBottom: 10,
    borderRadius: 12,
    backgroundColor: Colors.white,
    fontSize: 14,
    fontStyle: 'normal',
    fontFamily: Fonts.regular,
    color: Colors.accentGreen,
    marginRight: 8,
  },
});
