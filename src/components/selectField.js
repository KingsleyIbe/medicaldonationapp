/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import React from 'react';
import { v4 as uuidv4 } from 'uuid';

const SelectField = ({
  name, title, a, type, error, array,
}) => (
  <>

    <label className="block text-gray-700 text-sm text-left font-bold " htmlFor={name}>
      {title}
      {' '}
      {error && <p className="text-sm text-red-500 ">{error}</p>}
    </label>
    <select
      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      id={name}
      type={type}
      placeholder={title}
      {...a}
    >
      <option value="">Select...</option>
      {
      array && array.length > 0 && array.map((array) => (
        <option value={array.id} key={uuidv4}>
          {array.name}
        </option>
      ))
}
    </select>
  </>
);

export default SelectField;
