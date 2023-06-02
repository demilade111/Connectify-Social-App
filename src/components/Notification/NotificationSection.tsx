import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { NotificationSectionText } from "./styles";
import Notification from "./Notification";
import { NotificationSectionPropsType } from "../../types";

const NotificationSection = (props: NotificationSectionPropsType) => {
  return (
    <>
      <NotificationSectionText>{props.title}</NotificationSectionText>
      <Notification></Notification>
      <Notification></Notification>
      <Notification></Notification>
      <Notification></Notification>
    </>
  );
};

export default NotificationSection;

const styles = StyleSheet.create({});
