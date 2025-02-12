import { useUser } from "./UserContext";

function Recept(){

  const recipes = [
    {
      id: "1",
      title: "Spaghetti Carbonara",
      cuisine: "Italienskt",
      description: "En krämig pasta med bacon, parmesan och äggula.",
    },
    {
      id: "2",
      title: "Köttbullar med Potatismos",
      cuisine: "Svenskt",
      description: "Klassiska svenska köttbullar med gräddsås, lingonsylt och potatismos.",
    },
    {
      id: "3",
      title: "Sushi",
      cuisine: "Japanskt",
      description: "Ris och färsk fisk, rullat i nori med soja, ingefära och wasabi.",
    },
    {
      id: "4",
      title: "Tacos",
      cuisine: "Mexikanskt",
      description: "Mjuka eller hårda tortillas fyllda med kryddigt kött, grönsaker och såser.",
    },
    {
      id: "5",
      title: "Pad Thai",
      cuisine: "Thailändskt",
      description: "Stekta risnudlar med jordnötter, räkor eller kyckling, och lime.",
    },
    {
      id: "6",
      title: "Butter Chicken",
      cuisine: "Indiskt",
      description: "Kyckling i en krämig tomatsås med grädde och indiska kryddor.",
    },
    {
      id: "7",
      title: "Falafel",
      cuisine: "Mellanöstern",
      description: "Friterade kikärtsbollar serverade med hummus och pitabröd.",
    },
    {
      id: "8",
      title: "Chili con Carne",
      cuisine: "Mexikanskt",
      description: "Mustig gryta med köttfärs, bönor och chili.",
    },
    {
      id: "9",
      title: "Caesarsallad",
      cuisine: "Amerikanskt",
      description: "Krispig romansallad med kyckling, parmesan och caesardressing.",
    },
    {
      id: "10",
      title: "Lasagne",
      cuisine: "Italienskt",
      description: "Lager av pastaplattor, köttfärssås och bechamelsås, gratinerad i ugn.",
    },
    {
      id: "11",
      title: "Ratatouille",
      cuisine: "Franskt",
      description: "En klassisk fransk grönsaksrätt med aubergine, zucchini, tomater och örter.",
    },
    {
      id: "12",
      title: "Bibimbap",
      cuisine: "Koreanskt",
      description: "En koreansk skål med ris, grönsaker, ägg och marinerat kött.",
    },
  ];
  const { recipesData ,addRecipe, removeRecipe } = useUser();
  
      
    return(
      <ul className="lista">
      {recipesData.map((recipe) => (
        <ul className="recept" key={recipe.id}>
          <h3>{recipe.title}</h3>
          <p>{recipe.cuisine}</p>
          <p><em>{recipe.description}</em></p>
          <button onClick={() => addRecipe(recipe)}>Add</button>
          <button onClick={() => removeRecipe(recipe.id)}>Remove</button>
        </ul>
      ))}
    </ul>
  );
}

export default Recept