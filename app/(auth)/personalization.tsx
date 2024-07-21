import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { gStyles } from "@/constants";
import {
  HomeScreen,
  FitnessGoals,
  ProgressBar,
  AgePromptScreen,
  WeightandHeight,
  AddNewGoal,
} from "@/components/personalization";

const Personalization = () => {
  const [personalizationProgress, setPersonalizationProgress] = useState(1);

  const isHomeScreen = personalizationProgress === 1;
  const isFitnessGoals = personalizationProgress === 2;
  const isAgePrompt = personalizationProgress === 3;
  const isWeightAndHeight = personalizationProgress === 4;

  return (
    <SafeAreaView style={[gStyles.container, gStyles.p24]}>
      {!isHomeScreen && (
        <ProgressBar stages={5} currentStage={personalizationProgress} />
      )}
      {isHomeScreen ? (
        <HomeScreen setPersonalizationProgress={setPersonalizationProgress} />
      ) : isFitnessGoals ? (
        <FitnessGoals setPersonalizationProgress={setPersonalizationProgress} />
      ) : isAgePrompt ? (
        <AgePromptScreen
          setPersonalizationProgress={setPersonalizationProgress}
        />
      ) : isWeightAndHeight ? (
        <WeightandHeight
          setPersonalizationProgress={setPersonalizationProgress}
        />
      ) : (
        <AddNewGoal />
      )}
    </SafeAreaView>
  );
};

export default Personalization;
