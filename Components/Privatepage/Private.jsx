import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import Authcontext from "../LoginProvider/Loginprovider";
import HomeSection from "../Homesection/HomeSection";
function Private() {
  const { isLoggedin } = useContext(Authcontext);
  if (!isLoggedin) {
    return <Navigate to="/signin"></Navigate>;
  }
  return <HomeSection />;
}

export default Private;
