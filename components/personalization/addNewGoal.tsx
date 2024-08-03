import React from "react";
import { ThemedText, ThemedView, ThemedButton } from "@/components/reusables";
import { TouchableOpacity } from "react-native";
import { COLORS, SIZES, gStyles } from "@/constants";
import { styles } from "@/app/(auth)/authStyles";
import PersonalizationLayout from "./screenLayout";

const AddNewGoal = () => {
  return (
    <PersonalizationLayout screenHeaderTitle="Almost there!">
      <ThemedText
        style={[
          gStyles.textCenter,
          {
            marginTop: -20,
          },
        ]}
      >
        You’re almost there! Set your first goal now to get started on your
        journey to a healthy life
      </ThemedText>
      <ThemedView style={[gStyles.flexCenter, gStyles.gap20]}>
        <ThemedButton
          title="Add new goal"
          style={{ width: "100%" }}
          textStyle={styles.homeButtonText}
          iconText="+"
          isLink
          href="/addGoal"
          iconTextStyle={{
            color: COLORS.white,
            fontSize: SIZES.xLarge,
          }}
        />
        <TouchableOpacity>
          <ThemedText color={COLORS.black}>MAYBE LATER</ThemedText>
        </TouchableOpacity>
      </ThemedView>
    </PersonalizationLayout>
  );
};

export default AddNewGoal;
