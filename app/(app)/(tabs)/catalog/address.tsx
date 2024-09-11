import GeoTag from '@/assets/icons/inputAddressIcon/GeoTag';
import Compass from '@/assets/icons/inputAddressIcon/Compass';
import { Colors, Fonts } from '@/constants/Colors';
import { router } from 'expo-router';
import React from 'react';
import { View, Pressable, StyleSheet, TextInput } from 'react-native';
import { ButtonComponent } from '@/shared/ButtonComponent/ButtonComponent';
import InputMultiIcon from '@/assets/icons/inputAddressIcon/InputMultiIcon';

export default function Address() {
  return (
    <View style={styles.container}>
      <View style={styles.inputWrapper}>
        <TextInput
          style={styles.input}
          placeholder="Введите адрес"
          placeholderTextColor={Colors.placeholder}
        // onChangeText={onChangeText}
        // value={text}
        />
        <Pressable style={styles.icon}>
          <GeoTag />
        </Pressable>
        <Pressable onPress={() => router.back()} style={styles.compassButton}>
          <Compass />
        </Pressable>
      </View>
      <View>
        <TextInput
          style={[styles.input, styles.inputMulty]}
          // placeholder="Введите адрес"
          placeholderTextColor={Colors.placeholder}
          // onChangeText={onChangeText}
          // value={text}
          multiline={true}
        />
        <Pressable onPress={() => router.back()} style={styles.icon}>
          <InputMultiIcon />
        </Pressable>
      </View>
      <ButtonComponent
        text="Сохранить"
        onPress={() => console.log('changing address')}
        style={styles.button}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    backgroundColor: Colors.white,
    gap: 16,
  },
  compassButton: {
    width: 34,
    height: 34,
    borderRadius: 10,
    backgroundColor: Colors.accentBrown,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: 11,
    right: 9,
  },
  input: {
    width: '100%',
    height: 56,
    padding: 16,
    paddingLeft: 48,
    fontSize: 14,
    fontFamily: Fonts.regular,
    borderRadius: 14,
    backgroundColor: Colors.white,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: Colors.borderColor,
    color: Colors.darkText,
  },
  inputMulty: {
    minHeight: 139,
    textAlign: 'left',
    textAlignVertical: 'top',
    lineHeight: 14,
  },
  icon: {
    position: 'absolute',
    top: 19,
    left: 16,
  },
  inputWrapper: {
    flexDirection: 'row',
  },
  button: {
    marginTop: 'auto',
    marginBottom: 70,
  },
});
