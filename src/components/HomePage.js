import React from 'react';
import Button from './components/shared/Button';
import InputField from './components/shared/InputField';

const MyComponent = () => {
  const handleClick = () => {
    console.log('Button clicked!');
  };

  const handleChange = (e) => {
    console.log('Input value:', e.target.value);
    //handle state or other logic based on input changes
  };

  return (
    <div>
      <Button onClick={handleClick}>Click me</Button>
      <InputField onChange={handleChange} />
    </div>
  );
};

export default MyComponent;
