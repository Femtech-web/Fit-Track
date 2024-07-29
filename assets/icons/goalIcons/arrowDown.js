import * as React from "react";
import Svg, { Path } from "react-native-svg";

function ArrowDownIcon({ size = 23, style = {} }) {
  return (
    <Svg
      width={size}
      height={size}
      style={style}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M4 6L7.29289 9.29289C7.62623 9.62623 7.79289 9.79289 8 9.79289C8.20711 9.79289 8.37377 9.62623 8.70711 9.29289L12 6"
        stroke="#475367"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
}

export default React.memo(ArrowDownIcon);
