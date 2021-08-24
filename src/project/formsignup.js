import React from 'react';
import validate from './validateInfo';
import useForm from './useform';
import './form.css';
import { Paper,Grid,Avatar,Button,TextField,Typography,Link} from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AppBar from '@material-ui/core/AppBar';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));


const paperstyle={padding:20, hight:'70vh', width:'280', margin:'20px auto', backgroundColor:"#9e9e9e"}
const avatarStyle={backgroundColor:"green", margin:10}
const btnstyle={margin:'8px 0'}
const FormSignup = ({ submitForm }) => {
    const { handleChange, handleSubmit,clearState,values, errors } = useForm(
      submitForm,
       //console.log(submitForm),
       validate
      
     );
     const classes = useStyles();
  return(
    <Grid>
      <Paper elevarion={10}  style={paperstyle}>
      
      <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Login Page
          </Typography>
        </Toolbar>
      </AppBar>
    </div>

      <Grid align="center" >
      <Avatar style={avatarStyle}><LockOutlinedIcon/></Avatar>
                    <h2>Sign In</h2>
      </Grid>
      <TextField 
      label='Username'
       placeholder='Enter username'
       name='username' fullWidth required
       value={values.username}
       onChange={handleChange}
       />
       {errors.username && <p>{errors.username}</p>}
      <TextField 
      label='email' 
      placeholder='Enter email' 
      type='email' 
      name='email' fullWidth required
      value={values.email}
      onChange={handleChange}
      />
      {errors.email && <p>{errors.email}</p>}
      <TextField label='password' 
      placeholder='Enter password' 
      type='password'
      name='password' fullWidth required
      value={values.password}
       onChange={handleChange}
      />
      {errors.password && <p>{errors.password}</p>}
      <TextField label='Password'
       placeholder='Enter confirmpassword'
        type='password' 
        name='password2' fullWidth required
        value={values.password2}
       onChange={handleChange}
        />
        {errors.password2 && <p>{errors.password2}</p>}
      <TextField label='mobileNo' 
      type='tel' 
      name='mobileNo'
       placeholder='Enter MobileNo' fullWidth required
       value={values.mobileNo}
       onChange={handleChange}
       />
       {errors.mobileNo && <p>{errors.mobileNo}</p>}
      <TextField label='Age' 
      placeholder='Enter Age'
       type='age' 
       name='age' fullWidth required
       value={values.age}
       onChange={handleChange}
       />
       {errors.age && <p>{errors.age}</p>}
      <TextField 
      label='Address' 
      placeholder='Enter Address' 
      type='address' 
      name='address' fullWidth required
      value={values.address}
       onChange={handleChange}
      />
      {errors.address && <p>{errors.address}</p>}
      
                 <Button type='submit' 
                 color='primary' 
                 onClick={handleSubmit}
                 variant="contained" 

                 style={btnstyle} fullWidth>REGISTER / SIGNUP</Button>
                 <Button type='reset' 
                 color='primary' 
                 onClick={clearState}
                 variant="contained" style={btnstyle} fullWidth>Reset Data</Button>
              
                {/* <Typography > Do you have an account ?
                     <Link href="#" >
                        Sign Up 
                </Link>
                </Typography> */}
           <Typography>
           Already have an account? Login 
            <a href='#'> here </a>
            </Typography>
                
      </Paper>
    </Grid>
  )
}
export default FormSignup;



// const FormSignup = ({ submitForm }) => {
//   const { handleChange, handleSubmit,clearState,values, errors } = useForm(
//     submitForm,
//     //console.log(submitForm),
//     validate
    
//   );
  
 

//   return (
//     <div className='form-content-right'>
//       <form onSubmit={handleSubmit} className='form' noValidate>
        
//         <div className="contain">
//         FormSignup
//         </div>
//         <div className='form-inputs'>
//           <label className='form-label'>Username</label>
//           <input
//             className='form-input'
//             type='text'
//             name='username'
//             placeholder='Enter your username'
//             value={values.username}
//             onChange={handleChange}
//             />
//           {errors.username && <p>{errors.username}</p>}
//         </div>
//         <div className='form-inputs'>
//           <label className='form-label'>Email</label>
//           <input
//             className='form-input'
//             type='email'
//             name='email'
//             placeholder='Enter your email'
//             value={values.email}
//             onChange={handleChange}
//           />
//           {errors.email && <p>{errors.email}</p>}
//         </div>
//         <div className='form-inputs'>
//           <label className='form-label'>Password</label>
//           <input
//             className='form-input'
//             type='password'
//             name='password'
//             placeholder='Enter your password'
//             value={values.password}
//             onChange={handleChange}
//           />
//           {errors.password && <p>{errors.password}</p>}
//         </div>
//         <div className='form-inputs'>
//           <label className='form-label'>Confirm Password</label>
//           <input
//             className='form-input'
//             type='password'
//             name='password2'
//             placeholder='Confirm your password'
//             value={values.password2}
//             onChange={handleChange}
//           />
//           {errors.password2 && <p>{errors.password2}</p>}
//         </div>
//         <div className='form-inputs'>
//           <label className='form-label'>Mobile-No</label>
//           <input
//             className='form-input'
//             type='text'
//             name='mobileNo'
//             placeholder='Enter your mobole-No'
//             value={values.mobileNo}
//             onChange={handleChange}
//           />
//           {errors.mobileNo && <p>{errors.mobileNo}</p>}
//           </div>
          
//           <div className='form-inputs'>
//           <label className='form-label'>Age</label>
//           <input
//             className='form-input'
//             type='age'
//             name='age'
//             placeholder='Enter your age'
//             value={values.age}
//             onChange={handleChange}
//           />
//           {errors.age && <p>{errors.age}</p>}
//         </div>
//         <div className='form-inputs'>
//           <label className='form-label'>Address</label>
//           <input
//             className='form-input'
//             type='address'
//             name='address'
//             placeholder='Enter your address'
//             value={values.address}
//             onChange={handleChange}
//           />
//           {errors.address && <p>{errors.address}</p>}
//         </div>
//         <button className='form-input-btn1' onClick={clearState} type='reset'>
//           RESET DATA
//         </button>
//         <button className='form-input-btn' type='submit'>
//           LOGIN / REGISTER
//         </button>
//         <span className='form-input-login'>
//           Already have an account? Login <a href='#'>here</a>
//         </span>
//       </form>
//     </div>
//   );
// };

// export default FormSignup;