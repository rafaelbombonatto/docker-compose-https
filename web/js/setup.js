var owl = $('.owl-carousel');

owl.owlCarousel({
    items:1,
    merge:true,
    loop:true,
    margin:10,
    nav:true,
    video:true,
    lazyLoad:true,
    center:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})
owl.on('mousewheel', '.owl-stage', function (e) {
    if (e.deltaY>0) {
        owl.trigger('next.owl');
    } else {
        owl.trigger('prev.owl');
    }
    e.preventDefault();
});

