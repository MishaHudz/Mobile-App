import LoginScreen from "./Screens/LoginScreen/LoginScreen";
import "react-native-gesture-handler";
import RegistrationScreen from "./Screens/RegistrationScreen/RegistrationScreen";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./Screens/Home/Home";

const MainStack = createStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto: require("./src/assets/fonts/Roboto-Black.ttf"),
  });
  return (
    <NavigationContainer>
      <MainStack.Navigator initialRouteName="Login">
        <MainStack.Screen
          name="Registration"
          component={RegistrationScreen}
          options={{ headerShown: false }}
        />

        <MainStack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <MainStack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
      </MainStack.Navigator>
    </NavigationContainer>
  );
}
