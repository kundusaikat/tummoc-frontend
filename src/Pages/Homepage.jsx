import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'
import { getUser } from '../Redux/auth/auth.action';

const Homepage = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

  const isAuth = useSelector((state) => state.user.isAuth);

  useEffect(()=>{
    if (isAuth) {
      navigate("/city");
      return
    }
  },[])
  
  return (
    <div className='text-center'>
        <p className='text-2xl'>Homepage</p>
        <p>This is a unprotected route.</p>

        <Link to="/login"><button className='p-2 bg-blue-900 rounded-lg m-2 text-white'>Login</button></Link>
        <Link to="/register"><button className='p-2 bg-blue-900 rounded-lg m-2 text-white'>Register</button></Link>
    </div>
  )
}

export default Homepage