(function($){
    $( document ).ready(function() {

    try {

        var download_links = $('.download-link');

        download_links.each(function(i){
            var jo = this;
            jo.style.display = 'none';

            window.console.log("inserting ad");

            //downloadpagead1
            jo.insertAdjacentHTML("afterend",
                '<ins class="adsbygoogle" \
                      style="display:block" \
                      data-ad-client="ca-pub-9236568290320191" \
                      data-ad-slot="4033709662" \
                      data-ad-format="auto"> \
                 </ins>');

            jo.insertAdjacentHTML('afterend', '<br/> \
                <div id="mapdownloadalert" class="card card-block card-info card-inverse"> \
                <h4 class="card-title">' + jo.text + '</h4> \
                <p class="card-text">Download will be available in <strong id="downloadcounter">10</strong> seconds.<br/> \
                Please consider checking out an advertisement, don\'t use any ad blocker software.<br/> \
                Ads support us and make future Minecraft content-development possible.<br/> \
                All advertisement revenue is used for creating new content for everyone to enjoy!<br/> \
                <strong>Thank you!</strong></p> \
            </div> \
            <br/>');

            //downloadpagead2
            jo.insertAdjacentHTML("afterend",
                '<ins class="adsbygoogle" \
                      style="display:block" \
                      data-ad-client="ca-pub-9236568290320191" \
                      data-ad-slot="3894108862" \
                      data-ad-format="auto"> \
                 </ins>');

            var downloadcounter = $('#downloadcounter');

            function countdown() {
                var seconds = parseInt(downloadcounter.text(), 0);

                if (seconds == 0) {
                    $(jo.parentNode).find('#mapdownloadalert')
                        .removeClass('card-info').addClass('card-success')
                        .append('<p class="card-text">There you go! Enjoy! :D</p> \
                    <h4 class="card-title"><a href="' + jo.href + '" target="_blank" class="card-link"> Download here: ' + jo.text + ' (Click) </a></h4>');
                    return;
                }

                downloadcounter.html('' + (seconds - 1));
                setTimeout(countdown, 1000);
            }

            countdown();

        });



    } catch(e) {
        window.console.log(e);
    }


    });

})(jQuery);
