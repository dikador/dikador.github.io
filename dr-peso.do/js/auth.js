/*------scroll-------*/
$(".link").on("click", function (event) {
    event.preventDefault();
    var id = $(this).attr('href'),
        top = $(id).offset().top;
    $('body,html').animate({
        scrollTop: top
    }, 800);
});

// menu
    
$(function(){

    $('.burger').click(function(){
        $('.burger, .mainnav').toggleClass('active');
        $('body, .main').toggleClass('activenav');
    });

});

// ======== noUiSlider RD
    
const sumSlider = document.getElementById('slider_sum');

noUiSlider.create(sumSlider, {
    start: 3000,
    tooltips: false,
    connect: [true, false],
    step: 1,
    range: {
        'min': 1000,
        'max': 10000,
    },
    format: {
        to: function (value) {
            return parseInt(value);
        },
        from: function (value) {
            return parseInt(value);
        }
    }
});

sumSlider.noUiSlider.on('update', (values, handle) => {
  document.querySelector('#calculator__sum').innerHTML = "RD$ " + values;
});

// ======== noUiSlider DAY
    
const daySlider = document.getElementById('slider_day');

noUiSlider.create(daySlider, {
    start: 10,
    tooltips: false,
    connect: [true, false],
    step: 1,
    range: {
        'min': 7,
        'max': 30,
    },
    format: {
        to: function (value) {
            return parseInt(value);
        },
        from: function (value) {
            return parseInt(value);
        }
    }
});

daySlider.noUiSlider.on('update', (values, handle) => {
  document.querySelector('#calculator__day').innerHTML = values + " dias";
});

// calculator accordion

var acc = document.getElementsByClassName("button-amount");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight){
      panel.style.maxHeight = null;
      document.querySelector('.fa-chevron-up').style.transform='rotate(180deg)';
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
      document.querySelector('.fa-chevron-up').style.transform='rotate(0deg)';
    } 
  });
}

// parsley

$('.ask-question_pop-up').parsley();

// select 

jQuery(($) => {
  $('.select').on('click', '.select__head', function () {
    if ($(this).hasClass('open')) {
        $(this).removeClass('open');
        $(this).next().fadeOut();
    } else {
        $('.select__head').removeClass('open');
        $('.select__list').fadeOut();
        $(this).addClass('open');
        $(this).next().fadeIn();
    }
});

$('.select').on('click', '.select__item', function () {
      $('.select__head').removeClass('open');
      $(this).parent().fadeOut();
      $(this).parent().prev().text($(this).text());
      $(this).parent().prev().prev().val($(this).text());
  });

  $(document).click(function (e) {
      if (!$(e.target).closest('.select').length) {
          $('.select__head').removeClass('open');
          $('.select__list').fadeOut();
      }
  });
});

// section__three slider

$(".tab_item").not(":first").hide();
$(".tab").click(function() {
    $(".tab").removeClass("active").eq($(this).index()).addClass("active");
    $(".tab_item").hide().eq($(this).index()).fadeIn()
}).eq(0).addClass("active");

$(".tab_item1").not(":first").hide();
$(".tab").click(function() {
    $(".tab").removeClass("active").eq($(this).index()).addClass("active");
    $(".tab_item1").hide().eq($(this).index()).fadeIn()
}).eq(0).addClass("active");

// section__five slider

$('.feedback').slick({
  arrows: false,
  dots: true,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        // arrows: false,
      }
    },
    {
      breakpoint: 480,
      settings: {
        // arrows: false,
      }
    }
  ]
});



