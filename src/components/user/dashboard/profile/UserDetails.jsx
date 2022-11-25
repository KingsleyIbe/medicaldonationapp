import React, { useState } from 'react';

const UserDetails = () => {
  const [form, setForm] = useState(false);
  const [document, setDocument] = useState(false);
  const [others, setOthers] = useState(false);

  const displayForm = () => {
    setForm(true);
    setDocument(false);
    setOthers(false);
  };

  const displayDocument = () => {
    setDocument(true);
    setForm(false);
    setOthers(false);
  };

  const displayOthers = () => {
    setOthers(true);
    setForm(false);
    setDocument(false);
  };

  return (
    <div>
      <div className="flex flex-row gap-10 items-center">
        <button type="button" onClick={displayForm}>Form</button>
        <button type="button" onClick={displayDocument}>Documents</button>
        <button type="button" onClick={displayOthers}>others</button>
      </div>
      {form && (
        <form>
          <div>
            <label htmlFor="firstName">
              First Name
              <input type="text" placeholder="First Name" />
            </label>
          </div>
        </form>
      )}
      {document && (<h1>Document will appear here</h1>)}
      {others && (<h1>Others will appear here</h1>)}
    </div>
  );
};

export default UserDetails;
