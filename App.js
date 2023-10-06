import { useFonts } from "expo-font";
import fonts from "./src/global/fonts";
import StackNavigator from "./src/Navigation/StackNavigation";








export default function App() {

  const [fontLoaded] = useFonts(fonts);
  if (!fontLoaded) {
    return null;
  }
  return(
  <StackNavigator/>

 
  )
}