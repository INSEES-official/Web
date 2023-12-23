import { motion } from "framer-motion";

const Yellow = () => {
  return (
    <motion.div drag dragSnapToOrigin>
      <svg
        width="200"
        height="297"
        viewBox="0 0 268 297"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_f_138_122)">
          <rect
            width="128"
            height="33.1042"
            transform="translate(70 193.896)"
            fill="#EEB80A"
            fillOpacity="0.5"
          />
        </g>
        <g filter="url(#filter1_b_138_122)">
          <path
            d="M130.5 117.389L130.5 -0.000229836"
            stroke="url(#paint0_linear_138_122)"
            strokeWidth="0.5"
          />
          <rect
            x="129"
            y="116.389"
            width="3"
            height="3"
            rx="1.5"
            fill="white"
          />
          <g filter="url(#filter2_b_138_122)">
            <rect
              x="84.5"
              y="118.389"
              width="92"
              height="96"
              rx="6"
              fill="black"
              fillOpacity="0.1"
            />
            <rect
              x="84.25"
              y="118.139"
              width="92.5"
              height="96.5"
              rx="6.25"
              stroke="#CACBCB"
              strokeOpacity="0.33"
              strokeWidth="0.5"
            />
            <rect
              x="99.5"
              y="133.389"
              width="62"
              height="66"
              rx="10"
              fill="#EBBA08"
            />
            <g filter="url(#filter3_d_138_122)">
              <rect
                x="104.5"
                y="137.389"
                width="52"
                height="58"
                rx="8"
                fill="#EBBA08"
                shapeRendering="crispEdges"
              />
              <path
                d="M130.5 156.389V162.389M130.5 162.389L125.5 170.389H135.5L130.5 162.389ZM130.5 176.389V170.389M125.5 162.389H135.5"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
          </g>
        </g>
        <defs>
          <filter
            id="filter0_f_138_122"
            x="0"
            y="123.896"
            width="268"
            height="173.104"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="35"
              result="effect1_foregroundBlur_138_122"
            />
          </filter>
          <filter
            id="filter1_b_138_122"
            x="4"
            y="-50"
            width="253"
            height="314.889"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feGaussianBlur in="BackgroundImageFix" stdDeviation="25" />
            <feComposite
              in2="SourceAlpha"
              operator="in"
              result="effect1_backgroundBlur_138_122"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_backgroundBlur_138_122"
              result="shape"
            />
          </filter>
          <filter
            id="filter2_b_138_122"
            x="54"
            y="87.8887"
            width="153"
            height="157"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feGaussianBlur in="BackgroundImageFix" stdDeviation="15" />
            <feComposite
              in2="SourceAlpha"
              operator="in"
              result="effect1_backgroundBlur_138_122"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_backgroundBlur_138_122"
              result="shape"
            />
          </filter>
          <filter
            id="filter3_d_138_122"
            x="86.5"
            y="119.389"
            width="92"
            height="98"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dx="2" dy="2" />
            <feGaussianBlur stdDeviation="10" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_138_122"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_138_122"
              result="shape"
            />
          </filter>
          <linearGradient
            id="paint0_linear_138_122"
            x1="130"
            y1="117.389"
            x2="130"
            y2="-0.000228882"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="white" />
            <stop offset="1" stopColor="#D9D9D9" stopOpacity="0.07" />
          </linearGradient>
        </defs>
      </svg>
    </motion.div>
  );
};

export default Yellow;
