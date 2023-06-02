import { StyleSheet, Text, View } from "react-native";
import React from "react";
import HeaderContent from "../Header";
import { NotificationView } from "./styles";
import NotificationSection from "./NotificationSection";

const NotificationContent = () => {
  return (
    <>
      <HeaderContent title="Notifications" />
      <NotificationView>
        <NotificationSection title="Today"></NotificationSection>
        <NotificationSection title="12 January 2022"></NotificationSection>
      </NotificationView>
    </>
  );
};

export default NotificationContent;

const styles = StyleSheet.create({});
