import React from "react";

const ReplayIcon = ({play}) => {
  return (
    <div onClick={play} className='icon'>
      
      <svg
        width="17px"
        height="21px"
        viewBox="0 0 17 21"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xlink="http://www.w3.org/1999/xlink"
      >
        <title>Replay</title>
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
            transform="translate(-154.000000, -529.000000)"
          >
            <g id="Replay" transform="translate(155.000000, 529.000000)">
              <g id="Group-2">
                <polygon
                  id="Triangle-2"
                  fill="#FFFFFF"
                  points="2.5 5 7.5 0.5 7.5 9.5"
                />
                <path
                  d="M7.5,20 C11.6421356,20 15,16.6421356 15,12.5 C15,8.35786438 11.6421356,5 7.5,5 C3.35786438,5 0,8.35786438 0,12.5"
                  id="Oval-5"
                  stroke="#FFFFFF"
                  strokeWidth="2"
                  transform="translate(7.500000, 12.500000) rotate(-270.000000) translate(-7.500000, -12.500000) "
                />
              </g>
            </g>
          </g>
        </g>
      </svg>
    </div>
  );
};

export default ReplayIcon;
