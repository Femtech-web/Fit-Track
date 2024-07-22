import React from "react";
import { Image } from "react-native";
import { ThemedView, ThemedText, ThemedButton } from "@/components/reusables";
import { COLORS, SIZES, gStyles, images } from "@/constants";

const Goals = () => {
  return (
    <ThemedView style={[gStyles.flexCenter, gStyles.flex1]}>
      <ThemedView
        style={[gStyles.gap4, gStyles.wFull, gStyles.mB70]}
      ></ThemedView>
      <ThemedButton
        title="Add new goal"
        style={{ width: "100%" }}
        textStyle={gStyles.btnText}
        iconText="+"
        iconTextStyle={{
          color: COLORS.white,
          fontSize: SIZES.xLarge,
        }}
      />
    </ThemedView>
  );
};

export default Goals;
