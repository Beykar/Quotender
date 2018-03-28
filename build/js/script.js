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

     viewMore = (e) =>{
         let start = 7;
         $('#viewMoreBtn').click(function () {

             if (typeof(start) != undefined){

                 $(e + ' .catDiv:lt(' + (start +9) + '):gt(' + start + ')').fadeIn("slow");
                 start +=8;
             }
         });
     }, //viewMore


     showMoreCats = () =>{

         $("#a-panel .catDiv").hide();
         $("#a-panel .catDiv:lt(8)").show();
         let $aPanel = document.getElementById("#a-panel");
         viewMore($aPanel);

         $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
             let target = $(e.target).attr("href"); // activated tab

             console.log(target);


             activeTabDivs = document.querySelectorAll(target+" .catDiv");
             console.log(activeTabDivs);

             $(target + " .catDiv").hide();
             $(target+ " .catDiv:lt(8)").show();
             viewMore(target);

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
             $('#submitBtn').focus();
             /* setting css properties to adapt the high of the pop up to its content  */
             $(this).find('.modal-body').css({
                 width:'auto',
                 height:'auto',
                 'max-height':'100%'
             });
         });

     },

    displayMultyStepForm =()=> {
    //jQuery time
    var current_fs, next_fs, previous_fs; //fieldsets
    var left, opacity, scale; //fieldset properties which we will animate
    var animating; //flag to prevent quick multi-click glitches

    $(".next").click(function(){
        if(animating) return false;
        animating = true;

        current_fs = $(this).parent();
        next_fs = $(this).parent().next();

        //activate next step on progressbar using the index of next_fs
        $("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");

        //show the next fieldset
        next_fs.show();
        //hide the current fieldset with style
        current_fs.animate({opacity: 0}, {
            step: function(now, mx) {
                //as the opacity of current_fs reduces to 0 - stored in "now"
                //1. scale current_fs down to 80%
                scale = 1 - (1 - now) * 0.2;
                //2. bring next_fs from the right(50%)
                left = (now * 50)+"%";
                //3. increase opacity of next_fs to 1 as it moves in
                opacity = 1 - now;
                current_fs.css({
                    'transform': 'scale('+scale+')',
                    'position': 'absolute'
                });
                next_fs.css({'left': left, 'opacity': opacity});
            },
            duration: 800,
            complete: function(){
                current_fs.hide();
                animating = false;
            },
            //this comes from the custom easing plugin
            easing: 'easeInOutBack'
        });
    });

    $(".previous").click(function(){
        if(animating) return false;
        animating = true;

        current_fs = $(this).parent();
        previous_fs = $(this).parent().prev();

        //de-activate current step on progressbar
        $("#progressbar li").eq($("fieldset").index(current_fs)).removeClass("active");

        //show the previous fieldset
        previous_fs.show();
        //hide the current fieldset with style
        current_fs.animate({opacity: 0}, {
            step: function(now, mx) {
                //as the opacity of current_fs reduces to 0 - stored in "now"
                //1. scale previous_fs from 80% to 100%
                scale = 0.8 + (1 - now) * 0.2;
                //2. take current_fs to the right(50%) - from 0%
                left = ((1-now) * 50)+"%";
                //3. increase opacity of previous_fs to 1 as it moves in
                opacity = 1 - now;
                current_fs.css({'left': left});
                previous_fs.css({'transform': 'scale('+scale+')', 'opacity': opacity});
            },
            duration: 800,
            complete: function(){
                current_fs.hide();
                animating = false;
            },
            //this comes from the custom easing plugin
            easing: 'easeInOutBack'
        });
    });

    $(".submit").click(function(){
        return false;
    })

},

    init = () => {

      navToggle();
      countFunction();
      playTestimonialSlider();
      playCatSlider();
      showMoreCats();
      tabsShow();
      popUpModalShow();
      displayMultyStepForm();

  }; //init

  window.addEventListener("load", init);
})();
