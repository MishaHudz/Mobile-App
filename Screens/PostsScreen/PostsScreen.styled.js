import styled from "styled-components";
import Svg from "react-native-svg";
import {
  TextInput,
  Image,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from "react-native";

export const PostScreenContainer = styled(View)`
  width: 100%;
  height: 100%;
  padding-top: 32px;
  padding-left: 16px;
  padding-right: 16px;
  background-color: #fff;
`;

export const AddedPhoto = styled(Image)`
  width: 100%;
  height: 240px;
  border-radius: 8px;
  margin-bottom: 8px;
`;

export const ScrollableContainer = styled(ScrollView)``;

export const PostContainer = styled(View)`
  margin-bottom: 32px;
`;

export const PostImageDescription = styled(Text)`
  color: #212121;
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 8px;
`;

export const PostDescriptionContainer = styled(View)`
  display: flex;
  flex-direction: row;
`;

export const CommentInfoContainer = styled(View)`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const CommentInfoNumber = styled(Text)`
  margin-left: 6px;
  color: #bdbdbd;
  font-size: 16px;
  font-weight: 400;
`;

export const LocationDescriptionContainer = styled(View)`
  display: flex;
  flex-direction: row;
  margin-left: auto;
`;

export const LocationInfoText = styled(Text)`
  color: #212121;
  font-size: 16px;
  font-weight: 400;
  text-decoration-line: underline;
`;

export const UserDescriptionContainer = styled(View)`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const UserDescriptionImage = styled(Image)`
  width: 60px;
  height: 60px;
  border-radius: 16px;
  margin-right: 8px;
`;

export const UserDescriptionNameContainer = styled(View)``;

export const UserDescriptionName = styled(Text)`
  color: #212121;
  font-size: 13px;
  font-weight: 700;
`;

export const UserDescriptionEmail = styled(Text)`
  color: rgba(33, 33, 33, 0.8);
  font-size: 11px;
  font-weight: 400;
`;
