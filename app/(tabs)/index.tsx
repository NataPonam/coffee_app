import { StyleSheet, View, Text, ImageBackground } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { Colors } from '@/constants/Colors';
import { ButtonComponent } from '@/shared/ButtonComponent/ButtonComponent';

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={require('../../assets/images/bg.png')} resizeMode="contain" style={styles.background} />
      <LinearGradient
        colors={['transparent', '#000']}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 0.5 }}
        style={styles.gradient}
      >
        <View style={styles.wrapper} >
          <Text style={styles.title}>Одно из самых вкусных кофе в городе!</Text>
          <Text style={styles.subtitle}>Свежие зёрна, настоящая арабика и бережная обжарка</Text>
          <ButtonComponent text='Начать' />
        </View>
      </LinearGradient>
    </SafeAreaView >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000'
  },
  gradient: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  background: {
    flex: 2,
    justifyContent: 'center',
  },
  wrapper: {
    width: 315,
  },
  title: {
    color: "#fff",
    // fontFamily: "Sora",
    fontSize: 34,
    fontWeight: "600",
    fontStyle: "normal",
    lineHeight: 34,
    letterSpacing: 1,
    textAlign: "center",
    paddingBottom: 8,
  },
  subtitle: {
    color: Colors.lightText,
    // fontFamily: "Sora",
    fontSize: 14,
    fontWeight: "400",
    fontStyle: "normal",
    letterSpacing: 1,
    textAlign: "center",
    paddingBottom: 24,
  },
});
