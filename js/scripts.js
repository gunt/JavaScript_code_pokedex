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

//Part 2: forEach Loops
repository.forEach(function (property) {
    document.write('<p> ' + property.name + ':' + '  ' + property.height + ' - ' + property.types + '</p>');
});
