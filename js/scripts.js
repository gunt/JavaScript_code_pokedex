
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


// for (var i = 0; i < repository.length; i++) {

//     // changing the variable to make it shorter (Readability)
//     var poke = repository[i];

//     if (poke.height > 7) {
//         document.write('<p> ' + poke.name +
//             ' (height: ' + poke.height + ') - Wow, that’s big!' + '<p>');
//     } else {
//         document.write('<p> ' + poke.name +
//             ' (height: ' + poke.height + ') ' + '<p>')
//     }
// }


// var foodList = ['tuna', 'cheese', 'salad'];
                 
// document.write('<h3>===forEach LOOP===</h3>');
// foodList.forEach(function(currentItem){
//   document.write('<p>' + currentItem + '</p>');
// });



repository.forEach(function(property){
  document.write('<p> ' + property.name + ':' +' ' + property.types + '</p>');
});


// Object.keys(anne).forEach(function(property) {
//     console.log(anne[property]);
//   });