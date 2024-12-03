import React from "react";

const Loading = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-tr from-[#0F172A] to-[#1E40AF]">
      {/* Rotating Planet */}
      <div className="relative w-20 h-20 bg-gradient-to-r from-[#0FF1F6] to-[#00D4FF] rounded-full animate-spin-slow">
        {/* Glow Effect */}
        <div className="absolute inset-0 bg-[#0F172A] rounded-full shadow-[0_0_30px_10px_#0FF1F6]"></div>

        {/* Orbiting Satellite */}
        <div className="absolute top-1/2 left-1/2 w-4 h-4 bg-[#0048ff] rounded-full shadow-md animate-orbit"></div>
      </div>

      {/* Animated Text */}
     
    </div>
  );
};

export default Loading;
