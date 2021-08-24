import { useState, useEffect } from 'react';

const initialState = {
  username: '',
  email: '',
  password: '',
  password2: '',
  mobileNo:'',
  age:'',
  address:''
}

const useForm = (callback, validate) => {
  const [values, setValues] = useState(initialState);
  
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const clearState = () => {
    console.log(values);
    setValues({ ...initialState });
  };
  
  const handleChange = e => {
    const { name, value } = e.target;
    //console.log(name,value);
    setValues({
      ...values,
      [name]: value
    });
  };
  

  const handleSubmit = e => {
    e.preventDefault();
    console.log(values);
    console.log(e);
    // clearState();
    setErrors(validate(values));
    setIsSubmitting(true);
  };
 

  useEffect(
    () => {
      if (Object.keys(errors).length === 0 && isSubmitting) {
        callback();
      }
    },
    [errors]
  );

  return { handleChange,handleSubmit,clearState, values, errors };
};

export default useForm;