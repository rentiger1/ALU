<!DOCTYPE html>
<html lang="en">

    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <meta name="description" content="">
        <meta name="author" content="">

        <title>Welcome to Alliance Larp Utah</title>

        <!-- Bootstrap core CSS -->
        <link href="vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet" type="text/css"/>
        <!-- Custom fonts for this template -->
        <link href="https://fonts.googleapis.com/css?family=Raleway:100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i" rel="stylesheet">
        <link href="https://fonts.googleapis.com/css?family=Lora:400,400i,700,700i" rel="stylesheet">

        <!-- font awesome icons -->
        <link rel="stylesheet"  href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">

        <!-- Custom styles for this template -->
        <link href="css/business-casual.min.css" rel="stylesheet" type="text/css"/>

        <!-- Bootstrap core JavaScript -->
        <script src="vendor/jquery/jquery.min.js" type="text/javascript"></script>
        <script src="vendor/bootstrap/js/bootstrap.bundle.min.js" type="text/javascript"></script>
        <!-- jquery  -->
        <script
            src="https://code.jquery.com/jquery-3.3.1.min.js"
            integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8="
        crossorigin="anonymous"></script>
        <script>
            $(document).ready(function ()
            {
                var number = 0;

                if ($(window).width() <= 900)
                {
                    $("#welcomeTag").hide();
                    $("#greeting").attr("style", "font-size: 20px; font-weight: bold; object-position: center;");
                    $("#welcomeLandscape").prepend("<div class='bg-faded rounded p-4' \n\
                       <h2 class='section-heading mb-4'> \n\
                       <span class='text-uppercase' id='greeting'\n\
                       style='font-size: 20px; font-style: normal; \n\
                       font-weight: 100;'>\n\
                           Welcome fellow traveler</span> \n\
                       </h2> </div>");
                }



                $(document).scrollTop(0);

                $(document).scroll(function () {
                    if ($(document).scrollTop() > 2 && number == 0)
                    {
                        $("#forestright").animate({left: "-=300px"}, 4000) &&
                                $("#forest").animate({left: "0px"}, 4000);
                        $("#cabinLandscape").fadeIn(2000);
                        number++;
                    }
                });
            });
        </script>
        <style>          
            #NoOverFlow
            {
                overflow-x: hidden;
            }

            #cabinLandscape
            {
                display: none;
            }

            .pointer
            {
                cursor: pointer;
            }

            #forest {
                animation: mymove 2s;
            }

            .containThis
            {
                position: relative;
            }

            .animate
            {
                position: absolute;
            }
        </style>
    </head>

    <body>
        <div id="NoOverFlow">
            <h1 class="site-heading text-center text-white d-none d-lg-block">
                <span class="site-heading-upper text-primary mb-3">Welcome to Alliance Larp Utah</span>
                <span class="site-heading-lower">A Prince is Calling</span>
            </h1>
            <?php
            include_once("partials/navbar.php");
            ?>
            <!-- Header Greeting -->
            <section>
                <div class="about-heading-content">
                    <div class="rounded mb-4" id="welcomeLandscape">
                        <div class="row">
                            <div class="col-xs-11 col-md-12 col-lg-12 fadeIn0">
                                <div class="containThis" style="height: 100%; width: 100%;">
                                    <image
                                        class="img-fluid table-sm animate" 
                                        style="z-index: 30;"
                                        src="Landscape/HillLandscape.png">
                                    <image id="forest"
                                           class="img-fluid table-sm animate" 
                                           style="z-index: 10; left: -300px;"
                                           src="Landscape/TreeLandscapeLeft.png">
                                    <image id="forestright"
                                           class="img-fluid table-sm animate" 
                                           style="z-index: 10; left: 300px;"
                                           src="Landscape/TreeLandscapeRight.png">
                                    <image style="z-index: 40;" 
                                           id="cabinLandscape"
                                           class="img-fluid table-sm animate"
                                           src="Landscape/CabinLandscape.png">
                                    <div class="col-xs-1 col-md-6 col-lg-12" id="welcomeTag">
                                        <div class="bg-faded rounded p-4 animate"
                                             style="z-index: 50; margin-top: 15%">
                                            <h2 class="section-heading mb-4">
                                                <span class="section-heading-lower" id="greeting" 
                                                      style="font-size: 40px;">Welcome fellow traveler</span>
                                            </h2>
                                        </div>
                                    </div>
                                    <image
                                        class="img-fluid table-sm"
                                        style="position: relative;"
                                        src="Landscape/SkyLandscape.png">
                                </div>
                            </div>
                        </div>
                    </div>

                    <div></div>
                </div>
            </section>
            <section class="page-section clearfix">
                <div class="container">
                    <div class="intro">
                        <img class="intro-img img-fluid mb-3 mb-lg-0 rounded" src="img/intro.jpg" alt="">
                        <div class="intro-text left-0 text-center bg-faded p-5 rounded">
                            <h2 class="section-heading mb-4">
                                <span class="section-heading-upper">Friends</span>
                                <span class="section-heading-lower">Gather Round</span>
                            </h2>
                            <p class="mb-3">Alliance Live Action Role-Playing Utah is a group committed to bringing action-packed weekend adventures to the LARP Community. Through quality writing and plotlines that establish setting, various dynamic NPC characters, and conflicts great and small, we are dedicated to bringing you the best live gaming experience.
                            </p>
                            <div class="intro-button mx-auto">
                                <a class="btn btn-primary btn-xl" href="#">Visit Us Today!</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="page-section cta">
                <div class="container">
                    <div class="row">
                        <div class="col-xl-9 mx-auto">
                            <div class="cta-inner text-center rounded">
                                <h2 class="section-heading mb-4">
                                    <span class="section-heading-upper">Challenge</span>
                                    <span class="section-heading-lower">Accepted</span>
                                </h2>
                                <p class="mb-0">Any novice gamemaster can throw stats and treasure onto NPCs and make a LARPing event action-packed, but we strive to provide political intrigue, problem solving, world building, character development, and an atmosphere dedicated to costuming, acting, staying in game, and being all that you can't be in the real world.  Join us at Alliance LARP Utah and be all that you can't be!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <footer class="footer text-faded text-center py-5">
                <div class="container">
                    <p class="m-0 small">Copyright &copy; 2018 Alliance Larp Utah - All Rights Reserved.</p>
                </div>
            </footer>

            <!-- Bootstrap core JavaScript -->
            <script src="vendor/jquery/jquery.min.js"></script>
            <script src="vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
        </div>
    </body>

</html>
