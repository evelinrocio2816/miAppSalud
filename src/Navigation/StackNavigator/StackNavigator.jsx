
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Details, Especialidades, Home, Medicos } from "../../screens";

const Stack = createNativeStackNavigator()

function StackNavigator() {
    return(
      
            <Stack.Navigator initialRouteName="Home"  screenOptions={({ route, navigation }) => ({
        headerShown: false, })} >
                <Stack.Screen name="Home" component={Home}/>
                <Stack.Screen name="Especialidad" component={Especialidades}/>
                <Stack.Screen name="Medicos" component={Medicos}/>
                <Stack.Screen name="Detalles del Turno" component={Details}/>
            </Stack.Navigator>
      
    )
}

export default StackNavigator