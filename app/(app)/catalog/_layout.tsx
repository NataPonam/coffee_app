import React from 'react';
import { Colors } from '@/constants/Colors';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function CatalogLayout() {
  return (
    <SafeAreaProvider>
      <StatusBar style="auto" />
      <Stack
        screenOptions={{
          statusBarColor: Colors.black,
          headerTitleAlign: 'center',
        }}
      >
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen
          name="address"
          options={{
            title: 'Изменить адрес',
          }}
        />
        <Stack.Screen
          name="cart"
          options={{
            title: 'Заказ',
          }}
        />
        <Stack.Screen name="success" options={{ headerShown: false }} />
        <Stack.Screen
          name="[alias]"
          options={{
            title: 'Описание',
          }}
        />
      </Stack>
    </SafeAreaProvider>
  );
}
