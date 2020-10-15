import React, { useContext, useState } from 'react';

export const AuthContext = React.createContext();

export function useAuth() {
  const auth = useContext(AuthContext);
  if (!auth) throw 'You are missing AuthProvider!';
  return auth;
}

export function AuthProvider(props) {
  const [state, setState] = useState({
    user: null,

    login,
    logout,
  });

  function login(username, password) {
    setState(prevState => ({
      ...prevState,
      user: {username},
    }));
  }

  function logout() {
    setState(prevState => ({
      ...prevState,
      user: null,
    }));
  }

  return (
    <AuthContext.Provider value={state}>
      {props.children}
    </AuthContext.Provider>
  )
}