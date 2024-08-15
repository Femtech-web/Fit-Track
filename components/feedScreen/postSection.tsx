import { gStyles, images, SIZES } from "@/constants";
import { FlatList } from "react-native";
import { ThemedView } from "@/components/reusables";
import Post from "./post";

const data = [
  {
    id: "1",
    imgSrc: images.avatar,
    name: "Martha Ann",
    date: "MAY 24",
    datePosted: "1d",
    message: "I just hit my daily steps goal.",
    excitement: "Awesome!",
    reactions: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    comments: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
  },
  {
    id: "2",
    imgSrc: images.avatar,
    name: "Amanda Lee",
    date: "Jan 30",
    datePosted: "2d",
    message: "I made it to the final 600m track.",
    excitement: "Feels good!",
    reactions: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
    comments: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14],
  },
];

const PostSection = () => {
  return (
    <ThemedView style={[gStyles.flex1, gStyles.wFull]}>
      <FlatList
        data={data}
        renderItem={({ item }) => <Post item={item} />}
        keyExtractor={(item, index) => `${item.id} ${index}`}
        contentContainerStyle={{ rowGap: SIZES.xSmall }}
      />
    </ThemedView>
  );
};

export default PostSection;
