import React, { useState } from "react";

 const Authcontext = React.createContext({
  token: '',
  isLoggedin: false,
  Login: (token) => {},
  Logout: () => {},
});

 export const AuthContextProvider = (props) => {
  const initialToken=localStorage.getItem('tokenid');
  const [token, settoken] = useState(initialToken);

  const userisloggedin = !!token;

  const loginHandler = (token) => {
    settoken(token);
    localStorage.setItem('tokenid',token);
  };

  const logoutHandler = () => {
    settoken(null);
    localStorage.removeItem('tokenid');
  };

  const Handling = {
    token: token,
    isLoggedin: userisloggedin,
    Login: loginHandler,
    Logout: logoutHandler,
  };

  return (
    <Authcontext.Provider value={Handling}>
      {props.children}
    </Authcontext.Provider>
  );
};

export default Authcontext;