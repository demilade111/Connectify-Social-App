import { StyleSheet, Text, View } from "react-native";
import React from "react";
import HeaderContent from "../../Header";
import {
  AuthDetailText,
  AuthHeaderText,
  BottomWrapper,
  ForgotPasswordText,
  ForgotPasswordView,
  FormTextInput,
  FormView,
  LabelText,
  SignUpText,
  SubmitButton,
  TopWrapper,
  Wrapper,
} from "./styles";

const LoginContent = () => {
  return (
    <>
      <HeaderContent />
      <Wrapper>
        <TopWrapper>
          <AuthHeaderText>Sign in</AuthHeaderText>
          <AuthDetailText>Enter your credentials</AuthDetailText>
          <FormView>
            <LabelText>Username</LabelText>
            <FormTextInput />
            <LabelText>Password</LabelText>
            <FormTextInput />
          </FormView>

          <ForgotPasswordView>
            <ForgotPasswordText>Forgot Password</ForgotPasswordText>
          </ForgotPasswordView>
        </TopWrapper>

        <BottomWrapper>
          <SubmitButton
            title="Done"
            accessibilityLabel="Submit"
            color="#006175"
          />

          <SignUpText>
            Do not have an Account?{" "}
            <Text style={{ color: "#70a6b1" }}>Sign Up</Text>
          </SignUpText>
        </BottomWrapper>
      </Wrapper>
    </>
  );
};

export default LoginContent;

const styles = StyleSheet.create({});
