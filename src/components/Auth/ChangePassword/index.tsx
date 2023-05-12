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
          <AuthHeaderText>Pick a new password</AuthHeaderText>
          <AuthDetailText>Help secure your account</AuthDetailText>
          <FormView>
            <LabelText>New Password</LabelText>
            <FormTextInput />
            <LabelText>Confirm new Password</LabelText>
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
