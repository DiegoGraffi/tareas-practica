import React from "react";

const Error = ({ mensaje }) => {
  return (
    <div className="bg-red-600 text-white  uppercase text-center p-3 font-bold mb-3 rounded-md">
      <p>{mensaje}</p>
    </div>
  );
};

export default Error;
