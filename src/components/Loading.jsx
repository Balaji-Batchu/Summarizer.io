import React from "react";

function Loading() {
  return (
    <div className="flex flex-col items-center justify-center h-96">
      <div className="w-10 h-10 border-4 border-violet-500 rounded-full animate-spin"></div>
      <div className="font-bold text-gray-800 my-6">Loading. . .</div>
    </div>
  );
}

export default Loading;
