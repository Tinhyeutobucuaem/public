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
    "Anhh saii rồi , anhh đáng trách ạ",
    "Bé đừng giận anhh nữa nhoo",
    "Anhhh iu bé nhắm nhunnn đóoooo",
  "hahaa",
  "chị yêu ơi ấn vào đây đi ạ",
  "câu 9",

]
function changetitle() {
  titleElement.innerHTML=title_list[count];
  count = (count + 1) % title_list.length;
}
function handleYesClick() {
  titleElement.innerHTML = "Anh iu bé ,Anh hứa hongg làm bé buồn nữa đouuu :3";
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

