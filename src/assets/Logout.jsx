import * as React from "react";
const SVGComponent = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={18}
    height={18}
    viewBox="0 0 18 18"
    {...props}
  >
    <path
      id="icons8-logout-rounded"
      d="M13,4a9,9,0,1,0,7.054,14.58A.675.675,0,1,0,19,17.742a7.65,7.65,0,1,1,0-9.483.675.675,0,1,0,1.058-.838A8.984,8.984,0,0,0,13,4Zm5.618,5.618a.675.675,0,0,0-.47,1.159l1.547,1.547-9.169-.008a.675.675,0,1,0,0,1.35l9.172.008-1.549,1.549a.675.675,0,1,0,.954.954l2.7-2.7a.675.675,0,0,0,0-.954l-2.7-2.7a.675.675,0,0,0-.484-.2Z"
      transform="translate(-4 -4)"
      fill="#f44f5a"
    />
  </svg>
);
export default SVGComponent;
