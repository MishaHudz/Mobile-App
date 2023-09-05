import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  Keyboard,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  useWindowDimensions,
} from "react-native";

import BackgroundImage from "../../images/PhotoBG.jpg";

import {
  AddButton,
  AddButtonContainer,
  BGImage,
  ButtonLinkContainer,
  ImageContainer,
  PasswordInputButton,
  PasswordInputButtonText,
  PasswordInputContainer,
  RegistrationBottomButton,
  RegistrationBottomText,
  RegistrationButton,
  RegistrationButtonText,
  RegistrationFormContainer,
  RegistrationFormInputs,
  RegistrationFormPasswordInput,
  RegistrationFormTitle,
  RegistrationScreenContainer,
} from "./RegistrationScreen.styled";

export default function RegistrationScreen({ navigation }) {
  const [login, setLogin] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const windowDimensions = useWindowDimensions();

  const resetInputs = () => {
    setLogin("");
    setEmail("");
    setPassword("");
  };

  const onRegistrationButtonPress = () => {
    if (!login.trim() || !email.trim() || !password.trim()) {
      return;
    }

    console.log({ login, email, password });
    resetInputs();
    navigation.navigate("Home");
  };

  const handleScreenPress = () => {
    Keyboard.dismiss();
  };

  return (
    <TouchableWithoutFeedback onPress={handleScreenPress}>
      <RegistrationScreenContainer
        style={{
          height: windowDimensions.height,
        }}
      >
        <BGImage
          style={{
            width: windowDimensions.width,
            height: windowDimensions.height,
          }}
          source={BackgroundImage}
        />
        <KeyboardAvoidingView
          style={{ flex: 1 }}
          behavior={Platform.OS == "ios" ? "padding" : "height"}
          keyboardVerticalOffset={-150}
        >
          <RegistrationFormContainer
            style={{
              height: windowDimensions.height * 0.68,
            }}
          >
            <ImageContainer
              style={{
                left: windowDimensions.width / 2 - 60,
              }}
            >
              <AddButtonContainer>
                <AddButton>+</AddButton>
              </AddButtonContainer>
            </ImageContainer>
            <RegistrationFormTitle>Реєстрація</RegistrationFormTitle>
            <RegistrationFormInputs
              value={login}
              onChangeText={(evt) => setLogin(evt)}
              placeholder="Логін"
            />
            <RegistrationFormInputs
              value={email}
              onChangeText={(evt) => setEmail(evt)}
              placeholder="Адреса електронної пошти"
            />

            <PasswordInputContainer>
              <RegistrationFormPasswordInput
                value={password}
                onChangeText={(evt) => setPassword(evt)}
                placeholder="Пароль"
              />

              <PasswordInputButton>
                <PasswordInputButtonText>Показати</PasswordInputButtonText>
              </PasswordInputButton>
            </PasswordInputContainer>

            <RegistrationButton onPress={onRegistrationButtonPress}>
              <RegistrationButtonText>Зареєстуватися</RegistrationButtonText>
            </RegistrationButton>
            <ButtonLinkContainer>
              <RegistrationBottomText>Вже є акаунт?</RegistrationBottomText>
              <RegistrationBottomButton
                onPress={() => navigation.navigate("Login")}
              >
                <RegistrationBottomText>&nbsp;Увійти</RegistrationBottomText>
              </RegistrationBottomButton>
            </ButtonLinkContainer>
          </RegistrationFormContainer>
        </KeyboardAvoidingView>

        <StatusBar style="auto" />
      </RegistrationScreenContainer>
    </TouchableWithoutFeedback>
  );
}
