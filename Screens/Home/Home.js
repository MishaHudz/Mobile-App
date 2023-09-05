import React from "react";
import Svg, { Path } from "react-native-svg";
import { StyleSheet, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ProfileScreen from "../ProfileScreen/ProfileScreen";
import CreatePostsScreen from "../CreatePostsScreen/CreatePostsScreen";
import PostsScreen from "../PostsScreen/PostsScreen";
import { TouchableOpacity } from "react-native";
import { MiddleNavigationButtonContainer } from "./Home.styled";

const Tabs = createBottomTabNavigator();

const Home = () => {
  return (
    <Tabs.Navigator>
      <Tabs.Screen
        name="PostsScreen"
        component={PostsScreen}
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ focused }) => {
            return (
              <View>
                <Svg width={24} height={24} viewBox="0 0 30 30">
                  <Path
                    fill="#fff"
                    stroke="#212121"
                    d="M11 11h7v7h-7v-7ZM22 11h7v7h-7v-7ZM22 22h7v7h-7v-7ZM11 22h7v7h-7v-7Z"
                  />
                </Svg>
              </View>
            );
          },
          title: "Публікації",
          headerStyle: {
            height: 88,
            backgroundColor: "#fff",
            borderBottomColor: "rgba(0, 0, 0, 0.30)",
            borderBottomWidth: 0.5,
          },
          headerRightContainerStyle: {
            paddingRight: 16,
          },
          headerLeftContainerStyle: {
            paddingLeft: 16,
          },
          headerTitleAlign: "center",
          headerLeft: () => null,
          headerTintColor: "#212121",
          headerTitleStyle: {
            fontWeight: "500",
            fontSize: 17,
          },
          headerRight: () => (
            <TouchableOpacity title="Log out">
              <Svg width={30} height={30} viewBox="0 0 30 30">
                <Path
                  fill="#fff"
                  stroke="#BDBDBD"
                  d="M10 22H5a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h5M17 16l4-4-4-4M21 12H9"
                />
              </Svg>
            </TouchableOpacity>
          ),
        }}
      />

      <Tabs.Screen
        name="CreatePosts"
        component={CreatePostsScreen}
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ focused }) => {
            return (
              <MiddleNavigationButtonContainer>
                <Svg width={24} height={24} viewBox="0 0 30 30">
                  <Path
                    fill="#fff"
                    stroke="#fff"
                    d="M5 13h6v6a1 1 0 0 0 2 0v-6h6a1 1 0 0 0 0-2h-6V5a1 1 0 0 0-2 0v6H5a1 1 0 0 0 0 2z"
                  />
                </Svg>
              </MiddleNavigationButtonContainer>
            );
          },
        }}
      />
      <Tabs.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ focused }) => {
            return (
              <View>
                <Svg width={24} height={24} viewBox="0 0 30 30">
                  <Path
                    fill="#fff"
                    stroke="#212121"
                    d="M28 29v-2a4 4 0 0 0-4-4h-8a4 4 0 0 0-4 4v2 M20 19a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"
                  />
                </Svg>
              </View>
            );
          },
        }}
      />
    </Tabs.Navigator>
  );
};

export default Home;
