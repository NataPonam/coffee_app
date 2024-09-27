import EditIcon from '@/assets/icons/EditIcon';
import { Colors, Fonts } from '@/constants/Colors';
import { getAddress, getAddressInfo } from '@/entities/address/address.state';
import { initSize, UnionSizes } from '@/entities/card/ui/widgets/SizeTabBar';
import { router } from 'expo-router';
import { useAtom, useAtomValue } from 'jotai';
import React, { useState } from 'react';
import { View, Pressable, Text, Image, StyleSheet } from 'react-native';
import { selectedCoffeAtom, selectedCoffePriceAtom } from '../../[alias]';
import { ButtonComponent } from '@/shared/ButtonComponent/ButtonComponent';

export default function Cart() {
  const [selectedSize] = useAtom<UnionSizes>(initSize);
  const [addressLocation] = useAtom(getAddress);
  const [addressInfo] = useAtom(getAddressInfo);
  const [price] = useAtom(selectedCoffePriceAtom);
  const selectedCoffee = useAtomValue(selectedCoffeAtom);
  const [count, setCount] = useState(1);

  return (
    <View style={styles.container}>
      <View style={styles.delivery}>
        <Text style={styles.title}>Адрес доставки</Text>
        <View>
          <Text style={styles.address}>{addressLocation}</Text>
          <Text style={styles.info}>{addressInfo}</Text>
        </View>
        <Pressable onPress={() => router.push('/(app)/address')} style={styles.deliveryButton}>
          <EditIcon color={Colors.darkText} />
          <Text>Редактировать адрес</Text>
        </Pressable>
      </View>
      <View style={styles.orderList}>
        <View style={styles.line}></View>
        {selectedCoffee ? (
          <>
            <View style={styles.orderWrapper}>
              <Image style={styles.image} source={{ uri: selectedCoffee?.image }} />
              <View>
                <Text style={styles.orderTitle}>{selectedCoffee?.name}</Text>
                <Text style={styles.orderDescr}>
                  {selectedCoffee?.subTitle} / {selectedSize}
                </Text>
              </View>
              <View style={styles.changeNumberButton}>
                <Pressable
                  disabled={count == 1 ? true : false}
                  onPress={() => setCount(count - 1)}
                  style={styles.numberButton}
                >
                  <Text
                    style={{
                      ...styles.textNumberButton,
                      color: count == 1 ? Colors.lightText : Colors.darkText,
                    }}
                  >
                    –
                  </Text>
                </Pressable>
                <Text style={styles.coffeeCount}>{count}</Text>
                <Pressable onPress={() => setCount(count + 1)} style={styles.numberButton}>
                  <Text style={styles.textNumberButton}>+</Text>
                </Pressable>
              </View>
            </View>
            <View style={styles.line}></View>
            <View style={styles.finalPriceWrapper}>
              <Text style={styles.orderTitle}>Итог</Text>
              <View style={styles.priceWrapper}>
                <Text style={styles.priceText}>Цена</Text>
                <Text style={styles.priceNum}>{price} ₽</Text>
              </View>
              <View style={styles.priceWrapper}>
                <Text style={styles.priceText}>Доставка</Text>
                <Text style={styles.priceNum}>100 ₽</Text>
              </View>
              <View style={styles.line}></View>
              <View style={styles.priceWrapper}>
                <Text style={styles.priceText}>Итого к оплате</Text>
                <Text style={styles.priceNum}>{price ? price * count + 100 : 100} ₽</Text>
              </View>
            </View>
            <ButtonComponent
              text="Заказать"
              onPress={() => router.push('/(app)/(tabs)/cart/success')}
            />
          </>
        ) : (
          <ButtonComponent
            text="Выбрать напиток"
            onPress={() => router.push('/(app)/(tabs)/catalog')}
          />
        )}
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    backgroundColor: Colors.white,
    paddingHorizontal: 30,
  },
  delivery: {
    gap: 16,
    marginBottom: 30,
  },
  title: {
    fontFamily: Fonts.semibold,
    fontSize: 16,
    lineHeight: 16,
    color: Colors.darkText,
  },
  address: {
    fontFamily: Fonts.semibold,
    fontWeight: '600',
    fontSize: 14,
    lineHeight: 16,
    color: Colors.darkText,
    marginBottom: 8,
  },
  info: {
    fontFamily: Fonts.regular,
    fontWeight: '400',
    fontSize: 12,
    lineHeight: 17,
    color: Colors.lightText,
  },
  deliveryButton: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    width: 190,
    borderRadius: 16,
    backgroundColor: Colors.white,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: Colors.borderColor,
    fontFamily: Fonts.regular,
    fontSize: 12,
    lineHeight: 12,
    color: Colors.darkText,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  line: {
    borderBottomWidth: 1,
    borderBottomColor: Colors.borderColor,
  },
  orderList: {
    gap: 20,
    width: '100%',
  },
  orderWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    // justifyContent: 'space-between',
  },
  image: {
    width: 54,
    height: 54,
    resizeMode: 'contain',
    marginRight: 12,
  },
  orderTitle: {
    fontFamily: Fonts.semibold,
    fontSize: 16,
    lineHeight: 16,
    color: Colors.darkText,
    marginBottom: 4,
  },
  orderDescr: {
    fontFamily: Fonts.regular,
    fontSize: 12,
    lineHeight: 13,
    color: Colors.lightText,
    width: 125,
  },
  changeNumberButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 'auto',
    gap: 14,
  },
  numberButton: {
    width: 35,
    height: 35,
    borderRadius: 20,
    backgroundColor: Colors.white,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: Colors.borderColor,
    justifyContent: 'center',
  },
  textNumberButton: {
    color: Colors.darkText,
    fontSize: 16,
    textAlign: 'center',
  },
  coffeeCount: {
    fontSize: 14,
    fontWeight: '600',
    fontStyle: 'normal',
    lineHeight: 14,
    color: Colors.darkText,
  },
  finalPriceWrapper: {
    gap: 16,
  },
  priceText: {
    fontFamily: Fonts.regular,
    fontSize: 14,
    fontWeight: '400',
    fontStyle: 'normal',
    lineHeight: 14,
    color: Colors.darkText,
  },
  priceNum: {
    fontFamily: Fonts.semibold,
    fontSize: 14,
    fontWeight: '600',
    fontStyle: 'normal',
    lineHeight: 16,
    color: Colors.darkText,
  },
  priceWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
