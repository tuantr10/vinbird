<!-- Footer -->
<footer class="footer" data-background-color="black">
  <div class="container">
    <nav class="float-left">
      <ul>
        <li style="text-align:left;">
          <a href="/about-vinbird">
            About Us
          </a>
        </li>
        <li>
          <a style="text-align:left;">
            <span class="fa fa-map-pin"></span> No. 15 Ly Nhon Street, An Thoi Dong Commune, Can Gio District, Hochiminh City
            <br>
            <span class="fa fa-envelop-open"></span> ISO 22000, HACCP <span style="text-transform: lowercase;"> <br>&nbsp;vinbirdnest@gmail.com</span>
            <br>
            <span class="fa fa-mobilephone"></span> 0919 960 738
            <br>
            <span class="fa fa-mobilephone"></span> 0888 826 889
          </a>
        </li>
      </ul>
    </nav>
    <div class="copyright float-right">
        &copy;
        2008 VinBirdnest&nbsp;
    </div>
  </div>
</footer>
<!--   Core JS Files   -->
<script src="./assets/js/core/jquery.min.js" type="text/javascript"></script>
<script src="./assets/js/core/popper.min.js" type="text/javascript"></script>
<script src="./assets/js/core/bootstrap-material-design.min.js" type="text/javascript"></script>
<script src="./assets/js/plugins/moment.min.js"></script>
<!--	Plugin for the Datepicker, full documentation here: https://github.com/Eonasdan/bootstrap-datetimepicker -->
<script src="./assets/js/plugins/bootstrap-datetimepicker.js" type="text/javascript"></script>
<!--  Plugin for the Sliders, full documentation here: http://refreshless.com/nouislider/ -->
<script src="./assets/js/plugins/nouislider.min.js" type="text/javascript"></script>
<!--  Google Maps Plugin    -->
<script src="https://maps.googleapis.com/maps/api/js?key=YOUR_KEY_HERE"></script>
<!-- Control Center for Material Kit: parallax effects, scripts for the example pages etc -->
<script src="./assets/js/material-kit.js?v=2.0.6" type="text/javascript"></script>
<script>
  $(document).ready(function() {
    //init DateTimePickers
    materialKit.initFormExtendedDatetimepickers();

    // Sliders Init
    materialKit.initSliders();
    });


    function scrollToDownload() {
    if ($('.section-download').length != 0) {
        $("html, body").animate({
        scrollTop: $('.section-download').offset().top
        }, 1000);
    }
  }
</script>