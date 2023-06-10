import { useState } from "react";
import SLogo from "../assets/s.webp";
import GoogleLogo from "../assets/google.png";

import {
  AiOutlineMail,
  AiOutlineEyeInvisible,
  AiOutlineEye,
  AiOutlineLock,
} from "react-icons/ai";

import { BsFillPersonFill } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import { getSignup, getUser } from "../Redux/auth/auth.action";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

const Register = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const initialFormData = {
    fullName: "",
    password: "",
    email: "",
  };

  const [formData, setFormData] = useState(initialFormData);
  const { fullName, password, email } = formData;

  const { isAuth, token } = useSelector((state) => state.user)
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async() => {
    // console.log(formData);
     await dispatch(getSignup(formData));
     navigate("/city")
  };

  useEffect(() => {
    if (isAuth) {
        dispatch(getUser(token))
        navigate('/city')
    }
// eslint-disable-next-line
}, [isAuth])
  return (
    <div className="flex justify-center items-center h-screen w-full">
      <div className="flex flex-col items-center w-11/12 max-w-sm m-auto bg-white pt-10 rounded-2xl gap-1">
        <img
          src={SLogo}
          alt="logo"
          className="w-[8vh] object-cover h-[10vh] rounded-xl"
        />

        <p className="text-xl font-semibold">Welcome</p>

        <p>Register to this app to continue</p>

        <div className="flex justify-center items-center p-2 bg-white w-9/12 border border-gray-500 hover:border-sky-600 hover:shadow-sm hover:shadow-blue-800">
          <BsFillPersonFill className="mr-2" />
          <input
            type="text"
            placeholder="Full Name"
            className="w-11/12"
            name="fullName"
            value={fullName}
            onChange={handleChange}
          />
        </div>

        <div className="flex justify-center items-center p-2 bg-white w-9/12 border border-gray-500 hover:border-sky-600 hover:shadow-sm hover:shadow-blue-800">
          <AiOutlineMail className="mr-2" />
          <input
            type="email"
            placeholder="Email Address"
            className="w-11/12"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </div>

        <div className="flex justify-center items-center p-2 bg-white w-9/12 border border-gray-500 hover:border-sky-600 hover:shadow-sm hover:shadow-blue-800">
          {" "}
          <AiOutlineLock />
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            className="w-11/12 px-2"
            name="password"
            value={password}
            onChange={handleChange}
          />
          <div
            onClick={() => setShowPassword((prev) => !prev)}
            className="cursor-pointer"
          >
            {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
          </div>
        </div>

        <br />
        <button
          className="w-9/12 bg-blue-900 text-white p-1"
          onClick={handleSubmit}
        >
          Register
        </button>

        <div className="flex justify-between w-full items-center">
          <div className="w-5/12 h-px bg-gray-400"></div>
          <div>OR</div>
          <div className="w-5/12 h-px bg-gray-400"></div>
        </div>

        <div className="flex items-center border border-gray-400 px-2 rounded-xl hover:shadow-sm hover:shadow-sky-600 cursor-pointer">
          <img src={GoogleLogo} alt="google" className="w-10 h-10" />
          <p>Register using Google</p>
        </div>

        <div className="w-full h-px bg-gray-400 "></div>

        <p className="p-4">
          Don't have an account?{" "}
          <Link to="/login">
            <span className="underline text-blue-400">Login</span>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
