( () => {

 let


     /**
      * @name:   navToggle()
      * @desc:   Hamburger changes to x, once clicked
      */

     navToggle = () => {
        $("#nav-icon1").click(function () {
            $(this).toggleClass('open');

        });
    }, //navToggle





  init = () => {
      navToggle();



  }; //init

  window.addEventListener("load", init);
})();
