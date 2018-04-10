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
             arrows:true,

             /* cutomised arrows on slider  */
             prevArrow:"<button type='button' class='slick-prev'><i class='fa fa-angle-left fa-7x' aria-hidden='true'></i></button>",
             nextArrow:"<button type='button' class='slick-next'><i class='fa fa-angle-right fa-7x' aria-hidden='true'></i></button>",

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

             prevArrow:"<button type='button' class='slick-prev'><i class='fa fa-angle-left fa-5x' aria-hidden='true'></i></button>",
             nextArrow:"<button type='button' class='slick-next'><i class='fa fa-angle-right fa-5x' aria-hidden='true'></i></button>",

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
      *
      * @type {boolean}
      */



     viewMore = (e)=>{



         var
             $e = e,
             $nodeList = $(e+ " .catDiv"),
             $numToShow = 8,
             $viewMoreBtn = $("#viewMoreBtn"),
             $nodeListLength = $nodeList.length,
             $isShowing = true,
             $catModal = $("#catModal");



         if ($nodeListLength <=0){
             $viewMoreBtn.hide();
             $catModal.find('.modal-body').text('No categories to show!');
             $catModal.modal('show');

         } else {

             $nodeList.hide();
             if ($nodeListLength > $numToShow) {
                 $viewMoreBtn.show();
                 $viewMoreBtn.val('View More');
             }
             $nodeList.slice(0, $numToShow).show();
             $viewMoreBtn.click(function () {
                 var $showing = $nodeList.filter(':visible').length;
                 if ($isShowing) {
                     $nodeList.slice($showing - 1, $showing + $numToShow).fadeIn(400, onFadeComplete);
                 }
                 else {


                     if ($showing % 2 !== 0) {
                            console.log("odd showing : "+$showing);
                            console.log("odd showing remainder : "+ $showing%2);
                            $difference = $showing - ($showing % 2);
                            $nodeList.slice($showing - ($numToShow + $showing % 2), $nodeListLength).fadeOut(500, onFadeComplete);
                     }
                     else {
                         $nodeList.slice($showing - $numToShow, $nodeListLength).fadeOut(400, onFadeComplete);
                     }


                     /*
                      console.log($nodeListLength);
                      console.log($remainder);
                      $nodeList.slice($showing - $numToShow, $remainder).fadeOut(400, onFadeComplete);
*/


                     /*  panelOffset    = $nodeList.offset();
                       panelHeight    = $nodeList.height();
                       buttonOffset   = $viewMoreBtn.offset();
                       buttonHeight   = $viewMoreBtn.height();
                       showingOffset = $nodeList.slice(0,$showing).offset();
                       showingHeight = $nodeList.slice(0,$showing).height();
                       console.log("panel offset : "+ panelOffset.top);
                       console.log("button offset : "+ buttonOffset.top);
                       console.log("showing  offset: "+ showingOffset.top);
                       console.log("showing  offset height: "+ showingHeight);
                       console.log("panel height :"+panelHeight);
                       console.log("button height: "+buttonHeight);
                       console.log("B offest - p height: "+ (buttonOffset.top - panelHeight));
                       /!*window.scrollTo(0,(showingOffset.top + showingHeight + buttonHeight));*!/
                       scrollTop:(showingOffset.top - buttonHeight);
                       alert('youre here');*/

                 }

             });

         }



      onFadeComplete =()=> {
                 var $nowShowing = $nodeList.filter(':visible').length;
                 console.log($nodeList);

                 console.log("nowshowing: " + $nowShowing);

                 if ($nowShowing == $nodeListLength && $isShowing) {
                         $isShowing = false;
                         $catModal.find('.modal-body').text('No More categories to show!');
                         $catModal.modal('show');
                         $viewMoreBtn.val("View Less");
                 }
                 else if ($isShowing) {
                     $viewMoreBtn.text("Show More");
                 }

                 if ($nowShowing == $numToShow) {
                     $viewMoreBtn.val("View More");
                     $isShowing = true;
                 }

             }

}, //viewMore

        /*let
            $start = g-1;

            console.log("this i start first time around at the top of viewmore: " + $start);

            $nodeList = $(e+ " .catDiv");
            $nodeListLength = $nodeList.length;



           if ($nodeListLength <=0){
               $("#viewMoreBtn").hide();
               $("#catModal").find('.modal-body').text('No categories to show!');
               $("#catModal").modal('show');

           } else {
               $('#viewMoreBtn').click(()=> {
                   if ($start < $nodeListLength) {
                       $("#viewMoreBtn").val('View More');
                       $(e + ' .catDiv:lt(' + ($start + 9) + '):gt(' + $start + ')').fadeIn("slow");
                       $start += 8;
                       console.log("after the click, start is : " + $start);
                       }
                   if ($start > $nodeListLength){
                       console.log('after view less start is: ' + $start);
                       $("#catModal").find('.modal-body').text('No More categories to show!');
                       $("#catModal").modal('show');
                       $("#viewMoreBtn").val('View Less');
                       $start = g-1;
                       console.log("g - 1 =: ", $start);

                       $("#viewMoreBtn").on('click', ()=>{
                           showMoreCats();
                           $start -= g-1;
                           console.log("start after click view less: " + $start);
                       });

               }

               });
           }*/


     /**
      * @name   showMoreCats
      * @desc   This function finds the id of the target element (e.g. $target) then hides all the elements(e.g .catDiv) of a class in that     element, then displays the first 8 elements of that class (e.g. catDiv), then calls another foo (viewMore) to show more
      */


     showMoreCats = () =>{


         //Showing the first 8  elements with class .catDiv in #a-panel as default

                    $panelID = $('.tab-content').find('.active').attr('id');
                    console.log($panelID);
                    $("#"+$panelID + " .catDiv").hide();
                    console.log($("#"+$panelID + " .catDiv"));

                    onDisplay = $("#"+$panelID + " .catDiv:lt(8)").show();

                    startPoint = onDisplay.length;
                   /* console.log(startPoint);*/

                    viewMore("#"+$panelID);

             // grabbing the target id of the tab clicked then using it to display the first 8 elements with class .catDiv
             $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {

                 let
                    $target = $(e.target).attr("href"); // activated tab
                    console.log($target);
                    $($target + " .catDiv").hide();

                 let
                    onDisplay = $($target + " .catDiv:lt(8)").show();

                    startPoint = onDisplay.length;
                    viewMore($target);

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
