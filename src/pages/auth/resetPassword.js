/* eslint-disable react/style-prop-object */
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import AuthMain from '../../components/auth';
import SubmitButton from '../../components/buttons';
import TextField from '../../components/textField';

const ResetPassword = () => {
  const { handleSubmit, register, formState: { errors } } = useForm();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    comfirmPassword: '',
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
            Reset Password
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
          <TextField
            name="password"
            title="Password"
            type="password"
            error={errors?.password?.type}
            a={register('password', {
              required: true,
              onChange: (e) => {
                handleOnChange(e);
              },
            })}
          />
          <TextField
            name="comfirmPassword"
            title="Comfirm Password"
            type="comfirmPassword"
            error={errors?.comfirmPassword?.type}
            a={register('comfirmPassword', {
              required: true,
              onChange: (e) => {
                handleOnChange(e);
              },
            })}
          />
          <SubmitButton
            title="Reset Password"
            style="justify-center w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          />
        </form>
      </AuthMain>
    </>
  );
};

export default ResetPassword;
