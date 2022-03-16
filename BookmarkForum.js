import { View, Text } from "react-native";
import React from "react";
import styled from "styled-components/native";
import ForumItem from "./ForumItem";
import CreateForumButton from "./CreateForumButton";
const BookmarkForum = () => {
  return (
    <Container>
      <Header>
        <HeaderTX>북마크 포럼</HeaderTX>
      </Header>
      {dummy.map((data) => (
        <ForumItemWrapper key={data.id_content}>
          <ForumItem item={data} />
        </ForumItemWrapper>
      ))}
      <CreateForumButton />
    </Container>
  );
};

export default BookmarkForum;

const Container = styled.View`
  margin: 20px 20px 10px 20px;
`;
const ForumItemWrapper = styled.View`
  margin-bottom: 20px;
`;

const Header = styled.View`
  margin-bottom: 20px;
`;

const HeaderTX = styled.Text`
  font-size: 16px;
  font-weight: bold;
`;

const dummy = [
  {
    id_content: 3242,
    image: [
      "http://www.chemicalnews.co.kr/news/photo/202106/3636_10174_4958.jpg",
    ],
    display_date: "2일 전",
    title: "에비비비비ㅣ",
    type_name: "모두의 포럼",
  },
  {
    id_content: 3242213,
    image: [
      "http://www.chemicalnews.co.kr/news/photo/202106/3636_10174_4958.jpg",
    ],
    display_date: "2일 전",
    title: "에비비비비ㅣ",
    type_name: "모두의 포럼",
  },
];
