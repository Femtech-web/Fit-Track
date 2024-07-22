import { Text, TouchableOpacity } from "react-native";
import { router } from "expo-router";
import { FONT, SIZES } from "@/constants";

export function BackHeader({ pageName }: { pageName: string }) {
  return (
    <TouchableOpacity
      style={{
        height: 80,
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
      }}
      onPress={() => router.back()}
    >
      <Text style={{ fontSize: SIZES.xLarge, fontFamily: FONT.medium }}>
        {"<"}
      </Text>
      <Text style={{ fontSize: SIZES.large, fontFamily: FONT.medium }}>
        {pageName}
      </Text>
    </TouchableOpacity>
  );
}
