import * as React from "react";
import Svg, { Path } from "react-native-svg";

function ShoeIcon({ size = 30, style = {} }) {
  return (
    <Svg
      width={size}
      height={size}
      style={style}
      viewBox="0 0 20 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M15.9177 15.5L6.63578 15.5C4.1909 15.5 2.96846 15.5 2.22335 14.569C0.809067 12.8019 2.42054 8.10317 3.39672 6.33333C3.72766 8.33333 7.13456 8.27778 8.37558 8C7.54872 6.33432 8.65251 5.77844 9.20441 5.50049L9.20539 5.5C11.6666 8.41667 16.929 10.0033 18.2186 13.1824C18.7757 14.5556 17.1885 15.5 15.9177 15.5Z"
        stroke="black"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M1.66663 12.1666C5.13718 13.3578 7.27577 13.7035 10.018 12.8366C10.849 12.5739 11.2644 12.4425 11.5234 12.4604C11.7824 12.4782 12.3107 12.7245 13.3673 13.2173C14.6868 13.8326 16.4976 14.1869 18.3333 13.2986"
        stroke="black"
        stroke-width="1.5"
        stroke-linejoin="round"
      />
      <Path
        d="M11.25 8.41663L12.5 7.16663"
        stroke="black"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M12.9166 9.66663L14.1666 8.41663"
        stroke="black"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
}

export default React.memo(ShoeIcon);
