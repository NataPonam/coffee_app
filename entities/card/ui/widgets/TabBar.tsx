import BagTabIcon from '@/assets/icons/tabsIcon/BagTabIcon';
import HomeTabIcon from '@/assets/icons/tabsIcon/HomeTabIcon';
import Underline from '@/assets/icons/tabsIcon/Underline';
import { Colors } from '@/constants/Colors';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs/lib/typescript/src/types';
import { View, Text, StyleSheet, Pressable } from 'react-native';

export const CustomTabBar = ({ state, descriptors, navigation }: BottomTabBarProps) => {
  return (
    <View style={styles.container}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label = options.title;
        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        const color = isFocused ? Colors.accentBrown : Colors.grayIcon;
        let borderRightWidth;
        if (route.name === 'catalog') {
          borderRightWidth = 2;
        } else {
          borderRightWidth = 0;
        }
        return (
          <Pressable
            key={route.name}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{ ...styles.item, borderRightWidth: borderRightWidth }}
          >
            <View style={styles.wrapper}>
              <View style={styles.iconWrapper}>
                {route.name === 'catalog' ? (
                  <HomeTabIcon color={color} />
                ) : (
                  <BagTabIcon color={color} />
                )}
                {isFocused ? (
                  <View style={styles.iconUnderline}>
                    <Underline />
                  </View>
                ) : (
                  <></>
                )}
              </View>
              <Text style={styles.text}>{label}</Text>
            </View>
          </Pressable>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    flexDirection: 'row',
    height: 70,
    backgroundColor: Colors.white,
    shadowColor: Colors.shadowColor,
    shadowOffset: {
      width: 0,
      height: -10,
    },
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    shadowRadius: 24,
    shadowOpacity: 1,
    borderStyle: 'solid',
    borderWidth: 1,
    borderBottomWidth: 0,
    borderColor: Colors.borderColor,
    alignItems: 'center',
  },
  item: {
    height: 46,
    padding: 10,
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
    borderStyle: 'solid',
    borderRightColor: Colors.borderColor,
  },
  iconWrapper: {
    alignItems: 'center',
  },
  iconUnderline: {
    position: 'absolute',
    bottom: -6,
  },
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 9,
  },
  text: {
    color: Colors.lightText,
    fontSize: 14,
  },
});
