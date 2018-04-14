$(function(){


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
                <a href="#" class="btn btn-primary">Add</a>
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









});