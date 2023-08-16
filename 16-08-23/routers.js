import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "./pages/login";
import Tela1 from './pages/tela1'
import Tela2 from './pages/tela2'

const Pilha = createStackNavigator()

export default function Routers() {
    return (
        <NavigationContainer>
            <Pilha.Navigator>
                <Pilha.Screen
                    name="Login"
                    component={Login}
                    options={{headerShown:false}}
                />
                <Pilha.Screen
                    name="Tela1"
                    component={Tela1}
                    options={{headerShown:false}}
                />
                <Pilha.Screen
                    name="Tela2"
                    component={Tela2}
                    options={{headerShown:false}}
                />
            </Pilha.Navigator>
        </NavigationContainer>
    )
}