import { ReactNode } from "react";
import { icons } from "@/constants";

export interface IGoal {
  icon: ReactNode;
  category: string;
  goals: string[];
}

export const goals: IGoal[] = [
  {
    icon: <icons.whiteShoeIcon />,
    category: "Steps",
    goals: [
      "6K Steps Frenzy",
      "12Km Weekly Hike",
      "12Km Weekly Hike Two",
      "12Km Weekly Hike Three",
    ],
  },
  {
    icon: <icons.dressIcon />,
    category: "Weight",
    goals: [
      "6K Steps Frenzy",
      "12Km Weekly Hike",
      "12Km Weekly Hike Two",
      "12Km Weekly Hike Three",
    ],
  },
  {
    icon: <icons.whiteCalorieIcon />,
    category: "Calories",
    goals: [
      "6K Steps Frenzy",
      "12Km Weekly Hike",
      "12Km Weekly Hike Two",
      "12Km Weekly Hike Three",
      "12Km Weekly Hike Four",
      "12Km Weekly Hike Five",
    ],
  },
  {
    icon: <icons.strengthIcon />,
    category: "Strength",
    goals: [
      "6K Steps Frenzy",
      "12Km Weekly Hike",
      "12Km Weekly Hike Two",
      "12Km Weekly Hike Three",
      "12Km Weekly Hike Four",
    ],
  },
];

export const singleCategoryDetails = {
  "6K Steps Frenzy": {
    steps: "6,553",
    target: "6,000",
    distance: "1.9km",
    time: "229min",
    chart: {},
    globalRank: 120,
  },
  "12Km Weekly Hike": {
    steps: "12,001",
    target: "12,000",
    distance: "1.4km",
    time: "226min",
    chart: {},
    globalRank: 100,
  },
  "12Km Weekly Hike Two": {
    steps: "12,334",
    target: "12,000",
    distance: "2.4km",
    time: "289min",
    chart: {},
    globalRank: 140,
  },
  "12Km Weekly Hike Three": {
    steps: "12,360",
    target: "12,000",
    distance: "2.5km",
    time: "290min",
    chart: {},
    globalRank: 138,
  },
  "12Km Weekly Hike Four": {
    steps: "12,000",
    target: "12,000",
    distance: "2.00km",
    time: "220min",
    chart: {},
    globalRank: 98,
  },
  "12Km Weekly Hike Five": {
    steps: "12,135",
    target: "12,000",
    distance: "2.10km",
    time: "250min",
    chart: {},
    globalRank: 102,
  },
};
