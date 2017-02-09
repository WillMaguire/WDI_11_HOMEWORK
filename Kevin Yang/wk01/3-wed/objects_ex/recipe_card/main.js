console.log('connected to ecmascript');

var recipe = {

  title:'Mole',
  serves:2,
  ingredient: ['cinnamon',
              'cumin',
              'cocoa']
}

console.log(recipe.title);
console.log('serves: 'recipe.serves);

//suggested improvements:
//console.log(recipe.ingredient,join('\n'))

console.log('ingredient: 'recipe.ingredient[1]);
console.log(recipe.ingredient[2]);
console.log(recipe.ingredient[3]);
