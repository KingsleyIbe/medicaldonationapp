/* eslint-disable react/style-prop-object */
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import AuthMain from '../../components/auth';
import SubmitButton from '../../components/buttons';
import TextField from '../../components/textField';

const ForgotPassword = () => {
  const { handleSubmit, register, formState: { errors } } = useForm();
  const [formData, setFormData] = useState({
    email: '',
  });

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value ?? JSON.parse(value),
    });
  };

  const submitReg = () => {
    console.log(formData);
  };

  return (
    <>

      <AuthMain>
        <div>
          <h2 className="mt-6 text-left text-3xl tracking-tight font-bold text-regal-blue">
            Forgot Password
          </h2>
        </div>
        <form
          className="mt-8 space-y-6 text-white lg:text-black"
          action="#"
          method="POST"
          onSubmit={handleSubmit(submitReg)}
        >
          <TextField
            name="email"
            type="email"
            title="Email address"
            error={errors?.email?.type}
            a={register('email', {
              required: true,
              onChange: (e) => {
                handleOnChange(e);
              },
            })}
          />
          <SubmitButton
            title="Submit"
            style="justify-center w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          />
        </form>
        <div className="text-center mt-3">
          <p>
            <span className="text-gray-400">Remember Password?</span>
&nbsp;
            <Link to="/Login">Login</Link>
          </p>
        </div>

      </AuthMain>
    </>
  );
};

export default ForgotPassword;
