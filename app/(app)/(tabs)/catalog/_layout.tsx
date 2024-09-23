import React from 'react';
import { Colors, Fonts } from '@/constants/Colors';
import { Stack } from 'expo-router';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';

export default function CatalogLayout() {
  return (
    <SafeAreaProvider>
      <StatusBar style="light" backgroundColor="black" />
      <Stack screenOptions={{}}>
        <Stack.Screen
          name="index"
          options={{
            statusBarColor: Colors.black,
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="address"
          options={{
            statusBarColor: Colors.white,
            statusBarStyle: 'dark',
            headerShown: true,
            title: 'Изменить адрес',
            headerTitleAlign: 'center',
            headerTitleStyle: {
              fontFamily: Fonts.semibold,
              fontSize: 18,
            },
            headerShadowVisible: false,
          }}
        />
        <Stack.Screen
          name="[alias]"
          options={{
            statusBarColor: Colors.white,
            statusBarStyle: 'dark',
            headerShown: true,
            title: 'Описание',
            headerTitleAlign: 'center',
            headerTitleStyle: {
              fontFamily: Fonts.semibold,
              fontSize: 18,
            },
            headerShadowVisible: false,
          }}
        />
      </Stack>
    </SafeAreaProvider>
  );
}
