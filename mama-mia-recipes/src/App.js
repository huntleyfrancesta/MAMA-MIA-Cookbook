import React, { useEffect, useState } from "react";
import Recipe from "./components/recipe";
import "./App.css";

const App = () => {
  const APP_ID = "df40c8fb";
  const APP_KEY = "6b351622288bf03a0a7aafea01162143";

  const [recipe, setRecipe] = useState([]);
  const [input, setInput] = useState("");
  const [query, setQuery] = useState("chicken");

  useEffect(() => {
    getRecipe();
  }, [query]);

  const getRecipe = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await response.json();
    setRecipe(data.hits);
    console.log(data.hits);
  };
  //If you want to run only first time, leave it empty []
  //If you want to run whenever the argument changes, put arg inside [arg]

  const updateSearch = e => {
    setInput(e.target.value);
  };

  const getInput = e => {
    e.preventDefault();
    setQuery(input);
    setInput("");
    //Set search back to empty string
  };
  //combo for input value, onChange with function
  return (
    <div className="App">
      <h1>Find recipe here and start cooking!</h1>
      <form onSubmit={getInput} className="search-form">
        <input
          className="search-bar"
          type="text"
          value={input}
          onChange={updateSearch}
        />
        <button className="search-button" type="submit">
          Search
        </button>
      </form>
      <div className="recipe">
        {recipe.map(recipe => (
          <Recipe
            key={recipe.recipe.label}
            title={recipe.recipe.label}
            image={recipe.recipe.image}
            ingredient={recipe.recipe.ingredients}
          />
        ))}
      </div>
    </div>
  );
};

export default App;