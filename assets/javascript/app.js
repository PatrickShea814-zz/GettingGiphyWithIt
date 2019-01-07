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
        princeGifs()();
    };
    function emptyDeck() {
        $('.gifCards').delete();
    };

    function home() {
        emptyDeck();
        princeGifs();
    };
    

    function princeGifs() {
        var GIF = "fresh-prince-dance";
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
            GIF + "&api_key=Fay4IAT6SPFWBYL7iiscJsZSB2j8B69D&limit=5";

        $.ajax({
            url: queryURL,
            method: "GET"
        })
            .then(function (response) {
                var results = response.data;

                for (var i = 0; i < results.length; i++) {
                    var gifCards = $("<div class='card'>");
                    var gifRating = $("<h6 class='card-title'>");
                    var gifTitle = $("<h6 class='card-title'>");
                    var gifImage = $("<img>");
                    var rating = results[i].rating.toUpperCase();
                    var title = results[i].title;
                    var shortText = jQuery.trim(title).substring(0, 25).split(" ").slice(0, -1).join(" ") + "...";
                    var gifDL = $('<a href="url" target="_blank" class="downloadLink btn btn-outline-primary fa fa-download"> Download</a>');

                    gifRating.text("Rated: " + rating);
                    gifTitle.text(shortText);
                    gifCards.attr("title", results[i].title);
                    gifDL.attr("href", results[i].images.fixed_height.url);

                    gifImage.attr("src", results[i].images.fixed_height_still.url);
                    gifImage.attr("data-still", results[i].images.fixed_height_still.url);
                    gifImage.attr("data-animate", results[i].images.fixed_height.url);
                    gifImage.attr("data-state", "still");
                    gifImage.addClass("gif");

                    gifCards.prepend(gifImage);
                    gifCards.prepend(gifTitle);
                    gifCards.append(gifRating);
                    gifCards.append(gifDL);
                    $('.gifDeck').prepend(gifCards);
                }
            });
    };

    function displayGifs() {
        emptyDeck();
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
                    var gifRating = $("<h6 class='card-title'>");
                    var gifTitle = $("<h6 class='card-title'>");
                    var gifImage = $("<img>");
                    var rating = results[i].rating.toUpperCase();
                    var title = results[i].title;
                    var shortText = jQuery.trim(title).substring(0, 25).split(" ").slice(0, -1).join(" ") + "...";
                    var gifDL = $('<a href="url" target="_blank" class="downloadLink btn btn-outline-primary fa fa-download"> Download</a>');

                    gifRating.text("Rated: " + rating);
                    gifTitle.text(shortText);
                    gifCards.attr("title", results[i].title);
                    gifDL.attr("href", results[i].images.fixed_height.url);

                    gifImage.attr("src", results[i].images.fixed_height_still.url);
                    gifImage.attr("data-still", results[i].images.fixed_height_still.url);
                    gifImage.attr("data-animate", results[i].images.fixed_height.url);
                    gifImage.attr("data-state", "still");
                    gifImage.addClass("gif");

                    gifCards.prepend(gifImage);
                    gifCards.prepend(gifTitle);
                    gifCards.append(gifRating);
                    gifCards.append(gifDL);
                    $('.gifDeck').prepend(gifCards);
                }
            });
    };

    function searchGif() {
        emptyDeck();
        var gifSearch = $('#searchText').val().trim();
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
            gifSearch + "&api_key=Fay4IAT6SPFWBYL7iiscJsZSB2j8B69D&limit=10";

        $.ajax({
            url: queryURL,
            method: "GET"
        })
            .then(function (response) {
                var results = response.data;

                for (var i = 0; i < results.length; i++) {
                    var gifCards = $("<div class='card'>");
                    var gifRating = $("<h6 class='card-title'>");
                    var gifTitle = $("<h6 class='card-title'>");
                    var gifImage = $("<img>");
                    var rating = results[i].rating.toUpperCase();
                    var title = results[i].title;
                    var shortText = jQuery.trim(title).substring(0, 25).split(" ").slice(0, -1).join(" ") + "...";
                    var gifDL = $('<a href="url" target="_blank" class="downloadLink btn btn-outline-primary fa fa-download"> Download</a>');

                    gifRating.text("Rated: " + rating);
                    gifTitle.text(shortText);
                    gifCards.attr("title", results[i].title);
                    gifDL.attr("href", results[i].images.fixed_height.url);

                    gifImage.attr("src", results[i].images.fixed_height_still.url);
                    gifImage.attr("data-still", results[i].images.fixed_height_still.url);
                    gifImage.attr("data-animate", results[i].images.fixed_height.url);
                    gifImage.attr("data-state", "still");
                    gifImage.addClass("gif");

                    gifCards.prepend(gifImage);
                    gifCards.prepend(gifTitle);
                    gifCards.append(gifRating);
                    gifCards.append(gifDL);
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

    $('.home').on('click', home);

    $('#submit').on("click", function (event) {
        event.preventDefault();
        emptyDeck();

        var gifSearch = $('#searchText').val().trim();
        var lowerGifSearch = gifSearch.toLowerCase();
        var upperGifSearch = gifSearch.charAt(0).toUpperCase() + gifSearch.slice(1);

        if (miscTopics.indexOf(upperGifSearch) === -1 && movieTopics.indexOf(upperGifSearch) === -1 && actorsTopics.indexOf(upperGifSearch) === -1 && starWarsTopics.indexOf(upperGifSearch) === -1 && miscTopics.indexOf(upperGifSearch) === -1) {
            miscTopics.push(upperGifSearch);
            var dropItem = $("<a class='dropdown-item'>");
            dropItem.addClass("gif-btn");
            dropItem.attr("data-name", gifSearch);
            dropItem.text(upperGifSearch);

            $('#miscDrop').prepend(dropItem);
            searchGif();
        } else {
            searchGif();
        }
    });

    $(document).on("mouseenter", ".gif", function () {
        var state = $(this).attr("data-state");
        event.preventDefault();

        if (state === "still") {
            $(this).attr("src", $(this).attr("data-animate"));
            $(this).attr("data-state", "animate");
        } else {
            $(this).attr("src", $(this).attr("data-still"));
            $(this).attr("data-state", "still");
        }
    });

    $(document).on("mouseleave", ".gif", function () {
        var state = $(this).attr("data-state");
        event.preventDefault();

        if (state === "still") {
            $(this).attr("src", $(this).attr("data-animate"));
            $(this).attr("data-state", "animate");
        } else {
            $(this).attr("src", $(this).attr("data-still"));
            $(this).attr("data-state", "still");
        }
    });

    $('.clearSearch').on('click', clearSearch);

    $(document).on("click", ".gif-btn", displayGifs);
    createButtons();
    princeGifs();
    $(".downloadButton").click(function(){
        var href = $('.downloadLink').attr('href');
        window.location.href = href;
       });
});