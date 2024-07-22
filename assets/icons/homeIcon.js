import * as React from "react";
import Svg, { Path } from "react-native-svg";

function HomeBarIcon({ stroke, size = 25 }) {
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 23 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M9.5 17L13.5 17"
        stroke={stroke}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M1.85139 12.2135C1.49837 9.91624 1.32186 8.76763 1.75617 7.74938C2.19047 6.73112 3.15403 6.03443 5.08114 4.64106L6.52099 3.6C8.91829 1.86667 10.1169 1 11.5 1C12.8831 1 14.0817 1.86667 16.479 3.6L17.9189 4.64106C19.846 6.03443 20.8095 6.73112 21.2438 7.74938C21.6781 8.76763 21.5016 9.91624 21.1486 12.2135L20.8476 14.1724C20.3471 17.4289 20.0969 19.0572 18.929 20.0286C17.7611 21 16.0537 21 12.6388 21H10.3612C6.94633 21 5.23891 21 4.071 20.0286C2.90309 19.0572 2.65287 17.4289 2.15243 14.1724L1.85139 12.2135Z"
        stroke={stroke}
        stroke-width="2"
        stroke-linejoin="round"
      />
    </Svg>
  );
}

export default React.memo(HomeBarIcon);
