import React, { useState } from 'react';
import DisplayDetails from './DisplayDetails';

const UserDetails = () => {
  const [form, setForm] = useState(true);
  const [document, setDocument] = useState(false);
  const [others, setOthers] = useState(false);
  const [bio, setBio] = useState(false);

  const displayForm = () => {
    setForm(true);
    setDocument(false);
    setOthers(false);
    setBio(false);
  };

  const displayDocument = () => {
    setDocument(true);
    setForm(false);
    setOthers(false);
    setBio(false);
  };

  const displayBio = () => {
    setBio(true);
    setDocument(false);
    setForm(false);
    setOthers(false);
  };

  const displayOthers = () => {
    setOthers(true);
    setForm(false);
    setDocument(false);
    setBio(false);
  };

  return (
    <div>
      <div className="flex flex-row gap-10 items-center bg-[#ccc] p-5 opacity-[0.6]">
        <button type="button" onClick={displayForm}>Form</button>
        <button type="button" onClick={displayDocument}>Documents</button>
        <button type="button" onClick={displayBio}>User Bio</button>
        <button type="button" onClick={displayOthers}>others</button>
      </div>
      {form && (
        <form className="mb-10 border border-solid-1 p-5">
          <div className="flex flex-row gap-5 mb-5">
            <label htmlFor="firstName" className="flex flex-col">
              First Name
              <input type="text" placeholder="First Name" className="border border-1-solid rounded-[8px] px-2 py-1" />
            </label>
            <label htmlFor="lastName" className="flex flex-col">
              Last Name
              <input type="text" placeholder="Last Name" className="border border-1-solid rounded-[8px] px-2 py-1" />
            </label>
          </div>
          <div className="flex flex-row gap-5 mb-5">
            <label htmlFor="email" className="flex flex-col">
              Email
              <input type="text" placeholder="example@email.com" className="border border-1-solid rounded-[8px] px-2 py-1" />
            </label>
            <label htmlFor="location" className="flex flex-col">
              Location
              <input type="text" placeholder="Lagos, Nigeria" className="border border-1-solid rounded-[8px] px-2 py-1" />
            </label>
          </div>
          <div className="flex flex-row gap-5 mb-5">
            <label htmlFor="gender" className="flex flex-col">
              Gender
              <input type="text" placeholder="eg. male" className="border border-1-solid rounded-[8px] px-2 py-1" />
            </label>
            <label htmlFor="dateOfBirth" className="flex flex-col">
              Date of Birth
              <input type="date" placeholder="eg. 31-01-2022" className="border border-1-solid rounded-[8px] px-2 py-1" />
            </label>
          </div>
          <div className="flex flex-row gap-5 mb-5">
            <label htmlFor="genotype" className="flex flex-col">
              Genotype
              <input type="text" placeholder="eg. AA" className="border border-1-solid rounded-[8px] px-2 py-1" />
            </label>
            <label htmlFor="bloodGroup" className="flex flex-col">
              Blood Group
              <input type="text" placeholder="eg. O+" className="border border-1-solid rounded-[8px] px-2 py-1" />
            </label>
          </div>
          <div className="flex flex-row gap-10 items-center">
            <button type="button" className="bg-[#17a2b8] text-[#fff] hover:bg-[#fff] hover:text-[#17a2b8] hover:border px-[21px] py-[12px] rounded-[8px]">Save</button>
            <button type="button" className="bg-[#A03] text-[#fff] hover:bg-[#fff] hover:text-[#A03] hover:border px-[21px] py-[12px] rounded-[8px]">View Bio</button>
          </div>
        </form>
      )}
      {document && (<div className="mb-10 border border-solid-1 p-5"><h1>Document will appear here</h1></div>)}
      {bio && (<div className="mb-10 border border-solid-1 p-5 w-[100%]"><DisplayDetails /></div>)}
      {others && (<div className="mb-10 border border-solid-1 p-5"><h1>Others will appear here</h1></div>)}
    </div>
  );
};

export default UserDetails;
