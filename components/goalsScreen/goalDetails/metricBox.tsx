import { ThemedView, ThemedText } from "@/components/reusables";
import { gStyles, COLORS } from "@/constants";
import { ICategoryDetails } from "@/app/(tabs)/goals/data";
import { styles } from "../goalStyles";

const MetricBox = ({
  categoryItem,
  category,
}: {
  categoryItem: ICategoryDetails | undefined;
  category: string | undefined | string[];
}) => {
  return (
    <ThemedView
      style={[
        gStyles.wFull,
        gStyles.p24,
        gStyles.gap24,
        styles.displayBox,
        gStyles.mB40,
      ]}
    >
      <ThemedView style={[gStyles.flexRowCenterAlign, gStyles.gap6]}>
        <ThemedText type="title3" color={COLORS.black}>
          {categoryItem?.steps}
        </ThemedText>
        <ThemedText type="title" color={COLORS.black}>
          {category}
        </ThemedText>
      </ThemedView>
      <ThemedView style={[gStyles.wFull, gStyles.gap10]}>
        <ThemedView style={styles.progressBar} />
        <ThemedView style={[gStyles.flexRowSpace]}>
          <ThemedText type="small">0</ThemedText>
          <ThemedText type="small">{`Target : ${categoryItem?.target}`}</ThemedText>
        </ThemedView>
      </ThemedView>
      <ThemedView style={[gStyles.flexRowCenter, { gap: 60 }]}>
        <ThemedText color={COLORS.grey600}>{categoryItem?.distance}</ThemedText>
        <ThemedText color={COLORS.grey600}>{categoryItem?.time}</ThemedText>
      </ThemedView>
    </ThemedView>
  );
};

export default MetricBox;
