$(document).ready(function() {
    $('nav a').bind({
        'click': function() {
            $('nav a').removeClass('selected-nav');
            $(this).addClass('selected-nav');
        }
    });
    
    /*menu responsive*/
/*MENU HAMBURGUER*/
    $('#iconmenu').click(function() {
        $('#menuresponsive').toggle();
    });

    
    $(function() {
        // this will get the full URL at the address bar
        var url = window.location.href;

        // passes on every "a" tag
        $("nav a").each(function() {
            // checks if its the same on the address bar
            if (url == (this.href)) {
                $(this).closest("a").addClass("selected-nav");
                //for making parent of submenu active
               $(this).closest("a").parent().parent().addClass("selected-nav");
            }
        });
    });    
    
    $(window).scroll(function() {
		if ($(window).scrollTop() > 5) {
			$("#menuresponsive").fadeOut(500);
		}
	});
    
    
    $('#slider').slick({
		dots: true,
        arrows: true,
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 5000,
        responsive: [
    {
      breakpoint: 1000,
      settings: {
          arrows: false
      }
    },{
      breakpoint: 851,
      settings: {
          dots: false,
          arrows: false
      }
    }
]
        
	});
    
    //organizar por idades link
  
  $('.iconidade').click(function() {
window.location = document.getElementById('organizar').href
    $('#pag-programa1').css({"display": "none!important"});
            $('#pag-programa3').css({"display": "block!important"});
  });
  
    
    $('.button-programa').click(function(){
            var id = $(this).attr('id').substring($(this).attr('id').length - 1);
            $('.pag-programa').hide();
            $('#pag-programa' + id).fadeIn('fast');
            $('.button-programa').removeClass('selectedprog');
            $('#button-programa' + id).addClass('selectedprog');
        });
    
    $(".seta").click(function() {
           var id = $(this).attr('id').substring($(this).attr('id').length - 2);
        $('#setaimg' + id).hide();
        $('#setabaixoimg' + id).show();
         $('.table-exp').hide();
            $('#table-exp' + id).addClass('displayexp');
    });
    
      $(".setabaixo").click(function() {
           var id = $(this).attr('id').substring($(this).attr('id').length - 2);
        $('#setaimg' + id).show();
        $('#setabaixoimg' + id).hide();
          $('#table-exp' + id).removeClass('displayexp');
    });
    
  $(window).scroll(function() {
    var scrollTop = $(window).scrollTop();
    if (scrollTop > 1) {
      $("header").addClass("fixedheader");
    } else {
      $("header").removeClass("fixedheader");
    }
  });
    
    $(document).scroll(function() {
  var scroll = $(window).scrollTop();
        
  if (scroll >= 800) {
      $('#botoesprograma').addClass('fixedbuttons');
      $('.spacer').fadeIn();
  } else {
    $('#botoesprograma').removeClass('fixedbuttons');
      $('.spacer').fadeOut();
  }
});
    
    // media query event handler
if (matchMedia) {
  var mq = window.matchMedia("(max-width: 1441px)");
  mq.addListener(WidthChange);
  WidthChange(mq);
}

// media query change
function WidthChange(mq) {
  if (mq.matches) {
    $(document).scroll(function() {
  var scroll = $(window).scrollTop();
        
  if (scroll >= 600) {
      $('#botoesprograma').addClass('fixedbuttons');
      $('.spacer').fadeIn();
  } else {
    $('#botoesprograma').removeClass('fixedbuttons');
      $('.spacer').fadeOut();
  }
        
});
  } else {
   $(document).scroll(function() {
  var scroll = $(window).scrollTop();
        
  if (scroll >= 800) {
      $('#botoesprograma').addClass('fixedbuttons');
      $('.spacer').fadeIn();
  } else {
    $('#botoesprograma').removeClass('fixedbuttons');
      $('.spacer').fadeOut();
  }
});
  }

}
    
    function WidthChange(mq) {
  if (mq.matches) {
        $(document).scroll(function() {
  var scroll = $(window).scrollTop();
        
  if (scroll >= 800) {
      $('.meses').addClass('fixedmeses');
      $('.spacermeses').fadeIn();
  } else {
    $('.meses').removeClass('fixedmeses');
      $('.spacermeses').fadeOut();
  }
});
  } else {
           $(document).scroll(function() {
  var scroll = $(window).scrollTop();
        
  if (scroll >= 800) {
      $('.meses').addClass('fixedmeses');
      $('.spacermeses').fadeIn();
  } else {
    $('.meses').removeClass('fixedmeses');
      $('.spacermeses').fadeOut();
  }
});
  }

}
    
     $('.meses li a').click(function(){
         var id = $(this).attr('id').substring($(this).attr('id').length - 2);
            $('.meses li a').removeClass('messelected');
            $('#mes'+id).addClass('messelected');
        });
    
            $(".meses li a").click(function (){
                 var id = $(this).attr('id').substring($(this).attr('id').length - 2);
                $('html, body').animate({
                    scrollTop: $('#mes-content'+id).offset().top-220
                }, 1000);
            });
    
    $('.pag-chegar').hide();
    $('#pag-chegar1').show();
    $('.mapa').hide();
    $('#mapa1').show('fast');
    
    $('.icon').click(function(){
            var id = $(this).attr('id').substring($(this).attr('id').length - 1);
            $('.pag-chegar').hide();
            $('#pag-chegar' + id).fadeIn('fast');
            $('.mapa').hide();
            $('#mapa' + id).addClass('block');
            $('.button-chegar').removeClass('selectedbtn');
            $('#button-chegar' + id).addClass('selectedbtn');
            $('.icon img').removeClass('selectedbtn');
            $('#imgchegar' + id).addClass('selectedbtn');
        });
    
    $('.col1de4').slick({
  dots: true,
  infinite: false,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 4,
  responsive: [
    {
      breakpoint: 1000,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
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
    
    $('.noticiasslider').slick({
  dots: true,
  infinite: false,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 3,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 850,
      settings: {
          infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
}); 
    
    //noticias
    
  $('.buttonnoticia').mouseover(function(){
            var id = $(this).attr('id').substring($(this).attr('id').length - 2);
        $('.tresnoticias').removeClass('shadow');
            $('#noticia' + id).addClass('shadow');
      $('.imagenoticia').removeClass('opacity');
            $('#imagenoticia' + id).addClass('opacity');
        });  
    
    $('input').focusin(function(){
        $('#label4').removeClass('label-focus4');
            var id = $(this).attr('id').substring($(this).attr('id').length - 2);
        $('label').removeClass('label-focus');
        $('#label2').removeClass('label-focus3');
        $('label').removeClass('label-focus2');
            $('#label' + id).addClass('label-focus');
        $("i::before").css({"font-size": "22px"});
        });  
    
      $('input').focusout(function(){
          var id = $(this).attr('id').substring($(this).attr('id').length - 2);
            $('#label' + id).removeClass('label-focus');
        $("i::before").css({"font-size": "25px"});
        });  
    
      $('#input04').focusin(function(){
          $('#label4').removeClass('label-focus4');
            var id = $(this).attr('id').substring($(this).attr('id').length - 2);
        $('label').removeClass('label-focus2');
          $('#label2').removeClass('label-focus3');
          $('label').removeClass('label-focus');
            $('#label' + id).addClass('label-focus2');
        $("i::before").css({"font-size": "22px"});
        });  
    
    $('#input04').focusout(function(){
            var id = $(this).attr('id').substring($(this).attr('id').length - 2);
            $('#label' + id).removeClass('label-focus2');
        $("i::before").css({"font-size": "25px"});
        });  
    
     $('.input2').click(function(){
         $('#label4').removeClass('label-focus4');
         $('label').removeClass('label-focus2');
          $('label').removeClass('label-focus');
            $('#label2').addClass('label-focus3');
        $("i::before").css({"font-size": "22px"});
        });  
    
    $('textarea').focusin(function(){
            $('#label4').addClass('label-focus4');
        $("i::before").css({"font-size": "22px"});
        }); 
    
    $('textarea').focusout(function(){
            $('#label4').removeClass('label-focus4');
        $("i::before").css({"font-size": "25px"});
        }); 
    
       $('.inputcolaborar').focusin(function(){
    var id = $(this).attr('id').substring($(this).attr('id').length - 2);
        $('.labelcolaborar').removeClass('labelcolaborar-focus');
            $('#labelcolaborar' + id).addClass('labelcolaborar-focus');
        $("i::before").css({"font-size": "22px"});
        }); 
    
    $('.inputcolaborar').focusout(function(){
    var id = $(this).attr('id').substring($(this).attr('id').length - 2);
            $('#labelcolaborar' + id).removeClass('labelcolaborar-focus');
        $("i::before").css({"font-size": "25px"});
        }); 
    
     $('#origin').keyup(function(){
         if ($('#origin').val().length > 0){
         $('#submit-map').addClass('focus-submit');}
         else $('#submit-map').removeClass('focus-submit');
        }); 
    
});
