$("#leftTopTriangle").fadeOut(0);
$("#leftBottomTriangle").fadeOut(0);
$("#rightTopTriangle").fadeOut(0);
$("#rightBottomTriangle").fadeOut(0);
$("#dotaLogo").fadeOut(0);
$("#animeLogo").fadeOut(0);
$("#gamabunta").fadeOut(0);
$("#spotifyLogo").fadeOut(0);
$("#loadingScreen1").fadeOut(0);
$("#loadingScreen2").fadeOut(0);
$("#title").fadeOut(0);
$("#firstBlock").hide(0);
$("#secondBlock").hide(0);
$("#thirdBlock").hide(0);
$("#titleAnime").fadeOut(0);
$("#firstBlockAnime").hide(0);
$("#secondBlockAnime").hide(0);
$("#thirdBlockAnime").hide(0);
$("#nextPageDota").hide(0);
$("#nextPageAnime").hide(0);
$("#emptyWhiteBlock").hide(0);
$("#mapNavigation").hide(0);
$("#backButton").hide(0);
$("#backButton2").hide(0);

$("#startButton").animate({
	"left":"35%",
},1200);
$("#leftTopTriangle").fadeIn(1800);
$("#leftBottomTriangle").fadeIn(1800);
$("#rightTopTriangle").fadeIn(1800);
$("#rightBottomTriangle").fadeIn(1800);
$("#dotaLogo").fadeIn(1800);
$('#dotaLogo').animate(
    { deg: 690 },
    {
      duration: 1200,
      step: function(now) {
        $(this).css({ transform: 'rotate(' + now + 'deg)' });
      },
      queue: false,
    }
  );
$("#animeLogo").fadeIn(1800);
$('#animeLogo').animate(
    { deg: 750 },
    {
      duration: 1200,
      step: function(now) {
        $(this).css({ transform: 'rotate(' + now + 'deg)' });
      },
      queue: false,
    }
  );
$("#gamabunta").fadeIn(1800);
$('#gamabunta').animate(
    { deg: 750 },
    {
      duration: 1200,
      step: function(now) {
        $(this).css({ transform: 'rotate(' + now + 'deg)' });
      },
      queue: false,
    }
  );
$("#spotifyLogo").fadeIn(1800);
$('#spotifyLogo').animate(
    { deg: 720 },
    {
      duration: 1200,
      step: function(now) {
        $(this).css({ transform: 'rotate(' + now + 'deg)' });
      },
      queue: false,
    }
  );

function checkConfidance(){
	swal({
    title: "Ви впевнені?	",
    text: "Якщо один раз побачете, то більше не зможете забути це!",
    icon: "warning",
    buttons: true,
    dangerMode: true,
   })
   .then((isConfidence) => {
     if (isConfidence) {
       swal("Вау! А ви ризиковий користувач! Щасти!!", {
         icon: "success",
       })
      .then(()=>{
			$("#loadingScreen1").delay(500).fadeIn(1000).delay(1500).fadeOut(1000).hide(0);
			setTimeout(function(){dotaPageAnimations();},4500);
      });
      $("#leftTopTriangle").hide(1000);
		$("#leftBottomTriangle").hide(1000);
		$("#rightTopTriangle").hide(1000);
		$("#rightBottomTriangle").hide(1000);
		$("#dotaLogo").hide(1000);
		$("#animeLogo").hide(1000);
		$("#gamabunta").hide(1000);
		$("#spotifyLogo").hide(1000);
		$("#startButton").fadeOut(1000).hide(0);

     } else {
        swal("Дякую, що турбуєтеся про своє самопочуття");
     }
   });
};

function dotaPageAnimations(){
  $("#secondBlock").show(0);
  $("#thirdBlock").show(0);
  $("#secondBlock").css({
    "transform":"scale(0)",
  });
  $("#thirdBlock").css({
    "transform":"scale(0)",
  });
  $("#nextPageDota").show(0).css({
    "transform":"scale(0)",
  });
  $("#title").fadeIn(1000);
  $("#firstBlock").show(0);
  $("#firstBlock").animate({
    "margin-left":"20%",
  },600);
  var counter = 0;
  $(window).scroll(function (event) {
    let a = "100%";
    let b = 0;
    let c = 0;
    if(($(window).width()<=1400) && ($(window).width()>1280)){
      a = "-60%";
    };
    if(($(window).width()<=1680) && ($(window).width()>1400)){
      b = 100;
    };
    if(($(window).width()<=2560) && ($(window).width()>1920)){
      b = 300;
      c = 200;
    };
    if(($(window).width()<=3840) && ($(window).width()>2560)){
      b = 1000;
      c = 300;
    };
    var scroll = $(window).scrollTop();
    console.log(scroll);
    if ((scroll >= 100) && (counter == 0)){
      $("#secondBlock").css({
        "transform":"scale(1)",
        "margin-left":a,
      });
      $("#secondBlock").animate({
        "margin-left":"20%",
      },600);
      counter ++;
    };
    if ((scroll >= 530 + b) && (counter == 1)){
      $("#thirdBlock").css({
        "transform":"scale(1)",
        "margin-left":"-60%",
      });
      $("#thirdBlock").animate({
        "margin-left":"20%",
      },600);
      counter ++;
    };
    if ((scroll >= 1064 + b + c) && (counter == 2)){
      $("#nextPageDota").css({
        "transform":"scale(1)",
      }).fadeOut(0).fadeIn(600);
      counter ++;
    };
  });
};

