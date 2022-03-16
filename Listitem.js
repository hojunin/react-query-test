import React from "react";
import { View, Text } from "react-native";
import styled from "styled-components/native";

const ListItem = ({ item }) => {
  const { type_name, title, nick_name, display_date, image } = item;
  return (
    <ListContainer>
      <Body>
        <WrapperWithUserInfo>
          <TopicTypeAndTitle>
            <TopicTag>
              <TopicTX>{type_name}</TopicTX>
            </TopicTag>
            <TitleTX numberOfLines={2}>{title.repeat(3)}</TitleTX>
          </TopicTypeAndTitle>
          <View style={{ flexDirection: "row", marginTop: 6 }}>
            <Text style={{ fontSize: 10 }}>닉네임</Text>
          </View>
        </WrapperWithUserInfo>
        {image.length > 0 && (
          <Images source={{ uri: image[0] }}>
            {image.length > 1 && (
              <ImageInfo>
                <ImageInfoTX>{`+${image.length - 1}`}</ImageInfoTX>
              </ImageInfo>
            )}
          </Images>
        )}
      </Body>
      <StatusContainer>
        <RowContainer>
          <ForumTX>{`${nick_name} · `}</ForumTX>
          <TimeTX>{display_date}</TimeTX>
        </RowContainer>
        <RowContainer>
          <StatusUnit>
            <Icon source={require("./src/assets/views.png")} />
            <IconTX>0</IconTX>
          </StatusUnit>
          <StatusUnit>
            <Icon source={require("./src/assets/like.png")} />
            <IconTX>0</IconTX>
          </StatusUnit>
          <StatusUnit>
            <Icon source={require("./src/assets/comment.png")} />
            <IconTX>0</IconTX>
          </StatusUnit>
        </RowContainer>
      </StatusContainer>
    </ListContainer>
  );
};

export default ListItem;

const ListContainer = styled.View`
  padding: 20px 20px 17px 20px;
  border-bottom-width: 1px;
  border-bottom-color: #e0e0e0;
`;
const TopicTag = styled.View`
  background-color: #f7f7f7;
  padding: 3px 4px;
  margin-bottom: 6px;
  border-radius: 2px;
  align-self: baseline;
`;
const TopicTX = styled.Text`
  color: #7c7c7c;
  font-size: 10px;
`;

const Body = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-between
  margin-bottom: 16px;
`;

const Images = styled.ImageBackground`
  width: 86px;
  height: 86px;
  resize-mode: contain;
`;

const ImageInfo = styled.View`
  position: absolute;
  top: 0;
  left: 0;
  background-color: #18181880;
`;

const ImageInfoTX = styled.Text`
  color: white;
`;

const TopicTypeAndTitle = styled.View``;

const TitleTX = styled.Text``;

const StatusContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

const RowContainer = styled.View`
  flex-direction: row;
`;

const ForumTX = styled.Text`
  color: #7c7c7c;
`;

const TimeTX = styled.Text`
  color: #aeaeae;
`;
const WrapperWithUserInfo = styled.View`
  justify-content: space-between;
  flex: 1;
`;

const Icon = styled.Image`
  width: 11px;
  height: 11px;
  resize-mode: contain;
`;
const IconTX = styled.Text`
  font-size: 11px;
  color: #7c7c7c;
  margin-left: 5px;
`;
const StatusUnit = styled(RowContainer)`
  margin-left: 10px;
  align-items: center;
`;
