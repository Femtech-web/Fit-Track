import { SafeAreaView } from "react-native-safe-area-context";
import { BackHeader } from "@/components/reusables";
import { gStyles, icons } from "@/constants";
import { NoGoal, Goals as AllGoals } from "@/components/goalsScreen";

const Goals = () => {
  const goals = [
    // {
    //   icon: <icons.whiteShoeIcon />,
    //   category: "Steps",
    //   goals: [
    //     "6K Steps Frenzy",
    //     "12Km Weekly Hike",
    //     "12Km Weekly Hike",
    //     "12Km Weekly Hike",
    //   ],
    // },
    // {
    //   icon: <icons.dressIcon />,
    //   category: "Weight",
    //   goals: [
    //     "6K Steps Frenzy",
    //     "12Km Weekly Hike",
    //     "12Km Weekly Hike",
    //     "12Km Weekly Hike",
    //   ],
    // },
    // {
    //   icon: <icons.whiteCalorieIcon />,
    //   category: "Calories",
    //   goals: [
    //     "6K Steps Frenzy",
    //     "12Km Weekly Hike",
    //     "12Km Weekly Hike",
    //     "12Km Weekly Hike",
    //   ],
    // },
    // {
    //   icon: <icons.strengthIcon />,
    //   category: "Strength",
    //   goals: [
    //     "6K Steps Frenzy",
    //     "12Km Weekly Hike",
    //     "12Km Weekly Hike",
    //     "12Km Weekly Hike",
    //   ],
    // },
  ];

  const goalsExist = goals.length > 0;
  return (
    <SafeAreaView style={[gStyles.container, gStyles.p24, gStyles.pT32]}>
      <BackHeader pageName="My Goals" />
      {goalsExist ? <AllGoals /> : <NoGoal />}
    </SafeAreaView>
  );
};

export default Goals;
