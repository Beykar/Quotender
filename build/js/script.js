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

     /**
      * @name   viewMore
      * @desc   this function takes an id and a number and starts displaying divs in the id el (e) from starting position (g)
      * @param e - string
      * @param g - integer
      */

     viewMore = (e,g) =>{

        let
            $start = g-1,
            nodeListLength = $(e+ ' .catDiv').length;
           /* console.log("this is start at the beginning:"+ $start);
            console.log(nodeListLength);*/

           if ($start < 0){

               alert("No Categories to show!");
           } else {
               $('#viewMoreBtn').click(function () {
                   if (($start < nodeListLength)) {

                       $(e + ' .catDiv:lt(' + ($start + 9) + '):gt(' + $start + ')').fadeIn("slow");
                       $start += 8;

                       /*if (($start < nodeListLength)) {
                           console.log("this is start when it's working:" + $start);
                       } else {
                           console.log("it's gone over:" + $start);
                       }*/

                   } else {

                       $start -= 8;
                       $(e + ' .catDiv:lt(' + (nodeListLength) + '):gt(' + $start + ')').fadeIn("slow");
                       alert("No More categories to show!");
                   }
               });
           }
     }, //viewMore


     /**
      * @name   showMoreCats
      * @desc   This function finds the id of the target element (e.g. $target) then hides all the elements(e.g .catDiv) of a class in that     element, then displays the first 8 elements of that class (e.g. catDiv), then calls another foo (viewMore) to show more
      */


     showMoreCats = () =>{

         //Showing the first 8  elements with class .catDiv in #a-panel as default
            let

            $aPanel = document.getElementById('a-panel'),
            $aPanelID = ('#'+$aPanel.getAttribute('id'));


            $("#a-panel .catDiv").hide();

            let
                onDisplay   = $("#a-panel .catDiv:lt(8)").show(),
                startPoint = onDisplay.length;

                viewMore($aPanelID, startPoint);


            // grabbing the target id of the tab clicked then using it to display the first 8 elements with class .catDiv
            $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {

                let
                $target = $(e.target).attr("href"); // activated tab

                $($target + " .catDiv").hide();

             let
                onDisplay = $($target+ " .catDiv:lt(8)").show();

             startPoint = onDisplay.length;
             viewMore($target, startPoint);

         });
     },//showMoreCats

     /**
      * @name   tabsShow
      * @desc   on click, removes the .active class from any other tabs and applies is to current tab
      */

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


    init = () => {
      navToggle();
      countFunction();
      playTestimonialSlider();
      playCatSlider();
      showMoreCats();
      tabsShow();
      $('#submitBtn').click( function (e) {
          e.preventDefault();
      });
  }; //init

  window.addEventListener("load", init);
})();
