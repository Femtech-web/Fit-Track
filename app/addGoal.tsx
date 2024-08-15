import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { AddGoal, SuccessfulPage } from "@/components/goalsScreen/addNewGoal";
import { gStyles } from "@/constants";

const AddGoalPage = () => {
  const [goalAdded, setGoalAdded] = useState(false);

  return (
    <SafeAreaView style={[gStyles.container, gStyles.p24, gStyles.pT32]}>
      {goalAdded ? (
        <SuccessfulPage setGoalAdded={setGoalAdded} />
      ) : (
        <AddGoal setGoalAdded={setGoalAdded} />
      )}
    </SafeAreaView>
  );
};

export default AddGoalPage;
