import React from 'react';

const Button = (props) => {
  return (
    <div>
      <button className="m-2 p-2 bg-slate-200 rounded-xl italic">
        {props.name}
      </button>
    </div>
  );
};

export default Button;
