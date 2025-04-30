
// src/components/UserProfile.js

import React, { useEffect, useState } from 'react';

const UserProfile = () => {
  const [userData, setUserData] = useState(null); // To store user data
  const [loading, setLoading] = useState(true); // To manage loading state
  const [error, setError] = useState(null); // To handle errors

  useEffect(() => {
    fetch('http://localhost:5001/api/v1/me') // API call to the backend
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch'); // Throw error if response isn't OK
        }
        return response.json(); // Parse JSON if successful
      })
      .then((data) => {
        setUserData(data); // Set user data on success
        setLoading(false); // Update loading state
      })
      .catch((error) => {
        console.error('Error fetching user data:', error); // Log any error
        setError(error.message); // Set error message if request fails
        setLoading(false); // Stop loading
      });
  }, []); // Empty dependency array means this will run once when the component mounts

  // Show loading spinner or error message while waiting for the data
  if (loading) {
    return <div>Loading...</div>;
  }

  // Show error if there's any
  if (error) {
    return <div>Error: {error}</div>;
  }

  // Render user data if it's successfully fetched
  return (
    <div>
      <h1>User Profile</h1>
      <pre>{JSON.stringify(userData, null, 2)}</pre>
    </div>
  );
};

export default UserProfile;
