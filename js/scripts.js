(function () {
var pokemonRepository = (function () {
    var repository = [];
    var apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=50';

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
        });
    }

    function addListItem(pokemon) {

        //creating the button // &textButton  // var $pokebuttonText = document.createTextNode(name);

        //var name = pokemon.name;
        var $listItemElement = document.createElement('li');

        var $ul = document.querySelector('ul');
        $ul.appendChild($listItemElement);


        var $button = document.createElement('button');
        $button.classList.add('button');


        $listItemElement.classList.add('pokemon-list__item');
        $listItemElement.appendChild($button);

        //var $buttonText = document.createTextNode(name);

        $button.innerText = pokemon.name;

        $button.addEventListener('click', function () {
            showDetails(pokemon);
        });

    }

    function showDetails(pokemon) {
        pokemonRepository.loadDetails(pokemon).then(function () {
            showModal(pokemon);
            //console.log(pokemon);
        });
    }

    function add(pokemon) {

        if (typeof repository === 'object') {
            repository.push(pokemon)
        } else {
            console.log('Is not an Object');
        }

    }

    function getAll() {
        return repository;
    }

    function loadDetails(pokemon) {
        var url = pokemon.detailsUrl;
        return fetch(url).then(function (response) {
            return response.json();
        }).then(function (details) {
            // Now we add the details to the item
            pokemon.imageUrl = details.sprites.front_default;
            pokemon.height = details.height;
            pokemon.types = Object.keys(details.types);
        }).catch(function (e) {
            console.error(e);
        });
    }

    function showModal(pokemon) {

        //var $modalContainer = document.querySelector('#modal-container');


        // Clear all existing modal content
        $modalContainer.innerHTML = '';

        var modal = document.createElement('div');
        modal.classList.add('modal');

        // Add the new modal content
        var closeButtonElement = document.createElement('button');
        closeButtonElement.classList.add('modal-close');
        closeButtonElement.innerText = 'Close';
        closeButtonElement.addEventListener('click', hideModal);

        // rearranging display in modalContainer
        var nameElement = document.createElement('h1');
        nameElement.innerText = pokemon.name;

        var imageElement = document.createElement('img');
        imageElement.setAttribute('src', pokemon.imageUrl);

        var $contentElement = document.createElement('p');
        $contentElement.innerText = 'Height' + pokemon.height;

        modal.appendChild(closeButtonElement);
        modal.appendChild(nameElement);
        modal.appendChild(imageElement);
        modal.appendChild($contentElement);
        $modalContainer.appendChild(modal);

        $modalContainer.classList.add('is-visible');
    }

    function hideModal() {
        //var $modalContainer = document.querySelector('#modal-container');
        $modalContainer.classList.remove('is-visible');
    }


    window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && $modalContainer.classList.contains('is-visible')) {
            hideModal();
        }
    });



    var $modalContainer = document.querySelector('#modal-container');
    $modalContainer.addEventListener('click', e => {
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
        showDetails: showDetails,
        loadList: loadList,
        loadDetails: loadDetails,
        showModal: showModal,
        hideModal: hideModal
        //not neccersary temporary for the next task
    };
})();

pokemonRepository.loadList().then(function () {
    // Now the data is loaded!
    pokemonRepository.getAll().forEach(function (pokemon) {
        pokemonRepository.addListItem(pokemon);
    });
});
})();