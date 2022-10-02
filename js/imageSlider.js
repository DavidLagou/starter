var arrImage = ['1', '2', '3'];
var strThumbCode;

function setSlides(numCurrImage) {
    document.getElementById("mainImg").src = "img\\" + arrImage[numCurrImage] + '.png';
    var currPos= numCurrImage;
    console.log("This is the current position -> "+currPos);

}
