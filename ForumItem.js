import styled from "styled-components/native";
import React from "react";

const ForumItem = (props) => {
  const { image, display_date, title, type_name } = props.item;
  return (
    <Container>
      {image.length > 0 && <Avatar source={{ uri: image[0] }} />}
      <InfoContainer>
        <TitleContainer>
          {true && <MyForumBadge source={{ uri: image[0] }} />}
          {true && (
            <DeletedForumTagContainer>
              <DeletedForumTagTX>패쇄</DeletedForumTagTX>
            </DeletedForumTagContainer>
          )}
          <TitleTX>{type_name}</TitleTX>
        </TitleContainer>
        <DescriptionTX>{title}</DescriptionTX>
        <StatusContainer>
          {/* ICON */}
          <BookmarkTX>32·</BookmarkTX>
          <TimeTx>{display_date}</TimeTx>
        </StatusContainer>
      </InfoContainer>
    </Container>
  );
};

export default ForumItem;

const Container = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
`;

const Avatar = styled.Image`
  width: 54px;
  height: 54px;
  resize-mode: contain;
  margin-right: 18px;
  border-radius: 200px;
  resize-mode: cover;
`;

const InfoContainer = styled.View`
  height: 54px;
  justify-content: space-around;
`;
const TitleContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;
const MyForumBadge = styled.Image`
  width: 14px;
  height: 14px;
  resize-mode: contain;
  margin-right: 4px;
`;
const DeletedForumTagContainer = styled.View`
  background-color: #4a4a4a;
  border-radius: 2px;
  padding: 3px 4px;
  margin-right: 8px;
`;

const DeletedForumTagTX = styled.Text`
  color: white;
  font-size: 10px;
`;
const TitleTX = styled.Text`
  font-size: 14px;
  font-weight: bold;
`;
const DescriptionTX = styled.Text`
  color: #7c7c7c;
  font-size: 11px;
`;

const StatusContainer = styled.View`
  flex-direction: row;
`;
const BookmarkTX = styled.Text`
  color: #7c7c7c;
  font-size: 11px;
`;
const TimeTx = styled.Text`
  color: #8a45e1;
  font-size: 11px;
`;
