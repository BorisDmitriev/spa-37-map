import React from "react";

const AnimalsInHTML = () => {
  const animals = [
    { label: "Horse" },
    { label: "Turtle" },
    { label: "Elephant" },
    { label: "Monkey" },
  ];

  return (
    /**
     * changed the content of the map function
     **/
    <ul>
      {
          animals.map((singleAnimal, i) => {
            return <li key="i">{singleAnimal.label}</li>;
          })
      }
    </ul>
  
  );
};

export default AnimalsInHTML;
