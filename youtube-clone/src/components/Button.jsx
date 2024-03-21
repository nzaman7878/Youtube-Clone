import React from 'react';

function Button({ list, ...restProps }) {
  return (
    <div>
      {list.map((label, index) => (
        <button key={index} className="px-5 py-2 m-2 bg-gray-200 rounded-lg" {...restProps}>
          {label}
        </button>
      ))}
    </div>
  );
}

export default Button;
