import React, { useContext, useState } from "react";
import UserContext from "../context/UserContext";
import { firestore } from "../firebase";

const NewRecipe = () => {
  const [name, setName] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [description, setDescription] = useState("");

  const user = useContext(UserContext);

  const saveRecipe = async (e) => {
    e.preventDefault();

    const ingredientsArray = ingredients.split(",");

    await firestore
      .collection("users")
      .doc(user.uid)
      .collection("recipes")
      .add({
        name,
        ingredients: ingredientsArray,
        description,
      });

    setName("");
    setIngredients("");
    setDescription("");
  };

  return (
    <div className="new-recipe">
      <h1>New recipe</h1>
      <form>
        <input
          type="text"
          placeholder="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />{" "}
        <input
          type="text"
          placeholder="Ingredients separated by comma"
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button onClick={saveRecipe}>Save recipe</button>
      </form>
    </div>
  );
};

export default NewRecipe;