import { Text, FlatList } from "react-native";
import React from "react";
import styled from "styled-components/native";

const RecentKeywords = () => {
  const renderItem = ({ item }) => (
    <ListItem>
      <Text>{item}</Text>
    </ListItem>
  );
  const Header = () => {
    return (
      <HeaderContainer>
        <RecentKeywordTX>최근 검색어</RecentKeywordTX>
        <ClearButton>
          <ClearButtonTX>비우기</ClearButtonTX>
        </ClearButton>
      </HeaderContainer>
    );
  };
  return (
    <Container>
      <Header />
      <FlatList
        data={[12, 3, 4, 5, 6, 665, 43]}
        renderItem={renderItem}
        keyExtractor={(item) => item.toString()}
        ItemSeparatorComponent={Divider}
      />
    </Container>
  );
};

export default RecentKeywords;

const Container = styled.View`
  flex: 1;
  margin: 20px;
`;
const ListItem = styled.View`
  justify-content: center;
  padding-vertical: 20px;
`;

const HeaderContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

const ClearButton = styled.TouchableOpacity`
  background-color: #f2f2f2;
  border-radius: 19px;
  padding: 5px 8px;
`;

const Divider = styled.View`
  height: 1px;
  background-color: #e0e0e0;
`;

const ClearButtonTX = styled.Text`
  color: #959595;
`;
const RecentKeywordTX = styled.Text`
  color: #7c7c7c;
  font-weight: bold;
  font-size: 14px;
`;
