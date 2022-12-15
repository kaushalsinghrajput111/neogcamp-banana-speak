let btnTranslate=document.querySelector("#btn-translate");
let input=document.getElementsByTagName("textarea")[0];
let output=document.getElementsByClassName("output")[0]
function clickHandler(){
    output.innerText = input.value; 
}
btnTranslate.addEventListener("click",clickHandler)
