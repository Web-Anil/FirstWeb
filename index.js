let imgIndex = 0;
var index = 0;
var imgNo = document.getElementsByClassName("SliderImg");
var pointNo = document.getElementsByClassName("point");
var imgCount = document.getElementsByClassName("imgCounter")[0];
var imgLink = document.getElementById("MainImageContainer");

slider(0);
function slider(imgIndex) {
  index = index + imgIndex;
  if (index > 0) {
    //prev
    index = 100 - imgNo.length * 100;
  }
  if (index < 100 - imgNo.length * 100) {
    //next
    index = 0;
  }
  // console.log(imgIndex);
  // console.log(index);
  var path1 = "translateX(";
  var path2 = "%)";
  var finalPath = path1 + index + path2;
  // console.log(finalPath);
  for (var j = 0; j < imgNo.length; j++) {
    imgNo[j].style.transform = finalPath;
  }
  Changer();
}

function Changer() {
  for (var i = 0; i < imgNo.length; i++) {
    pointNo[i].classList.remove("activatedPoint");
  }
  // ~~~~~~~get/Set~~~~~~~~~
  if (index == 0) {
    pointNo[0].classList.add("activatedPoint");
    imgCount.innerHTML = "1/" + imgNo.length;
    imgLink.setAttribute("href", "shorturl.at/adnD7");
  } else if (index == -100) {
    pointNo[1].classList.add("activatedPoint");
    imgCount.innerHTML = "2/" + imgNo.length;
    imgLink.setAttribute("href", "shorturl.at/bfxBD");
  } else if (index == -200) {
    pointNo[2].classList.add("activatedPoint");
    imgCount.innerHTML = "3/" + imgNo.length;
    imgLink.setAttribute("href", "shorturl.at/ALMSX");
  } else if (index == -300) {
    pointNo[3].classList.add("activatedPoint");
    imgCount.innerHTML = "4/" + imgNo.length;
    imgLink.setAttribute("href", "shorturl.at/lopt4");
  } else if (index == -400) {
    pointNo[4].classList.add("activatedPoint");
    imgCount.innerHTML = "5/" + imgNo.length;
    imgLink.setAttribute("href", "shorturl.at/dqxyP");
  } else if (index == -500) {
    pointNo[5].classList.add("activatedPoint");
    imgCount.innerHTML = "6/" + imgNo.length;
    imgLink.setAttribute("href", "shorturl.at/mYZ06");
  }
}
// console.log(index);
function points(n) {
  index = n;
  var path1 = "translateX(";
  var path2 = "%)";
  var finalPath = path1 + index + path2;

  // console.log(finalPath);
  for (var j = 0; j < imgNo.length; j++) {
    imgNo[j].style.transform = finalPath;
  }
  Changer();
}

function auto() {
  points(index);

  index = index - 100;
  if (index < 100 - imgNo.length * 100) {
    //next
    index = 0;
  }
}

intervalID2 = setInterval(auto, 4000);
var intervalID1;
document
  .getElementById("SliderContainer")
  .addEventListener("mouseout", function () {
    intervalID1 = setInterval(auto, 4000);
    clearTimeout(intervalID2);
    // setInterval(auto, 4000);
  });
document
  .getElementById("SliderContainer")
  .addEventListener("mouseover", function () {
    clearTimeout(intervalID1);
  });

// const y = window.getComputedStyle(first).transform;
// console.log(y);
