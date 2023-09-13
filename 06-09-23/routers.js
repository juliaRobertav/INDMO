import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Entypo, Feather, Ionicons, AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";
import Login from "./pages/login";
import Create from "./pages/create";
import Delete from "./pages/delete";
import Home from "./pages/home";
import Read from "./pages/read";
import Update from "./pages/update";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Pilha = createStackNavigator()
const Tab = createBottomTabNavigator()

function MyTabs(){
    return(
        <Tab.Navigator
            screenOptions={{
                tabBarStyle:{
                    backgroundColor: 'black',
                    paddingVertical: 1,
                    borderTopColor: 'transparent'
                },
                tabBarActiveBackgroundColor: '#f0f',
                tabBarInactiveTintColor: '#555'
            }}
        >
            <Tab.Screen
                name="MyTabs"
                component={MyTabs}
                options={{
                    headerShown:false
                }}
            />
            <Tab.Screen
                name="Login"
                component={Login}
                options={{
                    headerShown:false,
                    // tabBarStyle: {display:'none'}
                    tabBarIcon:({size, color})=>(
                        <Feather name="user" size={size} color={color}/>
                    )
                }}
            />
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    headerShown:false,
                    // tabBarStyle: {display:'none'}
                    tabBarIcon:({size, color})=>(
                        <Feather name="home" size={size} color={color}/>
                    )
                }}
            />
            <Tab.Screen
                name="Create"
                component={Create}
                options={{
                    headerShown:false,
                    // tabBarStyle: {display:'none'}
                    tabBarIcon:({size, color})=>(
                        <Ionicons name="create" size={size} color={color}/>
                    )
                }}
            />
            <Tab.Screen
                name="Read"
                component={Read}
                options={{
                    headerShown:false,
                    // tabBarStyle: {display:'none'}
                    tabBarIcon:({size, color})=>(
                        <Entypo name="unread" size={size} color={color}/>
                    )
                }}
            />
            <Tab.Screen
                name="Update"
                component={Update}
                options={{
                    headerShown:false,
                    tabBarStyle: {display:'none'},
                    tabBarIcon:({size, color})=>(
                        <MaterialCommunityIcons name="update" size={size} color={color}/>
                    )
                }}
            />
            <Tab.Screen
                name="Delete"
                component={Delete}
                options={{
                    headerShown:false,
                    // tabBarStyle: {display:'none'}
                    tabBarIcon:({size, color})=>(
                        <AntDesign name="delete" size={size} color={color}/>
                    )
                }}
            />


        </Tab.Navigator>   
    )
}



export default function Routers() {
    return (
        <NavigationContainer>
            <Pilha.Navigator>
                <Pilha.Screen
                    name="MyTabs"
                    component={MyTabs}
                    options={{ headerShown: false }}
                />

                <Pilha.Screen
                    name="Login"
                    component={Login}
                    options={{headerShown:false}}
                />

                <Pilha.Screen
                name="Home"
                component={Home}
                options={{headerShown:false}}
                />

                <Pilha.Screen
                    name="Create"
                    component={Create}
                    options={{headerShown:false}}
                />

                <Pilha.Screen
                name="Read"
                component={Read}
                options={{headerShown:false}}
                />
                
                <Pilha.Screen
                name="Update"
                component={Update}
                options={{headerShown:false}}
                />

                <Pilha.Screen
                    name="Delete"
                    component={Delete}
                    options={{headerShown:false}}
                />
        

            </Pilha.Navigator>
        </NavigationContainer>
    )
}