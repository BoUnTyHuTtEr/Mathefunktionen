"use strict"
let  toggled = false
function Nstlfunction () {
let Nullstelle =  document.getElementById("Nullestelle");    
let   m = ((document.getElementById("Datainput1")||{}).value)||"";
let   t = ((document.getElementById("Datainput2")||{}).value)||"";
if (document.getElementById("Datainput1").value.length == 0 && document.getElementById("Datainput2").value.length == 0  ) {
console.warn("Error 1 : Datainput is empty ");
setTimeout(() => {document.getElementById("Datainput1").style.borderColor = "Red"},500)
setTimeout(() => {document.getElementById("Datainput2").style.borderColor = "Red"},500)
setTimeout(() => {document.getElementById("Datainput1").style.borderColor = "White"},3000)
setTimeout(() => {document.getElementById("Datainput2").style.borderColor = "White"},3000)

  
}
else if (document.getElementById("Datainput1").value.length == 0  ) {
console.warn("Error 1 : Datainput is empty ");
setTimeout(() => {document.getElementById("Datainput1").style.borderColor = "Red"},500)
setTimeout(() => {document.getElementById("Datainput1").style.borderColor = "White"},3000)    
}
else if (document.getElementById("Datainput2").value.length == 0  ) {
console.warn("Error 1 : Datainput is empty ");
setTimeout(() => {document.getElementById("Datainput2").style.borderColor = "Red"},500)
setTimeout(() => {document.getElementById("Datainput2").style.borderColor = "White"},3000)
}
else if (document.getElementById("Datainput1").value == 0 && document.getElementById("Datainput2").value == 0  ) {
document.getElementById("Nullestelle").innerHTML = "Es gibt unendlich viele Nullstellen"
document.getElementById("Nullestelle").style.display = "inline" 
}
else if (document.getElementById("Datainput1").value == 0) {
document.getElementById("Nullestelle").innerHTML = "Es gibt keine Nullstelle"
document.getElementById("Nullestelle").style.display = "inline"
console.warn("Error 2 : There is no zero point")     
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
}       
}
function pluslfunction () {    
if (toggled == false) {
toggled = true 
document.getElementById("Datainput3").style.display = "inline"
document.getElementById("Datainput4").style.display = "inline"
document.getElementById("Nstberechnen??").style.display = "inline"
document.getElementById("Plusfunction").innerHTML = "-"
document.getElementById("Scnittpunktausrechnen").style.display = "inline"
return;   
}
if (toggled == true) {
document.getElementById("Datainput3").style.display = "none"
document.getElementById("Datainput4").style.display = "none"
document.getElementById("Nstberechnen??").style.display = "none"
document.getElementById("Nullstelle??").style.display = "none"
document.getElementById("Scnittpunktausrechnen").style.display = "none"
document.getElementById("Plusfunction").innerHTML = "+"
document.getElementById("lfinfo??").style.display = "none"
toggled = false
return;
}
}
function Nstlfunction?? () {
let  m?? = ((document.getElementById("Datainput3")||{}).value)||"";
let  t?? = ((document.getElementById("Datainput4")||{}).value)||"";     
let Nullstelle?? = document.getElementById("Nullstelle??"); 
if (document.getElementById("Datainput3").value.length == 0 && document.getElementById("Datainput4").value.length == 0  ) {
console.warn("Error 1 : Datainput is empty ");
setTimeout(() => {document.getElementById("Datainput3").style.borderColor = "Red"},500)
setTimeout(() => {document.getElementById("Datainput4").style.borderColor = "Red"},500)
setTimeout(() => {document.getElementById("Datainput3").style.borderColor = "White"},3000)
setTimeout(() => {document.getElementById("Datainput4").style.borderColor = "White"},3000)                  
}
else if (document.getElementById("Datainput3").value.length == 0  ) {
console.warn("Error 1 : Datainput is empty ");
setTimeout(() => {document.getElementById("Datainput3").style.borderColor = "Red"},500)
setTimeout(() => {document.getElementById("Datainput3").style.borderColor = "White"},3000)    
}
else if (document.getElementById("Datainput4").value.length == 0  ) {
console.warn("Error 1 : Datainput is empty ");
setTimeout(() => {document.getElementById("Datainput4").style.borderColor = "Red"},500)
setTimeout(() => {document.getElementById("Datainput4").style.borderColor = "White"},3000)
}
else {
let extratext?? = "|0)"    
let xkor?? = 
(0 -t??)/(m??) 
console.log( "Die Nullstelle liegt bei " + xkor??)
let xkorrounded?? = Math.round(xkor?? *100) /100
Nullstelle??.innerHTML = "Die Nullstelle liegt bei S(" + xkorrounded?? + extratext??
Nullstelle??.style.display = "inline"
}    
}
function Lfunctioninfo??(){
let m??= ((document.getElementById("Datainput3")||{}).value)||"";
let infostring1?? = "Die Gerade ist steigend" 
let infostring2?? = "Die Gerade ist fallend"
let infostring3?? = "Die Gerade ist gerade"
let Infotext?? = document.getElementById("lfinfo??"); 
if (m?? > 0 ) {
console.log(infostring1??)
Infotext??.innerHTML = infostring1??
Infotext??.style.display = "inline"
} else if (m?? < 0) {
console.log(infostring2??)
Infotext??.innerHTML = infostring2??
Infotext??.style.display = "inline"    
}
else {
console.log(infostring3??)   
}           
}
function Scnittpunktausrechnen() {
let extratext2 = "|"
let extratext3 = ")"    
let  m?? = ((document.getElementById("Datainput3")||{}).value)||"";
let  t?? = ((document.getElementById("Datainput4")||{}).value)||"";
let   m = ((document.getElementById("Datainput1")||{}).value)||"";
let   t = ((document.getElementById("Datainput2")||{}).value)||"";
if (t == t??) {
let sxspecial = 0
let syspecial = t 
console.log("Der Schnitpunkt liegt bei S(" + sxspecial + extratext2 + syspecial +extratext3)     
}
else if (t < 0 || t?? < 0 ) {   
let sxspecial2 = (t - t??) / (m-m??)
let sxpsecial2result =    sxspecial2 * (-1) 
let syspecial2result =  (m * sxpsecial2result)   + (t*1)
console.log("Der Schnitpunkt liegt bei S(" +sxpsecial2result + extratext2 + syspecial2result + extratext3) 
}
else if (m < 0 || m?? < 0 ) {
let sxspecial3 = (t - t??) / (m-m??)
let sxpsecial3result = sxspecial3 * (-1)
let syspecial3result = (m * sxpsecial3result) + (t*1)
console.log("Der Schnittpunkt liegt bei S(" + sxpsecial3result + extratext2 + syspecial3result + extratext3)    
}
else {
let sx = (t - t??) / (m-m??)
let syresult = (m*sx) + (t*1)
console.log("Der Schnitpunkt liegt bei S(" + sx + extratext2 +syresult + extratext3 )    
}  
}


