/* eslint-disable react/jsx-key */
import React, { useState, useEffect } from 'react';
// import Axios from 'axios';
// import { v4 as uuidv4 } from 'uuid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

const UserUpload = () => {
  const [imageUrls, setImageUrls] = useState([]);
  // const [data, setData] = useState([]);
  const [image, setImage] = useState([]);
  // const [documents, setDocuments] = useState({
  //   id: data?.id,
  //   createdAt: data?.createdAt,
  //   url: image,
  //   name: [],
  //   userId: currentUser.userId,
  // });
  // localStorage.setItem('profileImage', JSON.stringify(imageUrls));

  // console.log(documents);
  console.log(imageUrls);

  useEffect(() => {
    if (image.length < 1) return;
    const newImageUrls = [];
    image.forEach((image) => newImageUrls.push(URL.createObjectURL(image)));
    setImageUrls(newImageUrls);
    localStorage.setItem('profileImage', JSON.stringify(imageUrls));
  }, [image]);

  // const url = 'https://62c2abb8ff594c656761de49.mockapi.io/userDocuments';
  // const fetchData = () => {
  //   Axios.post(url, image).then((res) => setData(res?.data));
  // };

  const onImageChange = (e) => {
    setImage([...e.target.files]);
    // setDocuments(image);
    // setDocuments((previousValues) => ({
    //   ...previousValues,
    //   [e.target.name]: e.target.files,
    // }));
    // fetchData();
  };

  // const userImage = localStorage.getItem('profileImage');
  // const profileImage = JSON.parse(userImage);

  return (
    <div className="border border-1-solid p-5 mb-10 w-[100%]">
      {imageUrls.length !== 0 ? (
        <div className="">
          <img src={imageUrls} alt="" className="rounded-[100%] border border-1-solid mb-5 w-[100px] h-[90px]" />
        </div>
      ) : (
        <div className="rounded-[100%] bg-[#ccc] border border-1-solid p-5 max-w-[100px] mb-5">
          <FontAwesomeIcon icon={faUser} className="text-[60px] opacity-[0.2] w-[100%] m-auto" />
        </div>
      )}
      <p className="opacity-[0.5]">Upload a different photo</p>
      <input type="file" accept={image} onChange={onImageChange} />
      {/* <div className="mt-[100px] border p-5">
        <div>
          <p className="opacity-[0.5]">Upload your medical history</p>
          <input type="file" accept={documents.url} onChange={onImageChange} />
        </div>
        <div className="my-5">
          <p className="opacity-[0.5]">Upload blood group test</p>
          <input type="file" accept={documents.url} onChange={onImageChange} />
        </div>
        <div>
          <p className="opacity-[0.5]">Upload other documents</p>
          <input type="file" accept={documents.url} onChange={onImageChange} />
        </div>
      </div> */}
    </div>
  );
};

export default UserUpload;
