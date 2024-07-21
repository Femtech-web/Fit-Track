import React, { Dispatch, SetStateAction } from "react";
import {
  ThemedView,
  ThemedButton,
  ThemedTextInput,
} from "@/components/reusables";
import { gStyles } from "@/constants";
import { styles } from "@/app/(auth)/authStyles";
import PersonalizationLayout from "./screenLayout";

interface IProps {
  setPersonalizationProgress: Dispatch<SetStateAction<number>>;
}

const WeightandHeightScreen: React.FC<IProps> = ({
  setPersonalizationProgress,
}) => {
  const handleContinue = () => setPersonalizationProgress(5);

  return (
    <PersonalizationLayout screenHeaderTitle="Weight and Height">
      <ThemedView style={[gStyles.wFull, gStyles.flexCenter, gStyles.gap20]}>
        <ThemedTextInput
          placeholder="Enter your Weight"
          value=""
          style={gStyles.wFull}
        />
        <ThemedTextInput
          placeholder="Enter your Height"
          value=""
          style={gStyles.wFull}
        />
      </ThemedView>
      <ThemedView>
        <ThemedButton
          title="NEXT"
          style={{ width: "100%" }}
          textStyle={styles.homeButtonText}
          onPress={handleContinue}
        />
      </ThemedView>
    </PersonalizationLayout>
  );
};

export default WeightandHeightScreen;
