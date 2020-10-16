import React, { useContext, useState } from 'react';


const usersAPI = "https://deltav-todo.azurewebsites.net/api/v1/Users";
export const AuthContext = React.createContext();

export function useAuth() {
  const auth = useContext(AuthContext);
  if (!auth) throw 'You are missing AuthProvider!';
  return auth;
}

export function AuthProvider(props) {
  const [state, setUser] = useState({
    user: null,

    login,
    logout,
  });

  async function login(username, password) {
    const result = await fetch(`${usersAPI}/Login`, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    });
    const resultBody = await result.json();

    if (result.ok) {
      setUser(resultBody);
    }
    else {
      logout();
  }
}

  function logout() {
    setUser(prevState => ({
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