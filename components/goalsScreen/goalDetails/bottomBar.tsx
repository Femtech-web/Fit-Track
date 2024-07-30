import { TouchableOpacity } from "react-native";
import { ThemedView, ThemedText } from "@/components/reusables";
import { gStyles, COLORS } from "@/constants";
import { ICategoryDetails } from "@/app/(tabs)/goals/data";

const BottomBar = ({
  categoryItem,
}: {
  categoryItem: ICategoryDetails | undefined;
}) => {
  return (
    <ThemedView>
      <ThemedText
        type="defaultSemiBold"
        color={COLORS.black}
        style={gStyles.mB14}
      >
        Your global rank today
      </ThemedText>
      <ThemedView
        style={[gStyles.flexRowCenterAlign, gStyles.gap6, gStyles.mB8]}
      >
        <ThemedText type="title2" color={COLORS.black}>
          {categoryItem?.globalRank}
        </ThemedText>
        <ThemedText>Top 1%</ThemedText>
      </ThemedView>
      <TouchableOpacity>
        <ThemedText type="small">
          Tap here to compare and share your rank
        </ThemedText>
      </TouchableOpacity>
    </ThemedView>
  );
};

export default BottomBar;
