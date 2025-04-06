import React from 'react'

export const MaoxiuLogo = ({ className = '', ...props }) => {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <circle cx="16" cy="16" r="16" fill="currentColor" />
      <path
        d="M8 10L12 6L16 10L20 6L24 10"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M8 10C8 10 8 22 16 22C24 22 24 10 24 10"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <circle cx="12" cy="14" r="2" fill="white" />
      <circle cx="20" cy="14" r="2" fill="white" />
      <path
        d="M13 18H19"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  )
} 