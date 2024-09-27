"use strict";

const titleElement = document.querySelector(".title");
const buttonsContainer = document.querySelector(".buttons");
const yesButton = document.querySelector(".btn--yes");
const noButton = document.querySelector(".btn--no");
const catImg = document.querySelector(".cat-img");

const MAX_IMAGES = 9;

let play = true;
let noCount = 0;



noButton.addEventListener("click", function () {
  if (play) {
    noCount++;
    const imageIndex = Math.min(noCount, MAX_IMAGES);
    changetitle()
    changeImage(imageIndex);
    resizeYesButton();
    
    if (noCount == 9) {
      play = false;
      document.querySelector(".btn.btn--no").classList.add("hidden");
      yesButton.textContent="chị ơi, đây là món quà của em, chị ấn zô đây nhá";
    }
  }
});
yesButton.addEventListener("click", function () {
  if(play){
    noCount++;
    const imageIndex = Math.min(noCount, MAX_IMAGES);
    changetitle()
    changeImage(imageIndex);
  }
  if (noCount == 9) {
    play = false;
    document.querySelector(".btn.btn--no").classList.add("hidden");
    handleYesClick()
} 
});
yesButton.addEventListener("mousemove", function () {
  if (play) {
    const maxX = window.innerWidth - yesButton.offsetWidth;
    const maxY = window.innerHeight - yesButton.offsetHeight;

    // Tạo vị trí ngẫu nhiên trong phạm vi của cửa sổ
    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    // Cập nhật vị trí của nút "No"
    yesButton.style.position = "absolute";
    yesButton.style.left = `${randomX}px`;
    yesButton.style.top = `${randomY}px`;
    resizeYesButton()
  }
});
 let count=0;
const title_list=[
  "Tada tada, Tình yêu của em ỏ. Đây có lẽ là bức ảnh đầu tiên em với chị chụp với nhau. Thoáng qua đến giờ cũng ngót nghét chục năm rồi ấy ọ",
    "Tình yêu có nhớ ngày em tặng chị bó hoa đầu tiên là ngày bao nhiêu hôngg. Giờ nhìn lại em thấy bó hoa này vẫn nhỏ so với sự xinh đẹp của tình yêu",
    "Em chẳng biết từ khi nào nữa, có lẽ do thói quen, mỗi lần gặp chị em đều muốn chụp ảnh, lấp đầy bộ nhớ điện thoại và trong tim em :v hehee ",
    "Ngày sinh nhật của chị, em chẳng biết tặng chị món quà gì, bởi có lẽ chị đã đầy đủ với mọi thứ.",
    "Nhưng có lẽ 1 cuốn film tua ngược thời gian, với những khung hình cả hai, em luôn đặt ở một vị trí đặc biệt này sẽ là lần đầu tiên và duy nhất em dám làm",
    "Không phải nó khó, mà là khi em nhìn lại và viết ra, thì em cũng không kìm lòng được, cảm xúc cứ tuôn trào, kỉ niệm cứ ùa về với những cung bậc cảm xúc khó tả",
  "Ngày sinh nhật của chị, em không chỉ muốn tặng chị một món quà, mà còn muốn mang lại cho chị những kỷ niệm quý giá.",
  "Hai chị em mình trải qua không biết bao nhiêu khoảng khắc cùng nhau, n",
  "Ngày hôm nay không chỉ là sinh nhật của chị, mà là ngày chúng ta khẳng định lại tình chị em bất diệt, vượt qua mọi khoảng cách và thời gian..",

]
function changetitle() {
  titleElement.innerHTML=title_list[count];
  count = (count + 1) % title_list.length;
}
function handleYesClick() {
  titleElement.innerHTML = " Em sẽ luôn ở đây, bên cạnh chị, ủng hộ và yêu thương chị, như cách chị đã luôn bên em. Chúc mừng sinh nhật chị iu- Tình yêu to bự của em";
  buttonsContainer.classList.add("hidden");
  changeVideo("yes");
}

function resizeYesButton() {
  const computedStyle = window.getComputedStyle(yesButton);
  const fontSize = parseFloat(computedStyle.getPropertyValue("font-size"));

  
  


  const newFontSize = fontSize * 1.2;
  if(newFontSize>50){
    yesButton.style.fontSize = "15px";
    return;
  }

  yesButton.style.fontSize = `${newFontSize}px`;
}



function changeImage(image) {
  catImg.src = `img/cat-${image}.jpg`;
}
function changeVideo(image) {

  const video = document.createElement('video');
    
    
    video.src = 'img/cat-yes.mp4'; 
    video.width = 640; 
    video.height = 360; 
    video.autoplay = true;
    video.controls = true; 
    
    
    const container = document.getElementById('video-container');
    catImg.classList.add("hidden");
    container.appendChild(video);
}

