
import React from "react";

interface SectionHeaderProps {
  children: React.ReactNode;
  className?: string;
}

const SectionHeader = ({ children, className }: SectionHeaderProps) => (
  <div className={"relative inline-block w-full mb-4 " + (className || "")}>
    <h2
      className="text-4xl md:text-6xl font-extrabold tracking-tight text-center bg-gradient-to-r from-purple-400 via-pink-500 to-indigo-400 bg-clip-text text-transparent animate-fade-in"
      style={{ lineHeight: 1.1 }}
    >
      {children}
    </h2>
    {/* Animated gradient underline gesture */}
    <span
      className="absolute left-1/2 -translate-x-1/2 bottom-0 h-1 w-4/5 rounded-full bg-gradient-to-r from-purple-500 via-pink-400 to-indigo-400 animate-underline-gesture pointer-events-none"
    />
    <style>
      {`
      @keyframes underline-gesture {
        0% { width: 0; opacity:0; }
        10% { opacity:1;}
        100% { width: 80%; opacity:1;}
      }
      .animate-underline-gesture {
        animation: underline-gesture 1.2s cubic-bezier(.73,0,.28,1.01) 0.2s both;
      }
      `}
    </style>
  </div>
);

export default SectionHeader;
