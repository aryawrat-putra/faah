import * as React from "react";

import { IconSvgProps } from "@/types";

export const Logo: React.FC<IconSvgProps> = ({
  size = 36,
  height,
  ...props
}) => (
  <svg
    {...props}
    height={size || height}
    width={size || height}
    viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"
  >
    <g filter="url(#filter0_iii_3051_46909)">
      <g clipPath="url(#clip0_3051_46909)">
        <rect width="48" height="48" rx="12" fill="#15803D" />
        <rect width="48" height="48" fill="url(#paint0_linear_3051_46909)" />
        <g filter="url(#filter1_d_3051_46909)">
          <path d="M34.7301 14.5668C34.4059 14.2426 34.0818 13.9184 33.7576 13.5943C32.7851 12.5569 31.7478 11.5196 30.4511 10.8713C28.9599 10.0933 27.3391 10.2878 25.7183 10.2878C23.2546 10.2878 17.0955 10.2878 13.4648 10.2878L15.9285 13.5943C20.402 13.5943 27.404 13.5943 30.6456 13.5943C32.0071 13.5943 33.1741 13.8536 34.2763 14.5668C34.4708 14.6316 34.6653 14.6316 34.7301 14.5668Z" fill="url(#paint1_linear_3051_46909)" />
          <path d="M37.4526 19.8832C37.1284 19.5591 36.8042 19.2349 36.4801 18.9107C35.5076 17.8734 34.4703 16.8361 33.1736 16.1877C31.6824 15.4098 30.0616 15.6043 28.4408 15.6043C26.3013 15.6043 21.1795 15.6043 17.5488 15.6043L20.0125 18.9107C24.4211 18.9107 30.4506 18.9107 33.4329 18.9107C34.7944 18.9107 35.9614 19.1701 37.0636 19.8832C37.1933 19.9481 37.3229 19.9481 37.4526 19.8832Z" fill="url(#paint2_linear_3051_46909)" />
          <path d="M40.5 25.0697C40.1758 24.7455 39.8517 24.4214 39.5275 24.0972C38.555 23.0599 37.5177 22.0225 36.221 21.3742C34.7299 20.5962 33.109 20.7907 31.4882 20.7907C29.4784 20.7907 25.0697 20.7907 21.5039 20.7907L23.9676 24.0972C28.2465 24.0972 33.6925 24.0972 36.4155 24.0972C37.777 24.0972 38.944 24.3565 40.0462 25.0697C40.2407 25.1345 40.3703 25.1994 40.5 25.0697Z" fill="url(#paint3_linear_3051_46909)" />
          <path d="M13.2055 33.822C13.5296 34.1462 13.8538 34.4704 14.1779 34.7945C15.1504 35.8319 16.1878 36.8692 17.4844 37.5175C18.9756 38.2955 20.5964 38.101 22.2172 38.101H34.4707L32.007 34.7945C27.5336 34.7945 20.5316 34.7945 17.2899 34.7945C15.9284 34.7945 14.7614 34.5352 13.6593 33.822C13.4648 33.7572 13.3351 33.7572 13.2055 33.822Z" fill="url(#paint4_linear_3051_46909)" />
          <path d="M10.4823 28.5059C10.8065 28.8301 11.1306 29.1543 11.4548 29.4784C12.4273 30.5158 13.4646 31.5531 14.7613 32.2014C16.2524 32.9794 17.8733 32.7849 19.4941 32.7849H30.3861L27.9224 29.4784C23.5138 29.4784 17.4843 29.4784 14.502 29.4784C13.1405 29.4784 11.9735 29.2191 10.8713 28.5059C10.7416 28.4411 10.612 28.4411 10.4823 28.5059Z" fill="url(#paint5_linear_3051_46909)" />
          <path d="M7.49989 23.2543C7.82405 23.5785 8.14822 23.9026 8.47238 24.2268C9.44488 25.2641 10.4822 26.3015 11.7789 26.9498C13.27 27.7278 14.8909 27.5333 16.5117 27.5333H26.496L24.0323 24.2268C19.7533 24.2268 14.3074 24.2268 11.5844 24.2268C10.2229 24.2268 9.05588 23.9675 7.95372 23.2543C7.75922 23.1895 7.62955 23.1895 7.49989 23.2543Z" fill="url(#paint6_linear_3051_46909)" />
        </g>
      </g>
      <rect x="1" y="1" width="46" height="46" rx="11" stroke="url(#paint7_linear_3051_46909)" strokeWidth="2" />
    </g>
    <defs>
      <filter id="filter0_iii_3051_46909" x="0" y="-3" width="48" height="54" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
        <feOffset dy="-3" />
        <feGaussianBlur stdDeviation="1.5" />
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
        <feBlend mode="normal" in2="shape" result="effect1_innerShadow_3051_46909" />
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
        <feOffset dy="3" />
        <feGaussianBlur stdDeviation="1.5" />
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
        <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.1 0" />
        <feBlend mode="normal" in2="effect1_innerShadow_3051_46909" result="effect2_innerShadow_3051_46909" />
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
        <feMorphology radius="1" operator="erode" in="SourceAlpha" result="effect3_innerShadow_3051_46909" />
        <feOffset />
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0" />
        <feBlend mode="normal" in2="effect2_innerShadow_3051_46909" result="effect3_innerShadow_3051_46909" />
      </filter>
      <filter id="filter1_d_3051_46909" x="3.5" y="5" width="41" height="44" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
        <feMorphology radius="2" operator="erode" in="SourceAlpha" result="effect1_dropShadow_3051_46909" />
        <feOffset dy="3" />
        <feGaussianBlur stdDeviation="3" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix type="matrix" values="0 0 0 0 0.141176 0 0 0 0 0.141176 0 0 0 0 0.141176 0 0 0 0.1 0" />
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_3051_46909" />
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_3051_46909" result="shape" />
      </filter>
      <linearGradient id="paint0_linear_3051_46909" x1="24" y1="5.96047e-07" x2="26" y2="48" gradientUnits="userSpaceOnUse">
        <stop stopColor="white" stopOpacity="0" />
        <stop offset="1" stopColor="white" stopOpacity="0.12" />
      </linearGradient>
      <linearGradient id="paint1_linear_3051_46909" x1="26.9824" y1="10.2662" x2="26.9824" y2="25.1446" gradientUnits="userSpaceOnUse">
        <stop stopColor="white" stopOpacity="0.8" />
        <stop offset="1" stopColor="white" stopOpacity="0.5" />
      </linearGradient>
      <linearGradient id="paint2_linear_3051_46909" x1="26.9824" y1="10.2662" x2="26.9824" y2="25.1446" gradientUnits="userSpaceOnUse">
        <stop stopColor="white" stopOpacity="0.8" />
        <stop offset="1" stopColor="white" stopOpacity="0.5" />
      </linearGradient>
      <linearGradient id="paint3_linear_3051_46909" x1="26.9824" y1="10.2662" x2="26.9824" y2="25.1446" gradientUnits="userSpaceOnUse">
        <stop stopColor="white" stopOpacity="0.8" />
        <stop offset="1" stopColor="white" stopOpacity="0.5" />
      </linearGradient>
      <linearGradient id="paint4_linear_3051_46909" x1="20.9853" y1="38.1226" x2="20.9853" y2="23.2057" gradientUnits="userSpaceOnUse">
        <stop stopColor="white" stopOpacity="0.8" />
        <stop offset="1" stopColor="white" stopOpacity="0.5" />
      </linearGradient>
      <linearGradient id="paint5_linear_3051_46909" x1="20.9853" y1="38.1226" x2="20.9853" y2="23.2057" gradientUnits="userSpaceOnUse">
        <stop stopColor="white" stopOpacity="0.8" />
        <stop offset="1" stopColor="white" stopOpacity="0.5" />
      </linearGradient>
      <linearGradient id="paint6_linear_3051_46909" x1="20.9853" y1="38.1226" x2="20.9853" y2="23.2057" gradientUnits="userSpaceOnUse">
        <stop stopColor="white" stopOpacity="0.8" />
        <stop offset="1" stopColor="white" stopOpacity="0.5" />
      </linearGradient>
      <linearGradient id="paint7_linear_3051_46909" x1="24" y1="0" x2="24" y2="48" gradientUnits="userSpaceOnUse">
        <stop stopColor="white" stopOpacity="0.12" />
        <stop offset="1" stopColor="white" stopOpacity="0" />
      </linearGradient>
      <clipPath id="clip0_3051_46909">
        <rect width="48" height="48" rx="12" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export const GithubIcon: React.FC<IconSvgProps> = ({
  size = 24,
  width,
  height,
  ...props
}) => {
  return (
    <svg
      height={size || height}
      viewBox="0 0 24 24"
      width={size || width}
      {...props}
    >
      <path
        clipRule="evenodd"
        d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336 9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  );
};

export const MoonFilledIcon = ({
  size = 24,
  width,
  height,
  ...props
}: IconSvgProps) => (
  <svg
    aria-hidden="true"
    focusable="false"
    height={size || height}
    role="presentation"
    viewBox="0 0 24 24"
    width={size || width}
    {...props}
  >
    <path
      d="M21.53 15.93c-.16-.27-.61-.69-1.73-.49a8.46 8.46 0 01-1.88.13 8.409 8.409 0 01-5.91-2.82 8.068 8.068 0 01-1.44-8.66c.44-1.01.13-1.54-.09-1.76s-.77-.55-1.83-.11a10.318 10.318 0 00-6.32 10.21 10.475 10.475 0 007.04 8.99 10 10 0 002.89.55c.16.01.32.02.48.02a10.5 10.5 0 008.47-4.27c.67-.93.49-1.519.32-1.79z"
      fill="currentColor"
    />
  </svg>
);

export const SunFilledIcon = ({
  size = 24,
  width,
  height,
  ...props
}: IconSvgProps) => (
  <svg
    aria-hidden="true"
    focusable="false"
    height={size || height}
    role="presentation"
    viewBox="0 0 24 24"
    width={size || width}
    {...props}
  >
    <g fill="currentColor">
      <path d="M19 12a7 7 0 11-7-7 7 7 0 017 7z" />
      <path d="M12 22.96a.969.969 0 01-1-.96v-.08a1 1 0 012 0 1.038 1.038 0 01-1 1.04zm7.14-2.82a1.024 1.024 0 01-.71-.29l-.13-.13a1 1 0 011.41-1.41l.13.13a1 1 0 010 1.41.984.984 0 01-.7.29zm-14.28 0a1.024 1.024 0 01-.71-.29 1 1 0 010-1.41l.13-.13a1 1 0 011.41 1.41l-.13.13a1 1 0 01-.7.29zM22 13h-.08a1 1 0 010-2 1.038 1.038 0 011.04 1 .969.969 0 01-.96 1zM2.08 13H2a1 1 0 010-2 1.038 1.038 0 011.04 1 .969.969 0 01-.96 1zm16.93-7.01a1.024 1.024 0 01-.71-.29 1 1 0 010-1.41l.13-.13a1 1 0 011.41 1.41l-.13.13a.984.984 0 01-.7.29zm-14.02 0a1.024 1.024 0 01-.71-.29l-.13-.14a1 1 0 011.41-1.41l.13.13a1 1 0 010 1.41.97.97 0 01-.7.3zM12 3.04a.969.969 0 01-1-.96V2a1 1 0 012 0 1.038 1.038 0 01-1 1.04z" />
    </g>
  </svg>
);