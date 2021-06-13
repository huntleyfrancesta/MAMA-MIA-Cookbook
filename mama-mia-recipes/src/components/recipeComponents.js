import React, { useState, useEffect} from 'react'
import "./App.css";
import RecipeContainer from "../components/RecipeContainer"


const BASE_URL = 'https://mama-mia-backend.herokuapp.com/';

function RecipeContainer() {
const [Recipe, setRecipe] = useState([]);

useEffect(() => {
    fetch(BASE_URL)
.then(r => r.json())
.then(RecipeData => setRecipe(RecipeData)) 
}, [])

function deleteRecipe(Recipeid) {
const URL = `${BASE_URL}/${Recipeid}`; // BASE_URL+ `/Recipeid}`
const config = { method: "DELETE"};
fetch(URL, config)
.then(r => r.json())
.then(() => {
    const newRecipe = recipe.fliter(Recipe => Recipe.id !== Recipeid);
    setRecipe(newRecipe);
})

}
 
function addRecipe(Recipe) {
    const config ={
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(Recipe)
    }

    fetch(BASE_URL, config)
    .then(r => r.json())
    .then(newRecipe => {
        const newRecipe = [...Recipe, newRecipe];
        setRecipe(newRecipe);
    })

}

    function updateRecipe(id, updatedRecipe) {
        fetch(`${BASE_URL}/${id}`, {
            method: "PATCH",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(updatedRecipe),
        })
        .then((r) => r.json())
        .then((updatedRecipe) => {
            const updatedRecipe = Recipe.map((Recipe) => {
                if (Recipe.id === updatedRecipe.id) return updatedRecipe;
                return Recipe;
            });
            setRecipe(updateRecipe);
        });

    }

    return (
        <div className="Recipe-Container">
            <RecipeForm addRecipe={addRecipe} />
            <div className="Recipe-Container-list">
                { Recipe.length === 0
                ? <h1>Loading...</h1>
                :Recipe.map(Recipe => {
                    return <Recipe
                    key={Recipe.id}
                    Recipe={Recipe}
                    deleteRecipe={deleteRecipe}
                    updateRecipe={updateRecipe}
                    /> })
                }
                </div>
              </div>
            )
          }
          
          export default RecipeContainer;