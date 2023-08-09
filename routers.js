import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack"; //se não completar é porque tem algum problema
import Home from "./pages/home";
import Login from "./pages/login";
import Final from "./pages/final";

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
            </Pilha.Navigator>
        </NavigationContainer>
    )
}