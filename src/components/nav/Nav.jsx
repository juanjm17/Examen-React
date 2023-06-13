import React from 'react';
import { getAuth, signOut } from "firebase/auth";

import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import './nav.css';

const Nav = () => {
  
  const handleLogout = () => {
    const auth = getAuth();
    const user = auth.currentUser;
    console.log(user);
    signOut(auth)
      .then(() => {
        toast.success("Has cerrado sesión");
      })
      .catch((error) => {
        toast.error(`Ha ocurrido un error al cerrar sesión: ${error.message}`);
      });
  };

  return (
    <div className="nav">
       
      <nav>
        <ul>
          <li><a onClick={handleLogout}>Cerrar sesión</a></li>
        </ul>
      </nav>
      <ToastContainer />
    </div>
  );
};

export default Nav;
