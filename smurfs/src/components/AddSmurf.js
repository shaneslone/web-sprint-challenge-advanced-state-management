import React from 'react';
import { useForm } from '../hooks/useForm';

export default function AddSmurf(props) {
  const initialFormValues = {
    name: '',
    age: 0,
    height: '',
  };
  const [values, handleChanges, clearForm] = useForm(initialFormValues);

  const handleSubmit = e => {
    e.preventDefault();
    props.addSmurf(values);
    clearForm(e);
  };

  return (
    <div>
      <form>
        <div>
          <label>
            <span>Name:</span>
            <input
              name='name'
              type='text'
              value={values.name}
              onChange={handleChanges}
            />
          </label>
        </div>
        <div>
          <label>
            <span>Age:</span>
            <input
              name='age'
              type='number'
              value={values.age}
              onChange={handleChanges}
            />
          </label>
        </div>
        <div>
          <label>
            <span>Height:</span>
            <input
              name='height'
              type='text'
              value={values.height}
              onChange={handleChanges}
            />
          </label>
        </div>
        <button onClick={handleSubmit}>Add Smurf</button>
        <button onClick={clearForm}>Clear Form</button>
      </form>
    </div>
  );
}
