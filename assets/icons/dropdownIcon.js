import * as React from "react";
import Svg, { Path } from "react-native-svg";

function DropdownIcon({ size = 25, style = {} }) {
  return (
    <Svg
      width={size}
      height={size}
      style={style}
      viewBox="0 0 10 7"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M1 1.5L4.29289 4.79289C4.62623 5.12623 4.79289 5.29289 5 5.29289C5.20711 5.29289 5.37377 5.12623 5.70711 4.79289L9 1.5"
        stroke="#141B34"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
}

export default React.memo(DropdownIcon);
