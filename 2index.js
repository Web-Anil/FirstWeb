// alert("working");

// document.addEventListener("onload", function () {
//   document.getElementById("leftMenu").style.opacity = "0";
// });
// document.addEventListener("hover", function () {
//   document.getElementById("leftMenu").slideUp();
// });

// document.querySelector(".left_li").addEventListener("hover", function () {
//   this.slideUp();
// });
for (i = 0; i <= 13; i++) {
  document
    .getElementsByClassName("Allvideo")
    [i].addEventListener("mouseover", function () {
      this.style.transform = "scale(1.5)";
    });
}
for (j = 0; j <= 13; j++) {
  document
    .getElementsByClassName("Allvideo")
    [j].addEventListener("mouseout", function () {
      this.style.transform = "scale(1)";
    });
}
// document.getElementById("v1").addEventListener("mouseout", function () {
//   document.getElementById("v1").style.transform = "scale(1)";
// });

// $("video").on("mouseover", function () {
//   $("video").css("transform", "scale(1.5)");
// });
// ~~~~~~~~~~~~~~~~~
// document.getElementById("SliderImage").addEventListener("click", function () {
//   const t = window.getComputedStyle(SliderImage).backgroundImage;
//   const p = t.slice(72, -12);
//   console.log(p);
//   if (p == "http://127.0.0.1:5500/posters/slPOS1.png") {
//     document
//       .getElementById("SliderImage")
//       .setAttribute("heref", "https://www.google.com");
//   } else if (p == "http://127.0.0.1:5500/posters/slPOS1.png") {
//     document
//       .getElementById("SliderImage")
//       .setAttribute("heref", "https://www.youtube.com");
//   } else if (p == "http://127.0.0.1:5500/posters/slPOS1.png") {
//     document
//       .getElementById("SliderImage")
//       .setAttribute("heref", "https://www.youtube.com");
//   } else if (p == "http://127.0.0.1:5500/posters/slPOS1.png") {
//     document
//       .getElementById("SliderImage")
//       .setAttribute("heref", "https://www.youtube.com");
//   } else if (p == "http://127.0.0.1:5500/posters/slPOS1.png") {
//     document
//       .getElementById("SliderImage")
//       .setAttribute("heref", "https://www.youtube.com");
//   } else {
//     console.log("not working");
//   }
// });

// let a= document.getElementById('SliderImage');
// a.style.animation=

// const t = window.getComputedStyle(SliderImage);
// const p = t.backgroundImage;
// const p = t.slice(4, -1);

// console.log(t);
// console.log(p);

// let u = document.getElementById("SliderImage");
// // console.log(u);
// let p = u.style.backgroundImage;
// console.log(p);

// document.getElementById();

