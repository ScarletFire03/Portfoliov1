
// The path to the folder containing the images
var folderPath = "../portfolioimg/";

$.ajax({
    url : folderPath,
    success: function (data) {
        $(data).find("a").attr("href", function (i, val) {
            if( val.match(/\.(jpe?g|png|gif)$/) ) {
                $("imgcontainer").append( "<img src='"+ folderPath + val +"'>" );
                console.log(val);
            }
        });
    }
})