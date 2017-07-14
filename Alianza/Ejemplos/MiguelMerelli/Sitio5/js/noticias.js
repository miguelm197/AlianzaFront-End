$(".button-collapse").sideNav();

$(document).ready(function () {
    $.ajax({
        url: "https://newsapi.org/v1/articles?source=techcrunch&apiKey=9fccad58a33d4d7391c327a914cc8b41",
        dataType: "json",
        success: function (data) {
            console.log(data.articles[0]);
            data.articles.forEach(function (element) {
                //-------------------------------------------
                var titulo = element.title;
                var descripcion = element.description;
                var url = element.url;
                var imagen = element.urlToImage;
                //-------------------------------------------

                console.log(element)

                var carta = "" +
                    `<div class='card'>
                               <div class='card-image waves-effect waves-block waves-light'>
                                   <img class='activator' src='` + imagen + `'>
                               </div>
                               <div class='card-content'>
                                   <span class='card-title activator grey-text text-darken-4'>` + titulo + `<i class='material-icons right'>more_vert</i></span>
                                   <p><a href='` + url + `'>Url</a></p>
                               </div>
                               <div class='card-reveal'>
                                   <span class='card-title grey-text text-darken-4'>`+ titulo + `<i class='material-icons right'>close</i></span>
                                   <p>` + descripcion + `</p>
                               </div>
                           </div>`

                $(".container").append(carta);

            }, this);
        }
    });
});