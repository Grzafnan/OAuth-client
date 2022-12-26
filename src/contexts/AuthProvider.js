import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios';

export const AuthContext = createContext()
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)


  const getUser = async () => {
    try {
      const url = `${process.env.REACT_APP_API_URL}/auth/login/success`;
      const { data } = await axios.get(url, { withCredentials: true });
      setUser(data.user._json)
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getUser();
  })


  const authInfo = {
    user
  }


  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;