function clearDotaAnimations(){
  if ($("#backButton").css("display") == "block"){
    $("#backButton").fadeOut(1400);
    $("#backButton2").delay(5500).fadeIn(1500);
  };
  $("#emptyWhiteBlock").fadeIn(1500).fadeOut(0);
  $("#title").delay(1400).hide(0);
  $("#firstBlock").delay(1400).fadeOut(0);
  $("#thirdBlock").delay(1400).fadeOut(0);
  $("#secondBlock").delay(1400).fadeOut(0);
  $("#nextPageDota").delay(1300).hide(0);
  $("#firstBlockAnime").css({
    "margin-left":"-60%",
  });
  $("#loadingScreen2").delay(2000).fadeIn(1000).delay(1500).fadeOut(1000);
  setTimeout(function(){animePageAnimations();},5500);
};

function animePageAnimations(){
  $("#secondBlockAnime").show(0);
  $("#thirdBlockAnime").show(0);
  $("#secondBlockAnime").css({
    "transform":"scale(0)",
  });
  $("#thirdBlockAnime").css({
    "transform":"scale(0)",
  });
  $("#nextPageAnime").show(0).css({
    "transform":"scale(0)",
  });
  $("#titleAnime").fadeIn(1000);
  $("#firstBlockAnime").show(0);
  $("#firstBlockAnime").animate({
    "margin-left":"20%",
  },600);
  var counter = 0;
  $(window).scroll(function (event) {
    let a = "100%";
    let b = 0;
    let c = 0;
    if(($(window).width()<=1400) && ($(window).width()>1280)){
      a = "-60%";
    };
    if(($(window).width()<=1680) && ($(window).width()>1400)){
      b = 100;
    };
    if(($(window).width()<=2560) && ($(window).width()>1920)){
      b = 300;
      c = 200;
    };
    if(($(window).width()<=3840) && ($(window).width()>2560)){
      b = 1000;
      c = 300;
    };
    var scroll = $(window).scrollTop();
    console.log(scroll);
    if ((scroll >= 100) && (counter == 0)){
      $("#secondBlockAnime").css({
        "transform":"scale(1)",
        "margin-left":a,
      });
      $("#secondBlockAnime").animate({
        "margin-left":"20%",
      },600);
      counter ++;
    };
    if ((scroll >= 530 + b) && (counter == 1)){
      $("#thirdBlockAnime").css({
        "transform":"scale(1)",
        "margin-left":"-60%",
      });
      $("#thirdBlockAnime").animate({
        "margin-left":"20%",
      },600);
      counter ++;
    };
    if ((scroll >= 1064 + b + c) && (counter == 2)){
      $("#nextPageAnime").css({
        "transform":"scale(1)",
      }).fadeOut(0).fadeIn(600);
      counter ++;
    };
  });
};

function clearAnimeAnimations(){
  $("#backButton2").fadeOut(1400);
  $("#emptyWhiteBlock").fadeIn(1500).fadeOut(0);
  $("#titleAnime").delay(1400).hide(0);
  $("#firstBlockAnime").delay(1400).fadeOut(0);
  $("#thirdBlockAnime").delay(1400).fadeOut(0);
  $("#secondBlockAnime").delay(1400).fadeOut(0);
  $("#nextPageAnime").delay(1300).hide(0);
  setTimeout(function(){navigationPageAnimations();},2000);
};

function navigationPageAnimations(){
  $("#mapNavigation").fadeIn(1500);
  $("#backButton").hide(0);
  $("#backButton2").hide(0);
}

function dotaPageAnimationsBack(){
  $("#firstBlock").css({
    "margin-left":"-60%",
  });
  $("#mapNavigation").fadeOut(1500);
  $("#loadingScreen1").delay(1500).fadeIn(1500).fadeOut(1500);
  setTimeout(function(){dotaPageAnimations();},4500);
  $("#backButton").delay(4500).fadeIn(1500);
}

function animePageAnimationsBack(){
  $("#firstBlockAnime").css({
    "margin-left":"-60%",
  });
  $("#mapNavigation").fadeOut(1500);
  $("#loadingScreen2").delay(1500).fadeIn(1500).fadeOut(1500);
  setTimeout(function(){animePageAnimations();},4500);
  $("#backButton2").delay(4500).fadeIn(1500);
}

function backDotaToNav(){
  $("#backButton").fadeOut(1400);
  $("#emptyWhiteBlock").fadeIn(1500).fadeOut(0);
  $("#title").delay(1400).fadeOut(0);
  $("#firstBlock").delay(1400).fadeOut(0);
  $("#thirdBlock").delay(1400).fadeOut(0);
  $("#secondBlock").delay(1400).fadeOut(0);
  $("#nextPageDota").delay(1300).fadeOut(0);
  setTimeout(function(){navigationPageAnimations();},2000);
}

function backAnimeToNav(){
  $("#backButton2").fadeOut(1400);
  $("#emptyWhiteBlock").fadeIn(1500).fadeOut(0);
  $("#titleAnime").delay(1400).fadeOut(0);
  $("#firstBlockAnime").delay(1400).fadeOut(0);
  $("#thirdBlockAnime").delay(1400).fadeOut(0);
  $("#secondBlockAnime").delay(1400).fadeOut(0);
  $("#nextPageAnime").delay(1300).fadeOut(0);
  setTimeout(function(){navigationPageAnimations();},2000);
}
