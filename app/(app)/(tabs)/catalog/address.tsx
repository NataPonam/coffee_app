import GeoTag from '@/assets/icons/inputAddressIcon/GeoTag';
import Compass from '@/assets/icons/inputAddressIcon/Compass';
import { Colors, Fonts } from '@/constants/Colors';
import { router } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { View, Pressable, StyleSheet, TextInput, Text } from 'react-native';
import { ButtonComponent } from '@/shared/ButtonComponent/ButtonComponent';
import InputMultiIcon from '@/assets/icons/inputAddressIcon/InputMultiIcon';
import * as Location from 'expo-location';
import { LocationObject } from 'expo-location';

export default function Address() {
  const [location, setLocation] = useState<LocationObject>();
  const [errorMsg, setErrorMsg] = useState<null | string>(null);
  const [currentAddress, setCurrentAddress] = useState<Location.LocationGeocodedAddress[][0]>();

  const [latitude, setLatitude] = useState<number>(0);
  const [longitude, setLongitude] = useState<number>(0);
  useEffect(() => {
    (async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      const location = await Location.getCurrentPositionAsync({});
      setLocation(location);

      if (location) {
        const { latitude, longitude } = location.coords;
        setLatitude(latitude);
        setLongitude(longitude);
      }
    })();
  }, []);
  // let text = 'Waiting..';
  // if (errorMsg) {
  //   text = errorMsg;
  // } else if (location) {
  //   text = JSON.stringify(location);
  // }
  const reverseGeoCode = async () => {
    const addressReversed = await Location.reverseGeocodeAsync({ latitude, longitude });
    setCurrentAddress(addressReversed[0]);
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputWrapper}>
        {currentAddress ? (
          <Text style={styles.input}>
            {currentAddress.city}, {currentAddress.street} {currentAddress.streetNumber}
          </Text>
        ) : (
          <TextInput
            style={styles.input}
            placeholder="Введите адрес"
            placeholderTextColor={Colors.placeholder}
            // onChangeText={onChangeText}
            // value={text}
          />
        )}

        <Pressable style={styles.icon}>
          <GeoTag />
        </Pressable>
        <Pressable onPress={reverseGeoCode} style={styles.compassButton}>
          <Compass />
        </Pressable>
      </View>
      <View>
        <TextInput
          style={[styles.input, styles.inputMulty]}
          placeholder="Введите текст"
          placeholderTextColor={Colors.placeholder}
          // onChangeText={onChangeText}
          // value={text}
          multiline={true}
        />
        <Pressable onPress={() => router.back()} style={styles.icon}>
          <InputMultiIcon />
        </Pressable>
      </View>

      <ButtonComponent
        text="Сохранить"
        onPress={() => console.log('changing address')}
        style={styles.button}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    backgroundColor: Colors.white,
    gap: 16,
  },
  compassButton: {
    width: 34,
    height: 34,
    borderRadius: 10,
    backgroundColor: Colors.accentBrown,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: 11,
    right: 9,
  },
  input: {
    width: '100%',
    height: 56,
    padding: 16,
    paddingLeft: 48,
    fontSize: 14,
    fontFamily: Fonts.regular,
    borderRadius: 14,
    backgroundColor: Colors.white,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: Colors.borderColor,
    color: Colors.darkText,
  },
  inputMulty: {
    minHeight: 139,
    textAlign: 'left',
    textAlignVertical: 'top',
    lineHeight: 14,
  },
  icon: {
    position: 'absolute',
    top: 19,
    left: 16,
  },
  inputWrapper: {
    flexDirection: 'row',
  },
  button: {
    marginTop: 'auto',
    marginBottom: 70,
  },
});
