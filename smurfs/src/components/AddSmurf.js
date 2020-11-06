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
  };

  return (
    <div>
      <form>
        <div>
          <label>
            Name:
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
            Age:
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
            Height:
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
