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
              <i class="material-icons">apps</i> About VinBirdnest
            </a>
            <div class="dropdown-menu dropdown-with-icons">
              <a href="./about-vinbird" class="dropdown-item">
                <i class="material-icons">layers</i> About VinBirdnest
              </a>
              <a href="./about-birdnest" class="dropdown-item">
                <i class="material-icons">layers</i> About bird's nest
              </a>
              <a href="./product-services" class="dropdown-item">
                <i class="material-icons">content_paste</i> Products & Services
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

          <li class="nav-item">
            <a class="nav-link" href="./?lang=vi" onclick="scrollToDownload()">
              <i class="material-icons">translate</i> Tiếng Việt
            </a>
          </li>
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
            <h1><?php echo L::about_vinbirdnest; ?></h1>
            <h3><?php echo L::live_the_nature; ?></h3>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="main main-raised">
    <div class="section section-basic">
      <div class="container">
        <div class="title">
          <h1><?php echo L::about_vinbirdnest; ?></h1>
        </div>
        <!--  buttons -->
        <div id="buttons" class="cd-section">
          <div class="row">
              <div class="col-md-8 ml-auto mr-auto">
                <p><?php echo L::aboutvinbird_intro_1; ?></p>
                <p><?php echo L::aboutvinbird_intro_2; ?></p>
                <p><?php echo L::aboutvinbird_intro_3; ?></p>
                <p><?php echo L::aboutvinbird_intro_4; ?></p>
              </div>
          </div>
        </div>
      </div>
    </div>
    <div class="page-header header-filter" style="background-image: url('./assets/img/background/bg1.jpg');">
        <div class="container">
            <div class="row">
                <div class="col-md-8 ml-auto mr-auto">
                    <div class="brand">
                        <h1 class="text-center"><?php echo L::aboutvinbird_title_1; ?></h1>
                    </div>
                </div>
            </div>
        </div>
    </div>
      <!-- end navbar  -->
      <div class="section section-basic">
        <div class="container">
          <div class="title">
            <h4><?php echo L::aboutvinbird_title_1_h4; ?></h4>
            <h2><?php echo L::aboutvinbird_title_1_h2; ?></h2>
          </div>
          <!--  buttons -->
          <div id="buttons" class="cd-section">
            <div class="row">
              <div class="col-md-8 ml-auto mr-auto">
                <?php echo L::aboutvinbird_title_1_description; ?>
              </div>
            </div>
           </div>
        </div>
      </div>

      <div class="page-header header-filter" style="background-image: url('./assets/img/background/bg8.jpg');">
        <div class="container">
            <div class="row">
                <div class="col-md-10 ml-auto mr-auto">
                    <div class="brand">
                      <h4><?php echo L::aboutvinbird_title_2_h4; ?></h4><!-- todo: change content -->
                      <h1 class="text-center"><?php echo L::aboutvinbird_title_2_h1; ?></h1>
                      <h5><?php echo L::aboutvinbird_title_2_description; ?></h5>
                    </div>
                </div>
            </div>
        </div>
    </div>


    <div class="section section-basic">
        <div class="container">
            <div class="cd-section">
                <div class="row">
                    <div class="col-md-4 ml-auto mr-auto">
                        <img width="300" src="assets/img/intro/intro3.jpg">
                    </div>
                    <div class="col-md-8 ml-auto mr-auto">
                        <h3><?php echo L::aboutvinbird_value_1; ?></h3>
                        <?php echo L::aboutvinbird_value_1_description; ?>
                    </div>
                </div>
                <div class="space-50"></div>
                <div class="row">
                        <div class="col-md-4 ml-auto mr-auto">
                            <img width="300" src="assets/img/intro/intro4.jpg">
                        </div>
                        <div class="col-md-8 ml-auto mr-auto">
                          <h3><?php echo L::aboutvinbird_value_2; ?></h3>
                          <?php echo L::aboutvinbird_value_2_description; ?>
                        </div>
                    </div>
                <div class="space-50"></div>
                <div class="row">
                    <div class="col-md-4 ml-auto mr-auto">
                        <img width="300" height="200" src="assets/img/intro/intro5.jpg">
                    </div>
                    <div class="col-md-8 ml-auto mr-auto">
                      <h3><?php echo L::aboutvinbird_value_3; ?></h3>
                      <?php echo L::aboutvinbird_value_3_description; ?>
                    </div>
                </div>
                <div class="space-50"></div>
                <div class="row">
                    <div class="col-md-4 ml-auto mr-auto">
                        <img width="300" src="assets/img/intro/intro7.jpg">
                    </div>
                    <div class="col-md-8 ml-auto mr-auto">
                      <h3><?php echo L::aboutvinbird_value_4; ?></h3>
                      <?php echo L::aboutvinbird_value_4_description; ?>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>
</div>

  <?php require 'footer.php'; ?>
</body>

</html>
