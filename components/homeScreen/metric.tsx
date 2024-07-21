import React from "react";
import { ThemedView, ThemedText } from "@/components/reusables";
import { COLORS, gStyles } from "@/constants";

interface IMetric {
  metricType: string;
  metricValue: number;
  metricIcon: React.ReactNode;
}

const Metric: React.FC<IMetric> = ({ metricType, metricValue, metricIcon }) => {
  return (
    <ThemedView style={[gStyles.flexRow, gStyles.gap6, gStyles.flex1]}>
      {metricIcon}
      <ThemedView style={[gStyles.gap10, gStyles.flexCenter]}>
        <ThemedText type="smallBold" color={COLORS.black}>
          {metricType}
        </ThemedText>
        <ThemedText type="defaultSemiBold" color={COLORS.green500}>
          {metricValue}
        </ThemedText>
      </ThemedView>
    </ThemedView>
  );
};

export default Metric;
