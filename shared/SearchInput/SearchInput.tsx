import React from 'react';
import { Colors, Fonts } from '@/constants/Colors';
import { Pressable, StyleSheet, TextInput, View } from 'react-native';
import SearchIcon from '@/assets/icons/SearchIcon';

export default function SearchInput({
  text,
  onChangeText,
}: {
  text: string;
  onChangeText: (prev: string) => void;
}) {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Найти кофе"
        placeholderTextColor={Colors.placeholder}
        onChangeText={onChangeText}
        value={text}
        autoCapitalize="none"
      />

      <Pressable style={styles.icon}>
        <SearchIcon />
      </Pressable>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    paddingLeft: 40,
    borderRadius: 16,
    backgroundColor: Colors.input,
    width: '100%',
    fontSize: 14,
    fontFamily: Fonts.regular,
  },
  input: {
    height: 52,
    padding: 16,
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
});
