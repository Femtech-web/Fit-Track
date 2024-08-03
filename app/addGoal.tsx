import { useState } from "react";
import { ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { BackHeader, ThemedView, ThemedButton } from "@/components/reusables";
import {
  CustomTextInput,
  CustomSelectField,
  CustomCalendarInput,
  CustomSelectBox,
  categoryOptions,
  exerciseOptions,
  metricOptions,
  targetOptions,
} from "@/components/goalsScreen/addNewGoal";
import { gStyles } from "@/constants";

const AddGoal = () => {
  const [trackMethod, setTrackMethod] = useState("");

  return (
    <SafeAreaView style={[gStyles.container, gStyles.p24, gStyles.pT32]}>
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
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default AddGoal;
