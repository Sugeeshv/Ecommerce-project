// cart calculator

function runningTotal() {
    var quantity = document.getElementById("quantity").value;
    console.log(quantity);
    var price = document.getElementById("price").value;
    console.log(price);
    var total = 0;
	total =price*quantity;
    document.getElementById("total").value = total;
    console.log(total);
}



// product image zoom

$(document).ready(function(){
    $('#ex1').zoom();
    $('#ex2').zoom({ on:'grab' });
    $('#ex3').zoom({ on:'click' });			 
    $('#ex4').zoom({ on:'toggle' });
});

// slider

$('.banner').slick({
    dots: false,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear',
      prevArrow:"<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
      nextArrow:"<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>"
        
  });
  
  $('#sm-slide').slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    dots: false,
    prevArrow:"<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
    nextArrow:"<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>"
      ,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

//   menubar
  $('#menu1').on('click', function() {
  $('body').toggleClass('sidemenu');
});

// cart menu


  $('#cart-menu').on('click', function() {
  $('body').toggleClass('cart-body');
});



$(function () {
    $(".loade").slice(0, 3).show();
    $("body").on('click touchstart', '.load-more', function (e) {
      e.preventDefault();
      $(".loade:hidden").slice(0, 3).slideDown();
      if ($(".loade:hidden").length == 0) {
        $(".load-more").css('display', 'none');
      }
      $('html,body').animate({
        scrollTop: $(this).offset().top
      }, 1000);
    });
  });