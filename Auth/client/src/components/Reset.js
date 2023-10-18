import React from 'react';
import avatar from "../assets/avatar.jpg"
import { Link } from 'react-router-dom';
import styles from '../styles/Username.module.css';
import {Toaster} from 'react-hot-toast';
import {useFormik} from 'formik';
import {passwordValidate} from '../helper/validate'
import {resetPasswordValidation} from '../helper/validate'

export default function Reset() {

  const formik=useFormik({
    initialValues:{
      password:'',
      confirm_pwd:''
    },
    validate: resetPasswordValidation,
    validateOnBlur:false,
    validateOnChange:false,
    onSubmit: async values=>{
      console.log(values)
    }
  })

  return (
    <div className="container mx-auto flex justify-center items-center min-h-screen">
      <Toaster position='top-center' reverseOrder={false}></Toaster>
      <div className={`${styles.gclass} w-full md:w-1/2 p-4`}>
        <div className='title flex flex-col items-center'>
          <h4 className='text-4xl md:text-5xl font-bold'>Reset</h4>
          <span className='py-2 text-lg md:text-xl text-center text-gray-500'>
            Enter New Password.
          </span>
        </div>

        <form className='py-5' onSubmit={formik.handleSubmit}>

          <div className='textbox flex flex-col items-center gap-4'>
            <input {...formik.getFieldProps('password')}type="password" placeholder='New Password' className={styles.text} />
            <input {...formik.getFieldProps('confirm_pwd')}type="password" placeholder='Repeat Password ' className={styles.text} />
            <button type="submit" className={`${styles.button} w-full md:w-80`}>Sign In</button>

          </div>

        </form>
      </div>
    </div>
  );
}
