//  1. Everything between the curly braces makes up the object.
//  2. variable called repository and assign it to be an array.
//  3. Several objects to the array - Each object represents one 
//  Pokémon and needs to have the same keys to avoid errors. 
//  three keys to each pokemon. name, height, types
//  Create at least three Pokémon objects in your repository array.
//  Object: {}
//  Array:  []

var repository = [

    {
        name: "Talonflame",
        height: 3.11,
        types: ['fire', 'flying']
    },

    {
        name: "Buzzwole",
        height: 7.10,
        types: ['bug', 'fighting']
    },

    {
        name: "Entei",
        height: 6.11,
        types: ['fire']
    },

];

//  Remembering Loops
// var ages = [20, 30, 25, 22, 31];
// for (var i = 0; i < ages.length; i++) {
//   console.log(ages[i] - 2);
// }

// for loop = three different parts: 
// 1.  initialization, (var i = 1), 
// 2.  the condition (i <= 100),
// 3.  the action (i++). 

//  *Assigning variables = readability
//  *HTML within a string in JavaScript 


for (var i = 0; i < repository.length; i++) {

    // changing the variable to make it shorter (Readability)
    var poke = repository[i];

    if (poke.height > 7) {
        document.write('<p> ' + poke.name +
            ' (height: ' + poke.height + ') - Wow, that’s big!' + '<p>');
    } else {
        document.write('<p> ' + poke.name +
            ' (height: ' + poke.height + ') ' + '<p>')
    }
}