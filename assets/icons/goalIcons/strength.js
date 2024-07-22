import * as React from "react";
import Svg, { Path } from "react-native-svg";

function StrengthIcon({ size = 23 }) {
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M0.468313 11.405C0.176171 11.6987 0.177388 12.1735 0.471031 12.4657C0.764673 12.7578 1.23955 12.7566 1.53169 12.463L0.468313 11.405ZM10.4299 1.08436L10.6314 0.361937V0.361937L10.4299 1.08436ZM12.8166 1.75014L13.0181 1.02772V1.02772L12.8166 1.75014ZM13.8468 2.43407L13.2641 2.90636V2.90636L13.8468 2.43407ZM19.5981 11.3209L18.9155 11.6316V11.6316L19.5981 11.3209ZM7.64297 2.54775L7.09137 2.03958L7.64297 2.54775ZM9.88077 5.73838L9.7586 4.99839L9.7586 4.99839L9.88077 5.73838ZM12.7348 7.05688L13.3297 6.60016L13.3297 6.60016L12.7348 7.05688ZM13.7126 10.6339L12.9672 10.7164V10.7164L13.7126 10.6339ZM14.4636 12.5688L14.0426 13.1894C14.3578 13.4032 14.7832 13.3469 15.0318 13.0583C15.2804 12.7698 15.2733 12.3407 15.0152 12.0606L14.4636 12.5688ZM6.62537 13.2281C6.36867 13.5532 6.4241 14.0248 6.74918 14.2815C7.07426 14.5382 7.54588 14.4828 7.80259 14.1577L6.62537 13.2281ZM6.60716 4.36638L5.86831 4.49522L6.60716 4.36638ZM20.7782 16.6039L21.4748 16.8818L20.7782 16.6039ZM16.5363 19.2457L16.7709 19.9581L16.5363 19.2457ZM11.461 5.62413L11.7466 4.93062L11.7466 4.93062L11.461 5.62413ZM9.20447 19.3993L9.74294 19.9213L9.74294 19.9213L9.20447 19.3993ZM1.55161 18.8056C1.27096 18.5009 0.796484 18.4815 0.491839 18.7621C0.187194 19.0428 0.167742 19.5173 0.448391 19.8219L1.55161 18.8056ZM9.37957 19.1545L9.65267 18.456C9.31034 18.3222 8.92146 18.4561 8.7342 18.7724L9.37957 19.1545ZM9.34525 19.2125L8.69988 18.8304L8.69987 18.8304L9.34525 19.2125ZM9.78046 11.8284L10.0097 12.5425L9.78046 11.8284ZM10.2284 1.80678L12.6151 2.47256L13.0181 1.02772L10.6314 0.361937L10.2284 1.80678ZM13.2641 2.90636C15.8503 6.09666 17.5072 8.53748 18.9155 11.6316L20.2807 11.0103C18.8007 7.75839 17.0602 5.20721 14.4294 1.96179L13.2641 2.90636ZM12.9672 10.7164C13.0531 11.4918 13.3039 12.4168 13.912 13.0769L15.0152 12.0606C14.7219 11.7422 14.529 11.192 14.4581 10.5513L12.9672 10.7164ZM12.1399 7.51361C12.3363 7.76936 12.4727 7.94715 12.5683 8.08001C12.6747 8.2278 12.6855 8.25996 12.6769 8.2383L14.0709 7.68443C14.0029 7.51332 13.8874 7.34491 13.7857 7.20367C13.6733 7.04748 13.5198 6.84775 13.3297 6.60016L12.1399 7.51361ZM14.4581 10.5513C14.3652 9.71253 14.2948 9.07622 14.2401 8.63141C14.2128 8.40954 14.1885 8.22743 14.1664 8.08807C14.1495 7.98153 14.1222 7.81369 14.0709 7.68443L12.6769 8.2383C12.6552 8.18377 12.6618 8.1771 12.6849 8.32285C12.7028 8.43579 12.7246 8.59709 12.7513 8.81441C12.8046 9.248 12.8738 9.87322 12.9672 10.7164L14.4581 10.5513ZM7.09137 2.03958C6.73115 2.43058 6.39067 2.79597 6.1692 3.14504C5.92063 3.53682 5.77731 3.97334 5.86831 4.49522L7.34602 4.23754C7.33522 4.17561 7.3306 4.11442 7.43578 3.94864C7.56805 3.74015 7.79638 3.48814 8.19456 3.05593L7.09137 2.03958ZM18.9155 11.6316C19.5098 12.9374 19.9156 13.8347 20.1163 14.5818C20.3058 15.2871 20.2935 15.7947 20.0816 16.3259L21.4748 16.8818C21.8348 15.9796 21.8165 15.1288 21.565 14.1926C21.3247 13.2982 20.8545 12.2708 20.2807 11.0103L18.9155 11.6316ZM16.7709 19.9581C17.9672 19.5642 18.9651 19.2389 19.7252 18.8155C20.534 18.3649 21.115 17.7834 21.4748 16.8818L20.0816 16.3259C19.8693 16.8578 19.5528 17.1945 18.9952 17.5051C18.3891 17.8428 17.5521 18.1216 16.3018 18.5333L16.7709 19.9581ZM10.0029 6.47836C10.4565 6.40347 10.7565 6.35442 10.9762 6.33408C11.214 6.31206 11.2291 6.33972 11.1755 6.31765L11.7466 4.93062C11.4387 4.80387 11.1057 4.81568 10.8379 4.84047C10.552 4.86693 10.189 4.92734 9.7586 4.99839L10.0029 6.47836ZM8.66601 18.8772C7.78632 19.7845 6.45789 20.2625 5.08976 20.2498C3.72178 20.2371 2.40767 19.7348 1.55161 18.8056L0.448391 19.8219C1.63705 21.1122 3.37689 21.7339 5.07583 21.7497C6.77461 21.7655 8.52605 21.1764 9.74294 19.9213L8.66601 18.8772ZM16.3018 18.5333C13.9701 19.301 11.9937 19.3713 9.65267 18.456L9.10647 19.853C11.8231 20.9152 14.1635 20.8166 16.7709 19.9581L16.3018 18.5333ZM9.99062 19.5946L10.0249 19.5366L8.7342 18.7724L8.69988 18.8304L9.99062 19.5946ZM9.74294 19.9213C9.84472 19.8164 9.92582 19.704 9.99063 19.5946L8.69987 18.8304C8.68498 18.8556 8.67301 18.87 8.66601 18.8772L9.74294 19.9213ZM14.8847 11.9481C13.8287 11.2317 11.7229 10.4173 9.55125 11.1143L10.0097 12.5425C11.5961 12.0333 13.2204 12.6316 14.0426 13.1894L14.8847 11.9481ZM9.55125 11.1143C8.51721 11.4462 7.50761 12.1109 6.62537 13.2281L7.80259 14.1577C8.51089 13.2607 9.2756 12.7782 10.0097 12.5425L9.55125 11.1143ZM10.2951 11.2828C8.99592 10.0575 7.14444 9.49011 5.35636 9.50927C3.5684 9.52844 1.73135 10.1355 0.468313 11.405L1.53169 12.463C2.4553 11.5346 3.8807 11.0252 5.37243 11.0092C6.86404 10.9932 8.30947 11.472 9.26586 12.374L10.2951 11.2828ZM11.1755 6.31765C11.2532 6.34966 11.3814 6.45173 11.5717 6.70374C11.6604 6.82108 11.7461 6.94782 11.8411 7.08885C11.9311 7.22226 12.0344 7.37607 12.1399 7.51361L13.3297 6.60016C13.2578 6.50649 13.1816 6.39379 13.085 6.25044C12.9935 6.11471 12.8856 5.95445 12.7686 5.79959C12.5477 5.5072 12.2165 5.1241 11.7466 4.93062L11.1755 6.31765ZM12.6151 2.47256C12.7743 2.51696 12.8637 2.54254 12.9292 2.56547C12.9586 2.57573 12.9747 2.58263 12.9831 2.58658C12.9871 2.58846 12.9893 2.58965 12.9902 2.59014C12.9906 2.5904 12.9909 2.59055 12.991 2.59061C12.991 2.59064 12.991 2.59065 12.9911 2.59066C12.9911 2.59067 12.9911 2.59067 12.9911 2.59067C12.9911 2.59068 12.9911 2.59069 12.9911 2.59071C12.9912 2.59074 12.9912 2.59078 12.9913 2.59085C12.9915 2.59099 12.9919 2.59127 12.9925 2.59175C12.9937 2.59268 12.9962 2.59467 13.0001 2.59822C13.0084 2.60563 13.0225 2.61923 13.0451 2.64391C13.0949 2.69839 13.157 2.77426 13.2641 2.90636L14.4294 1.96179C14.2523 1.74335 14.0687 1.5058 13.8214 1.34143C13.5703 1.17456 13.2815 1.10119 13.0181 1.02772L12.6151 2.47256ZM10.6314 0.361937C9.72266 0.10844 9.00041 0.308594 8.4067 0.728673C7.89478 1.09088 7.43994 1.66123 7.09137 2.03958L8.19456 3.05593C8.66748 2.5426 8.93331 2.19357 9.27309 1.95316C9.53107 1.77063 9.79154 1.68492 10.2284 1.80678L10.6314 0.361937ZM5.86831 4.49522C6.05234 5.55053 6.99714 6.06432 7.73589 6.29409C8.51379 6.53604 9.39617 6.57853 10.0029 6.47836L9.7586 4.99839C9.38822 5.05954 8.74193 5.03612 8.18137 4.86177C7.58167 4.67525 7.37825 4.42238 7.34602 4.23754L5.86831 4.49522Z"
        fill="#E3EFFC"
      />
    </Svg>
  );
}

export default React.memo(StrengthIcon);
