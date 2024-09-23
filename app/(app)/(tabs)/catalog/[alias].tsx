import BigStarIcon from '@/assets/icons/BigStarIcon';

import { Colors, Fonts } from '@/constants/Colors';
import { Card } from '@/entities/card/model/card.model';
import axios, { AxiosError } from 'axios';
import { router, useLocalSearchParams } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { View, Pressable, Text, Image, StyleSheet } from 'react-native';

export default function CoffeeItem() {
  const [coffeItem, setCoffeItem] = useState<Card>();
  const [active, setActive] = useState<boolean>(false);
  const { alias } = useLocalSearchParams();

  useEffect(() => {
    try {
      axios.get(`https://purpleschool.ru/coffee-api/id/${alias}`).then((res) => {
        setCoffeItem(res.data);
      });
    } catch (error) {
      if (error instanceof AxiosError) {
        console.log(error.message);
      }
    }
  }, []);

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: coffeItem?.image }} />
      <View style={styles.textWrapper}>
        <View style={styles.titleWrapper}>
          <Text style={styles.title}>{coffeItem?.name}</Text>
          <Text style={styles.subTitle}>{coffeItem?.subTitle}</Text>
        </View>
        <View style={styles.ratingContainer}>
          <BigStarIcon />

          <Text style={styles.ratingText}>{coffeItem?.rating}</Text>
        </View>
      </View>
      <View style={styles.line}></View>
      <View>
        <Text style={styles.descrTitle}>Описание</Text>
        <Text style={styles.description}>{coffeItem?.description}</Text>
      </View>
      <View>
        <Text style={styles.descrTitle}>Размер</Text>
        <View style={styles.sizeWrapper}>
          {/* FLATLIST */}
          <Pressable onPress={() => router.back()} style={styles.size}>
            <Text style={styles.sizeText}>S</Text>
          </Pressable>
          <Pressable onPress={() => router.back()} style={styles.size}>
            <Text style={styles.sizeText}>M</Text>
          </Pressable>
          <Pressable onPress={() => router.back()} style={styles.size}>
            <Text style={styles.sizeText}>L</Text>
          </Pressable>
        </View>
      </View>
      <Pressable onPress={() => router.back()}>
        <Text style={styles.text}>Назад</Text>
      </Pressable>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 24,
    paddingHorizontal: 30,
    backgroundColor: Colors.white,
    gap: 24,
    color: Colors.darkText,
  },
  image: {
    height: 226,
    maxWidth: 315,
    borderRadius: 16,
  },
  textWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  line: {
    borderBottomWidth: 1,
    borderBottomColor: Colors.borderColor,
  },
  titleWrapper: {
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontFamily: Fonts.semibold,
    lineHeight: 20,
    paddingBottom: 5,
  },
  subTitle: {
    fontSize: 12,
    fontFamily: Fonts.regular,
    color: Colors.lightText,
  },
  ratingContainer: {
    flexDirection: 'row',
    gap: 4,
  },
  ratingText: {
    fontSize: 16,
    lineHeight: 21,
    fontFamily: Fonts.semibold,
    color: Colors.darkText,
  },
  descrTitle: {
    fontSize: 16,
    fontFamily: Fonts.semibold,
    paddingBottom: 12,
    lineHeight: 16,
  },
  description: {
    fontSize: 14,
    fontFamily: Fonts.regular,
    color: Colors.lightText,
    lineHeight: 17,
  },
  sizeWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  size: {
    width: 96,
    height: 43,
    borderRadius: 12,
    backgroundColor: Colors.white,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: Colors.borderColor,
    justifyContent: 'center',
  },
  sizeText: {
    fontSize: 14,
    fontFamily: Fonts.regular,
    color: Colors.darkText,
    textAlign: 'center',
  },
});
