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
    <View style={styles.inputWrapper}>
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
});
