<?php require "./header.php"; ?>
  <div class="page-header header-filter clear-filter purple-filter" data-parallax="true" style="background-image: url('./assets/img/background/bg6.jpg');">
    <div class="container">
      <div class="row">
        <div class="col-md-8 ml-auto mr-auto">
          <div class="brand">
            <h1>VinBirdnest</h1>
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
          <h2><?php echo L::homepage_title_1; ?></h2>
        </div>
        <!--  buttons -->
        <div id="buttons" class="cd-section">
          <div class="row">
              <div class="col-md-8 ml-auto mr-auto">
              <?php echo L::homepage_subtitle_1; ?>
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
              <h2><?php echo L::homepage_title_2; ?></h2>
            </div>
              <!--  buttons -->
            <div id="buttons" class="cd-section">
              <div class="row">
                <div class="col-md-8 ml-auto mr-auto">
                <?php echo L::homepage_subtitle_2; ?>
                </div>
              </div>
              <div class="space-50"></div>
              <a href="./product-services"><button class="btn btn-warning btn-lg"><?php echo L::homepage_button_2; ?></button></a>
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
              <h2><?php echo L::homepage_title_3; ?></h2>
            </div>

            <div id="buttons" class="cd-section">
              <div class="row">
                <div class="col-md-8 ml-auto mr-auto">
                  <?php echo L::homepage_subtitle_3; ?>
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
                <h2><?php echo L::homepage_title_4; ?></h2>
              </div>
  
              <div id="buttons" class="cd-section">
                <div class="row">
                  <div class="col-md-8 ml-auto mr-auto">
                    <?php echo L::homepage_subtitle_4; ?>
                  </div>
                </div>
              </div>
              <div class="space-50"></div>
              <a href="/how-its-made"><button class="btn btn-warning btn-lg"><?php echo L::homepage_button_4; ?></button></a>
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
                            <h4 class="card-title"><?php echo L::homepage_card_title_1; ?></h4>
                          </div>
                          <img class="" src="./assets/icon/certifed.png">
                          <div class="space-50"></div>
                          <div class="card-body container">
                            <!-- todo: change content-->
                            <div class="description text-center"><?php echo L::homepage_card_description_1; ?>
                            </div>
                          </div>
                          <div class="space-50"></div>
                      </div>
                    </div>

                    <div class="col-md-3 ml-auto mr-auto">
                        <div class="card-login">
                            <div class="card-header card-header-primary text-center">
                              <h4 class="card-title"><?php echo L::homepage_card_title_2; ?></h4>
                            </div>
                            <img class="" src="./assets/icon/quality.png">
                            <div class="space-50"></div>
                            <p class="description text-center"><?php echo L::homepage_card_description_2; ?>
                            </p>
                            <div class="space-50"></div>
                        </div>
                      </div>

                      <div class="col-md-3 ml-auto mr-auto">
                          <div class="card-login">
                              <div class="card-header card-header-primary text-center">
                                <h4 class="card-title"><?php echo L::homepage_card_title_3; ?></h4>
                              </div>
                              <img class="" src="./assets/icon/customized.png">
                              <div class="space-50"></div>
                              <p class="description text-center"><?php echo L::homepage_card_description_3; ?>
                              </p>
                              <div class="space-50"></div>
                          </div>
                        </div>

                        <div class="col-md-3 ml-auto mr-auto">
                            <div class="card-login">
                                <div class="card-header card-header-primary text-center">
                                  <h4 class="card-title"><?php echo L::homepage_card_title_4; ?></h4>
                                </div>
                                <img class="" src="./assets/icon/customer.png">
                                <div class="space-50"></div>
                                <p class="description text-center"><?php echo L::homepage_card_description_4; ?>
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
