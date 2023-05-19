import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { HeaderView, SearchInput, Wrapper } from "./styles";
import CustomIcon from "../../shared/Icon";
import PostContent from "./Post";

const HomeContent = () => {
  const insets = useSafeAreaInsets();

  return (
    <>
      <Wrapper insets={insets}></Wrapper>
      <HeaderView>
        <SearchInput />
        <CustomIcon
          name="md-notifications-outline"
          type="ionicon"
          style={{ width: 22, height: 23.6, color: "#006175" }}
        />
      </HeaderView>

      <PostContent />
    </>
  );
};

export default HomeContent;

const styles = StyleSheet.create({});
