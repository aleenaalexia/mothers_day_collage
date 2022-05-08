const images = ["images/IMG_0079_Original_u1LwWZ2jv (1).jpg", "images/IMG_0101_Original_cuIOd_j5zt.jpg", "images/IMG_0391_Original_LYNrk5RML.jpg",
"images/IMG_0787_Original_vIeiK7rAO3.jpg", "images/IMG_0956_Original_qRxUbzRg-K.jpg", "images/IMG_0956_Original_qRxUbzRg-K.jpg", 
"images/IMG_1351_Original_eMx4LU1UA.jpg", "images/IMG_1502_Original_SjE3aEaIC.PNG", "images/IMG_2107_Original_x3zH9flg7.jpg", 
"images/IMG_2170_Original_WGL0a5FyV.HEIC", "images/IMG_3250_CEsZe2PSX.JPG", "images/IMG_3817_Original_0YNdnukZD.jpg",
"images/IMG_8484_Original_heQcmvUmn.jpg", "images/IMG_8543_Original_Q-q6El3NK.jpg"]

let i = 0;


function placeImage(x, y) {

    const nextImage = images[i];

    const img = document.createElement("img");
    img.setAttribute("src", nextImage);
    img.style.left = x + "px";
    img.style.top = y + "px";
    img.style.transform = "translate(-50%, -50%) scale(0.5)rotate(" +(Math.random() * 20 -10) + "deg)";

    document.body.appendChild(img);
    i = i+1;

    if(i>= images.length) {
        i=0;
    }

    
}

document.addEventListener("click", function(event) {
    event.preventDefault()
    placeImage(event.pageX, event.pageY);

})

document.addEventListener("touchend", function(event) {
    event.preventDefault();
    placeImage(event.pageX, event.pageY);
})