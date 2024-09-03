/* eslint-disable react-native/no-inline-styles */
import { Colors, Fonts } from '@/constants/Colors';
import React from 'react';
import { View, Text, StyleSheet, Image, Pressable } from 'react-native';
import { Card } from '../model/Card.model';

export default function CardItem({
  id,
  name,
  subTitle,
  type,
  price,
  image,
  description,
  rating,
}: Card) {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: image }} />
      <View style={styles.wrapper}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.description}>{subTitle}</Text>
        <View style={styles.priceWrapper}>
          <View>
            <Text style={styles.price}>{price} ₽</Text>
          </View>
          <Pressable style={styles.button}>
            <Text style={styles.textButton}>+</Text>
          </Pressable>
        </View>
      </View>
      {/* <Text>
        {id}
        {type}
        {description}
        {rating}
      </Text> */}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-start',
    minHeight: 239,
    borderRadius: 16,
    backgroundColor: Colors.white,
    padding: 4,
    maxWidth: 150,
    marginBottom: 10,
    marginRight: 10,
  },
  image: {
    width: 141,
    height: 132,
    borderRadius: 16,
  },
  wrapper: {
    width: '100%',
    paddingHorizontal: 8,
    paddingVertical: 12,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    color: Colors.darkText,
    fontFamily: Fonts.semibold,
  },
  description: {
    fontSize: 12,
    fontWeight: '400',
    fontStyle: 'normal',
    color: Colors.lightText,
  },
  priceWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  price: {
    fontSize: 18,
    fontWeight: '600',
    color: Colors.accentGreen,
    fontFamily: Fonts.semibold,
  },
  button: {
    backgroundColor: Colors.accentBrown,
    width: 32,
    height: 32,
    borderRadius: 10,
    justifyContent: 'center',
  },
  textButton: {
    color: Colors.white,
    textAlign: 'center',
  },
});
