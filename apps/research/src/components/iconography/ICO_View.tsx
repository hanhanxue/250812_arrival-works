import { SVGProps } from "react";

const ICO_View = (props: SVGProps<SVGSVGElement>) => {
  return (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    fill="none"
    {...props}
  >
    {/* <path fill="red" d="M0 0h16v16H0z" /> */}
    <path
      fill="var(--c-icon)"
      d="M8 5c3 0 5 3 5 3s-2 3-5 3-5-3-5-3 2-3 5-3Zm0 1a2 2 0 1 0 0 4 2 2 0 0 0 0-4Z"
    />
    <circle cx={8} cy={8} r={1} fill="var(--c-icon)" />
  </svg>
  );
};

export default ICO_View;
