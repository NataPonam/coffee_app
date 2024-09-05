import React from 'react';
import { Colors, Fonts } from '@/constants/Colors';
import { Pressable, Text, StyleSheet, FlatList, View } from 'react-native';
import { DATA } from '@/assets/utils/data';

export default function ButtonBar({
  activeKey,
  setActiveKey,
  inputText,
}: {
  activeKey: string;
  setActiveKey: (prev: string) => void;
  inputText: string;
}) {
  if (inputText !== '') {
    const newItem = DATA.find((item) => {
      return item.key.toLowerCase().includes(inputText);
    });
    if (newItem !== undefined) {
      setActiveKey(newItem.key);
    }
  }

  const buttonPressed = ({ key }: { key: string }) => {
    if (DATA.filter((el) => key === el.key)) {
      setActiveKey(key);
    }
  };

  return (
    <View>
      <FlatList
        horizontal={true}
        data={DATA}
        extraData={activeKey}
        renderItem={({ item }) => (
          <Pressable onPress={() => buttonPressed(item)}>
            <Text
              style={{
                ...styles.item,
                backgroundColor: activeKey === item.key ? Colors.accentBrown : Colors.white,
                color: activeKey === item.key ? Colors.white : Colors.accentGreen,
              }}
            >
              {item.key}
            </Text>
          </Pressable>
        )}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  item: {
    paddingHorizontal: 16,
    paddingTop: 8,
    paddingBottom: 10,
    borderRadius: 12,
    fontSize: 14,
    fontStyle: 'normal',
    fontFamily: Fonts.regular,
    marginRight: 8,
  },
});
