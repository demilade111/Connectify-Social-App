import { StyleSheet, Text, View } from "react-native";
import React from "react";
import HeaderContent from "../../Header";
import {
  AuthDetailText,
  AuthHeaderText,
  BottomWrapper,
  SubmitButton,
  TopWrapper,
  Wrapper,
} from "../Login/styles";
import { FormView, OtpTextInput, ResendOtpText, ResendOtpView } from "./styles";

const OtpSentContent = () => {
  return (
    <>
      <HeaderContent />

      <Wrapper>
        <TopWrapper>
          <AuthHeaderText>OTP sent</AuthHeaderText>
          <AuthDetailText>Enter the OTP sent to you</AuthDetailText>

          <FormView>
            <OtpTextInput />
            <OtpTextInput />
            <OtpTextInput />
            <OtpTextInput />
          </FormView>

          <ResendOtpView>
            <ResendOtpText>
              Didn't receive any code?{" "}
              <Text style={{ color: "#e41717" }}>Resend in 01:00</Text>
            </ResendOtpText>
          </ResendOtpView>
        </TopWrapper>

        <BottomWrapper>
          <SubmitButton
            title="Next"
            accessibilityLabel="Submit"
            color="#006175"
          />
        </BottomWrapper>
      </Wrapper>
    </>
  );
};

export default OtpSentContent;

const styles = StyleSheet.create({});
