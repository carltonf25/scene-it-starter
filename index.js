$(function(){
var watchlist = [];

    var renderMovies = function(movieArray){
        var finalHTML = "";
        movieArray.forEach(currentMovie => {
            finalHTML +=
            `
            <div class="card movie" style="width: 18rem;">
                <img class="card-img-top" src=${currentMovie.Poster} alt="Card image cap">
                <div class="card-body">
                <h5 class="card-title">${currentMovie.Title}</h5>
                <p class="card-text">Released: ${currentMovie.Year}</p>
                <a href="#" data-id = "${currentMovie.imdbID}" class="btn btn-primary add-btn">Add</a>
                </div>
            </div>
            `;
        });
        return finalHTML;
    }






    $('form').submit(function(e){
        e.preventDefault();
        var results = renderMovies(movieData);
        $('.movies-container').html(results);
    });

    $('.movies-container').on('click', '.add-btn', function(e){
        var imdbID = $(this).data('id');
        var movie = movieData.find(function(currentMovie){
            return currentMovie.imdbID == imdbID;
        });
        var watchListJSON = localStorage.getItem('watchlist');
        var watchlist = JSON.parse(watchListJSON);
        if (watchlist == null) {
            watchlist = [];
        }
        watchlist.push(movie);
        watchlistJSON = JSON.stringify(watchlist);
        localStorage.setItem('watchlist', watchlistJSON);
    });








});