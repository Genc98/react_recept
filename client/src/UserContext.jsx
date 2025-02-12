import React, { createContext, useState, useEffect,useContext } from "react";

// Skapa UserContext
const UserContext = createContext();

export const useUser = () => {
  return useContext(UserContext);
};

export const UserProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [recipesData, setRecipesData] = useState([])

  const addRecipe = (recipe) => {
    setCart((prevCart) => {
        const newCart = [...prevCart, recipe]; // Lägg till filmen som den är
        return newCart;
      });
  };

  const removeRecipe = (recipeId) => {
    setCart((prevCart) => {
        const index = prevCart.findIndex((m) => m.id === recipeId);
        if (index !== -1) {
          const newCart = [...prevCart];
          newCart.splice(index, 1); // Tar bort EN instans av filmen
          return newCart;
        }
        return prevCart;
      });
  };

  async function getRecipesData() {
    const response = await fetch("/api/recipes")
    const result = await response.json()

    return setRecipesData(result)
}

useEffect(() => {
    getRecipesData()
}, [])

  return (
    <UserContext.Provider value={{ cart, recipesData, addRecipe, removeRecipe }}>
      {children}
    </UserContext.Provider>
  );
};
