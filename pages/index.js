import Head from 'next/head';

const Index = () => (
  <div>
    <Head>
      <title>My styled page</title>
      <meta content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0, shrink-to-fit=no' name='viewport' />
      {/* <!--     Fonts and icons     --> */}
      <link rel="stylesheet" type="text/css" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Roboto+Slab:400,700|Material+Icons" />
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/latest/css/font-awesome.min.css"></link>
      <link href="/css/material-kit.css?v=2.0.6" rel="stylesheet" />
      {/* <link href="./assets/demo/demo.css" rel="stylesheet" /> */}
    </Head>
    <body class="index-page sidebar-collapse">
      <nav class="navbar navbar-transparent navbar-color-on-scroll fixed-top navbar-expand-lg" color-on-scroll="100" id="sectionsNav">
        <div class="container">
          <div class="navbar-translate">
            <a class="navbar-brand" href="/"> VinBirdnest </a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" aria-expanded="false" aria-label="Toggle navigation">
              <span class="sr-only">Toggle navigation</span>
              <span class="navbar-toggler-icon"></span>
              <span class="navbar-toggler-icon"></span>
              <span class="navbar-toggler-icon"></span>
            </button>
          </div>
          <div class="collapse navbar-collapse">
            <ul class="navbar-nav ml-auto">
              <li class="dropdown nav-item">
                <a href="#" class="dropdown-toggle nav-link" data-toggle="dropdown">
                  <i class="material-icons">apps</i> About VinBirdnest
                </a>
                <div class="dropdown-menu dropdown-with-icons">
                  <a href="./about-vinbird.html" class="dropdown-item">
                    <i class="material-icons">layers</i> About VinBirdnest
                  </a>
                  <a href="./about-birdnest.html" class="dropdown-item">
                    <i class="material-icons">layers</i> About bird's nest
                  </a>
                  <a href="./product-services.html" class="dropdown-item">
                    <i class="material-icons">content_paste</i> Products & Services
                  </a>
                  <a href="how-its-made.html" class="dropdown-item">
                    <i class="material-icons">content_paste</i> How It's made
                  </a>
                </div>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="./faq.html" onclick="scrollToDownload()">
                  <i class="material-icons">info</i> FAQ
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="./gallery.html" onclick="scrollToDownload()">
                  <i class="material-icons">aspect_ratio</i> Gallery
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="./contact.html" onclick="scrollToDownload()">
                  <i class="material-icons">settings_phone</i> Contact
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="./cn/index.html" onclick="scrollToDownload()">
                  <i class="material-icons">translate</i> 中文
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" rel="tooltip" title="" data-placement="bottom" href="https://twitter.com/CreativeTim" target="_blank" data-original-title="Follow us on Twitter">
                  <i class="fa fa-twitter"></i>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" rel="tooltip" title="" data-placement="bottom" href="https://www.facebook.com/CreativeTim" target="_blank" data-original-title="Like us on Facebook">
                  <i class="fa fa-facebook-square"></i>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" rel="tooltip" title="" data-placement="bottom" href="https://www.instagram.com/CreativeTimOfficial" target="_blank" data-original-title="Follow us on Instagram">
                  <i class="fa fa-instagram"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div class="page-header header-filter clear-filter purple-filter" data-parallax="true" style={{backgroundImage: `url('./assets/img/background/bg2.jpg')`}}>
        <div class="container">
          <div class="row">
            <div class="col-md-8 ml-auto mr-auto">
              <div class="brand">
                <h1>VinBirdnest</h1>
                <h3>Live the nature</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="main main-raised">
        <div class="section section-basic">
          <div class="container">
            <div class="title">
              <h2>We believe nature has been providing us with many benefits.</h2>
            </div>
            {/* //  buttons --> */}
            <div id="buttons" class="cd-section">
              <div class="row">
                  <div class="col-md-8 ml-auto mr-auto">
                    In VinBirdnest, we deliver edible bird’s nest by keeping true to its natural way. Thus, we want people to enjoy its natural benefit through our high quality products.
                  </div>
              </div>
            </div>
          </div>
        </div>
        <div class="navigation-example" style={{backgroundImage: `url('./assets/img/background/bg.jpg')`}}></div>
          {/* // end navbar  --> */}
          <div class="section section-basic" style={{backgroundColor: '#eecd74'}}>
            <div class="container">
              <div class="title">
                <h2>100% Certified High Quality Products
                    and Registered Company</h2>
              </div>
              {/* //  buttons --> */}
              <div id="buttons" class="cd-section">
                <div class="row">
                  <div class="col-md-8 ml-auto mr-auto">
                    {/* // todo: change content--> */}
                    Vinbirdnest is legally registered as edible bird's nest exporting company in People's Republic of China under registration number 002. Therefore, to maintain and improve the high standard of our product quality, we have also obtained required certifications.
                    <div class="title">
                        ← <h3>Click Certificate to view</h3> →
                    </div>
                  </div>
                </div>
                  {/* // certificate carousel  --> */}
                <div class="section" id="carousel">
                  <div class="container">
                    <div class="row">
                      <div class="col-md-8 mr-auto ml-auto">
                        {/* // Carousel Card --> */}
                        <div class="card card-raised card-carousel">
                          <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel" data-interval="3000">
                            <ol class="carousel-indicators">
                              <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                              <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                              <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                            </ol>
                            <div class="carousel-inner">
                              <div class="carousel-item active">
                                <img class="d-block w-100" src="https://images.squarespace-cdn.com/content/v1/598005bc1e5b6c1c9fa13515/1504068819722-UF64E9T6OAASJXORBIAT/ke17ZwdGBToddI8pDm48kNDA1KKPnejvrc8aNB1h53BZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZamWLI2zvYWH8K3-s_4yszcp2ryTI0HqTOaaUohrI8PI_O0QXaCfy1WSgXfW7kCtZfhqU1lZMakzDgTpPIGZH6sKMshLAGzx4R3EDFOm1kBS/MockupCertificate4_esta_green.jpg?format=750w" alt="First slide" />
                                <div class="carousel-caption d-none d-md-block">
                                  <h4>
                                    <i class="material-icons">location_on</i> Certificate one
                                  </h4>
                                </div>
                              </div>
                              <div class="carousel-item">
                                <img class="d-block w-100" src="https://images.squarespace-cdn.com/content/v1/598005bc1e5b6c1c9fa13515/1504068822467-JVMITJEVRH2PZSFB4L3W/ke17ZwdGBToddI8pDm48kNDA1KKPnejvrc8aNB1h53BZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZamWLI2zvYWH8K3-s_4yszcp2ryTI0HqTOaaUohrI8PI_O0QXaCfy1WSgXfW7kCtZfhqU1lZMakzDgTpPIGZH6sKMshLAGzx4R3EDFOm1kBS/MockupCertificate1_esta_green.jpg?format=750w" alt="Second slide" />
                                <div class="carousel-caption d-none d-md-block">
                                  <h4>
                                    <i class="material-icons">location_on</i> Certificate two
                                  </h4>
                                </div>
                              </div>
                              <div class="carousel-item">
                                <img class="d-block w-100" src="https://images.squarespace-cdn.com/content/v1/598005bc1e5b6c1c9fa13515/1504068826022-YO1NZK98VDWZCSXRFXVZ/ke17ZwdGBToddI8pDm48kNDA1KKPnejvrc8aNB1h53BZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZamWLI2zvYWH8K3-s_4yszcp2ryTI0HqTOaaUohrI8PI_O0QXaCfy1WSgXfW7kCtZfhqU1lZMakzDgTpPIGZH6sKMshLAGzx4R3EDFOm1kBS/MockupCertificate3_esta_green.jpg?format=750w" alt="Third slide" />
                                <div class="carousel-caption d-none d-md-block">
                                  <h4>
                                    <i class="material-icons">location_on</i> Certificate three
                                  </h4>
                                </div>
                              </div>
                            </div>
                            <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                              <i class="material-icons">keyboard_arrow_left</i>
                              <span class="sr-only">Previous</span>
                            </a>
                            <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                              <i class="material-icons">keyboard_arrow_right</i>
                              <span class="sr-only">Next</span>
                            </a>
                          </div>
                        </div>
                        {/* // End Carousel Card --> */}
                      </div>
                    </div>
                  </div>
                </div>
                  {/* //         end carousel --> */}
              </div>
            </div>
            
          </div>
          {/* // start 3rd --> */}
          <div class="section section-basic">
            <div class="container">
                <div class="title">
                  <h2>Customizable Products To Your Own Needs</h2>
                </div>
                  {/* //  buttons --> */}
                <div id="buttons" class="cd-section">
                  <div class="row">
                    <div class="col-md-8 mr-auto">
                        Waste no more effort with products that can be specifically customized to your unique needs in food & beverages, cosmetics and nutraceutical industry.
                    </div>
                  </div>
                  <div class="space-50"></div>
                  <button class="btn btn-warning btn-lg">Our products and services</button>
                </div>
              </div>
            </div>
            {/* // end 3rd --> */}
            {/* // 4th: 2nd image--> */}
            <div class="navigation-example" style={{backgroundImage: `url('./assets/img/background/bg4.jpg')`}}></div>
            {/* // end 4th --> */}
            {/* // 5th --> */}
            <div class="section section-basic">
              <div class="container">
                <div class="title">
                  <h2>All Natural Products, No Food Additive & Non-GMO</h2>
                </div>

                <div id="buttons" class="cd-section">
                  <div class="row">
                    <div class="col-md-8 mr-auto">
                        ESTA continues to strive because of our natural and non-genetically modified processes. We does not use any food additive and our nests are very healthy for long-time consumption.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* // end 5th --> */}
            {/* // 5th: 3rd image--> */}
            <div class="navigation-example" style={{backgroundImage: `url('./assets/img/background/bg3.jpg')`}}></div>
            {/* // end 5th --> */}
            {/* // 6th --> */}
            <div class="section section-basic">
                <div class="container">
                  <div class="title">
                    <h2>Clean & Hygienic Manufacturing Process</h2>
                  </div>
      
                  <div id="buttons" class="cd-section">
                    <div class="row">
                      <div class="col-md-8 mr-auto">
                          We are committed to implement natural and hygienic manufacturing stages.
                      </div>
                    </div>
                  </div>
                  <div class="space-50"></div>
                  <button class="btn btn-warning btn-lg">See how we make it</button>
                </div>
              </div>
              // end 6th -->
              // 7th: 3rd image-->
              <div class="navigation-example" style={{backgroundImage: `url('./assets/img/background/bg7.jpg')`}}></div>
              // end 7th -->
              // 8th -->
              <div class="section section-basic">
                  <div class="section section-signup">
                    <div class="container">
                      <div class="row">
                        <div class="col-md-3 ml-auto mr-auto">
                          <div class="card-login">
                              <div class="card-header card-header-primary text-center">
                                <h4 class="card-title">No Need to Worry about Legality</h4>
                              </div>
                              <img class="" src="https://images.squarespace-cdn.com/content/v1/598005bc1e5b6c1c9fa13515/1504179336208-ZO7PFXQPP2YZHIAIWO0T/ke17ZwdGBToddI8pDm48kByeOjzod2mFALX25R4PqmpZw-zPPgdn4jUwVcJE1ZvWhcwhEtWJXoshNdA9f1qD7dj5hCgVXYNQVce-zwunVDzSz3P4GRf0U4dHI0F9H5KJRVXvH_6vLzxRGAovOgUr_w/ikon_3warna-07-01.png?format=300w" />
                              <div class="space-50"></div>
                              <div class="card-body container">
                                // todo: change content-->
                                <div class="description text-center">Our products are 100% legal and certified
                                    by Indonesian Agriculture Quarantine Agency and Certification and Accreditation Administration of the People's Republic of China (CNCA).
                                </div>
                              </div>
                              <div class="space-50"></div>
                          </div>
                        </div>

                        <div class="col-md-3 ml-auto mr-auto">
                            <div class="card-login">
                                <div class="card-header card-header-primary text-center">
                                  <h4 class="card-title">We Only Deliver You
                                      High-Quality Products</h4>
                                </div>
                                <img class="" src="https://images.squarespace-cdn.com/content/v1/598005bc1e5b6c1c9fa13515/1504178037406-BTK4GKUOEJX6NQRZ5ZQ3/ke17ZwdGBToddI8pDm48kByeOjzod2mFALX25R4PqmpZw-zPPgdn4jUwVcJE1ZvWhcwhEtWJXoshNdA9f1qD7dj5hCgVXYNQVce-zwunVDzSz3P4GRf0U4dHI0F9H5KJRVXvH_6vLzxRGAovOgUr_w/ikon_3warna-05-01.png?format=300w" />
                                <div class="space-50"></div>
                                <p class="description text-center">Be rest assured about the quality of product you order, it has passed our quality control procedure.
                                </p>
                                <div class="space-50"></div>
                            </div>
                          </div>

                          <div class="col-md-3 ml-auto mr-auto">
                              <div class="card-login">
                                  <div class="card-header card-header-primary text-center">
                                    <h4 class="card-title">Products Can Be Tailored to Your Unique Needs</h4>
                                  </div>
                                  <img class="" src="https://images.squarespace-cdn.com/content/v1/598005bc1e5b6c1c9fa13515/1504178778111-VDOPLPSCXVBZ8RJOPWZC/ke17ZwdGBToddI8pDm48kByeOjzod2mFALX25R4PqmpZw-zPPgdn4jUwVcJE1ZvWhcwhEtWJXoshNdA9f1qD7dj5hCgVXYNQVce-zwunVDzSz3P4GRf0U4dHI0F9H5KJRVXvH_6vLzxRGAovOgUr_w/ikon_3warna-06-01.png?format=300w" />
                                  <div class="space-50"></div>
                                  <p class="description text-center">Waste no more effort as our products can be specifically customized to your unique needs.
                                  </p>
                                  <div class="space-50"></div>
                              </div>
                            </div>

                            <div class="col-md-3 ml-auto mr-auto">
                                <div class="card-login">
                                    <div class="card-header card-header-primary text-center">
                                      <h4 class="card-title">Focus on Satisfying Customer Needs Better </h4>
                                    </div>
                                    <img class="" src="https://images.squarespace-cdn.com/content/v1/598005bc1e5b6c1c9fa13515/1504179310684-P8UDPOJ1LC0TER3SA8WB/ke17ZwdGBToddI8pDm48kByeOjzod2mFALX25R4PqmpZw-zPPgdn4jUwVcJE1ZvWhcwhEtWJXoshNdA9f1qD7dj5hCgVXYNQVce-zwunVDzSz3P4GRf0U4dHI0F9H5KJRVXvH_6vLzxRGAovOgUr_w/ikon_3warna-08-01.png?format=300w" />
                                    <div class="space-50"></div>
                                    <p class="description text-center">We focus our capabilities towards satisfying our valuable customer by integrating downstream and upstream in the value chain.
                                    </p>
                                    <div class="space-50"></div>
                                </div>
                              </div>

                      </div>

                    </div>
                  </div>
              </div>
              {/* // end 8th --> */}
          </div>


      {/* // Footer --> */}
      <footer class="footer" data-background-color="black">
        <div class="container">
          <nav class="float-left">
            <ul>
              <li>
                <a href="/about-vinbird.html">
                  About Us
                </a>
              </li>
              <li>
                <a href="http://blog.creative-tim.com">
                  Blog
                </a>
              </li>
              <li>
                <a href="https://www.creative-tim.com/license">
                  Licenses
                </a>
              </li>
            </ul>
          </nav>
          <div class="copyright float-right">
            &copy;
            <script>
              document.write(new Date().getFullYear())
            </script> VinBirdnest
          </div>
        </div>
      </footer>
      {/* //   Core JS Files   --> */}
      <script src="./assets/js/core/jquery.min.js" type="text/javascript"></script>
      <script src="./assets/js/core/popper.min.js" type="text/javascript"></script>
      <script src="./assets/js/core/bootstrap-material-design.min.js" type="text/javascript"></script>
      <script src="./assets/js/plugins/moment.min.js"></script>
      {/* //	Plugin for the Datepicker, full documentation here: https://github.com/Eonasdan/bootstrap-datetimepicker --> */}
      <script src="./assets/js/plugins/bootstrap-datetimepicker.js" type="text/javascript"></script>
      {/* //  Plugin for the Sliders, full documentation here: http://refreshless.com/nouislider/ --> */}
      <script src="./assets/js/plugins/nouislider.min.js" type="text/javascript"></script>
      {/* //  Google Maps Plugin    --> */}
      <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_KEY_HERE"></script>
      {/* // Control Center for Material Kit: parallax effects, scripts for the example pages etc --> */}
      <script src="./assets/js/material-kit.js?v=2.0.6" type="text/javascript"></script>
      <script>
        $(document).ready(function() {
          //init DateTimePickers
          //materialKit.initFormExtendedDatetimepickers();

          // Sliders Init
          //materialKit.initSliders();
        });


        function scrollToDownload() {
          //if ($('.section-download').length != 0) {
          //  $("html, body").animate({
          //    scrollTop: $('.section-download').offset().top
          //  }, 1000);
          }
        }

      </script>
    </body>
  </div>

);

export default Index;