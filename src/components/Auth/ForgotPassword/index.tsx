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
} from "../Login/styles";

const ForgotPasswordContent = () => {
  return (
    <>
      <HeaderContent />
      <Wrapper>
        <TopWrapper>
          <AuthHeaderText>Forgot Password</AuthHeaderText>
          <AuthDetailText>Let's help recover your account</AuthDetailText>
          <FormView>
            <LabelText>Email</LabelText>
            <FormTextInput />
            <LabelText>Phone number</LabelText>
            <FormTextInput />
          </FormView>
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

export default ForgotPasswordContent;

const styles = StyleSheet.create({});
