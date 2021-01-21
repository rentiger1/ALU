$(document).ready(function(){
    $(".fadeIn0").fadeIn(1500);

    if($(document).scrollTop() > 260)
    {
        $(".fadeIn1").fadeIn(1500);
    }
    $(document).scroll(function(){
        //alert($(document).scrollTop() + " px");
        if($(document).scrollTop() > 260)
        {
            $(".fadeIn1").fadeIn(1500);
        }
        if($(document).scrollTop() > 500)
        {
            $(".fadeIn2").fadeIn(1500);
        }
        if($(document).scrollTop() > 630)
        {
            $(".fadeIn3").fadeIn(1500);
        }
        if($(document).scrollTop() > 875)
        {
            $(".fadeIn4").fadeIn(1500);
        }
        if($(document).scrollTop() > 1100)
        {
            $(".fadeIn5").fadeIn(1500);
        }
    });

    $("#foodplan").click(function(){
        $("#exampleModalCenterTitle").text("Food Plan");
        $("#modelimage").attr("src", "ProductImages/BreadColorNB.png");
        $("#modaltext").text("This includes breakfast and dinner on Saturday, \n\
            and breakfast on Sunday before or during closing announcements.");
        $("#submit").text("Add To Cart");
        $("#modalfooter").text("$15.00");
    })

    $("#tent").click(function(){
        $("#exampleModalCenterTitle").text("In-period Tent");
        $("#modelimage").attr("src", "ProductImages/TentColor.png");
        $("#modaltext").text("This is for a weekend event where you stay in your own in-period, \n\
            genre-enhancing tent. If you are unsure if your tent meets our criteria, please send us a photo.");
        $("#submit").text("Add To Cart");
        $("#modalfooter").text("$50.00");
    })

    $("#cabin").click(function(){
        $("#exampleModalCenterTitle").text("Full weekend with Cabin");
        $("#modelimage").attr("src", "ProductImages/CabinColor.png");
        $("#modaltext").text("This is for a bed in a cabin with \n\
            heat and electricity for the full weekend of game play.");
        $("#submit").text("Add To Cart");
        $("#modalfooter").text("$75.00");
    })

    $("#membership").click(function(){
        $("#exampleModalCenterTitle").text("Membership");
        $("#modelimage").attr("src", "ProductImages/MembershipColor.png");
        $("#modaltext").text("This is for one year from time of purchase. \n\
            Membership isn't required for your first event, but will be for your second event, \n\
            no matter if you are an NPC or PC. \n\
            This is for standard operating costs such as insurance and other boring, \n\
            mundane things and is required by all upon their second event.");
        $("#submit").text("Add To Cart");
        $("#modalfooter").text("$30.00");
    })

    $("#gamefee").click(function(){
        $("#exampleModalCenterTitle").text("Saturday Only game fee");
        $("#modelimage").attr("src", "ProductImages/DoubleAxeColor.png");
        $("#modaltext").text("This is for a Super Saturday event beginning when you arrive on \n\
            Saturday and good until you leave Saturday night. \n\
            You will only receive one logistics worth of tags, coin, checkin, \n\
            as well as only one game day of Experience Points.");
        $("#submit").text("Add To Cart");
        $("#modalfooter").text("$40.00");
    })

    $("#weekendpackage").click(function(){
        $("#exampleModalCenterTitle").text("Weekend package");
        $("#modelimage").attr("src", "ProductImages/AxeColor.png");
        $("#modaltext").text("This is for a weekend event, \n\
            this includes a food plan and a place to sleep inside a cabin.");
        $("#submit").text("Add To Cart");
        $("#modalfooter").text("$80.00");
    })

    $("#daypackage").click(function(){
        $("#exampleModalCenterTitle").text("Day package");
        $("#modelimage").attr("src", "ProductImages/DoubleAxeColor.png");
        $("#modaltext").text("This includes the Super Saturday event game fee\n\
            and Dinner on Saturday.");
        $("#submit").text("Add To Cart");
        $("#modalfooter").text("$50.00");
    })

    $("#forgeweapon").click(function(){
        $("#exampleModalCenterTitle").text("Forge your own weapon");
        $("#modelimage").attr("src", "ProductImages/SwordColor.png");
        $("#modaltext").text("We are offering classes to teach you how to \n\
            design and build your own weapon, fee includes supplies and instruction.");
        $("#submit").text("Add To Cart");
        $("#modalfooter").text("$30.00");
    })

    $("#donate").click(function(){
        $("#exampleModalCenterTitle").text("Donate");
        $("#modelimage").attr("src", "ProductImages/HandsColor.png");
        $("#modaltext").text("Your support and contributions will enable us to meet our goals of \n\
            providing the best game with quality props, masks, makeup, and costumes.");
        $("#submit").text("Donate");
        $("#modalfooter").text("");
    })

    $("#donateweapons").click(function(){
        $("#exampleModalCenterTitle").text("Donate Weapons");
        $("#modelimage").attr("src", "ProductImages/SwordColor.png");
        $("#modaltext").text("Daggers and Small Blunt Weapon - 25 GS \n\n\n\
            Short Blade, Short Bow, Light Crossbows, and Short Blunt Weapons -35 GS \n\n\n\
            Long Blade, Long Bow, Heavy Crossbows, and Long Blunt Weapons - 50 GS \n\
            Two Handed Blade and Two Handed Blunt Weapons -100 GS \n\
            Pole Arms -125 GS \n\
            Staves -50 GS \n\
            Shields  - 125 GS");
        $("#submit").text("Donate");
        $("#modalfooter").text("");
    })
    
    $("#donatepackets").click(function(){
        $("#exampleModalCenterTitle").text("Donate Packets");
        $("#modelimage").attr("src", "ProductImages/ArrowColor.png");
        $("#modaltext").text("We accept Spells, Arrows, and Gas Globe Packets - 1 GS/ 2 Packets.");
        $("#submit").text("Donate");
        $("#modalfooter").text("");
    })
    
    $("#miscellaneous").click(function(){
        $("#exampleModalCenterTitle").text("Miscellaneous");
        $("#modelimage").attr("src", "ProductImages/WaterColor.png");
        $("#modaltext").text("We will always be in need of baby wipes, cases of water, and makeup sponges. \n\
            If donating these items, please save your receipts as these items \n\
            will always earn $1:5GS with receipt.");
        $("#submit").text("Donate");
        $("#modalfooter").text("");
    })
    $('#submit').click(function(){
          var btnName = $(this).text();
          if(btnName == 'Donate'){
       window.location.href = "http://ec2-35-167-48-165.us-west-2.compute.amazonaws.com/CSIS2470/quickstart/donate.html"; 
   }
    });
    $("#costuming").click(function(){
        $("#exampleModalCenterTitle").text("Costuming");
        $("#modelimage").attr("src", "ProductImages/CostumesColor.png");
        $("#modaltext").text("We will offer 100gs for every period shirt, dress, tabard, and tunic. \n\
            We ask for only donations of size large and up. \n\
            These items must be in genre and may be turned away.");
        $("#submit").text("Donate");
        $("#modalfooter").text("");
    })
    
    $("#masks").click(function(){
        $("#exampleModalCenterTitle").text("Masks");
        $("#modelimage").attr("src", "ProductImages/MaskColor.png");
        $("#modaltext").text("Looking for typical monster type masks- \n\
            Undead of all varieties, orcs, goblins, gnolls, trolls, animal masks, kobolds, etc. \n\
            If you have a receipt, we will match $1:5gs. No receipt will yield 25gs per mask.");
        $("#submit").text("Donate");
        $("#modalfooter").text("");
    })
    
    $("#time").click(function(){
        $("#exampleModalCenterTitle").text("Time");
        $("#modelimage").attr("src", "ProductImages/TimeColor.png");
        $("#modaltext").text("Let us know if you have ideas on how to help us! \n\
            Either helping our game grow or making cool props!");
        $("#submit").text("Donate");
        $("#modalfooter").text("");
    })
});