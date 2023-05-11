import { StyleSheet, Text, View } from "react-native";
import React from "react";
import HeaderContent from "../../Header";
import {
  AuthDetailText,
  AuthHeaderText,
  ForgotPasswordText,
  ForgotPasswordView,
  FormTextInput,
  FormView,
  LabelText,
  TopWrapper,
} from "./styles";

const LoginContent = () => {
  return (
    <>
      <HeaderContent />
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
    </>
  );
};

export default LoginContent;

const styles = StyleSheet.create({});
