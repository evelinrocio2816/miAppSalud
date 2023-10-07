
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import CartNavigator from "../CartNavigator/CartNavigator";
import StackNavigator from "../StackNavigator/StackNavigator";
import OrdersNavigator from "../Orders/OrdersNavigator";

import styles from './BottomTabNavigator.styles'
import { View } from 'react-native';

import Feather from '@expo/vector-icons/Feather'


const BottonTab = createBottomTabNavigator();

function BottonTabNavigator() {
  return (
    <BottonTab.Navigator
      initialRouteName="HomeButton"
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBar,
      }}
    >
        <BottonTab.Screen name="HomeButton" component={StackNavigator}options={{
          tabBarIcon: ({ focused }) => (
            <View style={focused ? styles.iconContainer : null}>
              <Feather name="home" size={24} color={'white'} />
            </View>
          ),
        }} />
      <BottonTab.Screen name="ShopButton" component={StackNavigator}options={{
          tabBarIcon: ({ focused }) => (
            <View style={focused ? styles.iconContainer : null}>
              <Feather name="shopping-bag" size={24} color={'white'} />
            </View>
          ),
        }} />
      <BottonTab.Screen name="CartButton" component={CartNavigator} options={{
          tabBarIcon: ({ focused }) => (
            <View style={focused ? styles.iconContainer : null}>
              <Feather name="shopping-cart" size={24} color={'white'} />
            </View>
          ),
        }} />
         <BottonTab.Screen name="OrderButton" component={OrdersNavigator}options={{
          tabBarIcon: ({ focused }) => (
            <View style={focused ? styles.iconContainer : null}>
              <Feather name="list" size={24} color={'white'} />
            </View>
          ),
        }} />
    </BottonTab.Navigator>
  );
}
export default BottonTabNavigator;

