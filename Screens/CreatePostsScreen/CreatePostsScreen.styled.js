import styled from "styled-components";
import Svg from "react-native-svg";
import { TextInput, Image, Text, View, TouchableOpacity } from "react-native";

export const CreatePostScreenContainer = styled(View)`
  width: 100%;
  height: 100%;
  padding-top: 32px;
  padding-left: 16px;
  padding-right: 16px;
  background-color: #fff;
`;

export const ImageBlockContainer = styled(View)`
  width: 100%;
  margin-bottom: 32px;
`;

export const ImageContainer = styled(View)`
  width: 100%;
  height: 240px;
  margin-bottom: 8px;
  border: 1px solid #e8e8e8;
  border-radius: 8px;
  background-color: #f6f6f6;
  position: relative;
  overflow: hidden;
`;

export const PhotoButton = styled(TouchableOpacity)`
  width: 60px;
  height: 60px;
  background-color: #fff;
  position: absolute;
  top: 50%;
  left: 50%;
  border-radius: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: translate(-30px, -30px);
`;

export const PhotoDescriptionText = styled(Text)`
  color: #bdbdbd;

  font-size: 16px;
  font-weight: 400;
`;

export const PhotoNameInput = styled(TextInput)`
  height: 50px;
  width: 100%;
  padding-top: 16px;
  padding-bottom: 16px;
  border-bottom-width: 1px;
  border-color: #e8e8e8;
  color: #bdbdbd;

  font-size: 16px;
  font-weight: 400;
  margin-bottom: 16px;
`;

export const LocationInputContainer = styled(View)`
  position: relative;

  margin-bottom: 32px;
`;

export const PhotoLocationInput = styled(TextInput)`
  height: 50px;
  width: 100%;
  padding-top: 16px;
  padding-bottom: 16px;
  padding-left: 28px;
  border-bottom-width: 1px;
  border-color: #e8e8e8;
  color: #bdbdbd;

  font-size: 16px;
  font-weight: 400;
`;

export const PhotoLocationInputSvg = styled(Svg)`
  position: absolute;
  top: 13px;
  left: 0;
`;

export const SubmitButton = styled(TouchableOpacity)`
  width: 100%;
  height: 50px;
  padding: 16px 32px;
  border-radius: 100px;
  background: #f6f6f6;
  align-items: center;
`;

export const SubmitButtonText = styled(Text)`
  color: #bdbdbd;

  font-size: 16px;

  font-weight: 400;
`;

export const ResetButton = styled(TouchableOpacity)`
  margin-top: auto;
  margin-left: auto;
  margin-right: auto;
  width: 70px;
  height: 40px;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f6f6f6;
`;

export const Photo = styled(Image)`
  width: 100%;
  height: 100%;
`;
