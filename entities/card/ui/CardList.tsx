/* eslint-disable react-native/no-inline-styles */
import React, { useEffect } from 'react';
import { DATA } from '@/assets/utils/data';
import { View, StyleSheet, FlatList } from 'react-native';
import { cardAtom, loadCardList } from '../model/card.state';
import { useAtomValue, useSetAtom } from 'jotai';
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
    if (activeKey === DATA[0].key && inputText !== '') {
      return (
        el.description.toLowerCase().includes(inputText) ||
        el.subTitle.toLowerCase().includes(inputText)
      );
    }
    if (activeKey !== DATA[0].key && inputText !== '') {
      return (
        (el.name.includes(activeKey) && el.description.toLowerCase().includes(inputText)) ||
        (el.name.includes(activeKey) && el.subTitle.toLowerCase().includes(inputText)) ||
        (el.name.includes(activeKey) && el.subTitle.toLowerCase().includes(inputText))
      );
    }

    if (activeKey !== DATA[0].key && inputText === '') {
      return el.name.includes(activeKey);
    }
    //Спросить у Сергея, как можно упростить  фильтр, сейчас выглядит так себе
  });

  const renderCard = ({ item }: { item: Card }) => {
    return (
      <View>
        <CardItem {...item} />
      </View>
    );
  };

  return (
    <View>
      <FlatList
        style={styles.list}
        data={newCardList}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderCard}
        numColumns={2}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  list: {
    width: '100%',
  },
});
