
function Nstlfunction () {
    let   m = ((document.getElementById("Datainput1")||{}).value)||"";
    let   t = ((document.getElementById("Datainput2")||{}).value)||"";
if (document.getElementById("Datainput1").value.length == 0 && document.getElementById("Datainput2").value.length == 0  ) {
console.log("Error");
setTimeout(() => {document.getElementById("Datainput1").style.borderColor = "Red"},500)
setTimeout(() => {document.getElementById("Datainput2").style.borderColor = "Red"},500)
setTimeout(() => {document.getElementById("Datainput1").style.borderColor = "White"},3000)
setTimeout(() => {document.getElementById("Datainput2").style.borderColor = "White"},3000)

  
}
else if (document.getElementById("Datainput1").value.length == 0  ) {
console.log("Error");
setTimeout(() => {document.getElementById("Datainput1").style.borderColor = "Red"},500)
setTimeout(() => {document.getElementById("Datainput1").style.borderColor = "White"},3000)    
}
else if (document.getElementById("Datainput2").value.length == 0  ) {
console.log("Error");
setTimeout(() => {document.getElementById("Datainput2").style.borderColor = "Red"},500)
setTimeout(() => {document.getElementById("Datainput2").style.borderColor = "White"},3000)
}
else {
let extratext = "|0)"    
let xkor = 
(0 -t)/(m) 
console.log(xkor)
let Nullstelle =  document.getElementById("Nullestelle");
Nullstelle.innerHTML = "Die Nullstelle liegt bei S(" + xkor + extratext
Nullstelle.style.display = "inline"

    

}
}
