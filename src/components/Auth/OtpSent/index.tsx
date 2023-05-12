import { StyleSheet, Text, View } from "react-native";
import React from "react";
import HeaderContent from "../../Header";
import {
  AuthDetailText,
  AuthHeaderText,
  TopWrapper,
  Wrapper,
} from "../Login/styles";
import { FormView } from "./styles";

const OtpSentContent = () => {
  return (
    <>
      <HeaderContent />

      <Wrapper>
        <TopWrapper>
          <AuthHeaderText>OTP sent</AuthHeaderText>
          <AuthDetailText>Enter the OTP sent to you</AuthDetailText>

          <FormView></FormView>
        </TopWrapper>
      </Wrapper>
    </>
  );
};

export default OtpSentContent;

const styles = StyleSheet.create({});
