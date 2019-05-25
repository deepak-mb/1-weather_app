import React from "react";

const Error = props => {
  return (
    <div>
      <h5 className="text-danger my-2">{props.message}</h5>
    </div>
  );
};

export default Error;
