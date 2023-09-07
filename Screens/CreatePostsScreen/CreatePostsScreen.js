import { useNavigation, useRoute } from "@react-navigation/native";
import { useEffect, useState } from "react";
import Svg, { Path } from "react-native-svg";
import { Camera } from "expo-camera";
import * as MediaLibrary from "expo-media-library";
import {
  Keyboard,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
} from "react-native";

import {
  CreatePostScreenContainer,
  ImageBlockContainer,
  ImageContainer,
  LocationInputContainer,
  Photo,
  PhotoButton,
  PhotoDescriptionText,
  PhotoLocationInput,
  PhotoLocationInputSvg,
  PhotoNameInput,
  ResetButton,
  SubmitButton,
  SubmitButtonText,
} from "./CreatePostsScreen.styled";

export default function CreatePostsScreen() {
  const navigation = useNavigation();

  const [photoName, setPhotoName] = useState("");
  const [location, setLocation] = useState("");
  const [capturedImageUri, setCapturedImageUri] = useState(null);
  const [disabledButton, setDisabledButton] = useState(true);

  const [hasPermission, setHasPermission] = useState(null);
  const [cameraRef, setCameraRef] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      await MediaLibrary.requestPermissionsAsync();

      setHasPermission(status === "granted");
    })();
  }, []);

  const handleScreenPress = () => {
    Keyboard.dismiss();
  };

  const onSubmitButtonPress = () => {
    navigation.navigate("PostsScreen", {
      photo: capturedImageUri,
      location,
      photoName,
      comments: 0,
    });
    resetButtonPress();
  };

  useEffect(() => {
    if (photoName.trim() && location.trim() && capturedImageUri) {
      setDisabledButton(false);
      return;
    }
    setDisabledButton(true);
  }, [photoName, location, capturedImageUri]);

  const resetButtonPress = () => {
    setPhotoName("");
    setLocation("");
    setCapturedImageUri(null);
  };

  return (
    <TouchableWithoutFeedback onPress={handleScreenPress}>
      <CreatePostScreenContainer>
        <ImageBlockContainer>
          <ImageContainer>
            {!capturedImageUri && (
              <Camera style={{ flex: 1 }} type={type} ref={setCameraRef}>
                <PhotoButton
                  onPress={async () => {
                    if (cameraRef) {
                      const { uri } = await cameraRef.takePictureAsync();
                      await MediaLibrary.createAssetAsync(uri);
                      setCapturedImageUri(uri);
                    }
                  }}
                >
                  <Svg width={24} height={24} viewBox="0 0 24 24">
                    <Path
                      fill="#BDBDBD"
                      stroke="#fff"
                      d="M11.9998 15.2C13.7671 15.2 15.1998 13.7673 15.1998 12C15.1998 10.2327 13.7671 8.79999 11.9998 8.79999C10.2325 8.79999 8.7998 10.2327 8.7998 12C8.7998 13.7673 10.2325 15.2 11.9998 15.2Z M9 2L7.17 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4H16.83L15 2H9ZM12 17C9.24 17 7 14.76 7 12C7 9.24 9.24 7 12 7C14.76 7 17 9.24 17 12C17 14.76 14.76 17 12 17Z"
                    />
                  </Svg>
                </PhotoButton>
              </Camera>
            )}
            {capturedImageUri && <Photo source={{ uri: capturedImageUri }} />}
          </ImageContainer>

          <PhotoDescriptionText>Завантажте фото</PhotoDescriptionText>
        </ImageBlockContainer>

        <KeyboardAvoidingView
          style={{ flex: 1 }}
          behavior={Platform.OS == "ios" ? "padding" : "height"}
          keyboardVerticalOffset={100}
        >
          <PhotoNameInput
            value={photoName}
            onChangeText={(evt) => setPhotoName(evt)}
            placeholder="Назва..."
          />

          <LocationInputContainer>
            <PhotoLocationInput
              value={location}
              onChangeText={(evt) => setLocation(evt)}
              placeholder="Місцевість..."
            />
            <PhotoLocationInputSvg width={24} height={24} viewBox="0 0 24 24">
              <Path
                fill="#fff"
                stroke="#BDBDBD"
                d="M20 10.3636C20 16.0909 12 21 12 21C12 21 4 16.0909 4 10.3636C4 6.29681 7.58172 3 12 3C16.4183 3 20 6.29681 20 10.3636V10.3636Z M12 14C13.6569 14 15 12.6569 15 11C15 9.34315 13.6569 8 12 8C10.3431 8 9 9.34315 9 11C9 12.6569 10.3431 14 12 14Z"
              />
            </PhotoLocationInputSvg>
          </LocationInputContainer>

          <SubmitButton
            style={
              disabledButton
                ? { backgroundColor: "#F6F6F6" }
                : { backgroundColor: "#FF6C00" }
            }
            onPress={onSubmitButtonPress}
            disabled={disabledButton}
          >
            <SubmitButtonText
              style={disabledButton ? { color: "#BDBDBD" } : { color: "#fff" }}
            >
              Опубліковати
            </SubmitButtonText>
          </SubmitButton>
        </KeyboardAvoidingView>
        <ResetButton onPress={resetButtonPress}>
          <Svg width={24} height={24} viewBox="0 0 24 24">
            <Path
              fill="#fff"
              stroke="#BDBDBD"
              d="M3 6H5H21 M19.5 6C19.5 5.72386 19.2761 5.5 19 5.5C18.7239 5.5 18.5 5.72386 18.5 6H19.5ZM5.5 6C5.5 5.72386 5.27614 5.5 5 5.5C4.72386 5.5 4.5 5.72386 4.5 6H5.5ZM7.5 6C7.5 6.27614 7.72386 6.5 8 6.5C8.27614 6.5 8.5 6.27614 8.5 6H7.5ZM15.5 6C15.5 6.27614 15.7239 6.5 16 6.5C16.2761 6.5 16.5 6.27614 16.5 6H15.5ZM18.5 6V20H19.5V6H18.5ZM18.5 20C18.5 20.8284 17.8284 21.5 17 21.5V22.5C18.3807 22.5 19.5 21.3807 19.5 20H18.5ZM17 21.5H7V22.5H17V21.5ZM7 21.5C6.17157 21.5 5.5 20.8284 5.5 20H4.5C4.5 21.3807 5.61929 22.5 7 22.5V21.5ZM5.5 20V6H4.5V20H5.5ZM8.5 6V4H7.5V6H8.5ZM8.5 4C8.5 3.17157 9.17157 2.5 10 2.5V1.5C8.61929 1.5 7.5 2.61929 7.5 4H8.5ZM10 2.5H14V1.5H10V2.5ZM14 2.5C14.8284 2.5 15.5 3.17157 15.5 4H16.5C16.5 2.61929 15.3807 1.5 14 1.5V2.5ZM15.5 4V6H16.5V4H15.5Z M10 11V17 M14 11V17"
            />
          </Svg>
        </ResetButton>
      </CreatePostScreenContainer>
    </TouchableWithoutFeedback>
  );
}
