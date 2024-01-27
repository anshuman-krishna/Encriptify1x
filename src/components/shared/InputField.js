import React from 'react';

const InputField = ({ value, onChange }) => {
  return (
    <input
      type="text"
      value={value}
      onChange={onChange}
      placeholder="Type something..."
      className="w-48 p-2 border border-black rounded bg-grey hover:border-0.5"
    />
  );
};

export default InputField;
