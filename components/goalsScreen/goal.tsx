import { router } from "expo-router";
import { TouchableOpacity } from "react-native";
import { ThemedView, ThemedText, IconContainer } from "@/components/reusables";
import { COLORS, gStyles } from "@/constants";
import { IGoal } from "@/app/(tabs)/goals/data";
import { styles } from "./goalStyles";

const Goal = ({ item }: { item: IGoal | undefined }) => {
  return (
    <ThemedView style={[gStyles.wFull]}>
      <TouchableOpacity
        style={[
          gStyles.flexRowCenterAlign,
          gStyles.wFull,
          styles.innerContainer,
        ]}
        onPress={() => router.push(`/goals/${item?.category}`)}
      >
        <ThemedView style={[gStyles.gap10, gStyles.flexRowCenterAlign]}>
          <IconContainer size={40} backgroundColor={COLORS.green300}>
            {item?.icon}
          </IconContainer>
          <ThemedView style={gStyles.gap4}>
            <ThemedText type="defaultSemiBold" color={COLORS.black}>
              {item?.category}
            </ThemedText>
            <ThemedText type="small" color={COLORS.black}>
              {`${item?.goals.length} goals`}
            </ThemedText>
          </ThemedView>
        </ThemedView>
        <ThemedText type="defaultSemiBold">&gt;</ThemedText>
      </TouchableOpacity>
    </ThemedView>
  );
};

export default Goal;
