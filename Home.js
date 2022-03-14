import React, { useRef, useState } from "react";
import { FlatList, RefreshControl } from "react-native";
import { Box, Text, Divider } from "native-base";
import { useInfiniteQuery } from "react-query";
import ForumItem from "./ForumItem";
import FloatingButton from "./FloatingButton";

const GETCHA_API_URL =
  "https://dev-getcha-api.getcha.io/v7/community?page_per_count=30";
const HomeScreen = () => {
  const currentPage = useRef(0);
  const [direction, setDirection] = useState("down");
  const axisY = useRef(0);

  const getCommunityList = {
    fetchAll: () =>
      fetch(`${GETCHA_API_URL}`).then((res) => {
        return res.json();
      }),
    fetchPagination: (page = 0) =>
      fetch(`${GETCHA_API_URL}&page=${page}`).then((res) => {
        return res.json();
      }),
  };
  // const { isLoading, data } = useQuery("list", getCommunityList.fetchAll);
  const { isLoading, data, fetchNextPage } = useInfiniteQuery(
    "lists",
    getCommunityList.fetchPagination,
    {
      getNextPageParam: (obj) => {
        if (obj.data.list.total_page_count > 0) {
          currentPage.current += 1;
          return currentPage.current;
        }
        return obj;
      },
    }
  );

  const onScroll = (e) => {
    setDirection(axisY.current < e.nativeEvent.contentOffset.y ? "down" : "up");
    axisY.current = e.nativeEvent.contentOffset.y;
  };
  if (isLoading) return <></>;
  const renderItem = ({ item }) => {
    return <ForumItem item={item} />;
  };
  const onViewableItemsChanged = ({ viewableItems }) => {
    console.log("🚀 DATA :  ~ lastItemInView", viewableItems);
    // if (lastItemInView.index > 30 * currentPage.current - 10) {
    //   fetchNextPage();
    //   currentPage.current += 1;
    // }
  };
  const refreshControl = () => <RefreshControl />;
  return (
    <Box flex={1} safeAreaTop backgroundColor="white">
      <Box height={16} justifyContent={"center"} px={2}>
        <Text fontSize={28} fontWeight={"600"} color={"emerald.500"}>
          INFINITE SCROLL PRACTICE
        </Text>
      </Box>
      <Divider />
      <FlatList
        bounces={false}
        data={data?.pages.map((d) => d.data.list.infos).flat()}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="always"
        keyExtractor={(item, index) => item.id}
        onScroll={onScroll}
        refreshControl={refreshControl}
        // onViewableItemsChanged={onViewableItemsChanged}
      />
      <FloatingButton direction={direction} />
    </Box>
  );
};

export default HomeScreen;
