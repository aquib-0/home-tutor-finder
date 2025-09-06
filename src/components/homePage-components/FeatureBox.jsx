import React from 'react'

const FeatureBox = ({ icon, heading, para }) => {
  return (
    <div className="w-[250px] h-[250px] rounded-md bg-gray-100 flex flex-col p-3 items-center gap-y-3">
      <div className="w-[60px] h-[60px] rounded-full bg-purple-300 flex justify-center items-center">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-center">{heading}</h3>
      <p className="text-gray-400 text-center">{para}</p>
    </div>
  );
};

export default FeatureBox