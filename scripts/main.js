var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/d2-logo.png') {
      myImage.setAttribute ('src','images/logo.png');
    } else {
      myImage.setAttribute ('src','images/d2-logo.png');
    }
}
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');
function setUserName() {
    var myName = prompt('Пожалуйста введите ваше имя.');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'DOTA 2 IS COOOL,' + myName;
}
if (!localStorage.getItem('name')) {
    setUserName();
} else {
    var storedName = localStorage.getItem('name');
    myHeading.textContent = 'DOTA 2 IS COOOL,' + storedName;
}
myButton.onclick = function(){
    setUserName();
}