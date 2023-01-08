var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-Input");
var outputdiv = document.querySelector("#output");
var serverUrl = "https://api.funtranslations.com/translate/dothraki.json"

function getTranslationUrl(text){
    return serverUrl + "?" + "text=" + text 
}
function errorHandler(error){
    console.log("error occured", error);
    alert("something wrong with server! try again after some time")
}


function clickHandler() {
var inputText = txtInput.value;

    fetch(getTranslationUrl(inputText))
    .then(response => response.json())
    .then(json => {
        var translatedText = json.contents.translated;
        outputdiv.innerText = translatedText;
})
.catch(errorHandler)
}; 

btnTranslate.addEventListener("click", clickHandler) 