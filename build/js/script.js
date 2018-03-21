( () => {

 let
     animated = false,
     activeTab = $(".tab-content").find(".active"),
     $panelID = activeTab.attr('id'),



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

             if (animated == false) {

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

         $(".nav-tabs li a").click(()=>{


             let    $start = 3;


             $("#"+$panelID+" .catDiv").hide();
             $("#"+$panelID+" .catDiv:lt(4)").show();


             $('#viewMoreBtn').click(()=> {


                 if (typeof($start) != undefined){

                     $('#'+$panelID+'.catDiv:lt(' + ($start +5) + '):gt(' + $start + ')').fadeIn("slow");
                     $start +=4;
                 }

             });

         });


     },//showMoreCats

     tabsShow = () => {
         $(".nav-tabs li").click( () => {

             // switch all tabs off
             $(this).removeClass("active");
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
      console.log($panelID);
      navToggle();
      countFunction();
      playCatSlider();
      showMoreCats();
      tabsShow();


  }; //init

  window.addEventListener("load", init);
})();
