import { useState, Dispatch, SetStateAction } from "react";
import { ScrollView } from "react-native";
import { ThemedView, ThemedButton, BackHeader } from "@/components/reusables";
import { gStyles } from "@/constants";
import {
  exerciseOptions,
  metricOptions,
  targetOptions,
  categoryOptions,
} from "./data";
import CustomTextInput from "./textInput";
import CustomSelectField from "./selectField";
import CustomCalendarInput from "./calendarInput";
import CustomSelectBox from "./selectBox";

const AddGoal = ({
  setGoalAdded,
}: {
  setGoalAdded: Dispatch<SetStateAction<boolean>>;
}) => {
  const [trackMethod, setTrackMethod] = useState("");

  return (
    <>
      <BackHeader pageName="Add New Goal" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <ThemedView style={[gStyles.mB50, gStyles.gap10, gStyles.flex1]}>
          <CustomTextInput placeholder="hello" label="Title" />
          <CustomSelectField
            label="category"
            options={categoryOptions}
            name="category"
            onSelect={(option: string, name: string) => {}}
          />
          <CustomSelectField
            label="Exercise Type"
            options={exerciseOptions}
            name="exerciseType"
            onSelect={(option: string, name: string) => {}}
          />
          <CustomSelectField
            label="Metric to track"
            options={metricOptions}
            name="metricToTrack"
            onSelect={(option: string, name: string) => {}}
          />
          <CustomSelectField
            label="Target"
            options={targetOptions}
            name="track"
            onSelect={(option: string, name: string) => {}}
          />
          <CustomSelectBox
            trackMethod={trackMethod}
            setTrackMethod={setTrackMethod}
          />
          <ThemedView style={[gStyles.flexRowSpace, gStyles.gap30]}>
            <CustomCalendarInput label="From" />
            <CustomCalendarInput label="To" />
          </ThemedView>
        </ThemedView>

        <ThemedButton
          title="Add goal"
          style={{ width: "100%" }}
          textStyle={gStyles.btnText}
          onPress={() => setGoalAdded(true)}
        />
      </ScrollView>
    </>
  );
};

export default AddGoal;
