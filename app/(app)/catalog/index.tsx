import React, { useState } from 'react';
import { DATA } from '@/assets/utils/data';
import { Colors } from '@/constants/Colors';
import { View, StyleSheet } from 'react-native';

import AddressLine from '@/shared/AddressLine/AddressLine';
import ButtonBar from '@/shared/ButtonComponent/buttonBar/ButtonBar';
import SearchInput from '@/shared/SearchInput/SearchInput';
import CardList from '@/entities/card/ui/CardList';

export default function Catalog() {
  const [text, onChangeText] = useState<string>('');
  const [activeKey, setActiveKey] = useState<string>(DATA[0].key);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <AddressLine />
        <SearchInput text={text} onChangeText={onChangeText} />
      </View>

      <View style={styles.body}>
        <ButtonBar inputText={text} activeKey={activeKey} setActiveKey={setActiveKey} />
        <CardList inputText={text} activeKey={activeKey} />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.lightBG,
  },
  header: {
    backgroundColor: Colors.black,
    padding: 30,
  },
  body: {
    paddingLeft: 25,
    paddingTop: 28,
    backgroundColor: Colors.lightBG,
    width: '100%',
    gap: 24,
  },
});
