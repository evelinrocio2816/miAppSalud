import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import StackNavigator from "../StackNavigator/StackNavigator";
import OrdersNavigator from "../Orders/OrdersNavigator";
import ProfileNavigator from "../Profile/ProfileNavigator";

import styles from "./BottomTabNavigator.styles";
import { View } from "react-native";

import Feather from "@expo/vector-icons/Feather";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";

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
      <BottonTab.Screen
        name="HomeButton"
        component={StackNavigator}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={focused ? styles.iconContainer : null}>
              <Feather name="home" size={24} color={"white"} />
            </View>
          ),
        }}
      />
      <BottonTab.Screen
        name="userButton"
        component={ProfileNavigator}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={focused ? styles.iconContainer : null}>
              <FontAwesome5 name="user" size={24} color={"white"} />
            </View>
          ),
        }}
      />

      <BottonTab.Screen
        name="OrderButton"
        component={OrdersNavigator}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={focused ? styles.iconContainer : null}>
              <FontAwesome5 name="user-md" size={24} color={"white"} />
            </View>
          ),
        }}
      />
    </BottonTab.Navigator>
  );
}
export default BottonTabNavigator;
