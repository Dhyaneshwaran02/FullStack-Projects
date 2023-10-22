import React, { useState } from 'react';
import avatar from '../assets/avatar.jpg';
import { Link } from 'react-router-dom';
import styles from '../styles/Username.module.css';
import { Toaster } from 'react-hot-toast';
import { useFormik } from 'formik';
import { profileValidation } from '../helper/validate';
import convertToBase64 from '../helper/convert';
import extend from "../styles/Profile.module.css"

export default function Register() {
  const [file, setFile] = useState();

  const formik = useFormik({
    initialValues: {
      firstName:'',
      lastName:'',
      email: '',
      mobile:'',
      address:''
    },
    validate: profileValidation,
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
      <div className={`${styles.gclass} ${extend.gclass}`}>
        <div className="title flex flex-col items-center">
          <h4 className="text-4xl md:text-5xl font-bold">Profile</h4>
          <span className="py-2 text-lg md:text-xl text-center text-gray-500">
            You can update the detail
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
            <div className='name flex w-3/4 gap-10'>
              <input {...formik.getFieldProps('firstName')} type="text" placeholder="FirstName" className={`${styles.text} ${styles.textbox}`} />
              <input {...formik.getFieldProps('lastName')} type="text" placeholder="LastName" className={`${styles.text} ${styles.textbox}`} />
            </div>

            <div className='name flex w-3/4 gap-10'>
              <input {...formik.getFieldProps('mobile')} type="number" placeholder="Mobile no" className={`${styles.text} ${styles.textbox}`} />
              <input {...formik.getFieldProps('email')} type="email" placeholder="Email" className={`${styles.text} ${styles.textbox}`} />
            </div>
            <div className='name flex w-3/4'>
            <input {...formik.getFieldProps('address')} type="number" placeholder="address" className={`${styles.text} ${styles.textbox}`} />
            </div>
            
            <button type="submit" className={`${styles.button} w-3/4 md:w-80`}>
              Register
            </button>
            
          </div>

          <div className="text-center py-2">
            <span className="text-gray-500">
              Come Back Later?
              <Link className="text-red-500" to="/">
                 Log Out
              </Link>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
}
