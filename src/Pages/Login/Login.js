import React, { useContext, useState } from "react";
import { GoogleAuthProvider } from "firebase/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Login.css";
import useHelmet from "../../Helmet/useHelmet";
import { authContext } from "../../Authentication/Auth/Auth";
import toast from "react-hot-toast";

const Login = () => {
  useHelmet("Login");

  const navigate = useNavigate();
  const [error, setError] = useState("");
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const { Login, signInUser } = useContext(authContext);
  const providerGoogle = new GoogleAuthProvider();

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    signInUser(email, password)
      .then((res) => {
        const user = res.user;
        const currentUser = {
          email: user.email,
        };
        console.log(currentUser);

        fetch("http://localhost:5000/jwt", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(currentUser),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            localStorage.setItem("bike-bikroy", data.token);
            navigate(from, { replace: true });
          });
        toast.success("Logged In Successfully", {
          position: "top-center",
          autoClose: 2000,
        });
        console.log(user);
        form.reset();
        setError("");
      })
      .catch((error) => {
        console.error(error);
        setError(error.message);
      });
  };

  const googleSignIn = () => {
    Login(providerGoogle)
      .then((res) => {
        const user = res.user;
        console.log(user);
        const currentUser = {
          email: user.email,
        };
        console.log(currentUser);
        
        //JWT

        fetch("http://localhost:5000/jwt", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(currentUser),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            localStorage.setItem("bike-bikroy", data.token);
            navigate(from, { replace: true });
          });
        toast.success("Logged In Successfully", {
          position: "top-center",
          autoClose: 2000,
        });
      })
      .catch((error) => console.error(error));
  };

  return (
    <div>
      <div className="hero  mx-auto  rounded my-4">
        <div className="py-5 width flex-col lg:flex-row-reverse  bg-base-100">
          <div className="card  flex-shrink-0 mx-auto  max-w-sm shadow-2xl bg-base-400">
            <h1 className="text-3xl font-bold text-center text-primary mt-2">
              Login Now
            </h1>
            <form onSubmit={handleSubmit}>
              <div className="card-body p-4">
                <div className="form-control border-0">
                  <label className="label">
                    <span className="label-text font-semibold text-neutral">
                      Email
                    </span>
                  </label>
                  <input
                    type="text"
                    placeholder="email"
                    className="input input-bordered"
                    name="email"
                    required
                  />
                </div>

                <div className="form-control border-0">
                  <label className="label">
                    <span className="label-text font-semibold text-neutral">
                      Password
                    </span>
                  </label>
                  <input
                    type="password"
                    placeholder="password"
                    className="input input-bordered"
                    name="password"
                    required
                  />
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

                  <p className="font-semibold text-neutral  mt-1 mb-0 text-start ">
                    Don't have an account? <br></br>
                    <span className="font-semibold text-orange-500">
                      <Link to="/register">
                        <a className="link">Please Register</a>
                      </Link>
                    </span>
                  </p>
                </div>
                <div className="form-control mt-1 border-0">
                  <button className="hover:bg-primary w-48 rounded font-bold text-xl p-2 text-center bg-secondary place-self-center mt-2 text-white ">
                    Login
                  </button>
                </div>
                <p className="text-danger mt-1">{error}</p>
              </div>
            </form>
            <button
              onClick={googleSignIn}
              className="alert alert-info btn mb-3 btn-link buttonlink d-flex"
            >
              <span className="text-xl font-bold gg text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-blue-600 ">
                {" "}
                Google
              </span>{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
