import React from 'react';

const DonationList = () => {
  const data = localStorage.getItem('donationList') ? JSON.parse(localStorage.getItem('donationList')) : [];

  return (
    <div className="overflow-x-auto w-[100%] mt-10">
      <div className="font-bold">
        <h1>Available Donations</h1>
      </div>
      <table>
        <thead className="overflow-x-auto block font-bold">
          <tr>
            <td>Donation ID</td>
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
            <td>Contact User</td>
          </tr>
        </thead>
        <tbody className="overflow-x-auto block">
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
              <td><button type="button" className="bg-[A03] rounded-[8px] p-1 border border-1-solid">{item.btn}</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DonationList;
