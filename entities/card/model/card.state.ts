import { atom } from 'jotai';
import axios, { AxiosError } from 'axios';
import { Card } from './card.model';

export interface CardListState {
  cardList: Card[];
  isLoading: boolean;
  error: string | null;
}

export const cardAtom = atom<CardListState>({
  cardList: [],
  isLoading: false,
  error: null,
});
export const loadCardList = atom(
  async (get) => {
    return get(cardAtom);
  },
  async (get, set) => {
    try {
      set(cardAtom, {
        cardList: [],
        isLoading: false,
        error: null,
      });
      const { data } = await axios.get('https://purpleschool.ru/coffee-api');
      set(cardAtom, {
        cardList: data,
        isLoading: false,
        error: null,
      });
    } catch (error) {
      if (error instanceof AxiosError) {
        set(cardAtom, {
          cardList: [],
          isLoading: false,
          error: error.message,
        });
      }
    }
  },
);
