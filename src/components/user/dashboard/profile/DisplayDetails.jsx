import React from 'react';

const DisplayDetails = () => {
  const data = 'First Name: ';
  return (
    <div>
      <ul>
        <li>
          { data }
          {' '}
        </li>
        <li>Last Name: </li>
        <li>Email: </li>
        <li>Location: </li>
        <li>Gender: </li>
        <li>Date of Birth: </li>
        <li>Genotype: </li>
        <li>Blood Group: </li>
        <li>Hiv state: </li>
      </ul>
    </div>
  );
};

export default DisplayDetails;
