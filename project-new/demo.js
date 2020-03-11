$('#carousel').owlCarousel({
    loop:true,
    margin:10,
	dots:false,
	nav:true,
	autoplay:true,
	autoplayTimeout: 12000,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})

$('#carousel1').owlCarousel({
    loop:true,
    margin:10,
	autoplay:true,
	autoplayTimeout: 12000,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})

$('#carousel2').owlCarousel({
    loop:true,
    margin:10,
	dots:true,
	nav:false,
	autoplay:false,
    responsive:{
        0:{
            items:1
        },
        576:{
            items:3
        },
        1000:{
            items:3
        }
    }
})

function on() {
    document.getElementByClassName("overlay").style.display = "block";
}

$('#row-bar li a').click(function(){
	$('#menu-checkbox').click();
});

$('.overlay #footer').click(function(){
  $(".overlay").css("opacity;", "0;");
});
