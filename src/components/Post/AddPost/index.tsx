import { StyleSheet, Text } from "react-native";
import React from "react";
import HeaderContent from "../../Header";
import {
  AddCaptionTextArea,
  AddFormLabelText,
  AddFormView,
  AddHastagsTextInput,
  UploadButton,
  UploadButtonText,
} from "./styles";

const AddPostContent = () => {
  return (
    <>
      <HeaderContent title="Post" />
      <AddFormView>
        <AddFormLabelText>Add caption</AddFormLabelText>
        <AddCaptionTextArea />
        <AddFormLabelText>Add Hashtags</AddFormLabelText>
        <AddHastagsTextInput />

        <UploadButton>
          <UploadButtonText>Upload</UploadButtonText>
        </UploadButton>
      </AddFormView>
    </>
  );
};

export default AddPostContent;

const styles = StyleSheet.create({});
