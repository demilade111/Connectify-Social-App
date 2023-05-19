import styled from "styled-components/native";
import { WrapperProps } from "../../types";

export const Wrapper = styled.View<WrapperProps>`
  padding-top: ${(props) => props.insets.top + 30}px;
`;

export const HeaderView = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const SearchInput = styled.TextInput`
  width: 299px;
  height: 34px;
  border: 1px solid #006175;
  border-radius: 10px;
`;

export const PostWrapper = styled.View`
  width: 335px;
  height: 338px;
  background-color: #c4c4c4;
  border-radius: 10px;
  position: relative;
  margin: 10px auto;
  padding: 17px;
`;

export const PostHead = styled.View`
  display: flex;
  flex-direction: row;
  height: 46px;
  justify-content: flex-start;
`;

export const PostUserNameView = styled.View`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

export const PostUserNameText = styled.Text`
  height: 23px;
  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  text-align: center;
  color: #000000;
`;

export const PostTimePostedText = styled.Text`
  height: 18px;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  text-align: center;
  color: black;
`;

export const PostBodyView = styled.View`
  display: flex;
  align-items: center;
  margin-top: 10px;
`;
export const PostBodyText = styled.Text`
  font-style: normal;
  font-weight: 400;
  font-size: 10px;
  line-height: 12px;
  color: #000000;
  width: 291px;
`;

export const PostFooterView = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const PostLikesText = styled.Text`
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 12px;
`;

export const PostLikeNumberText = styled.View`
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  display: flex;
  flex-direction: row;
  align-items: center;
  align-content: center;
`;
