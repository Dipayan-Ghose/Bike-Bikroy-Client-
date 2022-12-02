import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { authContext } from '../../Authentication/Auth/Auth';
import useHelmet from '../../Helmet/useHelmet';
import './Register.css';

const Register = () => {
  useHelmet('Register');


const {registerUser, updateUserProfile}= useContext(authContext);
const [error, setError]= useState('');
const navigate=useNavigate();

const handleRegistration=(e)=>{
e.preventDefault();
const form= e.target;
const name= form.name.value;
const email= form.email.value;
const password= form.password.value;
console.log(name, email,password);

registerUser(email, password)
   .then((res) => {
        const user = res.user;
        console.log(user);
        form.reset();
        handleUpdate(name);
        navigate('/');
      })
      .catch((error) => {
        console.error(error);
      setError(error.message)
      });

const handleUpdate=(name, url)=>{
  const profile= {
    displayName: name
  }
updateUserProfile(profile)
.then(()=>{})
.catch(error=> console.error(error))
};

};


    return (
        <div >
              <div className="hero width mx-auto bg-base-100 rounded my-3 p-5">
            <div className="card flex-shrink-0 width max-w-sm shadow-2xl bg-base-400 mx-auto my-2">
            <h1 className="text-3xl text-secondary text-center mt-2">Register Here</h1>
            <form onSubmit={handleRegistration}>
            <div className="card-body p-4">
            <div className="form-control border-0">
                <label className="label">
                  <span className="text-neutral" >Full Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Your Full Name"
                  className="input input-bordered"
                  name='name'
                />
              </div>
              <div className="form-control">
                <label className="label">
                    <span className="label-text font-semibold text-neutral">
                    Choose your type
                    </span>
                  </label>
                <select className="select select-bordered w-full max-w-xs">
                    <option className="text-neutral">Admin</option>
                    <option className="text-neutral">Seller</option>
                  </select>
                </div>
              <div className="form-control border-0">
                <label className="label">
                  <span className="text-neutral">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="email"
                  className="input input-bordered"
                  name='email'

                  required
                />
              </div>
              <div className="form-control border-0">
                <label className="label">
                  <span className="text-neutral">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  name='password'

                  required
                />
               
              </div>
              <div className="form-control mt-1 border-0">
                <button className="hover:bg-primary w-48 rounded font-bold text-xl p-2 text-center bg-secondary place-self-center mt-2 text-white ">Register</button>
              </div>
              <p className="text-danger my-1">{error}</p>
            </div>
            <p className=" font-semibold text-orange-500 text-center mb-5">
                    Already have an account? <br></br>
                    <span> 
                      <Link to="/login" className='link'>Login Now</Link>
                    </span>
                  </p>
            </form>
            
          </div>
          </div>
          
        </div>
    );
};

export default Register;