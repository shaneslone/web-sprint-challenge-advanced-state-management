import React from 'react';

export default function Smurf(props) {
  const { name, age, height } = props.smurf;
  return (
    <div>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <p>Height: {height}</p>
    </div>
  );
}
