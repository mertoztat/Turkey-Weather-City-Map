import Icon from "@/components/Icon";
import React from "react";

const City = () => {
  return (
    <div className="mt-10 w-full p-8 border-2 border-white flex justify-center items-center ">
      <div className="w-[500px]  h-96  flex flex-col justify-center items-center  rounded-lg bg-gray-900 text-white">
        <div>izmir & Icon</div>
        <div className="border-2 border-red-400 ">35C Yağmurlu</div>
        <div>
          <Icon id={800} />
        </div>
      </div>
    </div>
  );
};

export default City;
