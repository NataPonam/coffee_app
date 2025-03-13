import React from 'react';
import { Fonts } from '@/constants/Colors';
import { Stack } from 'expo-router';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';

export default function CartLayout() {
  return (
    <SafeAreaProvider>
      <StatusBar style="light" backgroundColor="black" />
      <Stack>
        <Stack.Screen
          name="index"
          options={{
            headerShown: true,
            title: 'Заказ',
            headerTitleAlign: 'center',
            headerTitleStyle: {
              fontFamily: Fonts.semibold,
              fontSize: 18,
            },
            headerShadowVisible: false,
          }}
        />
        <Stack.Screen
          name="success"
          options={{
            headerShown: false,
          }}
        />
      </Stack>
    </SafeAreaProvider>
  );
}
