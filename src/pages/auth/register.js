/* eslint-disable react/style-prop-object */
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import AuthMain from '../../components/auth';
import SubmitButton from '../../components/buttons';
import Header from '../../components/common/Header';
import SelectField from '../../components/selectField';
import TextField from '../../components/textField';
import roles from '../../utils/enums';

const Register = () => {
  const { handleSubmit, register, formState: { errors } } = useForm();
  const [formData, setFormData] = useState({
    username: '',
    fullname: '',
    email: '',
    password: '',
    role: '',
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
      <Header />
      <AuthMain>
        <div>
          <h2 className="mt-6 text-left text-3xl tracking-tight font-bold text-regal-blue">
            Create an Account
          </h2>
        </div>
        <form
          className="mt-8 space-y-6 text-white lg:text-black"
          action="#"
          method="POST"
          onSubmit={handleSubmit(submitReg)}
        >
          <TextField
            name="fullname"
            type="fullname"
            title="Full Name"
            error={errors?.fullname?.type}
            a={register('fullname', {
              required: true,
              onChange: (e) => {
                handleOnChange(e);
              },
            })}
          />
          <TextField
            name="username"
            type="username"
            title="Username"
            error={errors?.username?.type}
            a={register('username', {
              required: true,
              onChange: (e) => {
                handleOnChange(e);
              },
            })}
          />
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
          <SelectField
            name="role"
            type="role"
            title="Role"
            error={errors?.role?.type}
            a={register('role', {
              required: true,
              onChange: (e) => {
                handleOnChange(e);
              },
            })}
            array={roles}
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
          <SubmitButton
            title="Sign Up"
            style="justify-center w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          />
        </form>
        <div className="text-center mt-4">
          <p>
            <span className="text-gray-400">Have an account?</span>
&nbsp;
            <Link to="/login">Login</Link>
          </p>
        </div>
      </AuthMain>
    </>
  );
};

export default Register;
