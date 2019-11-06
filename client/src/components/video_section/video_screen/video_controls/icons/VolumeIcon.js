import React from "react";

const VolumeIcon = ({toggle}) => {
  return (
    <div onClick={toggle} className='volume-control-icon volume'>
      
      <svg
        width="15px"
        height="20px"
        viewBox="0 0 15 20"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xlink="http://www.w3.org/1999/xlink"
      >
        <title>Volume</title>
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
            transform="translate(-280.000000, -531.000000)"
            fill="#FFFFFF"
          >
            <g id="Volume" transform="translate(280.000000, 531.000000)">
              <g id="Group-2">
                <rect id="Rectangle-5" x="0" y="7" width="6" height="6" />
                <polygon id="Triangle-3" points="0 10 10 0 10 20" />
                <path
                  d="M17.5,11.5 C17.5,9.84314575 15.709139,8.5 13.5,8.5 C11.290861,8.5 9.5,9.84314575 9.5,11.5 C12.6941532,11.5 14.6445565,11.5 17.5,11.5 Z"
                  id="Oval"
                  transform="translate(13.500000, 10.000000) rotate(-270.000000) translate(-13.500000, -10.000000) "
                />
              </g>
            </g>
          </g>
        </g>
      </svg>
    </div>
  );
};

export default VolumeIcon;
