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
      yesButton.textContent="chị yêuuu, ấn zô đây nha";
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

    // Lấy vị trí và kích thước của ảnh
    const catRect = catImg.getBoundingClientRect();

    // Các vị trí tương ứng với 4 góc màn hình
    const corners = [
      { x: 0, y: 0 }, // Góc trên bên trái
      { x: maxX, y: 0 }, // Góc trên bên phải
      { x: 0, y: maxY }, // Góc dưới bên trái
      { x: maxX, y: maxY } // Góc dưới bên phải
    ];

    let randomCorner, randomX, randomY;
    let isOverlapping = true;

    // Chọn vị trí ngẫu nhiên trong 4 góc cho đến khi không trùng với khu vực ảnh
    while (isOverlapping) {
      // Random vị trí ngẫu nhiên trong 4 góc
      randomCorner = corners[Math.floor(Math.random() * corners.length)];
      randomX = randomCorner.x;
      randomY = randomCorner.y;

      // Kiểm tra xem vị trí nút có nằm trong vùng ảnh không
      if (
        !(randomX + yesButton.offsetWidth > catRect.left && randomX < catRect.right &&
          randomY + yesButton.offsetHeight > catRect.top && randomY < catRect.bottom)
      ) {
        isOverlapping = false;
      }
    }

    // Cập nhật vị trí của nút "Yes"
    yesButton.style.position = "absolute";
    yesButton.style.left = `${randomX}px`;
    yesButton.style.top = `${randomY}px`;

    resizeYesButton(); // Gọi hàm này nếu bạn có hàm resizeYesButton
  }
});

 let count=0;
const title_list=[
  "Tada tada, Chị yêu của em ỏ. Đây có lẽ là bức ảnh đầu tiên em với chị chụp với nhau. Thoáng qua đến giờ cũng ngót nghét chục năm rồi ấy ọ",
    "Chị yêu có nhớ ngày em tặng chị bó hoa đầu tiên là ngày bao nhiêu hôngg. Giờ nhìn lại em thấy bó hoa này vẫn nhỏ so với sự xinh đẹp của chị yêu",
    "Em chẳng biết từ khi nào nữa, có lẽ do thói quen, mỗi lần gặp chị em đều muốn chụp ảnh, lấp đầy bộ nhớ điện thoại và trong tim em :v hehee ",
    "Ngày sinh nhật của chị, em chẳng biết tặng chị món quà gì, bởi có lẽ chị đã đầy đủ với mọi thứ.",
    "Và cái khó nhất chắc do chị là một người mạnh mẽ, thông minh và quyết đoán",
    "Nhưng 1 cuốn film tua ngược thời gian, em nghĩ sẽ làm chị đốn tim với những khung hình của cả hai, ở một vị trí đặc biệt. Đây là lần đầu tiên và duy nhất em dám làm",
  "Không phải nó khó, mà là khi em nhìn lại và viết ra, thì em cũng không kìm lòng được, cảm xúc cứ tuôn trào, kỉ niệm cứ ùa về với những cung bậc cảm xúc khó tả",
  "Ngày sinh nhật của chị, em không chỉ muốn tặng chị một món quà, mà còn muốn mang lại cho chị những kỷ niệm quý giá.",
  "Là ngày mà chị em mình khẳng định lại tình chị em bất diệt, vượt qua mọi khoảng cách và thời gian..",

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

  
  


  const newFontSize = fontSize * 1;
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

