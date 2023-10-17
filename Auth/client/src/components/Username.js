import React from 'react';
import avatar from "../assets/avatar.jpg"
import { Link } from 'react-router-dom';
import styles from '../styles/Username.module.css';

export default function Username() {
  return (
    <div className="container mx-auto flex justify-center items-center h-screen">
      <div className={`${styles.gclass}`}>
        <div className='title flex flex-col items-center'>
          <h4 className='text-4xl font-bold'>Hello Again!</h4>
          <span className='py-2 text-lg text-center text-gray-500'>
            Explore More by Connecting with Us.
          </span>
        </div>

        <form className='py-1'>
          <div className='profile flex justify-center py-2'>
            <img src={avatar} alt="avatar" className="max-w-32 max-h-32" />
          </div>

          <div className='textbox flex flex-col items-center gap-4'>
            <input type="text" placeholder='username' />
            <button type="submit">Let's Go</button>
          </div>

          <div className='text-center py-2'>
            <span className='text-gray-500'>Not a Member<Link className='text-red-500' to='/register'>Register Now</Link></span>
          </div>
        </form>
      </div>
    </div>
  );
}
