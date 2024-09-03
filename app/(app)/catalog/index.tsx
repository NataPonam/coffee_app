import React, { useState } from 'react';
import { Colors, Fonts } from '@/constants/Colors';
import { View, Pressable, Text, StyleSheet, TextInput, FlatList } from 'react-native';
import SearchIcon from '@/assets/icons/SearchIcon';
import EditIcon from '@/assets/icons/EditIcon';
import Card from '@/entities/card/ui/CardItem';
import CardList from '@/entities/card/ui/CardList';

export default function Catalog() {
  const [text, onChangeText] = useState('');
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.textHeader}>Адрес</Text>
        <Pressable style={styles.addressContainer}>
          <Text style={styles.textAddress}>Москва, Новослободская 23</Text>
          <EditIcon />
        </Pressable>

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
        <CardList />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  // cardsWrapper: {
  //   flex: 1,
  //   flexDirection: 'row',
  //   flexWrap: 'wrap',
  //   gap: 10,
  // },
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
  addressContainer: {
    flexDirection: 'row',
    marginBottom: 28,
    gap: 4,
    alignItems: 'center',
  },
  input: {
    width: '100%',
    height: 52,
    borderRadius: 16,
    backgroundColor: Colors.input,
    padding: 16,
    paddingLeft: 48,
    fontSize: 14,
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
    paddingLeft: 25,
    // paddingRight: 15,
    paddingTop: 28,
    backgroundColor: Colors.lightBG,
    width: '100%',
    gap: 24,
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
