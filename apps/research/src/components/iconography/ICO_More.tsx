import { SVGProps } from "react";

const ICO_More = (props: SVGProps<SVGSVGElement>) => {
  return (
      <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    fill="none"
    {...props}
  >
    {/* <path fill="red" d="M0 0h16v16H0z" /> */}
    <path stroke="var(--c-icon)" d="M4 8h8M8 4v8"/>
  </svg>

  );
};

export default ICO_More;
