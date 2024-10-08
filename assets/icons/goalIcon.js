import * as React from "react";
import Svg, { Path } from "react-native-svg";

function GoalBarIcon({ stroke, size = 25 }) {
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 21 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M5.5 16L5.5 12"
        stroke={stroke}
        stroke-width="2"
        stroke-linecap="round"
      />
      <Path
        d="M10.5 16L10.5 6"
        stroke={stroke}
        stroke-width="2"
        stroke-linecap="round"
      />
      <Path
        d="M15.5 16L15.5 10"
        stroke={stroke}
        stroke-width="2"
        stroke-linecap="round"
      />
      <Path
        d="M1 11C1 6.52166 1 4.28249 2.39124 2.89124C3.78249 1.5 6.02166 1.5 10.5 1.5C14.9783 1.5 17.2175 1.5 18.6088 2.89124C20 4.28249 20 6.52166 20 11C20 15.4783 20 17.7175 18.6088 19.1088C17.2175 20.5 14.9783 20.5 10.5 20.5C6.02166 20.5 3.78249 20.5 2.39124 19.1088C1 17.7175 1 15.4783 1 11Z"
        stroke={stroke}
        stroke-width="2"
        stroke-linejoin="round"
      />
    </Svg>
  );
}

export default React.memo(GoalBarIcon);
