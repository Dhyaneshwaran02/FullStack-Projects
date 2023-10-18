import React, { useState } from 'react';
import avatar from '../assets/avatar.jpg';
import { Link } from 'react-router-dom';
import styles from '../styles/Username.module.css';
import { Toaster } from 'react-hot-toast';
import { useFormik } from 'formik';
import { registerValidation } from '../helper/validate';
import convertToBase64 from '../helper/convert';

export default function Register() {
  const [file, setFile] = useState();

  const formik = useFormik({
    initialValues: {
      email: '',
      username: '',
      password: '',
    },
    validate: registerValidation,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async (values) => {
      values = await Object.assign(values, { profile: file || '' });
      console.log(values);
    },
  });

  const onUpload = async (e) => {
    const base64 = await convertToBase64(e.target.files[0]);
    setFile(base64);
  };

  return (
    <div className="container mx-auto flex justify-center items-center min-h-screen">
      <Toaster position="top-center" reverseOrder={false}></Toaster>
      <div className={`${styles.gclass} w-full md:w-1/2 p-4`}>
        <div className="title flex flex-col items-center">
          <h4 className="text-4xl md:text-5xl font-bold">Register</h4>
          <span className="py-2 text-lg md:text-xl text-center text-gray-500">
            Happy to Join You.
          </span>
        </div>

        <form className="py-1" onSubmit={formik.handleSubmit}>
          <div className="profile flex justify-center py-2">
            <label htmlFor="profile">
              <img src={file || avatar} alt="avatar" className="w-32 h-32 md:w-48 md:h-48" />
            </label>
            <input onChange={onUpload} type="file" id="profile" name="profile" />
          </div>

          <div className="textbox flex flex-col items-center gap-4">
            <input {...formik.getFieldProps('email')} type="email" placeholder="Email*" className={styles.text} />
            <input {...formik.getFieldProps('username')} type="text" placeholder="Username*" className={styles.text} />
            <input {...formik.getFieldProps('password')} type="password" placeholder="Password*" className={styles.text} />
            <button type="submit" className={`${styles.button} w-full md:w-80`}>
              Register
            </button>
          </div>

          <div className="text-center py-2">
            <span className="text-gray-500">
              Already Registered?
              <Link className="text-red-500" to="/">
                Login Now
              </Link>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
}
