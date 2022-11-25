/* eslint-disable react/jsx-key */
import React, { useState, useEffect } from 'react';

const UserUpload = () => {
  const [images, setImage] = useState([]);
  const [imageUrls, setImageUrls] = useState([]);

  useEffect(() => {
    if (images.length < 1) return;
    const newImageUrls = [];
    images.forEach((image) => newImageUrls.push(URL.createObjectURL(image)));
    setImageUrls(newImageUrls);
  }, [images]);
  const onImageChange = (e) => {
    setImage([...e.target.files]);
  };
  return (
    <div>
      {imageUrls.map((imageSrc) => (
        <img src={imageSrc} alt="" className="rounded-[100%] max-w-[40px] mb-5" />
      ))}
      <input type="file" accept={images} onChange={onImageChange} />
    </div>
  );
};

export default UserUpload;
