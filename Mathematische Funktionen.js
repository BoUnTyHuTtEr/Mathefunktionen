"use strict"
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
console.log( "Die Nullstelle liegt bei " + xkor)
let xkorrounded = Math.round(xkor *100) /100
let Nullstelle =  document.getElementById("Nullestelle");
Nullstelle.innerHTML = "Die Nullstelle liegt bei S(" + xkorrounded + extratext
Nullstelle.style.display = "inline"
}
}
function Lfunctioninfo () {
let   m = ((document.getElementById("Datainput1")||{}).value)||"";
let infostring1 = "Die Gerade ist steigend" 
let infostring2 = "Die Gerade ist fallend"
let infostring3 = "Die Gerade ist gerade"
let Infotext = document.getElementById("lfinfo"); 
if (m > 0 ) {
console.log(infostring1)
Infotext.innerHTML = infostring1
Infotext.style.display = "inline"
} else if (m < 0) {
console.log(infostring2)
Infotext.innerHTML = infostring2
Infotext.style.display = "inline"    
}
else {
console.log(infostring3)
Infotext.innerHTML = infostring3
Infotext.style.display = "inline"   
}       
}

