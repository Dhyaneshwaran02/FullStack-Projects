import React from 'react';
import avatar from "../assets/avatar.jpg"
import { Link } from 'react-router-dom';
import styles from '../styles/Username.module.css';
import {Toaster} from 'react-hot-toast';
import {passwordValidate} from '../helper/validate'

export default function Recovery() {

  return (
    <div className="container mx-auto flex justify-center items-center min-h-screen">
      <Toaster position='top-center' reverseOrder={false}></Toaster>
      <div className={`${styles.gclass} w-full md:w-1/2 p-4`}>
        <div className='title flex flex-col items-center'>
          <h4 className='text-4xl md:text-5xl font-bold'>Recovery</h4>
          <span className='py-2 text-lg md:text-xl text-center text-gray-500'>
            Enter OTP to Recover Password.
          </span>
        </div>

        <form className='py-20'>
          <div className='profile flex justify-center py-2'>
            
          </div>

          <div className='textbox flex flex-col items-center gap-4'>
            <div className='input text-center'>
              <span className='py-4 text-sm text-left text-gray-500'>
                Enter 6 Digit OTP Sent TO Your Email Address
              </span>
              <input type="password" placeholder='OTP' className={styles.text} />
            </div>
            
            <button type="submit" className={`${styles.button} w-full md:w-80`}>Sign In</button>

          </div>

          <div className='text-center py-2'>
            <span className='text-gray-500'>
              Can't Get OTP?<button className='text-red-500'> Resend</button>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
}
