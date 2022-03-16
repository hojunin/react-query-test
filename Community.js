import React from "react";
import Header from "./Header";
import styled from "styled-components/native";
import BookmarkForum from "./BookmarkForum";
import Home from "./Home";
import TopBar from "./TempTobBar";
const Community = () => {
  return (
    <Container>
      <Header />
      <Banner />
      <BookmarkForum />
      <Divider />
    </Container>
  );
};

export default Community;

const Container = styled.View`
  flex: 1;
`;

const Banner = styled.View`
  margin-horizontal: 20px;
  height: 128px;
  background-color: #3c2345;
  border-radius: 4px;
`;

const Divider = styled.View`
  height: 8px;
  background-color: #f7f7f7;
`;
