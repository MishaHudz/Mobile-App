import { Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import CreatePostsScreen from "../CreatePostsScreen/CreatePostsScreen";
import ProfileScreen from "../ProfileScreen/ProfileScreen";

const Tabs = createBottomTabNavigator();

export default function PostsScreen() {
  return <Text>Posts Screen</Text>;
}
