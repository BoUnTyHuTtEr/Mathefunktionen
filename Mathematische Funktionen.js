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
document.getElementById("NstberechnenØ").style.display = "inline"
document.getElementById("Plusfunction").innerHTML = "-"
document.getElementById("Scnittpunktausrechnen").style.display = "inline"
return;   
}
if (toggled == true) {
document.getElementById("Datainput3").style.display = "none"
document.getElementById("Datainput4").style.display = "none"
document.getElementById("NstberechnenØ").style.display = "none"
document.getElementById("NullstelleØ").style.display = "none"
document.getElementById("Scnittpunktausrechnen").style.display = "none"
document.getElementById("Plusfunction").innerHTML = "+"
document.getElementById("lfinfoØ").style.display = "none"
toggled = false
return;
}
}
function NstlfunctionØ () {
let  mØ = ((document.getElementById("Datainput3")||{}).value)||"";
let  tØ = ((document.getElementById("Datainput4")||{}).value)||"";     
let NullstelleØ = document.getElementById("NullstelleØ"); 
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
let extratextØ = "|0)"    
let xkorØ = 
(0 -tØ)/(mØ) 
console.log( "Die Nullstelle liegt bei " + xkorØ)
let xkorroundedØ = Math.round(xkorØ *100) /100
NullstelleØ.innerHTML = "Die Nullstelle liegt bei S(" + xkorroundedØ + extratextØ
NullstelleØ.style.display = "inline"
}    
}
function LfunctioninfoØ(){
let mØ= ((document.getElementById("Datainput3")||{}).value)||"";
let infostring1Ø = "Die Gerade ist steigend" 
let infostring2Ø = "Die Gerade ist fallend"
let infostring3Ø = "Die Gerade ist gerade"
let InfotextØ = document.getElementById("lfinfoØ"); 
if (mØ > 0 ) {
console.log(infostring1Ø)
InfotextØ.innerHTML = infostring1Ø
InfotextØ.style.display = "inline"
} else if (mØ < 0) {
console.log(infostring2Ø)
InfotextØ.innerHTML = infostring2Ø
InfotextØ.style.display = "inline"    
}
else {
console.log(infostring3Ø)   
}           
}
function Scnittpunktausrechnen() {
let extratext2 = "|"
let extratext3 = ")"    
let  mØ = ((document.getElementById("Datainput3")||{}).value)||"";
let  tØ = ((document.getElementById("Datainput4")||{}).value)||"";
let   m = ((document.getElementById("Datainput1")||{}).value)||"";
let   t = ((document.getElementById("Datainput2")||{}).value)||"";
if (t == tØ) {
let sxspecial = 0
let syspecial = t 
console.log("Der Schnitpunkt liegt bei S(" + sxspecial + extratext2 + syspecial +extratext3)     
}
else if (t < 0 || tØ < 0 ) {   
let sxspecial2 = (t - tØ) / (m-mØ)
let sxpsecial2result =    sxspecial2 * (-1) 
let syspecial2result =  (m * sxpsecial2result)   + (t*1)
console.log("Der Schnitpunkt liegt bei S(" +sxpsecial2result + extratext2 + syspecial2result + extratext3) 
}
else if (m < 0 || mØ < 0 ) {
let sxspecial3 = (t - tØ) / (m-mØ)
let sxpsecial3result = sxspecial3 * (-1)
let syspecial3result = (m * sxpsecial3result) + (t*1)
console.log("Der Schnittpunkt liegt bei S(" + sxpsecial3result + extratext2 + syspecial3result + extratext3)    
}
else {
let sx = (t - tØ) / (m-mØ)
let syresult = (m*sx) + (t*1)
console.log("Der Schnitpunkt liegt bei S(" + sx + extratext2 +syresult + extratext3 )    
}  
}


