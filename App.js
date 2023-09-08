import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
// import { store, persistor } from "./src/Redux/store";

import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { createStackNavigator } from "@react-navigation/stack";

import LoginScreen from "./Screens/LoginScreen/LoginScreen";
import "react-native-gesture-handler";
import CommentsScreen from "./Screens/CommentsScreen/CommentsScreen";
import RegistrationScreen from "./Screens/RegistrationScreen/RegistrationScreen";
import Home from "./Screens/Home/Home";

const MainStack = createStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto: require("./src/assets/fonts/Roboto-Black.ttf"),
  });

  return (
    // <Provider store={store}>
    //   <PersistGate loading={<Text>Loading...</Text>} persistor={persistor}>
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

        <MainStack.Screen name="Comments" component={CommentsScreen} />
      </MainStack.Navigator>
    </NavigationContainer>
    //   {/* </PersistGate>
    // </Provider> */}
  );
}
