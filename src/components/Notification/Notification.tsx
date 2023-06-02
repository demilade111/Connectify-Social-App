import { StyleSheet, Text, View } from "react-native";
import React from "react";
import {
  NotificationText,
  NotificationTextView,
  NotificationTimeText,
  NotificationWrapper,
} from "./styles";
import { Image } from "@rneui/themed";

const Notification = () => {
  return (
    <>
      <NotificationWrapper>
        <Image
          source={{
            uri: "https://previews.123rf.com/images/goodluz/goodluz1504/goodluz150400109/38229195-portrait-of-attractive-50-year-old-man.jpg",
          }}
          containerStyle={styles.image}
        />
        <NotificationTextView>
          <NotificationText>
            <Text style={{ fontWeight: "600" }}>Patrick</Text> Followed you
          </NotificationText>
          <NotificationTimeText>2mins ago</NotificationTimeText>
        </NotificationTextView>
      </NotificationWrapper>
    </>
  );
};

export default Notification;

const styles = StyleSheet.create({
  image: {
    width: 46,
    height: 46,
    borderRadius: 23,
  },
});
