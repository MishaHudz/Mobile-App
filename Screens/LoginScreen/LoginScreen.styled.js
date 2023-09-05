import styled from "styled-components";
import { TextInput, Image, Text, View, TouchableOpacity } from "react-native";

export const LoginFormContainer = styled(View)`
  padding-top: 32px;
  padding-left: 16px;
  padding-right: 16px;
  position: absolute;
  bottom: 0;
  display: flex;
  background-color: #fff;
  width: 100%;
  border-top-right-radius: 25px;
  border-top-left-radius: 25px;
`;

export const RegistrationFormTitle = styled(Text)`
  color: #212121;
  text-align: center;
  font-family: Roboto;
  font-size: 30px;

  font-weight: 500;

  letter-spacing: 0.3px;

  margin-bottom: 33px;
`;

export const RegistrationBottomTextUnderline = styled(Text)`
  color: #1b4371;
  text-align: center;
  text-decoration: underline;

  font-size: 16px;
`;