function FirstSLIDER() {
  var l = 1;
  var pathStart = "posters/slPOS";
  var pathEnd = ".png";
  function AUTOplay() {
    /**********
     changing image src
     **********/
    if (l > 7) {
      l = 1;
    }
    var fullpath = pathStart + l + pathEnd;
    document.getElementById("SlideIMG").setAttribute("src", fullpath);

    /**********
    dot Change function start
    **********/
    dotchange(fullpath);
    function dotchange(fullpath) {
      // console.log(fullpath);
      for (var i = 0; i <= 6; i++) {
        document.getElementsByClassName("dot")[i].classList.remove("activeDot");
      }

      if (fullpath == "posters/slPOS1.png") {
        document.getElementsByClassName("dot1")[0].classList.add("activeDot");
      } else if (fullpath == "posters/slPOS2.png") {
        document.getElementsByClassName("dot2")[0].classList.add("activeDot");
      } else if (fullpath == "posters/slPOS3.png") {
        document.getElementsByClassName("dot3")[0].classList.add("activeDot");
      } else if (fullpath == "posters/slPOS4.png") {
        document.getElementsByClassName("dot4")[0].classList.add("activeDot");
      } else if (fullpath == "posters/slPOS5.png") {
        document.getElementsByClassName("dot5")[0].classList.add("activeDot");
      } else if (fullpath == "posters/slPOS6.png") {
        document.getElementsByClassName("dot6")[0].classList.add("activeDot");
      } else if (fullpath == "posters/slPOS7.png") {
        document.getElementsByClassName("dot7")[0].classList.add("activeDot");
      }
    }
    /**********
    dot Change function end
    **********/

    /**********
   changing link
   **********/
    // console.log(fullpath);
    if (fullpath == "posters/slPOS1.png") {
      document
        .getElementById("SliderImage2nd")
        .setAttribute(
          "href",
          "https://www.google.com/search?q=doremon&ei=BcOaY5jLI6uWseMP9fKM6A4&oq=dorem&gs_lcp=Cgxnd3Mtd2l6LXNlcnAQAxgAMgUIABCABDIKCAAQgAQQsQMQCjINCC4Q1AIQsQMQgAQQCjIICC4Q1AIQgAQyBQguEIAEMgoIABCABBCxAxAKMgoIABCABBCxAxAKMg0ILhCABBCxAxDUAhAKMgUIABCABDIKCAAQgAQQsQMQCjoKCAAQRxDWBBCwAzoHCAAQsAMQQzoECAAQQzoRCC4QgAQQsQMQxwEQ0QMQ1AI6CwgAEIAEELEDEIMBOgUIABCRAjoICAAQgAQQsQM6CwguEIAEELEDENQCOggILhCxAxCABDoICAAQsQMQgwE6BQgAELEDSgQIQRgASgQIRhgAULUSWJIXYKoiaANwAXgBgAGZA4gBqgqSAQkwLjEuMy4wLjGYAQCgAQHIAQrAAQE&sclient=gws-wiz-serp"
        );
    } else if (fullpath == "posters/slPOS2.png") {
      document
        .getElementById("SliderImage2nd")
        .setAttribute(
          "href",
          "https://www.google.com/search?q=comedy+nights+with+kapil&ei=BcmaY6CoCpS12roPgOaK4AQ&gs_ssp=eJzj4tLP1TeozDNOL4g3YPSSSM7PTU2pVMjLTM8oKVYozyzJUMhOLMjMAQDzQg0u&oq=comedy+night&gs_lcp=Cgxnd3Mtd2l6LXNlcnAQAxgAMgUILhCABDIFCC4QgAQyBQguEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgsILhCABBCxAxDUAjIFCAAQgAQyBQgAEIAEMgUIABCABDoICAAQsQMQkQI6BQgAEJECOgsIABCABBCxAxCDAToRCC4QgAQQsQMQgwEQxwEQ0QM6CAgAEIAEELEDOgoIABCxAxCDARBDOggIABCxAxCDAToPCAAQgAQQsQMQChBGEPkBOgcIABCABBAKOg0IABCABBCxAxCDARAKOgoIABCABBCxAxAKOg0IABCxAxCRAhBGEPkBOg0ILhCABBCxAxCxAxAKSgQIQRgASgQIRhgAUABY8yVgxjBoAnABeAGAAYAGiAGxKJIBCzItMS41LjQuMS4xmAEAoAEBwAEB&sclient=gws-wiz-serp"
        );
    } else if (fullpath == "posters/slPOS3.png") {
      document
        .getElementById("SliderImage2nd")
        .setAttribute(
          "href",
          "https://www.google.com/search?q=taarak+mehta+ka+ulta+chashma&ei=hsmaY6PqAbze2roPx-6G2AE&gs_ssp=eJzj4tLP1TcwtSjIMy0wYPSSKUlMLErMVshNzShJVMhOVCjNAdLJGYnFGbmJABe0DfE&oq=tarak+me&gs_lcp=Cgxnd3Mtd2l6LXNlcnAQAxgAMgYILhAKEEMyCggAEIAEELEDEAoyBggAEAoQQzIKCAAQgAQQsQMQCjIGCAAQChBDMgYIABAKEEMyCggAEIAEELEDEAoyCgguELEDEIAEEAoyBggAEAoQQzIFCAAQgAQ6BAguEEM6BwguENQCEEM6CwgAEIAEELEDEIMBOhEILhCABBCxAxCDARDHARDRAzoFCC4QgAQ6CAgAEIAEELEDOgQIABBDOgoILhDHARCvARBDOgcIABCxAxBDOgcILhCxAxBDOgwILhCxAxDUAhAKEEM6CggAELEDEIMBEEM6CwguEIAEEMcBEK8BOgoILhDUAhCxAxBDOgoILhCxAxDUAhBDOgcIABCABBAKOggILhCABBDUAjoKCC4QgAQQsQMQCjoKCC4Q1AIQgAQQCkoECEEYAEoECEYYAFAAWPUsYOE0aANwAXgAgAGBA4gBjxWSAQUyLTYuM5gBAKABAcABAQ&sclient=gws-wiz-serp"
        );
    } else if (fullpath == "posters/slPOS4.png") {
      document
        .getElementById("SliderImage2nd")
        .setAttribute(
          "href",
          "https://www.google.com/search?q=shinchan&ei=sMmaY8rJMLmB2roP7YGz2AY&ved=0ahUKEwjK4beAivv7AhW5gFYBHe3ADGsQ4dUDCA8&uact=5&oq=shinchan&gs_lcp=Cgxnd3Mtd2l6LXNlcnAQAzIHCAAQsQMQQzIICAAQsQMQkQIyBQgAEJECMgQIABBDMgUIABCRAjIHCC4QsQMQQzIECAAQQzIECAAQQzIECAAQQzIICAAQgAQQsQM6CggAEEcQ1gQQsAM6BwgAELADEEM6DgguEMgDELADEAoQQxgBOgwILhDIAxCwAxBDGAE6BAguEEM6CgguELEDEIMBEEM6BwguENQCEEM6CAguENQCEJECOggILhCxAxCRAjoICC4QgAQQsQM6CgguELEDENQCEEM6CggAELEDEEMQkQI6BwgAEEMQkQI6BQgAEIAESgQIQRgASgQIRhgBUNQVWPNBYL5DaANwAXgCgAGXA4gB-RySAQcyLTkuMy4xmAEAoAEByAESwAEB2gEGCAEQARgI&sclient=gws-wiz-serp"
        );
    } else if (fullpath == "posters/slPOS5.png") {
      document
        .getElementById("SliderImage2nd")
        .setAttribute(
          "href",
          "https://www.google.com/search?q=the+kapil+sharma+show+season+2&ei=zsmaY6anEp3m2roP18WAeA&ved=0ahUKEwimxsCOivv7AhUds1YBHdciAA8Q4dUDCA8&uact=5&oq=the+kapil+sharma+show+season+2&gs_lcp=Cgxnd3Mtd2l6LXNlcnAQAzIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCC4QgAQyBQgAEIAEMgUIABCABDIFCAAQgAQ6CggAEEcQ1gQQsAM6BwgAELADEEM6DQgAEOQCENYEELADGAE6DwguENQCEMgDELADEEMYAjoECAAQQzoECC4QQzoHCC4Q1AIQQzoKCAAQsQMQgwEQQzoRCC4QgAQQsQMQgwEQxwEQ0QM6CwgAEIAEELEDEIMBOggIABCABBCxAzoICC4QgAQQsQM6DgguEIAEELEDEIMBENQCOgsILhCABBCxAxCDAToICC4QsQMQkQI6CwguEIAEELEDENQCOggIABCxAxCDAToLCC4QgAQQxwEQrwE6BAgAEANKBAhBGABKBAhGGAFQ0A1Y40hghVNoA3ABeACAAfMCiAGSGJIBBTItNy40mAEAoAEByAETwAEB2gEGCAEQARgJ2gEGCAIQARgI&sclient=gws-wiz-serp"
        );
    } else if (fullpath == "posters/slPOS6.png") {
      document
        .getElementById("SliderImage2nd")
        .setAttribute(
          "href",
          "https://www.google.com/search?q=new+doraemon&ei=9MmaY_O2MPjf2roPqMO0-AQ&gs_ssp=eJzj4tZP1zc0MqgwK6jKMWD04slLLVdIyS9KTM3NzwMAb6gIuA&oq=new+do&gs_lcp=Cgxnd3Mtd2l6LXNlcnAQAxgAMgUILhCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUILhCABDIFCAAQgAQyBQgAEIAEMgcIABCABBAKOgoIABBHENYEELADOgsIABCxAxCDARCRAjoFCAAQkQI6CwgAEIAEELEDEIMBOggILhCxAxCDAToICAAQgAQQsQM6BAguEEM6BAgAEEM6BwguELEDEEM6CggAELEDEIMBEEM6BwgAELEDEEM6BwguENQCEEM6DgguEIAEELEDEMcBEK8BSgQIQRgASgQIRhgAUJMMWK8aYNMqaARwAXgAgAGkAogBtgySAQUwLjEuNZgBAKABAcgBCMABAQ&sclient=gws-wiz-serp"
        );
    } else if (fullpath == "posters/slPOS7.png") {
      document
        .getElementById("SliderImage2nd")
        .setAttribute(
          "href",
          "https://www.google.com/search?q=the+kapil+sharma+show+season+3&ei=IcqaY53vPO6k2roPxfKDyAk&oq=the+kapil+sharma+show+&gs_lcp=Cgxnd3Mtd2l6LXNlcnAQAxgBMggIABCABBCxAzIFCAAQgAQyCAgAEIAEELEDMgUIABCABDIFCAAQgAQyBQgAEIAEMggIABCABBCxAzIFCAAQgAQyBQgAEIAEMgQIABADOgoIABBHENYEELADOgcIABCwAxBDOg0IABDkAhDWBBCwAxgBOgwILhDIAxCwAxBDGAI6DwguENQCEMgDELADEEMYAjoFCAAQkQI6CAguENQCEJECOgsIABCABBCxAxCDAToRCC4QgAQQsQMQgwEQxwEQ0QM6BQguEIAEOgcILhDUAhBDOgQILhBDOgcILhCxAxBDOgUILhCRAjoICC4QsQMQkQI6CgguELEDEIMBEEM6BAgAEEM6CgguELEDENQCEEM6CwguEIAEELEDENQCOgsILhCABBCxAxCDAToLCC4QgAQQxwEQrwFKBAhBGABKBAhGGAFQgQlYwSNgpzFoA3ABeACAAeUCiAH4EZIBBTItNi4ymAEAoAEByAETwAEB2gEGCAEQARgJ2gEGCAIQARgI&sclient=gws-wiz-serp"
        );
    }
    l++;
  }

  setInterval(AUTOplay, 3000);
}

