import { StyleSheet, Text, View } from "react-native";
import React from "react";
import {
  PostHead,
  PostUserNameText,
  PostUserNameView,
  PostWrapper,
} from "./styles";
import { Image } from "@rneui/themed";

const PostContent = () => {
  return (
    <>
      <PostWrapper>
        <PostHead>
          <Image
            source={{
              uri: "https://previews.123rf.com/images/goodluz/goodluz1504/goodluz150400109/38229195-portrait-of-attractive-50-year-old-man.jpg",
            }}
            style={{ width: 46, height: 46, left: 39, position: "absolute" }}
          />

          <PostUserNameView>
            <PostUserNameText>Oyin Dolapo</PostUserNameText>
          </PostUserNameView>
        </PostHead>
      </PostWrapper>
    </>
  );
};

export default PostContent;

const styles = StyleSheet.create({});
