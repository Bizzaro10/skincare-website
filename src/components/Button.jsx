import React from "react";

const Button = ({ direction = "left", variant = "light", onClick }) => {
    return (
        <button
            onClick={onClick}
            className="w-20 h-20 relative flex items-center justify-center transition-all group"
        >
            {/* Background Circle */}
            <svg
                width="80"
                height="80"
                viewBox="0 0 80 80"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={`absolute inset-0 transition-colors
          ${
                    variant === "light"
                        ? "text-white group-hover:text-[#2D3B36]"
                        : "text-[#2D3B36] group-hover:text-white"
                }`}
            >
                <path
                    d="M40 80C62.0914 80 80 62.0914 80 40C80 17.9086 62.0914 0 40 0C17.9086 0 0 17.9086 0 40C0 62.0914 17.9086 80 40 80Z"
                    fill="currentColor"
                    className={variant === "light" ? "stroke-[#2D3B36] stroke-[1]" : ""}
                />
            </svg>

            {/* Arrow Icon */}
            <svg
                width="48"
                height="12"
                viewBox="0 0 48 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={`relative z-10 transition-transform
          ${direction === "right" ? "rotate-0" : "rotate-180"}
          ${
                    variant === "light"
                        ? "text-[#2D3B36] group-hover:text-white"
                        : "text-white group-hover:text-[#2D3B36]"
                }`}
            >
                <path
                    d="M0 6h42M37 1l5 5-5 5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>
        </button>
    );
};

export default Button;
