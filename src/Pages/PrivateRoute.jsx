import React from 'react'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Navigate, useNavigate } from 'react-router-dom'

const PrivateRoute = ({ children }) => {
  const navigate = useNavigate()
    const { isAuth } = useSelector(store => store.user)

    useEffect(() => {
      if (!isAuth) {
          navigate('/login')
      }
  // eslint-disable-next-line
  }, [isAuth])
    return (
        <>
            {
                isAuth ? children : <Navigate to="/login" />
            }
        </>
    )
}

export default PrivateRoute