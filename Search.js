import { View, TouchableOpacity } from "react-native";
import React, { useRef, useEffect } from "react";
import SearchBar from "./SearchBar";
import styled from "styled-components/native";
import SearchStatus from "./SearchStatus";
import RecentKeywords from "./RecentKeywords";

const Search = () => {
  const searchBarRef = useRef(null);

  const onPressSearch = () => {
    1;
    const searchValue = searchBarRef.current.getValue();
    if (
      searchValue === "" ||
      searchValue === null ||
      searchValue === undefined
    ) {
      return;
    }
    // Search Logic
  };
  return (
    <Container>
      <SearchBar ref={searchBarRef} onSubmit={onPressSearch} />
      {/* <SearchStatus /> */}
      {/* <RecentKeywords /> */}
    </Container>
  );
};

export default Search;

const Container = styled.View`
  flex: 1;
`;
