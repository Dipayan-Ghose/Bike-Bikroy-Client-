import React from "react";
import logo from "./logo.png";

const Footer = () => {
  return (
    <div>
      <footer className="footer p-10 bg-neutral text-base-content">
        <div>
          <div className="avatar">
            <div className=" w-24 rounded">
              <img className="" src={logo} />
            </div>
          </div>

          <p className='text-primary text-xl font-semibold'>
           Bike Bikroy Sheba
            <br />
            The largest second hand bike organization
          </p>
        </div>
        <div>
          <span className="footer-title text-primary ">Company</span>
          <a className="link link-hover text-primary ">About us</a>
          <a className="link link-hover text-primary ">Contact</a>
          <a className="link link-hover text-primary ">Jobs</a>
          <a className="link link-hover text-primary ">Press kit</a>
        </div>
        <div>
          <span className="footer-title text-primary ">Legal</span>
          <a className="link link-hover text-primary ">Terms of use</a>
          <a className="link link-hover text-primary ">Privacy policy</a>
          <a className="link link-hover text-primary ">Cookie policy</a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
