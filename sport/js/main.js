$(function () {

       // Menu opener hamburger

          $('.menu-open').click(function() {
      $('.menu-opened').toggleClass('active');
  });
     $('.menu-opened a').click(function() {
 $('.menu-opened').removeClass('active');
});

    $('.menu-close').click(function () {
        $('.menu-close').toggleClass('.menu-open');
        $('.menu-opened').toggleClass('active');
    });

    
    // плавное перемещение страницы к нужному блоку
    $("a.go").click(function (e) {
        e.preventDefault();
        elementClick = $(this).attr("href");
        destination = $(elementClick).offset().top;
        $("body,html").animate({scrollTop: destination }, 1100);
    });
    
   


    $('.modal-btn2').click(function (e) {
        e.preventDefault();
        $('#exampleModal2').arcticmodal({
             overlay: {
              css: {
               backgroundColor: '#000000',
               opacity: .9       
        }
    }
        });
         
    });
    $('.modal-btn3').click(function (e) {
        e.preventDefault();
        $('#exampleModal3').arcticmodal({
             overlay: {
              css: {
               backgroundColor: '#000000',
               opacity: .9
        }
    }
        });
         
    });
    $('.modal-btn4').click(function (e) {
        e.preventDefault();
        $('#exampleModal4').arcticmodal({
             overlay: {
              css: {
               backgroundColor: '#000000',
               opacity: .9
        }
    }
        });
         
    });
    $('.modal-btn5').click(function (e) {
        e.preventDefault();
        $('#exampleModal5').arcticmodal({
             overlay: {
              css: {
               backgroundColor: '#000000',
               opacity: .9
        }
    }
        });
         
    });
    $('.modal-btn6').click(function (e) {
        e.preventDefault();
        $('#exampleModal6').arcticmodal({
             overlay: {
              css: {
               backgroundColor: '#000000',
               opacity: .9
        }
    }
        });
         
    });
    $('.modal-btn7').click(function (e) {
        e.preventDefault();
        $('#exampleModal7').arcticmodal({
             overlay: {
              css: {
               backgroundColor: '#000000',
               opacity: .9
        }
    }
        });
         
    });
    $('.modal-btn8').click(function (e) {
        e.preventDefault();
        $('#exampleModal8').arcticmodal({
             overlay: {
              css: {
               backgroundColor: '#000000',
               opacity: .9
        }
    }
        });
         
    });
    $('.modal-btn9').click(function (e) {
        e.preventDefault();
        $('#exampleModal9').arcticmodal({
             overlay: {
              css: {
               backgroundColor: '#000000',
               opacity: .9
        }
    }
        });
         
    });
    $('.modal-btn10').click(function (e) {
        e.preventDefault();
        $('#exampleModal10').arcticmodal({
             overlay: {
              css: {
               backgroundColor: '#ffffff',
               opacity: .1
        }
    }
        });
         
    });
    $('.modal-btn11').click(function (e) {
        e.preventDefault();
        $('#exampleModal11').arcticmodal({
             overlay: {
              css: {
               backgroundColor: '#000000',
               opacity: .9
        }
    }
        });
         
    });
    $('.slider-pattern').slick({
       dots: true,
       speed: 1700,
        vertical: true,
        verticalSwiping: true
     });
    // Кнопка вверх  
     $(function() {
      $('#up').click(function() {
        $('html, body').animate({scrollTop: 0},1700);
        return false;
      })

    })
       // Слайдер  Что мы уже сделали
$('.big-slider').slick({
        dots: true,
        infinite: true,
        cssEase: 'linear',
        autoplaySpeed: 4000,
        autoplay: true,
        prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-chevron-circle-left"></i></button>',
        nextArrow: '<button type="button" class="slick-next"><i class="fas fa-chevron-circle-right"></i></button>',

    });
   
});

$(document).ready(function() {

    var  square,  summ = 0;

    $('#inv button').click(function() {
        markActiveButton(currentPrice);
        square = $('input[name=svet2]').val();
        summ = square*currentPrice;
            
        summ = String(summ).replace(/(\d)(?=(\d{3})+([^\d]|$))/g, '$1 ');
        console.log(summ);
        $('.calcprice span').text(summ);
    });

    $('.quantity-wrap .inpt').on('change', function(event) {
        square = $('input[name=svet2]').val();
        // type = $('.active').val();
        

        if (square.length > 0 ) {

            summ = square*currentPrice;
            
            summ = String(summ).replace(/(\d)(?=(\d{3})+([^\d]|$))/g, '$1 ');

            $('.calcprice span').text(summ);

        }

        /* Act on the event */
    });


    
});