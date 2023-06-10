import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { googleAuth } from '../Redux/auth/auth.action';

const GoogleCallback = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch()

  useEffect(() => {
    // Extract the authorization code from the URL query parameters
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get('code');

    // Make a request to your server (back-end) to handle the authentication
    // You can use an AJAX library like Axios or fetch for this
    // Example with fetch:
    fetch(`/auth/google/callback?code=${code}`)
      .then((response) => {
        console.log(response);
        if (response.ok) {

            dispatch(googleAuth(code));
          // Redirect to the City page
          navigate('/city');
        } else {
          // Handle the error if needed
          // Redirect to an error page or display an error message
          navigate('/login');
        }
      })
      .catch((error) => {
        console.error(error);
        navigate('/login');
      });
  }, []);

  return (
    <div>
      <h1>Loading...</h1>
      {/* You can display a loading spinner or a message while the redirect is in progress */}
    </div>
  );
};

export default GoogleCallback;
