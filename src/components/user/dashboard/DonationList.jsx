import React from 'react';
import PropTypes from 'prop-types';
import Donation from './Donation';

const DonationList = (props) => {
  const {
    donations,
  } = props;

  return (
    <ul>
      {donations?.map((donation) => (
        <Donation
          key={donation.id}
          todo={donation}
        />
      ))}
    </ul>
  );
};

DonationList.propTypes = {
  donations: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      firstName: PropTypes.string,
    }),
  ).isRequired,
};

export default DonationList;
