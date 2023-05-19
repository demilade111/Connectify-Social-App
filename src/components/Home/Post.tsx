import { StyleSheet, Text, View } from "react-native";
import React from "react";
import {
  PostBodyText,
  PostBodyView,
  PostFooterView,
  PostHead,
  PostLikeNumberText,
  PostLikesText,
  PostTimePostedText,
  PostUserNameText,
  PostUserNameView,
  PostWrapper,
} from "./styles";
import { Image } from "@rneui/themed";
import CustomIcon from "../../shared/Icon";

const PostContent = () => {
  return (
    <>
      <PostWrapper>
        <PostHead>
          <Image
            source={{
              uri: "https://previews.123rf.com/images/goodluz/goodluz1504/goodluz150400109/38229195-portrait-of-attractive-50-year-old-man.jpg",
            }}
            containerStyle={{
              width: 46,
              height: 46,
              borderRadius: 50,
            }}
          />

          <PostUserNameView>
            <PostUserNameText>Oyin Dolapo</PostUserNameText>
            <PostTimePostedText>1hr ago</PostTimePostedText>
          </PostUserNameView>
        </PostHead>

        <PostBodyView>
          <PostBodyText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pharetra{" "}
          </PostBodyText>

          <Image
            source={{
              uri: "https://previews.123rf.com/images/goodluz/goodluz1504/goodluz150400109/38229195-portrait-of-attractive-50-year-old-man.jpg",
            }}
            containerStyle={{
              width: 298,
              height: 186,
              borderRadius: 10,
              borderWidth: 0.5,
              borderStyle: "solid",
              borderBottomColor: "#000000",
            }}
          />
        </PostBodyView>

        <PostFooterView>
          <PostLikesText>5000 likes</PostLikesText>
          <View style={{ display: "flex", flexDirection: "row" }}>
            <PostLikeNumberText>
              <CustomIcon name="heart" type="antdesign" /> <Text>247</Text>
            </PostLikeNumberText>
          </View>
        </PostFooterView>
      </PostWrapper>
    </>
  );
};

export default PostContent;

const styles = StyleSheet.create({});
