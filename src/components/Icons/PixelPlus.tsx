import { SVGProps } from "react";

export default function PixelPlus(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <path fill="currentColor" d="M11 4h2v7h7v2h-7v7h-2v-7H4v-2h7V4z"></path>
    </svg>
  );
}
