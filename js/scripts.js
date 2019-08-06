// creating before anything else a new pokemonRepository variable
//Step 2: is Inside no need to do it again. 

var pokemonRepository = (function () {
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


    // recode - wrap your code to a IIFE // the same but with the clean code // last paragraph
    // organize the code according to task
    // Bonus task, inside the add function /// typeof parameter is an object with a conditional

    function add(pokemon) {
        // document.write(typeof repository);
        if (typeof repository === 'object') {
            repository.push(pokemon)
        } else {
            document.write('Is not an Object');
        }

    }

    function getAll() {
        return repository;
    }

    return {
        add: add,
        getAll: getAll
    };
})();

pokemonRepository.add({
    name: 'Pikachu',
    height: 1.4,
    types: ['electric']
});


var $pokemonList = document.querySelector('.pokemon-list');


function addListItem(pokemon, $pokemonContainer)

var name = pokemon;

var $listItem = document.createElement('li');

//$element.classList.add('my-class'); // Adds the class if it isn't present yet
//..specifically with classes, you shouldn’t use a dot in front of the class
$listItem.classList.add('pokemonItem');

//creating the button // &textButton
var $button = document.createElement('button');
var $buttonText = document.createTextNode(name);
//append - button - text
$button.appendChild($buttonText);
// var $container = document.querySelector('.container');
// var button = document.createElement('button');
// button.innerText = "Click Me";
// $container.appendChild(button);
$


// //Part 2: forEach Loops // 
// // console.log(pokemonRepository.getAll()); instead
// pokemonRepository.getAll().forEach(function (pokemon) {
    
    

// });
