import { Image, ScrollView, Text, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useEffect, useState } from "react";
import { useRoute } from "@react-navigation/native";
import {
  AddedPhoto,
  PostContainer,
  PostImageDescription,
  PostScreenContainer,
  ScrollableContainer,
} from "./PostsScreen.styled";

const Tabs = createBottomTabNavigator();

export default function PostsScreen() {
  const [posts, setPosts] = useState([]);

  const { params } = useRoute();

  useEffect(() => {
    if (!params) return;
    setPosts((prev) => [...prev, params]);
  }, [params]);

  return (
    <PostScreenContainer>
      <ScrollableContainer>
        {posts?.map(({ photo, location, photoName, comments = 0 }) => {
          return (
            <PostContainer key={photo}>
              <AddedPhoto source={{ uri: photo }} />
              <PostImageDescription>{photoName}</PostImageDescription>
            </PostContainer>
          );
        })}
      </ScrollableContainer>
    </PostScreenContainer>
  );
}
