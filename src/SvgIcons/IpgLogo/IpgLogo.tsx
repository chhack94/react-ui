import * as React from "react";

import { IpgLogoProps } from "./IpgLogo.types";
import SvgIcon from "@mui/material/SvgIcon";

// IPG logo svg
function Icon(props: IpgLogoProps) {
  // get textColour and sx from props
  const { textColour, sx } = props;

  // create a switch case based on text colour
  let ipgTextColour: string;
  let automotiveTextColour: string;
  switch (textColour) {
    case "white":
      ipgTextColour = "#FFFFFF";
      automotiveTextColour = "#FFAF2C";
      break;
    case "black":
      ipgTextColour = "#5E8AB4";
      automotiveTextColour = "#FFAF2C";
      break;
    default:
      ipgTextColour = "#5E8AB4";
      automotiveTextColour = "#FFAF2C";
  }

  // return the IPG logo svg which is different for light and dark mode
  return (
    <SvgIcon viewBox="0 0 535.862 204.758" sx={{ ...sx }}>
      <g>
        <path
          fill={ipgTextColour}
          d="M219.789,31.135h31.135v142.274h-31.135V31.135z"
        />
        <path
          fill={ipgTextColour}
          d="M380.781,43.647c9.588,8.344,14.385,20.134,14.385,35.372c0,16.029-4.827,28.474-14.483,37.342
		c-9.655,8.867-23.221,13.301-40.692,13.301h-27.391v43.746h-31.135V31.135h58.525C357.593,31.135,371.189,35.306,380.781,43.647z
		 M358.612,97.641c4.661-4.005,6.996-9.884,6.996-17.637c0-7.617-2.334-13.366-6.996-17.243c-4.665-3.873-11.398-5.813-20.198-5.813
		h-25.814v46.702h25.814C347.214,103.65,353.947,101.649,358.612,97.641z"
        />
        <path
          fill={ipgTextColour}
          d="M480.49,92.025h55.372v63.255c-7.359,5.389-16.355,9.755-26.996,13.105
		c-10.641,3.35-20.691,5.024-30.149,5.024c-13.794,0-26.276-3.119-37.441-9.36c-11.168-6.238-19.97-14.779-26.405-25.617
		c-6.438-10.839-9.655-22.957-9.655-36.357c0-13.268,3.282-25.322,9.852-36.16c6.568-10.838,15.599-19.342,27.095-25.518
		c11.494-6.174,24.269-9.262,38.327-9.262c10.247,0,20.066,1.842,29.46,5.518c9.391,3.679,17.637,8.67,24.73,14.976l-17.538,22.267
		c-5.123-4.858-10.838-8.67-17.144-11.429c-6.306-2.759-12.809-4.138-19.508-4.138c-8.015,0-15.339,1.94-21.971,5.813
		c-6.635,3.876-11.857,9.132-15.666,15.765c-3.812,6.635-5.715,14.025-5.715,22.168c0,8.148,1.937,15.602,5.813,22.366
		c3.874,6.767,9.129,12.088,15.765,15.962c6.632,3.876,13.957,5.812,21.971,5.812c4.071,0,8.474-0.689,13.203-2.068
		c4.729-1.379,9.326-3.251,13.794-5.616v-18.129H480.49V92.025z"
        />
      </g>
      <path
        fill={automotiveTextColour}
        d="M14.143,99.6l32.039,27.693l27.24-21.46c9.54-8.424,0.577-15.024,0.577-15.024L52.65,75.087
	c-9.84-7.246-8.256-18.813,2.695-25.821l51.03-35.844L82.266,0L27.897,32.507C27.897,32.507-24.336,61.69,14.143,99.6z"
      />
      <path
        fill={ipgTextColour}
        d="M156.023,144.908l-57.39,59.85l-40.672-34.795l59.743-53.353c11.293-9.898,10.014-24.302-1.816-32.291
	L98.014,70.977c-5.388-4.022-5.4-12.092-0.023-16.129l16.344-12.273l32.399,19.266C146.734,61.842,199.241,93.938,156.023,144.908z"
      />
      <defs>
        <linearGradient
          id="paint0_linear_1392_21101"
          x1="30.534"
          y1="100.22"
          x2="111.187"
          y2="19.5665"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#004174" />
          <stop offset="0.25" stopColor="#82B5E2" />
          <stop offset="0.44" stopColor="#00518E" />
          <stop offset="0.54" stopColor="#AFCDEC" />
          <stop offset="0.61" stopColor="#BCD4F0" />
          <stop offset="1" stopColor="#549AD4" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_1392_21101"
          x1="29.1238"
          y1="3.53984"
          x2="93.029"
          y2="94.8059"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#2E91D0" />
          <stop offset="0.5" stopColor="#2580C3" />
          <stop offset="1" stopColor="#005495" />
        </linearGradient>
        <linearGradient
          id="paint2_linear_1392_21101"
          x1="-7.39059"
          y1="64.5213"
          x2="79.0665"
          y2="-8.02475"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#A69700" />
          <stop offset="0.33" stopColor="#EFCF00" />
          <stop offset="0.4" stopColor="#DAC000" />
          <stop offset="0.49" stopColor="#BFAB00" />
          <stop offset="0.59" stopColor="#DBC100" />
          <stop offset="0.7" stopColor="#EFCF00" />
          <stop offset="0.88" stopColor="#ECD100" />
          <stop offset="1" stopColor="#C8B300" />
        </linearGradient>
        <linearGradient
          id="paint3_linear_1392_21101"
          x1="3.442"
          y1="-4.4502"
          x2="83.4853"
          y2="75.593"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FFF381" />
          <stop offset="1" stopColor="#FFE800" />
        </linearGradient>
        <clipPath id="clip0_1392_21101">
          <rect width="300" height="82" fill="white" />
        </clipPath>
      </defs>
    </SvgIcon>
  );
}

// IPG logo component
export default function IpgLogo({ textColour, sx }: IpgLogoProps) {
  return <Icon textColour={textColour} sx={sx} />;
}
