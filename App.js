import { useFonts } from "expo-font";
import fonts from "./src/global/fonts";
import  store  from "./src/store";
import { NavigationContainer } from "@react-navigation/native";
import MainNavigator from "./src/Navigation/MainNavigator/MainNavigator";
import { Provider } from "react-redux";





export default function App() {
  const [fontLoaded] = useFonts(fonts);
  if (!fontLoaded) {
    return null;
  }
  return (
    <Provider store={store}>
      <NavigationContainer>
        <MainNavigator />
      
      </NavigationContainer>
    </Provider>
  );
}
