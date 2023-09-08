import styled from "styled-components";
import {
  TextInput,
  Image,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from "react-native";

export const ProfileScreenUserName = styled(Text)`
  color: #212121;
  text-align: center;
  font-size: 30px;
  font-weight: 500;
  letter-spacing: 0.3px;
  margin-bottom: 33px;
`;

export const LogOutBtn = styled(TouchableOpacity)`
  position: absolute;
  top: 22px;
  right: 16px;
`;

export const ProfileScrollableContainer = styled(ScrollView)``;

export const LikesInfoContainer = styled(View)`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: 24px;
`;

export const ProfileScreenContainer = styled(View)`
  padding-top: 92px;
  padding-left: 16px;
  padding-right: 16px;
  padding-bottom: 40px;
  position: absolute;
  bottom: 0;
  display: flex;
  background-color: #fff;
  width: 100%;
  border-top-right-radius: 25px;
  border-top-left-radius: 25px;
`;
