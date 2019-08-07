var pokemonRepository = (function () {
    var repository = [

        {
            name: "Talonflame",
            height: 3.11,
            types: ['fire', 'flying'],
            image: ("img/favicon.ico")
        },

        {
            name: "Buzzwole",
            height: 7.10,
            types: ['bug', 'fighting'],
            // image: ("img/favicon.ico")
        },

        {
            name: "Entei",
            height: 6.11,
            types: ['fire'],
            // image: ("img/favicon.ico")
        },

    ];

    function getAll() {
        return repository;
    }

    // recode - wrap your code to a IIFE // the same but with the clean code // last paragraph
    // organize the code according to task
    // Bonus task, inside the add function /// typeof parameter is an object with a conditional

    
    function add(pokemon) {

        if (typeof repository === 'object') {
            repository.push(pokemon)
        } else {
            document.write('Is not an Object');
        }

    }

    function addListItem(pokemon) {

        //creating the button // &textButton  // var $pokebuttonText = document.createTextNode(name);

        var $listItemElement = document.createElement('li');
        var $pokebutton = document.createElement('button');
        var $pokelist = document.querySelector('.pokemon-list');

        //$element.classList.add('my-class'); // Adds the class if it isn't present yet
        //..specifically with classes, you shouldn’t use a dot in front of the class
        // $element.classList.add('my-class'); // Adds the class if it isn't present yet

        $listItemElement.classList.add('pokemon-list__item');
        $pokebutton.classList.add('button');

        // $listItemElement.setAttribute('class', 'pokemon-list__item');
        //$pokebutton.setAttribute('class', 'button'); // testing the class button default

        // testing adding images calling by ID
        // var img = document.createElement("img");
        // img.src = "img/favicon.ico";
        // var src = document.getElementById("Title");
        // src.appendChild(img);

        $('#pokemon-list ul').append('<li><img src="' + imgSrc[i] + '"/></li>');


        //appendchild
        $listItemElement.appendChild($pokebutton);
        $pokelist.appendChild($listItemElement);

        $pokebutton.innerText = pokemon.name;
        $pokebutton.addEventListener('click', function (event) {
            console.log(pokemon.name);
        });

    }

    // show details function // console log // 
    function showDetails(pokemon) {
        console.log(pokemon);
    }

    return {
        add: add,
        getAll: getAll,
        addListItem: addListItem,
        // showDetails: showDetails //not neccersary temporary for the next task
    };
})();

// variable change = short variable
var Pokemons = pokemonRepository.getAll();

Pokemons.forEach(function (pokemon) {
    pokemonRepository.addListItem(pokemon);
});