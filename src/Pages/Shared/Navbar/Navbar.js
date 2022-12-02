import React, { useContext } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { authContext } from "../../../Authentication/Auth/Auth";

const Navbar = () => {
  const {user,Logout}= useContext(authContext)

  const navigate= useNavigate();

  const handleLogout = () => {
    Logout()
      .then(() => {
        toast.error('Logging Out', {position: "top-center",
        autoClose: 1500});
        navigate('/');
      })
      .catch((err) => console.error(err));
  };

  const menu = (
    <React.Fragment >
      <li className='text-primary text-xl font-semibold hover:bg-secondary hover:text-neutral hover:rounded'>
        <Link to="/">Home</Link>
      </li>
      <li className='text-primary text-xl font-semibold hover:bg-secondary hover:text-neutral hover:rounded'>
        <Link to="/">Categories</Link>
      </li>
      <li className='text-primary text-xl font-semibold hover:bg-secondary hover:text-neutral hover:rounded'>
        <Link to="/"></Link>
      </li>
      <li className='text-primary text-xl font-semibold hover:bg-secondary hover:text-neutral hover:rounded'>
        <Link to="/"></Link>
      </li>
    </React.Fragment>
  );

  return (
    <div>
      <div className="navbar bg-neutral ">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-neutral rounded-box w-52"
            >
              {menu}
            </ul>
          </div>
          <a className="btn border border-2 normal-case text-primary text-xl">Bike Bikroy</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">{menu}</ul>
        </div>
        <div className="navbar-end">
          {
            user?
              <div>
                <li className="">
                <Link to="/">
              <a className="">My Reviews</a>
            </Link>
                </li>
                <li className=" ">
                  <Link to="/">
                    <a>Add Service</a>
                  </Link>
                </li>
                <li className="textDesign">
                  <a onClick={handleLogout}>Logout</a>
                </li>
                <p className="text-center ">{user.displayName}</p>
              </div>
             : 
            <a className="btn btn-secondary font-bold"><Link to="/login">Login</Link></a>
          }
          
        </div>
      </div>
    </div>
  );
};

export default Navbar;
