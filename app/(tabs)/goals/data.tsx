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

export interface ICategoryDetails {
  steps: string;
  target: string;
  distance: string;
  time: string;
  chart: {
    x: string;
    y: number;
  }[];
  globalRank: number;
}

export const singleCategoryDetails = new Map([
  [
    "6K Steps Frenzy",
    {
      steps: "6,553",
      target: "6,000",
      distance: "1.9km",
      time: "229min",
      chart: [
        { x: "12am", y: 80 },
        { x: "6am", y: 110 },
        { x: "12pm", y: 120 },
        { x: "4pm", y: 160 },
        { x: "6pm", y: 90 },
      ],
      globalRank: 120,
    },
  ],
  [
    "12Km Weekly Hike",
    {
      steps: "12,001",
      target: "12,000",
      distance: "1.4km",
      time: "226min",
      chart: [
        { x: "12am", y: 100 },
        { x: "6am", y: 130 },
        { x: "12pm", y: 70 },
        { x: "4pm", y: 110 },
        { x: "6pm", y: 120 },
      ],
      globalRank: 100,
    },
  ],
  [
    "12Km Weekly Hike Two",
    {
      steps: "12,334",
      target: "12,000",
      distance: "2.4km",
      time: "289min",
      chart: [
        { x: "12am", y: 90 },
        { x: "6am", y: 120 },
        { x: "12pm", y: 115 },
        { x: "4pm", y: 170 },
        { x: "6pm", y: 100 },
      ],
      globalRank: 140,
    },
  ],
  [
    "12Km Weekly Hike Three",
    {
      steps: "12,360",
      target: "12,000",
      distance: "2.5km",
      time: "290min",
      chart: [
        { x: "12am", y: 110 },
        { x: "6am", y: 80 },
        { x: "12pm", y: 100 },
        { x: "4pm", y: 120 },
        { x: "6pm", y: 95 },
      ],
      globalRank: 138,
    },
  ],
  [
    "12Km Weekly Hike Four",
    {
      steps: "12,000",
      target: "12,000",
      distance: "2.00km",
      time: "220min",
      chart: [
        { x: "12am", y: 85 },
        { x: "6am", y: 130 },
        { x: "12pm", y: 125 },
        { x: "4pm", y: 150 },
        { x: "6pm", y: 110 },
      ],
      globalRank: 98,
    },
  ],
  [
    "12Km Weekly Hike Five",
    {
      steps: "12,135",
      target: "12,000",
      distance: "2.10km",
      time: "250min",
      chart: [
        { x: "12am", y: 160 },
        { x: "6am", y: 140 },
        { x: "12pm", y: 120 },
        { x: "4pm", y: 130 },
        { x: "6pm", y: 90 },
      ],
      globalRank: 102,
    },
  ],
]);
