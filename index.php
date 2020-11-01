<!--
 =========================================================
 * Material Kit - v2.0.6
 =========================================================

 * Product Page: https://www.creative-tim.com/product/material-kit
 * Copyright 2019 Creative Tim (http://www.creative-tim.com)
   Licensed under MIT (https://github.com/creativetimofficial/material-kit/blob/master/LICENSE.md)


 =========================================================

 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software. -->

<?php
  require_once 'i18n.class.php';
  $i18n = new i18n('lang/lang_{LANGUAGE}.ini', 'langcache/', 'en');
  $i18n->init();
?>

<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="utf-8" />
  <link rel="apple-touch-icon" sizes="76x76" href="./assets/img/apple-icon.png">
  <link rel="icon" type="image/png" href="./assets/img/favicon.png">
  <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
  <title>
    VinBirdnest
  </title>
  <meta content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0, shrink-to-fit=no' name='viewport' />
  <!--     Fonts and icons     -->
  <link rel="stylesheet" type="text/css" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Roboto+Slab:400,700|Material+Icons" />
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/latest/css/font-awesome.min.css">
  <!-- CSS Files -->
  <link href="./assets/css/material-kit.css?v=2.0.6" rel="stylesheet" />
  <!-- CSS Just for demo purpose, don't include it in your project -->
  <link href="./assets/demo/demo.css" rel="stylesheet" />
</head>

<body class="index-page sidebar-collapse">
  <nav class="navbar navbar-transparent navbar-color-on-scroll fixed-top navbar-expand-lg" color-on-scroll="100" id="sectionsNav">
    <div class="container">
      <div class="navbar-translate">
        <a class="navbar-brand" href="./index">
          VinBirdnest </a>
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
              <i class="material-icons">apps</i> <?php echo L::about_vinbirdnest; ?>
            </a>
            <div class="dropdown-menu dropdown-with-icons">
              <a href="./about-vinbird" class="dropdown-item">
                <i class="material-icons">layers</i> <?php echo L::about_vinbirdnest; ?>
              </a>
              <a href="./about-birdnest" class="dropdown-item">
                <i class="material-icons">layers</i> About bird's nest
              </a>
              <a href="./product-services" class="dropdown-item">
                <i class="material-icons">content_paste</i> <?php echo L::products_and_services; ?>
              </a>
              <a href="how-its-made" class="dropdown-item">
                <i class="material-icons">content_paste</i> How It's made
              </a>
            </div>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="./faq" onclick="scrollToDownload()">
              <i class="material-icons">info</i> FAQ
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="./gallery" onclick="scrollToDownload()">
              <i class="material-icons">aspect_ratio</i> Gallery
            </a>
          </li>

          <!-- <li class="nav-item">
            <a class="nav-link" href="./cn/index" onclick="scrollToDownload()">
              <i class="material-icons">translate</i> 中文
            </a>
          </li> -->
          <li class="nav-item">
            <a class="nav-link" rel="tooltip" title="" data-placement="bottom" href="mailto:vinbirdnest@gmail.com "target="_blank" data-original-title="Email us">
              <i class="fa fa-envelope"></i>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" rel="tooltip" title="" data-placement="bottom" href="https://www.facebook.com/vinbirdnest.toyenvietnam/" target="_blank" data-original-title="Like us on Facebook">
              <i class="fa fa-facebook-square"></i>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" rel="tooltip" title="" data-placement="bottom" href="https://www.instagram.com/vinbirdnest/" target="_blank" data-original-title="Follow us on Instagram">
              <i class="fa fa-instagram"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <div class="page-header header-filter clear-filter purple-filter" data-parallax="true" style="background-image: url('./assets/img/background/bg6.jpg');">
    <div class="container">
      <div class="row">
        <div class="col-md-8 ml-auto mr-auto">
          <div class="brand">
            <h1>VinBirdnest</h1>
            <h3>Live the nature</h3>
            <p>Applied Language: <?php echo $i18n->getAppliedLang(); ?> </p>
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
        <!--  buttons -->
        <div id="buttons" class="cd-section">
          <div class="row">
              <div class="col-md-8 ml-auto mr-auto">
                In VinBirdnest, we deliver edible bird’s nest by keeping true to its natural way. Thus, we want people to enjoy its natural benefit through our high quality products.
              </div>
          </div>
        </div>
      </div>
    </div>
    <div class="navigation-example" style="background-image: url('./assets/img/background/bg.jpg');"></div>
      <!-- start 3rd -->
      <div class="section section-basic">
        <div class="container">
            <div class="title">
              <h2>Customizable Products To Your Own Needs</h2>
            </div>
              <!--  buttons -->
            <div id="buttons" class="cd-section">
              <div class="row">
                <div class="col-md-8 mr-auto">
                    Waste no more effort with products that can be specifically customized to your unique needs in food & beverages, cosmetics and nutraceutical industry.
                </div>
              </div>
              <div class="space-50"></div>
              <a href="./product-services"><button class="btn btn-warning btn-lg">Our products and services</button></a>
            </div>
          </div>
        </div>
        <!-- end 3rd -->
        <!-- 4th: 2nd image-->
        <div class="navigation-example" style="background-image: url('./assets/img/background/bg10.jpg');"></div>
        <!-- end 4th -->
        <!-- 5th -->
        <div class="section section-basic">
          <div class="container">
            <div class="title">
              <h2>All Natural Products, No Food Additive & Non-GMO</h2>
            </div>

            <div id="buttons" class="cd-section">
              <div class="row">
                <div class="col-md-8 mr-auto">
                    Vinbirdnest continues to strive because of our natural and non-genetically modified processes. We does not use any food additive and our nests are very healthy for long-time consumption.
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- end 5th -->
        <!-- 5th: 3rd image-->
        <div class="navigation-example" style="background-image: url('./assets/img/background/bg9.jpg');"></div>
        <!-- end 5th -->
        <!-- 6th -->
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
              <a href="/how-its-made"><button class="btn btn-warning btn-lg">See how we make it</button></a>
            </div>
          </div>
          <!-- end 6th -->
          <!-- 7th: 3rd image-->
          <div class="navigation-example" style="background-image: url('./assets/img/background/bg7.jpg');"></div>
          <!-- end 7th -->
          <!-- 8th -->
          <div class="section section-basic">
              <div class="section section-signup">
                <div class="container">
                  <div class="row">
                    <div class="col-md-3 ml-auto mr-auto">
                      <div class="card-login">
                          <div class="card-header card-header-primary text-center">
                            <h4 class="card-title">No Need to Worry about Legality</h4>
                          </div>
                          <img class="" src="./assets/icon/certifed.png">
                          <div class="space-50"></div>
                          <div class="card-body container">
                            <!-- todo: change content-->
                            <div class="description text-center">Our products are 100% legal and certified.
                            </div>
                          </div>
                          <div class="space-50"></div>
                      </div>
                    </div>

                    <div class="col-md-3 ml-auto mr-auto">
                        <div class="card-login">
                            <div class="card-header card-header-primary text-center">
                              <h4 class="card-title">We Only Deliver You High-Quality Products</h4>
                            </div>
                            <img class="" src="./assets/icon/quality.png">
                            <div class="space-50"></div>
                            <p class="description text-center">Be rest assured about the quality of product you order, it has passed our quality control procedure.
                            </p>
                            <div class="space-50"></div>
                        </div>
                      </div>

                      <div class="col-md-3 ml-auto mr-auto">
                          <div class="card-login">
                              <div class="card-header card-header-primary text-center">
                                <h4 class="card-title">Products Can Be Customized</h4>
                              </div>
                              <img class="" src="./assets/icon/customized.png">
                              <div class="space-50"></div>
                              <p class="description text-center">Waste no more effort as our products can be specifically customized to your unique needs.
                              </p>
                              <div class="space-50"></div>
                          </div>
                        </div>

                        <div class="col-md-3 ml-auto mr-auto">
                            <div class="card-login">
                                <div class="card-header card-header-primary text-center">
                                  <h4 class="card-title">Focus on Customer Needs </h4>
                                </div>
                                <img class="" src="./assets/icon/customer.png">
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
          <!-- end 8th -->
      </div>
  </div>

  <?php require 'footer.php' ?>
</body>

</html>
