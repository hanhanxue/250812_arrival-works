import { SVGProps } from "react";

const ICO_Download = (props: SVGProps<SVGSVGElement>) => {
  return (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    fill="none"
    {...props}
  >
    {/* <path fill="red" d="M0 0h16v16H0z" /> */}
    <path fill="var(--c-icon)" d="M5 12V4l7 4-7 4Z" />
  </svg>
  );
};

export default ICO_Download;
