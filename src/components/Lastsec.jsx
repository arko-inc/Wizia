import React from 'react';
import LaunchIcon from '@mui/icons-material/Launch';

const Lastsec = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-[#07292F] text-center p-8">
      <h1 className="text-[#0FF1F6] font-montserrat text-[20px] font-light mb-4 hover:text-[#0dcfe6] transition-colors duration-300">GET STARTED</h1>
      <h2 className="text-white text-[36px] hover:text-[#0FF1F6] transition-colors duration-300">
        <i className="font-medium">Embrace</i> <span className="font-extrabold text-[40px]">the new era of</span> <i className="font-medium">outbound</i>.
      </h2>
      <p className="text-white text-[20px] font-light mt-4 leading-relaxed hover:text-[#0FF1F6] transition-colors duration-300">
        Wizia lets you train, activate, and optimize aiDRs. <br />
        Take your outbound to new levels of performance and efficiency.
      </p>
      <button className="flex items-center mt-6 text-[#002228] bg-[#0FF1F6] rounded-full px-6 py-2 text-[16px] font-light hover:bg-[#0dcfe6] transform hover:scale-105 transition-all duration-300">
         Sign Up for the Beta <LaunchIcon className="ml-2"/>
      </button>
    </div>
  );
};

export default Lastsec;
