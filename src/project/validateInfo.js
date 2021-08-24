export default function validateInfo(values) {
    let errors = {};
  
    if (!values.username.trim()) {
      errors.username = 'Username required';
    }
    else if (values.username.length >101) {
      errors.username = 'useranme needs to be 100 charactres';
    }
  
    // else if (!/^[A-Za-z]+/.test(values.name.trim())) {
    //   errors.name = 'Enter a valid name';
    // }
  
    if (!values.email) {
      errors.email = 'Email required';
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = 'Email address is invalid';
    }
    if (!values.password) {
      errors.password = 'Password is required';
    } else if (values.password.length < 6) {
      errors.password = 'Password needs to be 6 characters or more';
    }
  
    if (!values.password2) {
      errors.password2 = 'Password is required';
    } else if (values.password2 !== values.password) {
      errors.password2 = 'Passwords do not match';
    }
    //console.log("mobileno " , values.mobileNo, "  ",values.mobileNo.length);
    if (!values.mobileNo) {
      errors.mobileNo = 'MobileNo is required';
    } else if (values.mobileNo.length !=10) {
      errors.mobileNo = 'mobileNo needs to be 10 Number or more';
    }
    //console.log("errors ",errors);
    if (!values.age) {
      errors.age = 'Age is required';
    } else if (values.age >85) {
      errors.age = 'Age needs to be 2 digits ';
    }
    if (!values.address) {
      errors.address = 'Address is required';
    } else if (values.address.length >=201) {
      errors.address = 'address can be be 200 characters or more';
    }
    return errors;
  }