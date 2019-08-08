var pokemonRepository = (function () {
    var repository = [];
    var apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=50';



    function add(pokemon) {

        if (typeof repository === 'object') {
            repository.push(pokemon)
        } else {
            document.write('Is not an Object');
        }

    }

    function getAll() {
        return repository;
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
        // $pokebutton.setAttribute('class', 'button'); // testing the class button default


        //appendchild
        $listItemElement.appendChild($pokebutton);
        $pokelist.appendChild($listItemElement);

        $pokebutton.innerText = pokemon.name;
        $pokebutton.addEventListener('click', function (event) {
            console.log(pokemon.name);
        });

    }

    function loadList() {
        return fetch(apiUrl).then(function (response) {
            return response.json();
        }).then(function (json) {
            json.results.forEach(function (item) {
                var pokemon = {
                    name: item.name,
                    detailsUrl: item.url
                };
                add(pokemon);
            });
        }).catch(function (e) {
            console.error(e);
        })
    }

    function loadDetails(item) {
        var url = item.detailsUrl;
        return fetch(url).then(function (response) {
            return response.json();
        }).then(function (details) {
            // Now we add the details to the item
            item.imageUrl = details.sprites.front_default;
            item.height = details.height;
            item.types = Object.keys(details.types);
        }).catch(function (e) {
            console.error(e);
        });
    }

    // // show details function // console log // 
    // function showDetails(pokemon) {
    //     console.log(pokemon);
    // }



    return {
        add: add,
        getAll: getAll,
        addListItem: addListItem,
        loadList: loadList,
        loadDetails: loadDetails,
        //  showDetails: showDetails //not neccersary temporary for the next task
    };
})();


pokemonRepository.loadList().then(function () {
    // Now the data is loaded!
    pokemonRepository.getAll().forEach(function (pokemon) {
        pokemonRepository.addListItem(pokemon);
    });
});

function showDetails(pokemon) {
    pokemonRepository.loadDetails(pokemon).then(function () {
        console.log(pokemon);
    });
}
