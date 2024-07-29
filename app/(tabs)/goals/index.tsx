import { SafeAreaView } from "react-native-safe-area-context";
import { BackHeader } from "@/components/reusables";
import { gStyles } from "@/constants";
import { goals } from "./data";
import { NoGoal, Goals as AllGoals } from "@/components/goalsScreen";

const Goals = () => {
  const goalsExist = goals.length > 0;
  return (
    <SafeAreaView style={[gStyles.container, gStyles.p24, gStyles.pT32]}>
      <BackHeader pageName="My Goals" />
      {goalsExist ? <AllGoals goals={goals} /> : <NoGoal />}
    </SafeAreaView>
  );
};

export default Goals;
