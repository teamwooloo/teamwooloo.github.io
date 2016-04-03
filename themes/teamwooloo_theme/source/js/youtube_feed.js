(function($){

var channelID_url = "https://www.googleapis.com/youtube/v3/channels?part=contentDetails&forUsername=teamwooloo&key="+window.GOOGLE_API_PUBLIC_KEY;

//add playlistID to end to complete url
var channelUploads_url = "https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=9&key="+window.GOOGLE_API_PUBLIC_KEY+"&playlistId=";

try{

$.getJSON(channelID_url, function(data) {
    var uploadsID = data.items[0].contentDetails.relatedPlaylists.uploads;

    $.getJSON(channelUploads_url + uploadsID, function(data2) {

        var out = '<div class="row">';
        var item;
        var len = data2.items.length;
        for(var i = 0; i < len; i++) {
            item = data2.items[i];
            var splitIndex = item.snippet.title.indexOf('-');
            var firstPart = splitIndex < 0 ? '' : item.snippet.title.substring(0, splitIndex);
            firstPart = firstPart.trim();
            console.log("Firstpart: "+firstPart);
            if(firstPart != '') firstPart += '<br/>';

            var secondPart = item.snippet.title.substring(splitIndex+1);

            var description = item.snippet.description;
            if(description.length > 150){
                description = description.substring(0, 150) + " ...";
            }
            description.replace('\\n', '<br/>');

            out += '<div class="col-md-12 col-lg-6"><div class="card"> \
                        <div class="card-block"> \
                            <a href="https://www.youtube.com/watch?v=' + item.snippet.resourceId.videoId + '"> \
                            <h4 class="card-title"> [YouTube] ' + secondPart + '</h4><h6 class="card-subtitle text-muted">' + firstPart + '</h6></a> \
                        </div> \
                        <img class="img-fluid" style="width:100%" src="' + item.snippet.thumbnails.medium.url + '" \
                             alt="watch ' + item.snippet.title + ' on youtube!"> \
                        <div class="card-block"> \
                            <p class="card-text">' + description + '</p> \
                            <a class="card-link" href="https://www.youtube.com/watch?v=' + item.snippet.resourceId.videoId + '"> \
                            Watch on YouTube</a> \
                        </div> \
                    </div></div>';

            if(i != len - 1 && i % 2 == 1){
                out += '</div><div class="clearfix"></div><br/><div class="row">';
            }
        }

        out += '    <div class="col-md-12 col-lg-6"> \
                        <div class="card card-inverse card-primary"> \
                            <div class="card-block"> \
                                <a class="card-link" href="https://www.youtube.com/teamwooloo' + item.snippet.resourceId.videoId + '">\
                                    <h3 class="card-title">More videos!</h3>\
                                </a> \
                                <p class="card-text">Check out our YouTube channel for more videos!</p> \
                                <a class="card-link" href="https://www.youtube.com/teamwooloo' + item.snippet.resourceId.videoId + '"> \
                                    YouTube.com/TeamWooloo</a> \
                            </div> \
                        </div>\
                    </div> \
                </div>';

        console.log(out);

        $("#youtubefeed").html(out);

    });

});


} catch(e) {
    window.console.log(e);
}

})(jQuery);
