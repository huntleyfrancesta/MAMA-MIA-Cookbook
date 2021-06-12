
import React from "react";
import { Link, useHistory } from "react-router-dom";
import { auth } from "../firebase";

const RecipeNavbar = () => {
  const history = useHistory();

  const signOut = async () => {
    await auth.signOut();
    history.push("/");
  };

  return (
    <div className="recipe-navbar">
      <ul>
        <li>
          <Link to="/">All recipes</Link>
        </li>
        <li>
          <Link to="/new">Add new recipe</Link>
        </li>
        <li>
          <button onClick={signOut}>Log out</button>
        </li>
      </ul>
    </div>
  );
};

export default RecipeNavbar;