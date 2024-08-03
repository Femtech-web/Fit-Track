import React from "react";
import { Image } from "react-native";
import { ThemedView, ThemedText, ThemedButton } from "@/components/reusables";
import { COLORS, SIZES, gStyles, images } from "@/constants";

const NoGoals = () => {
  return (
    <ThemedView style={[gStyles.flexCenter, gStyles.flex1]}>
      <Image
        source={images.target}
        resizeMode="cover"
        style={{ marginBottom: 50 }}
      />

      <ThemedView
        style={[
          gStyles.gap6,
          gStyles.wFull,
          gStyles.mB70,
          { alignItems: "center" },
        ]}
      >
        <ThemedText type="title2" color={COLORS.black}>
          No goals yet?
        </ThemedText>
        <ThemedText style={{ textAlign: "center" }}>
          Not to worry, add a new goal to start your fitness journey today
        </ThemedText>
      </ThemedView>
      <ThemedButton
        title="Add new goal"
        style={{ width: "100%" }}
        textStyle={gStyles.btnText}
        iconText="+"
        isLink
        href="/addGoal"
        iconTextStyle={{
          color: COLORS.white,
          fontSize: SIZES.xLarge,
        }}
      />
    </ThemedView>
  );
};

export default NoGoals;
