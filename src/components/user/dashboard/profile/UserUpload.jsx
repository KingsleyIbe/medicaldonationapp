/* eslint-disable react/jsx-key */
import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

const UserUpload = () => {
  const [image, setImage] = useState([]);
  const [imageUrls, setImageUrls] = useState([]);

  useEffect(() => {
    if (image.length < 1) return;
    const newImageUrls = [];
    image.forEach((image) => newImageUrls.push(URL.createObjectURL(image)));
    setImageUrls(newImageUrls);
  }, [image]);

  const onImageChange = (e) => {
    setImage([...e.target.files]);
  };

  return (
    <div className="border border-1-solid p-5">
      {imageUrls.length !== 0 ? imageUrls.map((imageSrc) => (
        <div className="">
          <img src={imageSrc} alt="" className="rounded-[100%] border border-1-solid mb-5 max-w-[150px] max-h-[80px]" />
        </div>
      )) : (
        <div className="rounded-[100%] bg-[#ccc] border border-1-solid p-5 max-w-[100px] mb-5">
          <FontAwesomeIcon icon={faUser} className="text-[60px] opacity-[0.2] w-[100%] m-auto" />
        </div>
      )}
      <p className="opacity-[0.5]">Upload a different photo</p>
      <input type="file" accept={image} onChange={onImageChange} />
    </div>
  );
};

export default UserUpload;
