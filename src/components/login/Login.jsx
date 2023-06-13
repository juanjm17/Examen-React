import React from "react";
import firebase from "firebase/compat/app";
import { getAuth, GoogleAuthProvider, signInWithRedirect } from "firebase/auth";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import "./login.css";


const firebaseConfig = {
    apiKey: "AIzaSyB_a-C-Ax87P8d4OpyYt1usfnF1f3XyoVQ",
    authDomain: "exam-8637e.firebaseapp.com",
    projectId: "exam-8637e",
    storageBucket: "exam-8637e.appspot.com",
    messagingSenderId: "582665657364",
    appId: "1:582665657364:web:df6f3f7f01a9e981ce131a",
  };
  
firebase.initializeApp(firebaseConfig);

const Login = () => {
  const handleLogin = () => {
    const provider = new GoogleAuthProvider();
    signInWithRedirect(getAuth(), provider)
      .then(() => {
        toast.success("¡Bienvenido! Has iniciado sesión correctamente.");
        localStorage.setItem("user", getAuth().currentUser);
      })
      .catch((error) => {
        toast.error(`Ha ocurrido un error al iniciar sesión: ${error.message}`);
      });
  };

  console.log(localStorage);



  useEffect(() => {
    const unsubscribe = getAuth().onAuthStateChanged((user) => {
      if (user) {
        window.location.href = "/main";
      }
    });
    return () => unsubscribe();
  }, []);

  console.log(firebase);

  return (
    <div className="container">
      <h1>Login</h1>
      <button onClick={handleLogin}>Iniciar sesión con Google</button>
      <ToastContainer />
      <p>
        ¿Aún no tienes cuenta? <Link to="/signup">Regístrate</Link>
      </p>
     
    </div>
  );
};

export default Login;
