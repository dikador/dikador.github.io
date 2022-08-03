$( document ).ready(function() {


    $(' #carouselPoints').owlCarousel({
        loop:true,
        nav:true,
        autoplayTimeout:100000,
        dots:true,
        autoplay: true,
        autoplayHoverPause:true,
        items:1,
        itemsDesktop : false,
        itemsDesktopSmall : false,
        itemsTablet: false,
        navText: ["<img src='img/arr-l.png'>","<img src='img/arr-r.png'>"],
        itemsMobile : true
    });
/*    $("#input-phone").mask("+7 (999) 999 9999");*/
    $('#nav-button').click(function(){
        $('header').toggleClass('show-nav');
        $('.nav-bar-icon').toggleClass('open');

    });
    $('.choose-menu').click(function(){
        var widthScreen = window.innerWidth;
        if(widthScreen < 991){
            $('header').toggleClass('show-nav');
            $('.nav-bar-icon').toggleClass('open');
        }
    })


    window.addEventListener('scroll', function() {
        var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        var widthScreen = window.innerWidth;

        if(scrollTop > 810){
            $('.second-logotype').addClass('logo-fix');
        }
        else{
            $('.second-logotype').removeClass('logo-fix');

        }

        if(widthScreen >= 991 && scrollTop){

            $(".choose-menu").removeClass('active');
            if(scrollTop >= 0 && scrollTop <= 788){
                $(".theme").attr('data-theme', 'theme-nav-1');
                $(".theme").addClass('active');
                $('#nav-block-1').addClass('active');
                $('.img-bg-logotype').css({ "background-position-y": "-219px"})
            }
            else if(scrollTop > 788 && scrollTop <= 1445){
                $('#nav-block-2').addClass('active');
                $(".theme").attr('data-theme', 'theme-nav-2');
                $('.img-bg-logotype').css({ "background-position-y": "-219px"})
            }
            else if(scrollTop > 1445 && scrollTop <= 2349){
                $('#nav-block-2').addClass('active');
                $(".theme").attr('data-theme', 'theme-nav-3');
                $('.img-bg-logotype').css({ "background-position-y": "-164px"})
            }
            else if(scrollTop > 2349 && scrollTop <= 3089){
                $('#nav-block-2').addClass('active');
                $(".theme").attr('data-theme', 'theme-nav-4');
                $('.img-bg-logotype').css({ "background-position-y": "-217px"})
            }
            else if(scrollTop > 3089 && scrollTop <= 4079){
                $('#nav-block-4').addClass('active');
                $(".theme").attr('data-theme', 'theme-nav-1');
                $('.img-bg-logotype').css({ "background-position-y": "-164px"})
            }
            else if(scrollTop > 4080 && scrollTop <= 4225 ){
                $('#nav-block-5').addClass('active');
                $(".theme").attr('data-theme', 'theme-nav-4');
                $('.img-bg-logotype').css({ "background-position-y": "-217px"})
            }
            else if(scrollTop > 4225 ){
                $('#nav-block-fotter').addClass('active');
                $(".theme").attr('data-theme', 'theme-nav-4');
                $('.img-bg-logotype').css({ "background-position-y": "-217px"})
            }
        }
        else if(widthScreen < 991 && scrollTop){

            $(".choose-menu").removeClass('active');
            if(scrollTop >= 0 && scrollTop <= 788){
                $('#nav-block-1').addClass('active');
            }
            else if(scrollTop > 788 && scrollTop <= 4650){
                $('#nav-block-2').addClass('active');
            }
            else if(scrollTop > 4650 && scrollTop <= 6245){
                $('#nav-block-4').addClass('active');
            }
            else if(scrollTop > 6245 && scrollTop <= 7051){
                $('#nav-block-5').addClass('active');
            }
            else if(scrollTop > 7051 ){
                $('#nav-block-fotter').addClass('active');
            }
        }
        else{

            $(".theme").attr('data-theme', 'theme-nav-1');
        }


    });

});


/*
    анимация для перелистывания страницы
    https://greensock.com/scrolltrigger/

    просто красивая анимация для лого например
    https://animejs.com/
*/

/*
файл .htaccess
<IfModule mod_expires.c>

    Header append Cache-Control "public"

    FileETag MTime Size

    ExpiresActive On

    ExpiresDefault "access plus 0 minutes"

    ExpiresByType image/ico "access plus 1 years"

    ExpiresByType text/css "access plus 1 years"

    ExpiresByType text/javascript "access plus 1 years"

    ExpiresByType image/gif "access plus 1 years"

    ExpiresByType image/jpg "access plus 1 years"

    ExpiresByType image/jpeg "access plus 1 years"

    ExpiresByType image/bmp "access plus 1 years"

    ExpiresByType image/png "access plus 1 years"

</IfModule>*/
