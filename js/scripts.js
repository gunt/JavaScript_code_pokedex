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


    // Creating showModal Function - Content 
    function showModal(item) {
        var $modalContainer = document.querySelector('#modal-container');
        // var dialogPromiseReject; // This can be set later, by showDialog


        // Clear all existing modal content
        $modalContainer.innerHTML = '';

        var modal = document.createElement('div');
        modal.classList.add('modal');

        // Add the new modal content
        var closeButtonElement = document.createElement('button');
        closeButtonElement.classList.add('modal-close');
        closeButtonElement.innerText = 'Close';
        closeButtonElement.addEventListener('click', hideModal);


        //creating modal display name, height, image
        var nameElement = document.createElement('h1');
        nameElement.innerText = item.name;

        var heightElement = document.createElement('p');
        heightElement.innerText = 'height : ' + item.height;

        var imageElement = document.createElement('img');
        imageElement.classList.add('modal-img') // class image poke
        imageElement.setAttribute('scr', item.imageUrl);

        var typesElement = document.createElement('p');
        typesElement.innerText = 'type : ' + item.types;

        // appending modals & add class modal
        modal.appendChild(closeButtonElement);
        modal.appendChild(nameElement);
        modal.appendChild(heightElement);
        modal.appendChild(imageElement);
        modal.appendChild(typesElement);
        $modalContainer.appendChild(modal);
        $modalContainer.classList.add('is-visible');
    }

    function hideModal() {
        var $modalContainer = document.querySelector('#modal-container');
        $modalContainer.classList.remove('is-visible');
    }


    window.addEventListener('keydown', (e) => {
        var $modalContainer = document.querySelector('#modal-container');
        if (e.key === 'Escape' && $modalContainer.classList.contains('is-visible')) {
            hideModal();
        }
    });

    //   modal via clicking outside of it, instead directly on the overlay
    var $modalContainer = document.querySelector('#modal-container');
    $modalContainer.addEventListener('click', (e) => {
        // Since this is also triggered when clicking INSIDE the modal container,
        // We only want to close if the user clicks directly on the overlay
        var target = e.target;
        if (target === $modalContainer) {
            hideModal();
        }
    });


    return {
        add: add,
        getAll: getAll,
        addListItem: addListItem,
        loadList: loadList,
        loadDetails: loadDetails,
        showModal: showModal,
        hideModal: hideModal,
        showDetails: showDetails //not neccersary temporary for the next task
    };
})();


pokemonRepository.loadList().then(function () {
    // Now the data is loaded!
    pokemonRepository.getAll().forEach(function (pokemon) {
        pokemonRepository.addListItem(pokemon);
    });
});

function showDetails(item) {
    pokemonRepository.loadDetails(item).then(function () {
        // console.log(pokemon);  // instead of console.log // show in modal
        showModal(item);
    });
}
