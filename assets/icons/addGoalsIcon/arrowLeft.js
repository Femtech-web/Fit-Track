import * as React from "react";
import Svg, { Path } from "react-native-svg";

function ArrowLeftIcon({ style = {} }) {
  return (
    <Svg
      width="16"
      height="14"
      style={style}
      viewBox="0 0 8 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M6.5 1L2.20711 5.29289C1.87377 5.62623 1.70711 5.79289 1.70711 6C1.70711 6.20711 1.87377 6.37377 2.20711 6.70711L6.5 11"
        stroke="#000000"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
}

export default React.memo(ArrowLeftIcon);
