let songIndex = 0;
let audioElement = new Audio("songs/1.mp3");
let masterplay = document.getElementById("masterplay");
let myprogressBar = document.getElementById("myprogressbar");
let gif = document.getElementById("gif");
let songItem = Array.from(document.getElementsByClassName("songitem"));

let songs = [
  { songName: "Perfect A", filePath: "songs/1.mp3", coverPath: "covers/1.jpg" },
  { songName: "Perfect B", filePath: "songs/2.mp3", coverPath: "covers/2.jpg" },
  { songName: "Perfect C", filePath: "songs/3.mp3", coverPath: "covers/3.jpg" },
  { songName: "Perfect D", filePath: "songs/4.mp3", coverPath: "covers/4.jpg" },
  { songName: "Perfect E", filePath: "songs/5.mp3", coverPath: "covers/5.jpg" },
  { songName: "Perfect F", filePath: "songs/6.mp3", coverPath: "covers/6.jpg" },
  { songName: "Perfect G", filePath: "songs/7.mp3", coverPath: "covers/7.jpg" },
  { songName: "Perfect H", filePath: "songs/8.mp3", coverPath: "covers/8.jpg" },
  { songName: "Perfect I", filePath: "songs/9.mp3", coverPath: "covers/9.jpg" },
  { songName: "Perfect J", filePath: "songs/4.mp3", coverPath: "covers/1.jpg" },
  { songName: "Perfect K", filePath: "songs/3.mp3", coverPath: "covers/3.jpg" },
  { songName: "Perfect L", filePath: "songs/2.mp3", coverPath: "covers/3.jpg",},
];

songItem.forEach((element, i) => {
  console.log(element, i);
  element.getElementsByTagName("img")[0].src = songs[i].coverPath;
  element.getElementsByClassName("songname")[0].innerText = songs[i].songName;
});

//handle play/pause click
masterplay.addEventListener("click", () => {
  if (audioElement.paused || audioElement.currentTime <= 0) {
    audioElement.play();
    masterplay.classList.remove("fa-circle-play");
    masterplay.classList.add("fa-circle-pause");
    mastersonginfo.innerText=songs[songIndex].songName;
    gif.style.opacity = 1;
  } else {
    audioElement.pause();
    masterplay.classList.remove("fa-circle-pause");
    masterplay.classList.add("fa-circle-play");
    gif.style.opacity = 0;
  }
});
//Listen to events
audioElement.addEventListener("timeupdate", () => {
  //console.log('timeupdate')
  //update seekbar
  progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
  //console.log(progress)
  myprogressBar.value = progress;
});

myprogressBar.addEventListener("change", () => {
  audioElement.currentTime =
    (myprogressBar.value * audioElement.duration) / 100;
});

makeallPLays= ()=>{
    Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
        element.classList.remove("fa-circle-pause");
        element.classList.add("fa-circle-play");
    })
}

Array.from(document.getElementsByClassName("songitemplay")).forEach(
  (element) => {
    element.addEventListener("click", (e) => {
      makeallPLays();
      songIndex=parseInt(e.target.id);
      e.target.classList.remove("fa-circle-play");
      e.target.classList.add("fa-circle-pause");
      audioElement.src=`songs/${songIndex+1}.mp3`;
      mastersonginfo.innerText=songs[songIndex].songName;
      audioElement.currentTime=0;
      audioElement.play();
      gif.style.opacity = 1;
      masterplay.classList.remove("fa-circle-play");
      masterplay.classList.add("fa-circle-pause");
    });
  }
);

document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>=12){
        songIndex=0;
    }else{
        songIndex+=1;
    }
      audioElement.src=`songs/${songIndex+1}.mp3`;
      mastersonginfo.innerText=songs[songIndex].songName;
      audioElement.currentTime=0;
      audioElement.play();
      gif.style.opacity = 1;
      masterplay.classList.remove("fa-circle-play");
      masterplay.classList.add("fa-circle-pause");
})

document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=0){
        songIndex=0;
    }else{
        songIndex-=1;
    }
      audioElement.src=`songs/${songIndex+1}.mp3`;
      mastersonginfo.innerText=songs[songIndex].songName;
      audioElement.currentTime=0;
      audioElement.play();
      gif.style.opacity = 1;
      masterplay.classList.remove("fa-circle-play");
      masterplay.classList.add("fa-circle-pause");
})