FirstSLIDER();

// ~~~~~~~main Slider~~~~~~~~~~~

let IMG_INDEX = 1;
slider(IMG_INDEX);

function plusSlide(INDEX_from_HTML) {
  // IMG_INDEX = IMG_INDEX + INDEX_from_HTML;
  // console.log("inside plus IMG_index = ", IMG_INDEX);
  console.log("running");
  slider((IMG_INDEX += INDEX_from_HTML));
  // INDEX_from_HTML++;
}
// setInterval(plusSlide, 3500);

function dotPlusSlide(INDEX_from_HTML) {
  slider((IMG_INDEX = INDEX_from_HTML));
  // setInterval(dotPlusSlide,2000)
}

function slider(INDEX) {
  var MySlider_count = document.getElementsByClassName("MySlide_2");
  var dot_count = document.getElementsByClassName("Mdot");

  if (INDEX > MySlider_count.length) {
    IMG_INDEX = 1;
  }
  if (INDEX < 1) {
    IMG_INDEX = MySlider_count.length;
  }
  for (var i = 0; i < MySlider_count.length; i++) {
    MySlider_count[i].style.display = "none";
  }

  for (var i = 0; i < dot_count.length; i++) {
    dot_count[i].classList.remove("Mactive");
  }

  console.log("inside Slider IMG_Index = ", IMG_INDEX);

  MySlider_count[IMG_INDEX - 1].style.display = "block";
  dot_count[IMG_INDEX - 1].classList.add("Mactive");
}

// console.log(" outside IMG_index = ", IMG_INDEX);

// document
//   .getElementById("MainSliderContainer")
//   .addEventListener("mouseout", waka());
// function waka() {
//   function slider2() {
//     slider((IMG_INDEX += 1));
//   }
//   setInterval(slider2, 3000);
// }

// function slider2() {
//   slider((IMG_INDEX += 1));
// }

// // wakawaka();
// setInterval(slider2, 3000);
