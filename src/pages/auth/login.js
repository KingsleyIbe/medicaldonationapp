/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/style-prop-object */
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import AuthMain from '../../components/auth';
import SubmitButton from '../../components/buttons';
import Header from '../../components/common/Header';
import TextField from '../../components/textField';

const Login = () => {
  const { handleSubmit, register, formState: { errors } } = useForm();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
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
            Login
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
          <div className="flex justify-between items-center mb-6">
            <div className="form-group form-check">
              <input
                type="checkbox"
                className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                id="exampleCheck2"
              />
              <label
                className="form-check-label inline-block text-gray-800"
                htmlFor="exampleCheck2"
              >
                Remember me

              </label
                            >
            </div>
            <Link to="/forgotpassword" class="text-gray-800">Forgot password?</Link>
          </div>
          <SubmitButton
            title="Login"
            style="justify-center w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          />
        </form>
        <div className="text-center mt-4">
          <p>
            <span className="text-gray-400">Don&#39;t have an account?</span>
&nbsp;
            <Link to="/register">Register</Link>
          </p>
        </div>
      </AuthMain>
    </>
  );
};

export default Login;
