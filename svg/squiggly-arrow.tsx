import { SVGProps } from "react";

export default function SquigglyArrow(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      width="129"
      height="116"
      viewBox="0 0 129 116"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M17.3643 31.6601C76.5191 13.5922 106.986 56.8503 71.9858 68.3503C48.0224 76.2241 38.5248 18.5157 91.7787 26.9474C134.382 33.6928 112.406 87.369 96.0925 113.364"
        stroke="#1F1F1F"
        strokeOpacity="0.87"
        strokeWidth="2"
      />
      <path
        d="M92.9858 100.351L95.4858 113.851L108.986 111.351"
        stroke="#1F1F1F"
        strokeOpacity="0.87"
        strokeWidth="2"
      />
    </svg>
  );
}
