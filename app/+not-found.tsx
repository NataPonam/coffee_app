import { Colors } from '@/constants/Colors';
import { Stack } from 'expo-router';
import { StyleSheet, Text } from 'react-native';


export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: 'Oops!' }} />
      <Text style={styles.text}>Страница не найдена!</Text>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  text: {
    color: Colors.black,
    fontSize: 16
  },
});
