import { TouchableOpacity } from "react-native";

import Svg, { Path } from "react-native-svg";
import { useEffect, useState } from "react";
import { useRoute, useNavigation } from "@react-navigation/native";
import {
  AddedPhoto,
  CommentInfoContainer,
  CommentInfoNumber,
  LocationDescriptionContainer,
  LocationInfoText,
  PostContainer,
  PostDescriptionContainer,
  PostImageDescription,
  PostScreenContainer,
  ScrollableContainer,
  UserDescriptionContainer,
  UserDescriptionEmail,
  UserDescriptionImage,
  UserDescriptionName,
  UserDescriptionNameContainer,
} from "./PostsScreen.styled";

import BackgroundImage from "../../images/PhotoBG.jpg";

export default function PostsScreen() {
  const navigation = useNavigation();

  const [posts, setPosts] = useState([]);

  const { params } = useRoute();

  useEffect(() => {
    if (!params) return;
    setPosts((prev) => [...prev, params]);
  }, [params]);

  return (
    <PostScreenContainer>
      {/*  */}
      <UserDescriptionContainer>
        <UserDescriptionImage source={BackgroundImage} />
        <UserDescriptionNameContainer>
          <UserDescriptionName>Natali Romanova</UserDescriptionName>
          <UserDescriptionEmail>email@example.com</UserDescriptionEmail>
        </UserDescriptionNameContainer>
      </UserDescriptionContainer>
      {/*  */}
      <ScrollableContainer>
        {posts?.map(({ photo, location, photoName, comments = 0 }) => {
          return (
            <PostContainer key={photo}>
              <AddedPhoto source={{ uri: photo }} />
              <PostImageDescription>{photoName}</PostImageDescription>
              <PostDescriptionContainer>
                <CommentInfoContainer>
                  <TouchableOpacity
                    onPress={() => navigation.navigate("Comments")}
                  >
                    <Svg width={24} height={24} viewBox="0 0 24 24">
                      <Path
                        fill="#fff"
                        stroke="#BDBDBD"
                        d="M3 11.5C2.99656 12.8199 3.30493 14.1219 3.9 15.3C5.33904 18.1793 8.28109 19.9988 11.5 20C12.8199 20.0034 14.1219 19.6951 15.3 19.1L21 21L19.1 15.3C19.6951 14.1219 20.0034 12.8199 20 11.5C19.9988 8.28109 18.1793 5.33904 15.3 3.9C14.1219 3.30493 12.8199 2.99656 11.5 3H11C6.68419 3.2381 3.2381 6.68419 3 11V11.5V11.5Z"
                      />
                    </Svg>
                  </TouchableOpacity>

                  <CommentInfoNumber>{comments}</CommentInfoNumber>
                </CommentInfoContainer>
                <LocationDescriptionContainer>
                  <Svg width={24} height={24} viewBox="0 0 24 24">
                    <Path
                      fill="#fff"
                      stroke="#BDBDBD"
                      d="M20 10.3636C20 16.0909 12 21 12 21C12 21 4 16.0909 4 10.3636C4 6.29681 7.58172 3 12 3C16.4183 3 20 6.29681 20 10.3636V10.3636Z M12 14C13.6569 14 15 12.6569 15 11C15 9.34315 13.6569 8 12 8C10.3431 8 9 9.34315 9 11C9 12.6569 10.3431 14 12 14Z"
                    />
                  </Svg>
                  <LocationInfoText>{location}</LocationInfoText>
                </LocationDescriptionContainer>
              </PostDescriptionContainer>
            </PostContainer>
          );
        })}
      </ScrollableContainer>
    </PostScreenContainer>
  );
}
