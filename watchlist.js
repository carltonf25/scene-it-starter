$(function (){

    var watchListJSON = localStorage.getItem('watchlist');
    var watchlist = JSON.parse(watchListJSON);

    var renderMovies = function(watchlist){
        var finalHTML = "";
        watchlist.forEach(currentMovie => {
            finalHTML +=
            `
            <div class="card movie" style="width: 18rem;">
                <img class="card-img-top" src=${currentMovie.Poster} alt="Card image cap">
                <div class="card-body">
                    <h5 class="card-title">${currentMovie.Title}</h5>
                    <p class="card-text">Released: ${currentMovie.Year}</p>
                </div>
            </div>
            `;
        });
        return finalHTML;
    }


    var results = renderMovies(watchlist);
    $('.movies-container').html(results);

});