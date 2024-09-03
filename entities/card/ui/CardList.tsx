/* eslint-disable react-native/no-inline-styles */
import { Colors, Fonts } from '@/constants/Colors';
import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Image, Pressable, FlatList } from 'react-native';
import { cardAtom, loadCardList } from '../model/card.state';
import { useAtom, useAtomValue, useSetAtom } from 'jotai';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { atomWithStorage, createJSONStorage } from 'jotai/utils';
import { Card } from '../model/Card.model';

import CardItem from './CardItem';

export interface CardList {
  list: Card[] | null;
  isLoading: boolean;
  error: string | null;
}

const storage = createJSONStorage<CardList>(() => AsyncStorage);
export const cardListAtom = atomWithStorage<CardList>(
  'list',
  {
    list: null,
    isLoading: false,
    error: null,
  },
  storage,
);

export default function CardList() {
  const { isLoading, cardList } = useAtomValue(cardAtom);
  const loadList = useSetAtom(loadCardList);
  useEffect(() => {
    loadList();
  }, []);
  console.log('dataList11', cardList);

  const renderCard = ({ item }: { item: Card }) => {
    return (
      <View>
        <CardItem {...item} />
      </View>
    );
  };
  const numColumns = 2;
  return (
    <View>
      <FlatList
        style={styles.list}
        data={cardList}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderCard}
        numColumns={numColumns}
      // horizontal={true}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  list: {
    width: '100%',
  },
});
