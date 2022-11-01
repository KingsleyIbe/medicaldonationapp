/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import React from 'react';

const TextField = ({
  name, title, a, type, error,
}) => (
  <>
    <div className="mb-4">
      <label className="block text-gray-700 text-sm text-left font-bold mb-2" htmlFor={name}>
        {title}
        {' '}
        {error && <p className="text-sm text-red-500 ">{error}</p>}
      </label>
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id={name}
        type={type}
        placeholder={title}
        {...a}
      />
    </div>
  </>
);

export default TextField;
