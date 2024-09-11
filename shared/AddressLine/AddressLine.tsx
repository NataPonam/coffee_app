import React from 'react';
import { Colors, Fonts } from '@/constants/Colors';
import { Pressable, Text, StyleSheet } from 'react-native';
import EditIcon from '@/assets/icons/EditIcon';
import { router } from 'expo-router';

export default function AddressLine() {
  return (
    <>
      <Text style={styles.text}>Адрес</Text>
      <Pressable style={styles.container} onPress={() => router.navigate('/(app)/catalog/address')}>
        <Text style={styles.textAddress}>Москва, Новослободская 23</Text>
        <EditIcon />
      </Pressable>
    </>
  );
}
const styles = StyleSheet.create({
  text: {
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
  container: {
    flexDirection: 'row',
    marginBottom: 28,
    gap: 4,
    alignItems: 'center',
  },
});
