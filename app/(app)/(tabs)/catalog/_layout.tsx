import React, { useEffect } from 'react';
import { Colors } from '@/constants/Colors';
import { Stack } from 'expo-router';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';

SplashScreen.preventAutoHideAsync();

export default function CatalogLayout() {
  // const [loaded, error] = useFonts({
  //   'Sora-Regular': require('../../assets/fonts/Sora-Regular.ttf'),
  //   'Sora-SemiBold': require('../../assets/fonts/Sora-SemiBold.ttf'),
  // });
  // useEffect(() => {
  //   if (loaded || error) {
  //     SplashScreen.hideAsync();
  //   }
  // }, [loaded, error]);

  // if (!loaded && !error) {
  //   return null;
  // }

  return (
    <SafeAreaProvider>
      <StatusBar style="light" backgroundColor="black" />
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen
          name="index"
          options={{
            statusBarColor: Colors.black,
          }}
        />
      </Stack>
    </SafeAreaProvider>
  );
}
