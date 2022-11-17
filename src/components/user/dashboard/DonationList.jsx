import React from 'react';
import Data from './DonationTableData';

const DonationList = () => {
  const data = Data;

  return (
    <div>
      <table>
        <thead>
          <tr>
            <td>S/N</td>
            <td>FIRST NAME</td>
            <td>LAST NAME</td>
            <td>AGE</td>
            <td>GENDER</td>
            <td>BLOODGROUP</td>
            <td>LOCATION</td>
            <td>PHONE</td>
            <td>EMAIL</td>
            <td>DONATION ITEM</td>
            <td>DONATED BEFORE</td>
            <td>GENOTYPE</td>
            <td>WEIGHT</td>
          </tr>
        </thead>
        <tbody>
          {data && data.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.firstName}</td>
              <td>{item.lastName}</td>
              <td>{item.age}</td>
              <td>{item.gender}</td>
              <td>{item.bloodGroup}</td>
              <td>{item.location}</td>
              <td>{item.phone}</td>
              <td>{item.email}</td>
              <td>{item.donationItem}</td>
              <td>{item.donatedBefore}</td>
              <td>{item.genotype}</td>
              <td>{item.weight}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DonationList;
