import React, { useState } from 'react';
import { View, Pressable, Text, Image, StyleSheet } from 'react-native';
import { useAtom, useAtomValue } from 'jotai';
import { router } from 'expo-router';
import { Colors, Fonts } from '@/constants/Colors';
import { initSize, UnionSizes } from '@/entities/card/ui/widgets/SizeTabBar';
import { selectedCoffeAtom, selectedCoffePriceAtom } from '../../[alias]';
import { ButtonComponent } from '@/shared/ButtonComponent/ButtonComponent';
import OrderDeliveryAddress from '@/entities/order/OrderDeliveryAddress';
import axios, { AxiosError } from 'axios';
import { getAddress } from '@/entities/address/address.state';

export interface OrderResponse {
  address: string;
  orderItems: [
    {
      id: number | undefined;
      size: UnionSizes;
      quantity: number;
    },
  ];
}

export default function Cart() {
  const [addressLocation] = useAtom(getAddress);
  const [selectedSize] = useAtom<UnionSizes>(initSize);
  const [price] = useAtom(selectedCoffePriceAtom);
  // const selectedCoffee = useAtomValue(selectedCoffeAtom);
  const [selectedCoffee, setCoffeItem] = useAtom(selectedCoffeAtom);
  const [count, setCount] = useState<number>(1);

  const delivetyPrice = new Intl.NumberFormat('ru-RU', {
    style: 'currency',
    currency: 'RUB',
    maximumFractionDigits: 0,
  }).format(100);
  const priceItem =
    price &&
    new Intl.NumberFormat('ru-RU', {
      style: 'currency',
      currency: 'RUB',
      maximumFractionDigits: 0,
    }).format(price);
  const summ = price ? price * count + 100 : 0;
  const totalPrice = new Intl.NumberFormat('ru-RU', {
    style: 'currency',
    currency: 'RUB',
    maximumFractionDigits: 0,
  }).format(summ);

  const newOrder: OrderResponse = {
    address: addressLocation,
    orderItems: [{ id: selectedCoffee?.id, size: selectedSize, quantity: count }],
  };
  const makeOrder = async () => {
    try {
      const response = await axios.post(`https://purpleschool.ru/coffee-api/order`, newOrder);
      if (response.data.success) {
        router.push('/(app)/(tabs)/cart/success');
        setCoffeItem(undefined);
      }
      return response.data;
    } catch (error) {
      if (error instanceof AxiosError) {
        console.log(5, error.message);
        router.navigate('/(app)/(tabs)/cart/error');
      }
    }
  };

  return (
    <View style={styles.container}>
      <OrderDeliveryAddress />

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
                <Text style={styles.priceNum}>{priceItem}</Text>
              </View>
              <View style={styles.priceWrapper}>
                <Text style={styles.priceText}>Доставка</Text>
                <Text style={styles.priceNum}>{delivetyPrice}</Text>
              </View>
              <View style={styles.line}></View>
              <View style={styles.priceWrapper}>
                <Text style={styles.priceText}>Итого к оплате</Text>
                <Text style={styles.priceNum}>{totalPrice}</Text>
              </View>
            </View>
            <ButtonComponent text="Заказать" onPress={makeOrder} />
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
