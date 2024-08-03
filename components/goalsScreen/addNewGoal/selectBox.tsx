import React, { Dispatch, SetStateAction } from "react";
import { ThemedText, ThemedView } from "@/components/reusables";
import { gStyles, icons } from "@/constants";
import TrackMethod from "./trackMethod";
import { styles } from "./styles";

const CustomSelectBox = ({
  trackMethod,
  setTrackMethod,
}: {
  trackMethod: string;
  setTrackMethod: Dispatch<SetStateAction<string>>;
}) => {
  return (
    <ThemedView
      style={[styles.customInputContainer, styles.selectBoxContainer]}
    >
      <ThemedText type="small" style={gStyles.mB14}>
        How do you want to track progress
      </ThemedText>
      <ThemedView style={gStyles.gap18}>
        <TrackMethod
          trackMethod="Manual Logging"
          icon={<icons.bookIcon size={18} />}
          isChecked={trackMethod === "Manual Logging"}
          setTrackMethod={setTrackMethod}
        />
        <TrackMethod
          trackMethod="Track with a smart watch"
          icon={<icons.watchIcon size={18} />}
          isChecked={trackMethod === "Track with a smart watch"}
          setTrackMethod={setTrackMethod}
        />
      </ThemedView>
    </ThemedView>
  );
};

export default CustomSelectBox;
