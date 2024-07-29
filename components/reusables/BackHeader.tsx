import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { router } from "expo-router";
import { FONT, SIZES, gStyles } from "@/constants";
import { ThemedView } from "./ThemedView";

interface IBackHeader {
  pageName: any;
  suffixElement?: React.ReactNode;
}

export function BackHeader({ pageName, suffixElement }: IBackHeader) {
  return (
    <ThemedView style={[gStyles.flexRowSpace, gStyles.wFull, { height: 80 }]}>
      <TouchableOpacity
        style={{
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
      <ThemedView>{suffixElement}</ThemedView>
    </ThemedView>
  );
}
