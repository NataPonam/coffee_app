import { atom } from 'jotai';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { atomWithStorage, createJSONStorage } from 'jotai/utils';

const storageAddress = createJSONStorage<string>(() => AsyncStorage);

const INITIAL_STATE: string = '';

export const addressStorageAtom = atomWithStorage<string>(
  'addressSt',
  INITIAL_STATE,
  storageAddress,
);

export const getAddress = atom(
  async (get) => get(addressStorageAtom),

  async (get, set, str: string) => {
    set(addressStorageAtom, str);
  },
);
