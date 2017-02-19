console.log('JS working for recipe card');

var fav_recipe = {
  Title: 'Mole',
  Services: 2,
  Ingredients: ['cinnamon', 'cumin', 'cocoa']
};

console.log(fav_recipe.Title);
console.log('Services: '+ fav_recipe.Services);
//console.log(fav_recipe.Ingredients[0]);
//console.log(fav_recipe.Ingredients[1]);
//console.log(fav_recipe.Ingredients[2]);
console.log(fav_recipe.Ingredients.join('\n')); // or do this using Join
