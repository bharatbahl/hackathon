(function(){document.getElementById('home-slideshow').getElementsByTagName('img')[0].className="fx";window.setInterval(kenBurns,10000);var images=document.getElementById('home-slideshow').getElementsByTagName('img'),numberOfImages=images.length,i=1;function kenBurns(){if(i==numberOfImages){i=0;}
images[i].className="fx";if(i===0){images[numberOfImages- 2].className="";}
if(i===1){images[numberOfImages- 1].className="";}
if(i>1){images[i- 2].className="";}
i++;}})();jQuery(function($){$('#video-intro-trigger').unbind('click.animsition');$('#video-intro-trigger').click(function(e){e.preventDefault();var movieID=$(this).attr('href');movieID=movieID.split('index.html');movieID=movieID[3];$('body').append('<div id="videoPlayer" class="black"><div class="video-wrapper"></div><a href="#" class="close-btn"></a><div class="responsive-video"></div></div>');var movieEmbed='<iframe src="http://player.vimeo.com/video/'+ movieID+'?api=1&autoplay=1" width="1281" height="720" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>';function embedPlayer(){var wHeight=$(window).height()-60,wWidth=$(window).width();$('#videoPlayer .responsive-video').css({'width':wWidth+'px','height':wHeight+'px','padding-bottom':0,'margin-left':'auto','margin-right':'auto'});$('#videoPlayer .responsive-video').append(movieEmbed);}
$('#section-hero .vertical-wrapper').addClass('no-show');$('#videoPlayer').animate({'opacity':1},{duration:1500,easing:"easeOut",complete:embedPlayer});function removePlayer(){$('#videoPlayer').empty().remove();$('#section-hero .vertical-wrapper').removeClass('no-show');}
$('#videoPlayer a.close-btn, div.video-wrapper').on('click',function(e){e.preventDefault();var thisParent=$(this).parent();$('.responsive-video',thisParent).fadeOut('fast');$('#videoPlayer').animate({'opacity':0},{duration:1000,easing:"easeOut",complete:removePlayer});});});});