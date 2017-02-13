var tacos = {
  name: 'Mexican Tacos',
  serves: 4,
  contents: [
    "Fish",
    "Guacamole",
    "Taco Shells (Hard or Soft)",
    "Cilantro",
    "Tomato",
    "Cheese"
  ]
};

console.log("Name: " + tacos.name);
console.log("Serves: " + tacos.serves);
console.log("Ingredients: ");
console.log(
  tacos.contents.join(" \n")
);

// Alternatively, use a for loop to go through 'contents' array of ingredients
// for (var i = 0; i < tacos.contents.length; i++) {
//   console.log("- " + tacos.contents[i] );
// }
