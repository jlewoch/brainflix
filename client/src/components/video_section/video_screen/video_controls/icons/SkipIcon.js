import React from "react";

const SkipIcon = ({skip}) => {
  return (
    <div onClick={skip} className='icon'>
      
      <svg
        width="19px"
        height="18px"
        viewBox="0 0 19 18"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xlink="http://www.w3.org/1999/xlink"
      >
        <title>Skip</title>
        <desc>Created with Sketch.</desc>
        <defs />
        <g
          id="Page-1"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="Video-Streaming-Control-States-Copy"
            transform="translate(-222.000000, -532.000000)"
            fill="#FFFFFF"
          >
            <g id="Skip" transform="translate(222.000000, 532.000000)">
              <polygon id="Triangle-2" points="15 9 0 18 0 0" />
              <rect id="Rectangle-4" x="16" y="0" width="3" height="18" />
            </g>
          </g>
        </g>
      </svg>
    </div>
  );
};

export default SkipIcon;
