import React from "react";

const VolumeSlider = ({toggle}) => {
  return (
    <div onMouseLeave={toggle} className='volume-control-icon '>
      
      <svg
        width="60px"
        height="11px"
        viewBox="0 0 60 11"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xlink="http://www.w3.org/1999/xlink"
      >
        <title>Volume Slider</title>
        <desc>Created with Sketch.</desc>
        <defs />
        <g
          id="Volume-Slider"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >

          <rect
            id="Rectangle-5"
            fill="#FFFFFF"
            opacity="0.300000012"
            x="0"
            y="3"
            width="60"
            height="4"
          />
          <circle id="Oval-3" fill="#FFFFFF" cx="30.5" cy="5.5" r="5.5" pathLength="100"/>
          <rect
            id="Rectangle-5"
            fill="#FFFFFF"
            x="0"
            y="3"
            width="30.5"
            height="4"
          />
          
          
        </g>
      </svg>
    </div>
  );
};

export default VolumeSlider;
