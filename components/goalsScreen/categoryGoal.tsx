import React from "react";
import { router } from "expo-router";
import { TouchableOpacity } from "react-native";
import { ThemedView, ThemedText, IconContainer } from "@/components/reusables";
import { COLORS, gStyles } from "@/constants";
import { styles } from "./goalStyles";

interface ICategoryGoal {
  goal: string;
  icon: React.ReactNode | undefined;
  category: any;
}

const CategoryGoal: React.FC<ICategoryGoal> = ({ goal, icon, category }) => {
  return (
    <ThemedView style={[gStyles.wFull]}>
      <TouchableOpacity
        style={[
          gStyles.flexRowCenterAlign,
          gStyles.wFull,
          styles.innerContainer,
        ]}
        onPress={() => category && router.push(`/goals/${category}/${goal}`)}
      >
        <ThemedView style={[gStyles.gap10, gStyles.flexRowCenterAlign]}>
          <IconContainer size={40} backgroundColor={COLORS.green300}>
            {icon}
          </IconContainer>
          <ThemedView style={gStyles.gap4}>
            <ThemedText type="defaultSemiBold" color={COLORS.black}>
              {goal}
            </ThemedText>
            <ThemedText type="small">Tap to view goal details</ThemedText>
          </ThemedView>
        </ThemedView>
        <ThemedText type="defaultSemiBold">&gt;</ThemedText>
      </TouchableOpacity>
    </ThemedView>
  );
};

export default CategoryGoal;
