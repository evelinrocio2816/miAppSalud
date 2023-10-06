import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Details, Especialidades, Home, Medicos } from "../screens";

const Stack = createNativeStackNavigator()

function StackNavigator() {
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home" >
                <Stack.Screen name="Home" component={Home}/>
                <Stack.Screen name="Especialidad" component={Especialidades}/>
                <Stack.Screen name="Medicos" component={Medicos}/>
                <Stack.Screen name="Detalles del Turno" component={Details}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default StackNavigator