import React from "react";
import { FlatList } from "react-native";
import { ThemedView, ThemedButton } from "@/components/reusables";
import { COLORS, SIZES, gStyles } from "@/constants";
import { IGoal } from "@/app/(tabs)/goals/data";
import Goal from "./goal";
import { styles } from "./goalStyles";

interface IGoals {
  goals: IGoal[];
}

const Goals: React.FC<IGoals> = ({ goals }) => {
  return (
    <ThemedView style={[gStyles.flex1]}>
      <ThemedView style={[gStyles.wFull, gStyles.mB70, gStyles.mT8]}>
        <FlatList
          data={goals}
          renderItem={({ item }) => <Goal item={item} />}
          keyExtractor={(item) => item?.category}
          contentContainerStyle={{ rowGap: SIZES.xSmall }}
        />
      </ThemedView>
      <ThemedButton
        title="Add new goal"
        style={styles.btn}
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
