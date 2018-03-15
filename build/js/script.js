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
                            $(this).text(Math.ceil(now));
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


  init = () => {
      navToggle();

      countFunction();





  }; //init

  window.addEventListener("load", init);
})();
