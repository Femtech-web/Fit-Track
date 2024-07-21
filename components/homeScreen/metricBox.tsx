import React from "react";
import { TouchableOpacity } from "react-native";
import Metric from "./metric";
import { ThemedView, ThemedText } from "@/components/reusables";

import { styles } from "./homeStyles";
import { COLORS, SIZES, gStyles, icons } from "@/constants";

const MetricBox = () => {
  return (
    <ThemedView
      style={{
        ...styles.displayBox,
        height: 180,
        backgroundColor: COLORS.green50,
      }}
    >
      <ThemedView style={gStyles.gap30}>
        <ThemedView style={gStyles.flexRowSpaceStart}>
          <ThemedView style={[gStyles.gap2]}>
            <ThemedText type="title" color={COLORS.black}>
              Key metrics
            </ThemedText>
            <ThemedText>Today</ThemedText>
          </ThemedView>
          <TouchableOpacity style={[gStyles.flexRowCenterAlign, gStyles.gap4]}>
            <ThemedText>More</ThemedText>
            <ThemedText style={[{ fontSize: SIZES.large, marginBottom: -6 }]}>
              &gt;
            </ThemedText>
          </TouchableOpacity>
        </ThemedView>
        <ThemedView
          style={[
            gStyles.flexRow,
            gStyles.gap4,
            { justifyContent: "space-evenly" },
          ]}
        >
          <Metric
            metricIcon={<icons.shoeIcon size={25} style={{ marginTop: -6 }} />}
            metricType="Steps"
            metricValue={0}
          />
          <Metric
            metricIcon={
              <icons.calorieIcon size={20} style={{ marginTop: -4 }} />
            }
            metricType="Calories"
            metricValue={0}
          />
          <Metric
            metricIcon={
              <icons.lightningIcon size={20} style={{ marginTop: -2 }} />
            }
            metricType="Min Active"
            metricValue={0}
          />
        </ThemedView>
      </ThemedView>
    </ThemedView>
  );
};

export default MetricBox;
