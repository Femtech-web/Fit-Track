import React, { Dispatch, SetStateAction } from "react";
import { TouchableWithoutFeedback } from "react-native";
import { ThemedText, ThemedView } from "@/components/reusables";
import { COLORS, FONT, gStyles } from "@/constants";
import { styles } from "./styles";

const TrackMethod = ({
  trackMethod,
  icon,
  isChecked,
  setTrackMethod,
}: {
  trackMethod: string;
  icon: React.ReactNode;
  isChecked: boolean;
  setTrackMethod: Dispatch<SetStateAction<string>>;
}) => {
  return (
    <TouchableWithoutFeedback onPress={() => setTrackMethod(trackMethod)}>
      <ThemedView style={[gStyles.flexRowSpace]}>
        <ThemedView style={[gStyles.flexRowCenterAlign, gStyles.gap6]}>
          {icon}
          <ThemedText style={{ fontFamily: FONT.regular }} color={COLORS.black}>
            {trackMethod}
          </ThemedText>
        </ThemedView>
        <ThemedView style={[styles.outerCheckbox, gStyles.flexCenter]}>
          {isChecked && <ThemedView style={styles.checkboxDot} />}
        </ThemedView>
      </ThemedView>
    </TouchableWithoutFeedback>
  );
};

export default TrackMethod;
