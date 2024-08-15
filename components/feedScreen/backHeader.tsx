import { TouchableOpacity, Text } from "react-native";
import { router } from "expo-router";
import { ThemedText } from "@/components/reusables";
import { COLORS, SIZES, FONT } from "@/constants";

const FeedBackHeader = () => {
  return (
    <TouchableOpacity
      style={{
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
        height: 80,
        marginTop: 50,
        marginLeft: 24,
      }}
      onPress={() => router.back()}
    >
      <Text
        style={{
          fontSize: SIZES.xLarge,
          fontFamily: FONT.medium,
          color: COLORS.black,
          marginTop: -5,
        }}
      >
        {"<"}
      </Text>
      <ThemedText
        color={COLORS.black}
        style={{ fontSize: SIZES.large, fontFamily: FONT.medium }}
      >
        Feed
      </ThemedText>
    </TouchableOpacity>
  );
};

export default FeedBackHeader;
