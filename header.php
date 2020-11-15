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
  $_isVietnamese = isset($_GET["lang"]) && $_GET["lang"] === "vi";
  $currentPath = explode(".", basename($_SERVER['PHP_SELF']))[0];
  if ($currentPath === "index") $currentPath = "";
?>

<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="utf-8" />
  <link rel="apple-touch-icon" sizes="76x76" href="./assets/img/apple-icon.png">
  <link rel="icon" type="image/png" href="./assets/img/favicon.png">
  <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
  <meta name="Description" CONTENT="VinBirdnest is one of the companies belongs to our family farm with 5 birdhouses built from 2009. All our bird houses located in a green island named Can gio – the coastal area of 72,000 hectares with an abundant food source for birds.">
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
              <a href="./about-vinbird<?php if($_isVietnamese) echo "?lang=vi";?>" class="dropdown-item">
                <i class="material-icons">layers</i> <?php echo L::about_vinbirdnest; ?>
              </a>
              <a href="./about-birdnest<?php if($_isVietnamese) echo "?lang=vi";?>" class="dropdown-item">
                <i class="material-icons">layers</i> <?php echo L::about_birdnest; ?>
              </a>
              <a href="./product-services<?php if($_isVietnamese) echo "?lang=vi";?>" class="dropdown-item">
                <i class="material-icons">content_paste</i> <?php echo L::products_and_services; ?>
              </a>
              <a href="how-its-made<?php if($_isVietnamese) echo "?lang=vi";?>" class="dropdown-item">
                <i class="material-icons">content_paste</i> <?php echo L::how_its_made; ?>
              </a>
            </div>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="./faq<?php if($_isVietnamese) echo "?lang=vi";?>" onclick="scrollToDownload()">
              <i class="material-icons">info</i> FAQ
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="./gallery<?php if($_isVietnamese) echo "?lang=vi";?>" onclick="scrollToDownload()">
              <i class="material-icons">aspect_ratio</i> <?php echo L::gallery; ?>
            </a>
          </li>

          <li class="nav-item">
            <a class="nav-link" href="<?php if ($_isVietnamese) {
              echo "./".$currentPath;
            } else {
              echo "./".$currentPath."?lang=vi";
            }?>" onclick="scrollToDownload()">
              <i class="material-icons">translate</i>
              <?php
                if ($_isVietnamese) {
                  echo "English";
                } else {
                  echo "Tiếng Việt";
                }
              ?>
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