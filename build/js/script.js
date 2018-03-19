( () => {

 let
     animated = false,


     /**
      * @name:   navToggle()
      * @desc:   Hamburger changes to x, once clicked
      */

     navToggle = () => {
        $("#nav-icon1").click(function () {
            $(this).toggleClass('open');

        });
    }, //navToggle

     /**
      * @name countFunction
      * @desc   function that animates number in a counter style only once
      * when the browser gets to the section the first time or if the page is refreshed.
      * @returns {boolean}
      */

     countFunction = () => {

         $('#innerReasons').waypoint(function () {

             if ( animated == false) {

                $('.count').each(function () {
                    $(this).prop('Counter', 0).animate({
                        Counter: $(this).text()
                    }, {
                        duration: 5000,
                        easing: 'swing',
                        step: function (now) {
                            $(this).text(Math.ceil(now)).toLocaleString('en-US');
                        }
                    });
                });
                 animated = true;
             }//end if animated
         }, {
             offset: '100%'
         });



        return animated;


    }, //countFunction


     playTestimonialSlider =()=>{
         $(".slider").slick({

             // normal options...
             infinite: false,
             autoplaySpeed:500,
             autoplay:true,

             // the magic
             responsive: [{

                 breakpoint: 1024,
                 settings: {
                     slidesToShow: 1,
                     infinite: true
                 }

             }, {

                 breakpoint: 600,
                 settings: {
                     slidesToShow: 1,
                     dots: true
                 }

             }, {

                 breakpoint: 300,
                 settings: "unslick" // destroys slick

             }]
         });

     }, //playTestimonialSlider

  init = () => {
      navToggle();

      countFunction();

      playTestimonialSlider();




  }; //init

  window.addEventListener("load", init);
})();
