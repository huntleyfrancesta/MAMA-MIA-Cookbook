import React from "react";
import { useHistory } from "react-router-dom";
import { signInWithGoogle } from "../firebase";

const AuthHome = () => {
  const history = useHistory();

  const signIn = async () => {
    await signInWithGoogle();
    history.push("/");
  };

  return (
    <div className="auth-home">
      <button onClick={signIn}>Sign in with Google</button>
    </div>
  );
};

export default AuthHome;