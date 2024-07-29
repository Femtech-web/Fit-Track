import * as React from "react";
import Svg, { Path } from "react-native-svg";

function CalendarIcon({ size = 23, style = {} }) {
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
        d="M12 1.33325V2.66659M4 1.33325V2.66659"
        stroke="#475367"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M7.99705 8.6665H8.00303M7.99705 11.3332H8.00303M10.6607 8.6665H10.6667M5.33337 8.6665H5.33936M5.33337 11.3332H5.33936"
        stroke="#475367"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M2.33337 5.33325H13.6667"
        stroke="#475367"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M1.66669 8.16216C1.66669 5.25729 1.66669 3.80486 2.50143 2.90243C3.33618 2 4.67968 2 7.36669 2H8.63335C11.3204 2 12.6639 2 13.4986 2.90243C14.3334 3.80486 14.3334 5.25729 14.3334 8.16216V8.5045C14.3334 11.4094 14.3334 12.8618 13.4986 13.7642C12.6639 14.6667 11.3204 14.6667 8.63335 14.6667H7.36669C4.67968 14.6667 3.33618 14.6667 2.50143 13.7642C1.66669 12.8618 1.66669 11.4094 1.66669 8.5045V8.16216Z"
        stroke="#475367"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M2 5.33325H14"
        stroke="#475367"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
}

export default React.memo(CalendarIcon);
