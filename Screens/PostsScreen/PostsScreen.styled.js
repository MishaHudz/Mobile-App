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
