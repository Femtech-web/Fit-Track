import React from "react";
import { COLORS, gStyles, images, SIZES, FONT } from "@/constants";
import { StyleSheet, Image, Text, ImageSourcePropType } from "react-native";
import { ThemedText, ThemedView } from "@/components/reusables";

interface IReaction {
  reactionSize: number;
  reactionName: string;
  reactionImage: React.ReactNode;
}

const Reaction: React.FC<IReaction> = ({
  reactionSize,
  reactionName,
  reactionImage,
}) => {
  return (
    <ThemedView style={styles.reaction}>
      <ThemedView style={[gStyles.flexRowCenterAlign, gStyles.gap4]}>
        {reactionImage}
        <ThemedText type="smallBold" color={COLORS.black}>
          {reactionSize}
        </ThemedText>
        <ThemedText>{reactionName}</ThemedText>
      </ThemedView>
    </ThemedView>
  );
};

interface IPostData {
  id: string;
  imgSrc: ImageSourcePropType;
  name: string;
  date: string;
  datePosted: string;
  message: string;
  excitement: string;
  reactions: number[];
  comments: number[];
}

interface IPost {
  item: IPostData;
}

const Post: React.FC<IPost> = ({ item }) => {
  return (
    <ThemedView style={[gStyles.flexRow, gStyles.gap10]}>
      <Image source={item.imgSrc} resizeMode="cover" style={{}} />
      <ThemedView style={[gStyles.gap10, gStyles.flex1, gStyles.wFull]}>
        <ThemedView style={[gStyles.flexRowCenterAlign, gStyles.gap10]}>
          <ThemedText>{item.name}</ThemedText>
          <ThemedView style={styles.dot} />
          <ThemedText>{item.datePosted}</ThemedText>
        </ThemedView>
        <ThemedView style={styles.postBox}>
          <ThemedView style={gStyles.gap12}>
            <ThemedText type="default">{item.date}</ThemedText>
            <Text style={styles.postText}>{item.message}</Text>
            <Text style={styles.postText}>{item.excitement}</Text>
          </ThemedView>
          <ThemedView style={{ position: "absolute", bottom: 20, left: 24 }}>
            <ThemedText color={COLORS.green400} style={{ letterSpacing: 3 }}>
              FITRACKR
            </ThemedText>
          </ThemedView>
        </ThemedView>
        <ThemedView
          style={[gStyles.wFull, gStyles.flexRowCenterAlign, gStyles.gap10]}
        >
          <Reaction
            reactionSize={item.reactions.length}
            reactionName="Reactions"
            reactionImage={
              <Image source={images.reaction} resizeMode="cover" />
            }
          />
          <Reaction
            reactionSize={item.comments.length}
            reactionName="Replies"
            reactionImage={<Image source={images.message} resizeMode="cover" />}
          />
        </ThemedView>
        <ThemedView style={gStyles.flexRowCenterAlign}>
          <ThemedView style={styles.reaction}>
            <ThemedText color={COLORS.black}>write a reply</ThemedText>
          </ThemedView>
        </ThemedView>
      </ThemedView>
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  dot: {
    width: 5,
    height: 5,
    borderRadius: 5 / 2,
    backgroundColor: COLORS.grey500,
  },
  postBox: {
    width: "100%",
    gap: 12,
    height: 250,
    backgroundColor: COLORS.secondary,
    padding: 20,
    borderRadius: 8.6,
  },
  postText: {
    fontFamily: FONT.medium,
    fontSize: SIZES.xLarge,
    lineHeight: SIZES.xLarge,
    color: COLORS.green900,
  },
  reaction: {
    borderWidth: 1,
    borderRadius: 8,
    borderColor: COLORS.grey100,
    paddingHorizontal: 10,
    paddingVertical: 7,
  },
});

export default Post;
