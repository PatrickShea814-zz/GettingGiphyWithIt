$(document).ready(function () {
    var movieTopics = ['The Big Lebowski', 'Ace Ventura', 'Dumb & Dumber', 'Austin Powers', 'Star Wars'];
    var actorsTopics = ['Jim Carrey', 'Nicolas Cage', 'Scarlett Johansson', 'Jennifer Lawrence', 'Chris Pratt'];
    var starWarsTopics = ['Luke Skywalker', 'Darth Vader', 'Han Solo', 'Chewbacca', 'R2-D2'];
    var miscTopics = [''];
    var allTopics = [movieTopics, actorsTopics, starWarsTopics, miscTopics];

    function clearSearch() {
        $('.gifDeck').empty();
        miscTopics = [''];
        $('#miscDrop').empty();
    };

   

    function displayGifs() {
        
        var GIF = $(this).attr("data-name");
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
            GIF + "&api_key=Fay4IAT6SPFWBYL7iiscJsZSB2j8B69D&limit=10";

        $.ajax({
            url: queryURL,
            method: "GET"
        })
            .then(function (response) {
                var results = response.data;

                for (var i = 0; i < results.length; i++) {
                    var gifCards = $("<div class='card'>");

                    var gifImage = $("<img>");
                    gifImage.attr("src", results[i].images.fixed_height.url);


                    gifCards.prepend(gifImage);

                    $('.gifDeck').prepend(gifCards);
                }
            });
    };

    function searchGif(search) {
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
            search + "&api_key=Fay4IAT6SPFWBYL7iiscJsZSB2j8B69D&limit=10";
        $.ajax({
            url: queryURL,
            method: "GET"
        })
            .then(function (response) {
                var results = response.data;
                for (var i = 0; i < results.length; i++) {
                    var gifCards = $("<div class='card'>");
                    var gifImage = $("<img>");
                    gifImage.attr("src", results[i].images.fixed_height.url);
                    gifCards.prepend(gifImage);
                    $('.gifDeck').prepend(gifCards);
                }
            });
    };

    function createButtons() {
        for (var i = 0; i < movieTopics.length; i++) {
            var dropItem = $("<a class='dropdown-item'>");
            dropItem.addClass("gif-btn");
            dropItem.attr("data-name", movieTopics[i]);
            dropItem.text(movieTopics[i]);
            $('#movieDrop').prepend(dropItem);
        };
        for (var i = 0; i < actorsTopics.length; i++) {
            var dropItem = $("<a class='dropdown-item'>");
            dropItem.addClass("gif-btn");
            dropItem.attr("data-name", actorsTopics[i]);
            dropItem.text(actorsTopics[i]);
            $('#actorsDrop').prepend(dropItem);
        };
        for (var i = 0; i < starWarsTopics.length; i++) {
            var dropItem = $("<a class='dropdown-item'>");
            dropItem.addClass("gif-btn");
            dropItem.attr("data-name", starWarsTopics[i]);
            dropItem.text(starWarsTopics[i]);
            $('#starWarsDrop').prepend(dropItem);
        };
    };

    $('#submit').on("click", function (event) {
        event.preventDefault();
        
        var gifSearch = $('#searchText').val().trim();
        var lowerGifSearch = gifSearch.toLowerCase();
        var upperGifSearch = gifSearch.charAt(0).toUpperCase() + gifSearch.slice(1);
        
        if (miscTopics.indexOf(upperGifSearch) === -1 && movieTopics.indexOf(upperGifSearch) === -1 && actorsTopics.indexOf(upperGifSearch) === -1 && starWarsTopics.indexOf(upperGifSearch) === -1 && miscTopics.indexOf(upperGifSearch) === -1) {
            miscTopics.push(upperGifSearch);
            var dropItem = $("<a class='dropdown-item'>");
            dropItem.addClass("gif-btn");
            dropItem.attr("data-name", gifSearch);
            dropItem.attr("data-state", "still");
            dropItem.text(upperGifSearch);
            $('#miscDrop').prepend(dropItem);
        }
        searchGif(gifSearch);
    });

    $('.clearSearch').on('click', clearSearch);

    $(document).on("click", ".gif-btn", displayGifs);
    createButtons();
});


    /*function makeButton(thing){
        var dropItem = $("<a class='dropdown-item'>");
        dropItem.text(thing);
        $('#movieDrop').prepend(dropItem);
    }
    
        allTopics.forEach(function(index) {
            index.forEach(item) {
    
            }
        }); */
