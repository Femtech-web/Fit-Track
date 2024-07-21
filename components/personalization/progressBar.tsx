import React from "react";
import { View, StyleSheet } from "react-native";
import { COLORS } from "@/constants";

interface IProps {
  stages: number;
  currentStage: number;
}

const ProgressBar: React.FC<IProps> = ({ stages, currentStage }) => {
  const progress = (currentStage / stages) * 100;

  return (
    <View style={[styles.progressBarContainer]}>
      <View style={styles.progressBarBackground}>
        <View style={[styles.progressBarFill, { width: `${progress}%` }]} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  progressBarContainer: {
    width: "100%",
    marginTop: 5,
    marginBottom: 40,
  },
  progressBarBackground: {
    height: 12,
    width: "100%",
    backgroundColor: COLORS.grey100,
    borderRadius: 20,
  },
  progressBarFill: {
    height: "100%",
    backgroundColor: COLORS.green500,
    borderRadius: 20,
  },
});

export default ProgressBar;
