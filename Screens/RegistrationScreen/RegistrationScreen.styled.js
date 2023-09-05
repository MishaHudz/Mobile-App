import styled from "styled-components";
import { TextInput, Image, Text, View, TouchableOpacity } from "react-native";

export const RegistrationScreenContainer = styled(View)``;

export const BGImage = styled(Image)`
  position: absolute;
  top: 0;
  left: 0;

  z-index: -1;
  width: 100px;
  height: 100px;
`;

export const RegistrationFormContainer = styled(View)`
  padding-top: 92px;
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

export const RegistrationFormInputs = styled(TextInput)`
  width: 100%;
  height: 50px;
  background-color: #f6f6f6;
  border: 1px solid #e8e8e8;
  border-radius: 8px;
  padding: 16px;

  color: #bdbdbd;
  font-family: Roboto;
  font-size: 16px;

  margin-bottom: 16px;
`;

export const RegistrationFormPasswordInput = styled(TextInput)`
  width: 100%;
  height: 50px;
  background-color: #f6f6f6;
  border: 1px solid #e8e8e8;
  border-radius: 8px;
  padding: 16px;
  padding-right: 104px;

  color: #bdbdbd;
  font-family: Roboto;
  font-size: 16px;
`;

export const PasswordInputContainer = styled(View)`
  position: relative;
  width: 100%;

  margin-bottom: 43px;
`;

export const PasswordInputButton = styled(TouchableOpacity)`
  position: absolute;
  top: 12px;
  right: 16px;
`;

export const PasswordInputButtonText = styled(Text)`
  color: #1b4371;

  font-family: Roboto;
  font-size: 16px;
`;

export const RegistrationButton = styled(TouchableOpacity)`
  display: flex;
  width: 100%;
  padding: 16px 32px;
  flex-direction: column;
  align-items: center;
  border-radius: 100px;
  background: #ff6c00;

  margin-bottom: 16px;
`;

export const RegistrationButtonText = styled(Text)`
  color: #fff;
  text-align: center;
  font-family: Roboto;
  font-size: 16px;
`;

export const RegistrationBottomText = styled(Text)`
  color: #1b4371;
  text-align: center;

  font-size: 16px;
`;

export const RegistrationBottomButton = styled(TouchableOpacity)`
  display: inline-block;
`;

export const ButtonLinkContainer = styled(View)`
  flex-direction: row;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ImageContainer = styled(View)`
  background-color: #f6f6f6;
  position: absolute;
  /* overflow: hidden; */
  top: -60px;
  left: calc(50% - 60px);
  width: 120px;
  height: 120px;
  border-radius: 16px;
`;

export const AddButtonContainer = styled(TouchableOpacity)`
  position: absolute;
  background-color: transparent;

  right: -12.5px;
  bottom: 14px;

  display: flex;
  align-items: center;
  justify-content: center;
  width: 25px;
  height: 25px;
  border-radius: 12.5px;
  border: 1px solid #ff6c00;
`;

export const AddButton = styled(Text)`
  color: #ff6c00;
`;
