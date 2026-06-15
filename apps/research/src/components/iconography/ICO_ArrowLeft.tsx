import { SVGProps } from "react";

const ICO_ArrowLeft = (props: SVGProps<SVGSVGElement>) => {
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
      d="M16 6c5.523 0 10 4.477 10 10s-4.477 10-10 10S6 21.523 6 16 10.477 6 16 6Zm-4.414 10 5.707 5.707 1.414-1.414L14.414 16l4.293-4.293-1.414-1.414L11.586 16Z"
    />
  </svg>
  );
};

export default ICO_ArrowLeft;
