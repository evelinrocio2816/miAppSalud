import { useFonts } from "expo-font";
import fonts from "./src/global/fonts";
import StackNavigator from "./src/Navigation/StackNavigator/StackNavigator";

import { NavigationContainer } from "@react-navigation/native";
import BottonTabNavigator from "./src/Navigation/Bottom/BottomTabNavigator";







export default function App() {

  const [fontLoaded] = useFonts(fonts);
  if (!fontLoaded) {
    return null;
  }
  return(
  <NavigationContainer>
 <BottonTabNavigator/>
 
</NavigationContainer>
  )
}