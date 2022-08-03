$(document).ready(function () {
    $(".click-modal-toggle").on("click", function (event) {
        let toggle = $(this).attr("data-toggle");
        let title = $(this).data("title");
        let body = $(this).data("body");

        if (toggle == "open") {
            $(".toggle-modal .toggle-modal-title").html(title);
            $(".toggle-modal .toggle-modal-body").html(body);
            $(".toggle-modal, .modal-bg").addClass("show");
        } else if (toggle == "close") {
            $(".toggle-modal, .modal-bg").removeClass("show");
        }
    });


    $('.button-scroll-up').click(function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        });
    });

    $('#nav-button, .menu-point').click(function () {
        $('#nav-button').toggleClass('active');
        $('.menu-bar, .part-menu, header, .menu-bar-bg').toggleClass('active');
    });
    window.addEventListener('scroll', function() {
        var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        var widthScreen = window.innerWidth;
        if (scrollTop > 20) {
            $('#main-page header .menu').show();

        } else {
            $('#main-page header .menu').hide();

        }

        if (scrollTop > 200) {

            $('.button-scroll-up').fadeIn();
        } else {

            $('.button-scroll-up').fadeOut();
        }
    });

    $('.button-amount').click(function () {
        $(this).toggleClass('active');
        $('.amount-detalis, .arrow-amount-detail').toggleClass('active');
    });

    $('.point-menu').click(function () {
        let tag = $(this).attr('data-name');
        $(`.${tag}`).removeClass('active');
        $(`.${tag}-text`).removeClass('active');
        let data = $(this).addClass('active').attr('data-position');
        $(`#${data}`).addClass('active');
        $(`.${tag}-active`).attr('data-active', data);
        $(`.${tag}-img`).attr('data-img', data);
        $(`.description-choose-img source`)[0].srcset = `./images/how-to-use-${data}.webp`;
        $(`.description-choose-img source`)[1].srcset = `./images/how-to-use-${data}.png`;
    });

    $('.animation-menu_tab').click(function () {
        let tag = $(this).attr('data-name');
        $(`.${tag}_tab`).removeClass('active');
        $(`.${tag}-text`).removeClass('active');
        let data = $(this).addClass('active').attr('data-position');
        $(`#${data}`).addClass('active');
        $(`.${tag}-active`).attr('data-active', data);
    });

    $('.choose-time-call_choose-box').click(function () {
        $('.choose-time-call_choose-box').removeClass('active');
        let windowsOpenTimeCall = $(this).attr('data-windows');
        if (windowsOpenTimeCall === 'open') {
            $('#window-time-call').addClass('active');
        } else {
            $('#window-time-call').removeClass('active');
        }
        $(this).addClass('active');
    });



    $(function () {
        $("#accordion").accordion({
            animate: false,
            heightStyle: "content",
            collapsible: true
        });
    });
    $('#carouselPoints').owlCarousel({
        loop: true,
        nav: true,
        margin:15,
        autoplayTimeout: 100000,
        dots: true,
        autoplay: true,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            },
            800: {
                items: 2
            }
        },
        itemsDesktop: false,
        itemsDesktopSmall: false,
        itemsTablet: false,
        //navText: ["<img src='img/arr-l.png'>","<img src='img/arr-r.png'>"],
        itemsMobile: true
    });

    function getUrlVar(){
        var urlVar = window.location.search; // получаем параметры из урла
        var arrayVar = []; // массив для хранения переменных
        var valueAndKey = []; // массив для временного хранения значения и имени переменной
        var resultArray = []; // массив для хранения переменных
        arrayVar = (urlVar.substr(1)).split('&'); // разбираем урл на параметры
        if(arrayVar[0]=="") return false; // если нет переменных в урле
        for (i = 0; i < arrayVar.length; i ++) { // перебираем все переменные из урла
            valueAndKey = arrayVar[i].split('='); // пишем в массив имя переменной и ее значение
            resultArray[valueAndKey[0]] = valueAndKey[1]; // пишем в итоговый массив имя переменной и ее значение
        }
        return resultArray; // возвращаем результат
    }

    let changeTemplate = function(id, tag, position){
        $(`.${tag}_tab`).removeClass('active');
        $(`.${tag}-text`).removeClass('active');
        $(`#${id}`).addClass('active');
        $(`#${position}`).addClass('active');
        $(`.${tag}-active`).attr('data-active', position);
    }

    var result = getUrlVar();
    switch (result.page){
        case 'about-company':changeTemplate(result.page,'animation-menu', 'left' ); break;
        case 'FAQ': changeTemplate(result.page,'animation-menu', 'middle' ); break;
        case 'news': changeTemplate(result.page,'animation-menu', 'right' ); break;
        case 'politics':changeTemplate(result.page,'animation-menu', 'left' ); break;
        case 'documents-list': changeTemplate(result.page,'animation-menu', 'middle' ); break;
        case 'contacts': changeTemplate(result.page,'animation-menu', 'left' ); break;
        case 'feedback': changeTemplate(result.page,'animation-menu', 'middle' ); break;
        case 'complaint': changeTemplate(result.page,'animation-menu', 'right' ); break;
    }

});


