import { StyleSheet, Text, View } from "react-native";
import React from "react";
import HeaderContent from "../../Header";
import {
  AuthDetailText,
  AuthHeaderText,
  BottomWrapper,
  FormTextInput,
  FormView,
  LabelText,
  SignUpText,
  SubmitButton,
  TopWrapper,
  Wrapper,
} from "../Login/styles";

const ChangePasswordContent = () => {
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
        </BottomWrapper>
      </Wrapper>
    </>
  );
};

export default ChangePasswordContent;

const styles = StyleSheet.create({});
