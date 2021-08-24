
import React, { useState } from 'react';
import './form.css';
import FormSignup from './formsignup';
import FormSuccess from './success';

const Form = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <>
      <div className='form-container'>
        <span className='close-btn'>×</span>
        {/* <div className='form-content-left'>
         

           <h1>This is my first Sign up Page</h1>
        </div>  */}
        {!isSubmitted ? (
          <FormSignup submitForm={submitForm} />
        ) : (
          <FormSuccess />
        )}
      </div>
    </>
  );
};

export default Form;


