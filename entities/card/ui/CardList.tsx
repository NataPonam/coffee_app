/* eslint-disable react-native/no-inline-styles */
import React, { useEffect } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { cardAtom, loadCardList } from '../model/card.state';
import { useAtomValue, useSetAtom } from 'jotai';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { atomWithStorage, createJSONStorage } from 'jotai/utils';

import CardItem from './CardItem';
import { Card } from '../model/card.model';

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
}: {
  inputText: string;
  activeKey: string;
}) {
  const { cardList } = useAtomValue(cardAtom);

  const loadList = useSetAtom(loadCardList);
  useEffect(() => {
    loadList();
  }, []);

  const newCardList = cardList.filter((el) => {
    if (
      (activeKey === 'Все' && inputText === '') ||
      (activeKey === 'Все' && activeKey.toLowerCase().includes(inputText))
    ) {
      return el;
    }
    if (activeKey === 'Все' && inputText !== '') {
      return (
        el.description.toLowerCase().includes(inputText) ||
        el.subTitle.toLowerCase().includes(inputText)
      );
    }
    if (activeKey !== 'Все' && inputText !== '') {
      return (
        (el.name.includes(activeKey) && el.description.toLowerCase().includes(inputText)) ||
        (el.name.includes(activeKey) && el.subTitle.toLowerCase().includes(inputText)) ||
        (el.name.includes(activeKey) && el.subTitle.toLowerCase().includes(inputText))
      );
    }

    if (activeKey !== 'Все' && inputText === '') {
      return el.name.includes(activeKey);
    }
    //Спросить у Сергея, как можно упростить  фильтр, сейчас выглядит так себе
  });

  const renderCard = ({ item }: { item: Card }) => {
    return <CardItem {...item} />;
  };

  return (
    <View style={styles.list}>
      <FlatList
        data={newCardList}
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
  },
});
