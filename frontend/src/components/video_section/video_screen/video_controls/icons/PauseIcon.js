import React from "react";

const PauseIcon = ({pause}) => {
  return (
    <div onClick={pause} className='icon'>
      
      <svg
        width="14px"
        height="20px"
        viewBox="0 0 14 20"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xlink="http://www.w3.org/1999/xlink"
      >
        <title>Pause</title>
        <desc>Created with Sketch.</desc>
        <defs />
        <g
          id="Pause"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <rect
            id="Rectangle-4"
            fill="#FFFFFF"
            x="0"
            y="0"
            width="5"
            height="20"
          />
          <rect
            id="Rectangle-4"
            fill="#FFFFFF"
            x="9"
            y="0"
            width="5"
            height="20"
          />
        </g>
      </svg>
    </div>
  );
};

export default PauseIcon;
