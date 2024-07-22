import * as React from "react";
import Svg, { Path } from "react-native-svg";

function WhiteShoeIcon({ size = 23 }) {
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 28 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M22.8766 16.5H8.95373C5.28642 16.5 3.45276 16.5 2.33509 15.1035C0.213662 12.4528 2.63088 5.40475 4.09514 2.75C4.59155 5.75 9.7019 5.66667 11.5634 5.25C10.3231 2.75148 11.9788 1.91766 12.8067 1.50074L12.8081 1.5C16.5 5.875 24.3936 8.25498 26.328 13.0236C27.1636 15.0834 24.7827 16.5 22.8766 16.5Z"
        stroke="#E7F6EC"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M1.5 11.5C6.70583 13.2867 9.91372 13.8053 14.0271 12.5049C15.2735 12.1109 15.8967 11.9139 16.2852 11.9406C16.6736 11.9673 17.4661 12.3369 19.051 13.076C21.0303 13.999 23.7464 14.5304 26.5 13.1979"
        stroke="#E7F6EC"
        stroke-width="1.5"
        stroke-linejoin="round"
      />
      <Path
        d="M15.875 5.875L17.75 4"
        stroke="#E7F6EC"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M18.375 7.75L20.25 5.875"
        stroke="#E7F6EC"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
}

export default React.memo(WhiteShoeIcon);
