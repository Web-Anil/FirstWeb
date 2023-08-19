/*get our Element */
let popUp_container = document.getElementById("popUp-video");
let video = document.getElementById("pop-video");
let popUp_Control_container = document.getElementById(
  "popUp-Controls-Container"
);
let seekBar_container = document.getElementById("SeekBar-Container");
let seekBar = document.getElementById("SeekBar");
let btn_play_pause = document.getElementById("play-pause");
let ALLContentVideo = document.querySelectorAll(".same-video-box video");
let videoBottomContent = document.getElementsByClassName("bottom-video-text");
let videoTitle = document.getElementById("video-title");
let vidTimer = document.getElementById("video-timer");
let fullScreenVideo_btn = document.querySelector("#fullyVideoScreen");

/*build out function */
function togglePlay_Pause() {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
}

function update_buttons() {
  if (this.paused) {
    btn_play_pause.textContent = "▶️";
  } else {
    btn_play_pause.textContent = "⏸️";
  }
}
function skip(n) {
  let current = video.currentTime;
  video.currentTime = current + n;
}

function seekBar_controler() {
  let percentage = (video.currentTime / video.duration) * 100;
  seekBar.style.width = `${percentage}%`;
}
function seeking(e) {
  const newTime = (e.offsetX / seekBar_container.offsetWidth) * video.duration;
  video.currentTime = newTime;
  // console.log(e);
}

// ~~~~~~~changing popup video Source~~~~~~~~~~~~
// document.querySelectorAll(".same-video-box video").forEach((vidSource) => {
//   vidSource.addEventListener("click", function () {
//     let src = vidSource.getAttribute("src");
//     video.setAttribute("src", src);
//     video.play();
//   });
// });
// document.querySelectorAll(".bottom-video-text").forEach((vidTitle) => {
//   var i = 0;
//   ALLContentVideo[i].addEventListener("click", function () {
//     // let title = vidTitle.innerHTML;
//     videoTitle.innerHTML = vidTitle.textContent;
//     console.log("rinning");
//   });
//   i++;
// });

document
  .querySelectorAll(".same-video-box video")
  .forEach(function (DivCont, i) {
    ALLContentVideo[i].addEventListener("click", function () {
      let src = DivCont.getAttribute("src");
      video.setAttribute("src", src);
      let title = videoBottomContent[i].textContent;
      videoTitle.textContent = title;
      video.play();
    });
    videoBottomContent[i].addEventListener("click", function () {
      let src = DivCont.getAttribute("src");
      video.setAttribute("src", src);
      let title = videoBottomContent[i].textContent;
      videoTitle.textContent = title;
      video.play();
    });
  });

function videoTimer() {
  // let updaingTime = (video.duration - video.currentTime) / 60;
  // let updaingTime = (video.duration - video.currentTime) / 60;
  vidTimer.textContent = `${(video.currentTime / 60).toFixed(2)} / ${(
    video.duration / 60
  ).toFixed(2)}`;
}
function fullScreenVideo() {
  video.requestFullscreen();
  // video.removeAttribute("controls");
}
/*hook up the Event listener */

video.addEventListener("click", togglePlay_Pause);
video.addEventListener("play", update_buttons);
video.addEventListener("pause", update_buttons);
video.addEventListener("timeupdate", seekBar_controler);
btn_play_pause.addEventListener("click", togglePlay_Pause);
seekBar_container.addEventListener("click", seeking);

video.addEventListener("timeupdate", videoTimer);
fullScreenVideo_btn.addEventListener("click", fullScreenVideo);
// video.remove;
