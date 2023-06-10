import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userLogout } from "../Redux/auth/auth.action";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const CityPage = () => {
  
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, token } = useSelector((state) => state.user);
  const [input, setInput] = useState("");
  console.log(user, token);
  // const handleSubmit = () => {
  //   console.log(input);
  // };

  // const handleInputChange = (e) => {
  //   setInput(e.target.value);
  // };

  useEffect(()=>{
    toast.success("Component Mounted")
  },[])

  const handleLogout = () => {
    dispatch(userLogout(token));
    toast.success("Component Unmounted")
    navigate("/");
  };

  return (
    <>
      <div className="flex flex-col items-center">
        {/* <p> Hi, {user?.fullName?.split(" ")[0]} </p>
         */}
        {/* <p>This is a protected</p> */}
        <p>This is a protected route</p>
        {/*
        {user?.city ? (
          <p>Your city is {user.city}</p>
        ) : (
          <div>
            <input
              type="text"
              placeholder="Enter your city"
              value={input}
              onChange={handleInputChange}
            />
            <button onClick={handleSubmit}>Go</button>
          </div>
        )}
        See how many app users lives in which city
        <select>
          <option value="">Delhi</option>
          <option value="">Gurgaon</option>
        </select>
      </div>
 */}
        <div className="fixed top-2 right-2" onClick={handleLogout}>
          Logout
        </div>
      </div>
    </>
  );
};

export default CityPage;
