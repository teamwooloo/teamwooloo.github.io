(function($){

    // Share
    $('.share-link').popover({
        html: true,
        content: function(){
            var $this = $(this),
                url = $this.attr('data-url'),
                encodedUrl = encodeURIComponent(url);
            return '<div class="article-share-links"> \
          <a href="https://twitter.com/intent/tweet?url=' + encodedUrl + '" class="article-share-twitter" target="_blank" title="Twitter"><i class="fa fa-twitter"></i></a> \
          <a href="https://www.facebook.com/sharer.php?u=' + encodedUrl + '" class="article-share-facebook" target="_blank" title="Facebook"><i class="fa fa-facebook"></i></a> \
          <a href="http://pinterest.com/pin/create/button/?url=' + encodedUrl + '" class="article-share-pinterest" target="_blank" title="Pinterest"><i class="fa fa-pinterest"></i></a> \
          <a href="https://plus.google.com/share?url=' + encodedUrl + '" class="article-share-google" target="_blank" title="Google+"><i class="fa fa-google-plus"></i></a> \
      </div>'
        }
    });

    // Caption
    $('.article-entry').each(function(i){
        $(this).find('img').each(function(){
            if ($(this).parent().hasClass('fancybox')) return;

            var alt = this.alt;

            if (alt) $(this).after('<span class="caption">' + alt + '</span>');

            $(this).wrap('<a href="' + this.src + '" title="' + alt + '" class="fancybox"></a>');
        });

        $(this).find('.fancybox').each(function(){
            $(this).attr('rel', 'article' + i);
        });
    });

    if ($.fancybox){
        $('.fancybox').fancybox();
    }

    //$(document).ready(function() {

        var bgPlayer = $('.bg_player');

        //detects small viewport with css
        if(bgPlayer.css('display') != 'none') {
            bgPlayer.mb_YTPlayer();
        }

    //});

    $('body').append('<div id="toTop" class="btn btn-info"><i class="fa fa-arrow-up"></i> Back to Top</div>');
    $(window).scroll(function () {
        if ($(this).scrollTop() != 0) {
            $('#toTop').fadeIn();
        } else {
            $('#toTop').fadeOut();
        }
    });
    $('#toTop').click(function(){
        $("html, body").animate({ scrollTop: 0 }, 600);
        return false;
    });


})(jQuery);