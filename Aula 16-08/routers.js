import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack"; //se não completar é porque tem algum problema
import Home from "./pages/home";
import Login from "./pages/login";
import Final from "./pages/final";
import Tela4 from "./pages/tela4";

const Pilha = createStackNavigator()

export default function Routers(){
    return(
        <NavigationContainer>
            <Pilha.Navigator>
                <Pilha.Screen
                    name="Login"
                    component={Login}
                />
                <Pilha.Screen
                    name="Home"
                    component={Home}
                />
                <Pilha.Screen
                    name="Final"
                    component={Final}
                />
                <Pilha.Screen
                    name="Tela4"
                    component={Tela4}
                />
            </Pilha.Navigator>
        </NavigationContainer>
    )
}
