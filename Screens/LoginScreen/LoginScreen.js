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
  BGImage,
  ButtonLinkContainer,
  PasswordInputButton,
  PasswordInputButtonText,
  PasswordInputContainer,
  RegistrationBottomButton,
  RegistrationBottomText,
  RegistrationButton,
  RegistrationButtonText,
  RegistrationFormInputs,
  RegistrationFormPasswordInput,
  RegistrationFormTitle,
  RegistrationScreenContainer,
} from "../RegistrationScreen/RegistrationScreen.styled";
import {
  LoginFormContainer,
  RegistrationBottomTextUnderline,
} from "./LoginScreen.styled";

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const windowDimensions = useWindowDimensions();

  const resetInputs = () => {
    setEmail("");
    setPassword("");
  };

  const onLogInButtonPress = () => {
    if (!email.trim() || !password.trim()) {
      return;
    }

    console.log({ email, password });
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
          behavior={"height"}
          keyboardVerticalOffset={-220}
        >
          <LoginFormContainer
            style={{
              height: windowDimensions.height * 0.6,
            }}
          >
            <RegistrationFormTitle>Увійти</RegistrationFormTitle>

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

            <RegistrationButton onPress={onLogInButtonPress}>
              <RegistrationButtonText>Увійти</RegistrationButtonText>
            </RegistrationButton>
            <ButtonLinkContainer>
              <RegistrationBottomText>Немає акаунту?</RegistrationBottomText>
              <RegistrationBottomButton
                onPress={() => navigation.navigate("Registration")}
              >
                <RegistrationBottomTextUnderline>
                  &nbsp;Зареєструватися
                </RegistrationBottomTextUnderline>
              </RegistrationBottomButton>
            </ButtonLinkContainer>
          </LoginFormContainer>
        </KeyboardAvoidingView>

        <StatusBar style="auto" />
      </RegistrationScreenContainer>
    </TouchableWithoutFeedback>
  );
}
