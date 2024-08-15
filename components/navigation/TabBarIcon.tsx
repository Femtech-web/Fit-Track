import {
  TouchableOpacity,
  View,
  type TouchableOpacityProps,
} from "react-native";
import { icons, COLORS } from "@/constants";

type IconProps = TouchableOpacityProps & {
  name: string;
  stroke: string;
  focused: boolean;
  color?: string;
};

export function TabBarIcon({
  style,
  name,
  color,
  stroke,
  focused,
  ...rest
}: IconProps) {
  const isHome = name === "home";
  const isGoal = name === "goals";
  const isFeeds = name === "feed";

  return (
    <TouchableOpacity
      style={[
        {
          marginBottom: 1,
          alignItems: "center",
        },
        style,
      ]}
      {...rest}
    >
      {isHome ? (
        <icons.homeIcon stroke={stroke} />
      ) : isGoal ? (
        <icons.goalIcon stroke={stroke} />
      ) : isFeeds ? (
        <icons.feedIcon stroke={stroke} />
      ) : (
        <icons.settingsIcon stroke={stroke} />
      )}
      {focused && (
        <View
          style={{
            position: "absolute",
            bottom: -32,
            width: 7,
            height: 7,
            backgroundColor: COLORS.green800,
            borderRadius: 7 / 2,
          }}
        />
      )}
    </TouchableOpacity>
  );
}
