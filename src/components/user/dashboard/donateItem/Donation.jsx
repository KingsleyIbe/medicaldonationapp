import React from 'react';
import PropTypes from 'prop-types';

const Donation = (props) => {
  const {
    donation: { firstName },
  } = props;

  return (
    <li>
      <div />
      <input
        type="text"
        value={firstName}
      />
    </li>
  );
};

Donation.propTypes = {
  donation: PropTypes.shape({
    id: PropTypes.string,
    firstName: PropTypes.string,
  }).isRequired,
};

export default Donation;
