import {
  TouchableOpacity,
  View,
  type TouchableOpacityProps,
} from "react-native";
import { icons } from "@/constants";

type IconProps = TouchableOpacityProps & {
  name: string;
  color?: string;
  stroke: string;
};

export function TabBarIcon({ style, name, color, stroke, ...rest }: IconProps) {
  const isHome = name === "home";
  const isGoal = name === "goals";
  const isFeeds = name === "feeds";

  return (
    <TouchableOpacity style={[{ marginBottom: 1 }, style]} {...rest}>
      {isHome ? (
        <icons.homeIcon stroke={stroke} />
      ) : isGoal ? (
        <icons.goalIcon stroke={stroke} />
      ) : isFeeds ? (
        <icons.feedIcon stroke={stroke} />
      ) : (
        <icons.settingsIcon stroke={stroke} />
      )}
      <View />
    </TouchableOpacity>
  );
}
