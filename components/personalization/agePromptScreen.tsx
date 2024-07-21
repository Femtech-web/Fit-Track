import React, { Dispatch, SetStateAction } from "react";
import { ThemedView, ThemedButton } from "@/components/reusables";
import InfoBox from "./infoBox";
import { gStyles } from "@/constants";
import { styles } from "@/app/(auth)/authStyles";
import PersonalizationLayout from "./screenLayout";

interface IProps {
  setPersonalizationProgress: Dispatch<SetStateAction<number>>;
}

const AgePromptScreen: React.FC<IProps> = ({ setPersonalizationProgress }) => {
  const handleContinue = () => setPersonalizationProgress(4);

  return (
    <PersonalizationLayout screenHeaderTitle="How old are you?">
      <ThemedView style={[gStyles.wFull, gStyles.flexCenter, gStyles.gap20]}>
        <InfoBox info="Under 18" />
        <InfoBox info="18 - 24" />
        <InfoBox info="25 - 29" />
        <InfoBox info="30 - 34" />

        <InfoBox info="35 - 44" />
        <InfoBox info="45 - 59" />
        <InfoBox info="60+" />
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

export default AgePromptScreen;
