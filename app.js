var btnTranslate =document.querySelector("#btn-translate")
var txtInput =document.querySelector("#txt-input")
var outputDiv= document.querySelector("#output")


var serverURL =("https://api.funtranslations.com/translate/minion.json")



function getTranslationURL(text){
    return serverURL +"?"+"text="+text
}


function errorHandler(text){
    return serverURL("erorr occured" ,error);
}


function clickHander() {
    var inputText=txtInput.value;///taking input

    //calling server function for procssing
    fetch(getTranslationURL(inputText))
        .then(response => response.json())
         .then(json =>{
          var translatedText = json.contents.translated;
          outputDiv.innerText=translatedText;
         })

        .catch(errorHandler)  
             
};                

////******click event */
btnTranslate.addEventListener ("click" ,  clickHander)
