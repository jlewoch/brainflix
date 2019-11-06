import React from "react";
import {Link} from 'react-router-dom';
const ContentUploadIcon = () => {
  return (
    <Link to='/publish' className='icon'>
      
      <svg
        width="36px"
        height="24px"
        viewBox="0 0 36 24"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xlink="http://www.w3.org/1999/xlink"
      >
        <title>Camera Upload</title>
        <desc>Created with Sketch.</desc>
        <defs />
        <g
          id="Symbols"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="Icon/Camera/Resting"
            transform="translate(0.000000, -5.000000)"
          >
            <g id="Camera-Upload">
              <rect
                id="Rectangle-8"
                fill="#888888"
                x="0"
                y="5"
                width="29.3333333"
                height="24"
                rx="2"
              />
              <polygon
                id="Triangle-4"
                fill="#888888"
                points="24 17.2857143 36 7 36 27.5714286"
              />
              <text
                id="+"
                fontFamily="Roboto-Bold, Roboto"
                fontSize="28"
                fontWeight="bold"
                letterSpacing="-0.466666758"
                fill="#FFFFFF"
              >
                <tspan x="7" y="26">
                  +
                </tspan>
              </text>
            </g>
          </g>
        </g>
      </svg>
    </Link>
  );
};

export default ContentUploadIcon;
