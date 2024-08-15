import * as React from "react";
import Svg, { Path } from "react-native-svg";

function CheckmarkIcon({ style = {} }) {
  return (
    <Svg
      width="52"
      height="42"
      style={style}
      viewBox="0 0 52 42"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M2.66667 27.6665L14.3333 39.3332L49.3333 2.6665"
        stroke="#015B20"
        stroke-width="5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
}

export default React.memo(CheckmarkIcon);
