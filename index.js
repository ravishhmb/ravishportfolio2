const btn = document.querySelector("#btn");
const header = document.querySelector(".header");
btn.addEventListener("click", ()=>{
    var htop = header.computedStyleMap().get('top').value;
    console.log(htop);
    if(htop == "-140"){
        header.style.top = "0px";
    }
    else{
        header.style.top = "-140px";
    }
});

const texts = ['Namaste,','Hello,','Welcome,'];
let count = 0;
let index = 0;
let currentText = '';
let letter = '';

(function type(){

    if(count === texts.length){
        count = 0;
    }
    currentText = texts[count];
    letter = currentText.slice(0, ++index);
    
    document.querySelector('.namaste').textContent = letter;
    if(letter.length === currentText.length){
        count++;
        index = 0;
    }
    setTimeout(type, 300);

}());
