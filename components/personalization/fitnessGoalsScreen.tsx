import React, { Dispatch, SetStateAction } from "react";
import { ThemedView, ThemedButton } from "@/components/reusables";
import { gStyles } from "@/constants";
import InfoBox from "./infoBox";
import { styles } from "@/app/(auth)/authStyles";
import PersonalizationLayout from "./screenLayout";

interface IProps {
  setPersonalizationProgress: Dispatch<SetStateAction<number>>;
}

const FitnessGoalsScreen: React.FC<IProps> = ({
  setPersonalizationProgress,
}) => {
  const handleContinue = () => setPersonalizationProgress(3);

  return (
    <PersonalizationLayout screenHeaderTitle="What are your fitness goals?">
      <ThemedView style={[gStyles.wFull, gStyles.flexCenter, gStyles.gap20]}>
        <InfoBox info="Lose Weight" />
        <InfoBox info="Bulk Up" />
        <InfoBox info="Stay Fit" />
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

export default FitnessGoalsScreen;
