var btnTranslate =document.querySelector("#btn-translate")
var txtInput =document.querySelector("#txt-input")


console.log(txtInput)

function clickHander(){
    console.log("clicked")
    //console.log("input", txtInput.value)
};

////******click event */
btnTranslate.addEventListener ("click" ,  clickHander)
