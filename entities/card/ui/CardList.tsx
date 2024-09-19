/* eslint-disable react-native/no-inline-styles */
import React, { useEffect, useState } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { cardAtom, loadCardList } from '../model/card.state';
import { useAtomValue, useSetAtom } from 'jotai';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { atomWithStorage, createJSONStorage } from 'jotai/utils';

import CardItem from './CardItem';
import { Card } from '../model/card.model';
import Fuse from 'fuse.js';
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

export default function CardList({
  inputText,
  activeKey,
  isFilter,
  onChangeText,
}: {
  inputText: string;
  activeKey: string;
  isFilter: boolean;
  onChangeText: (prev: string) => void;
}) {
  const { cardList } = useAtomValue(cardAtom);
  const loadList = useSetAtom(loadCardList);
  const [fechedData, setFetchedData] = useState(cardList);

  const fuse = new Fuse(cardList, {
    keys: ['subTitle', 'name'],
    threshold: 0.8,
  });

  useEffect(() => {
    loadList();
  }, []);

  useEffect(() => {
    if (activeKey === 'Все') {
      setFetchedData(cardList);
    }
    if (activeKey !== 'Все' && isFilter) {
      onChangeText('');
      const newCardList = cardList.filter((el) => {
        return el.name.includes(activeKey);
      });
      setFetchedData(newCardList);
    }
    if (inputText !== '') {
      const searchedCardList = fuse.search(inputText);
      if (searchedCardList.length) {
        const newCardList: Card[] = [];
        searchedCardList.map((el) => {
          return newCardList.push(el.item);
        });
        setFetchedData(newCardList);
      }
    }
  }, [inputText, activeKey, cardList]);

  const renderCard = ({ item }: { item: Card }) => {
    return <CardItem {...item} />;
  };

  return (
    <View style={styles.list}>
      <FlatList
        data={fechedData}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderCard}
        horizontal={false}
        numColumns={2}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  list: {
    width: '100%',
    alignItems: 'center',
    paddingBottom: 370,
  },
});
