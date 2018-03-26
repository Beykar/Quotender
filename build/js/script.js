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
             autoplaySpeed:3000,
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


     playCatSlider = () =>{


         $(".catSlider").slick({

             // normal options...
             infinite: false,
             slidesToShow: 13,
             slidesToScroll:13,

             // the magic
             responsive: [{

                 breakpoint: 1024,
                 settings: {
                     slidesToShow:13,
                     slidesToScroll:13,
                     infinite: true
                 }

             }, {

                 breakpoint: 600,
                 settings: {
                     slidesToShow:6,
                     slidesToScroll:6,
                     dots: false
                 }


             }, {

                 breakpoint: 300,
                 settings: "unslick" // destroys slick

             }]
         });



     },//playCatSlider

     showMoreCats = () =>{

         let
             start = 7;

         $(".catDiv").hide();
         $('.catDiv:lt(8)').show();
         $('#viewMoreBtn').click(function () {
             if (typeof(start) != undefined){
                 $('.catDiv:lt(' + (start +9) + '):gt(' + start + ')').fadeIn("slow");
                 start +=8;
             }
         });


     },//showMoreCats

     tabsShow = () => {
         $(".nav-tabs").click( () => {

             // switch all tabs off
             $(".active").removeClass("active");

             // switch this tab on
             $(this).addClass("active");

             // look and find'title' attribute value is and find the element with that id.  Then slide that down.
             let
                 show_show = $(this).attr("title"),
                 num_tabs = "true";

             $("#"+show_show).fadeIn();

         });
     },


     popUpModalShow = () => {

         $('#submitPopUpModal').on('shown.bs.modal', function () {
             $('#submitBtn').focus()
         });

     },



  init = () => {

      navToggle();
      countFunction();
      playTestimonialSlider();
      playCatSlider();
      showMoreCats();
      tabsShow();
      popUpModalShow();

  }; //init

  window.addEventListener("load", init);
})();
