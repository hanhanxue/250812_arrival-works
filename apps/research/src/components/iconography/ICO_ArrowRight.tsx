import { SVGProps } from "react";

const ICO_ArrowRight = (props: SVGProps<SVGSVGElement>) => {
  return (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    {...props}
  >
    {/* <path fill="red" d="M0 0h32v32H0z" /> */}
    <path
      fill="var(--c-icon)"
      d="M16 26c-5.523 0-10-4.477-10-10S10.477 6 16 6s10 4.477 10 10-4.477 10-10 10Zm4.414-10-5.707-5.707-1.414 1.414L17.586 16l-4.293 4.293 1.414 1.414L20.414 16Z"
    />
  </svg>
  );
};

export default ICO_ArrowRight;
