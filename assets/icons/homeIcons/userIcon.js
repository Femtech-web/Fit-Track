import * as React from "react";
import Svg, { Path } from "react-native-svg";

function UserIcon({ size = 16 }) {
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 10 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M4.99998 5.33333C6.47274 5.33333 7.66665 4.13943 7.66665 2.66667C7.66665 1.19391 6.47274 0 4.99998 0C3.52722 0 2.33331 1.19391 2.33331 2.66667C2.33331 4.13943 3.52722 5.33333 4.99998 5.33333Z"
        fill="black"
      />
      <Path
        d="M0.537081 10C-0.567317 11.7801 3.08847 12.6667 4.99998 12.6667C6.91149 12.6667 10.5673 11.7801 9.46288 10C8.63236 8.66139 6.95249 7.33333 4.99998 7.33333C3.04746 7.33333 1.3676 8.66139 0.537081 10Z"
        fill="black"
      />
    </Svg>
  );
}

export default React.memo(UserIcon);
