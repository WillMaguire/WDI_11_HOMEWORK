var tacos = {
  name: 'Mexican Tacos',
  serves: 4,
  contents: [
    "Meat (Chicken, Fish, Beef, Lamb)",
    "Guacamole",
    "Taco Shells (Hard or Soft)",
    "Cilantro",
    "Tomato",
    "Cheese"
  ]
};

console.log("Name: " +tacos.name);
console.log("Serves: " + tacos.serves);
console.log("Ingredients: ");
for (var i = 0; i < tacos.contents.length; i++) {
  console.log("- " + tacos.contents[i] );
}
