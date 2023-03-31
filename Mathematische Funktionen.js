"use strict"
let toggled = false
let toggeled2 = false
let SorAform = false
let checkifemptyfors = false
function Nstlfunction() {
    let Nullstelle = document.getElementById("Nullestelle");
    let m = ((document.getElementById("Datainput1") || {}).value) || "";
    let t = ((document.getElementById("Datainput2") || {}).value) || "";
    if (document.getElementById("Datainput1").value.length == 0 && document.getElementById("Datainput2").value.length == 0) {
        console.error("Error 1 : Datainput is empty ");
        setTimeout(() => { document.getElementById("Datainput1").style.borderColor = "Red" }, 500)
        setTimeout(() => { document.getElementById("Datainput2").style.borderColor = "Red" }, 500)
        setTimeout(() => { document.getElementById("Datainput1").style.borderColor = "White" }, 3000)
        setTimeout(() => { document.getElementById("Datainput2").style.borderColor = "White" }, 3000)


    }
    else if (document.getElementById("Datainput1").value.length == 0) {
        console.error("Error 1 : Datainput is empty ");
        setTimeout(() => { document.getElementById("Datainput1").style.borderColor = "Red" }, 500)
        setTimeout(() => { document.getElementById("Datainput1").style.borderColor = "White" }, 3000)
    }
    else if (document.getElementById("Datainput2").value.length == 0) {
        console.error("Error 1 : Datainput is empty ");
        setTimeout(() => { document.getElementById("Datainput2").style.borderColor = "Red" }, 500)
        setTimeout(() => { document.getElementById("Datainput2").style.borderColor = "White" }, 3000)
    }
    else if (document.getElementById("Datainput1").value == 0 && document.getElementById("Datainput2").value == 0) {
        document.getElementById("Nullestelle").innerHTML = "Es gibt unendlich viele Nullstellen"
        document.getElementById("Nullestelle").style.display = "inline"
    }
    else if (document.getElementById("Datainput1").value == 0) {
        document.getElementById("Nullestelle").innerHTML = "Es gibt keine Nullstelle"
        document.getElementById("Nullestelle").style.display = "inline"
        console.warn("There is no zero point")
    }
    else {
        let extratext = "|0)"
        let xkor =
            (0 - t) / (m)
        console.log("Die Nullstelle liegt bei " + xkor)
        let xkorrounded = Math.round(xkor * 100) / 100
        let Nullstelle = document.getElementById("Nullestelle");
        Nullstelle.innerHTML = "Die Nullstelle liegt bei S(" + xkorrounded + extratext
        Nullstelle.style.display = "inline"
    }
}
function Lfunctioninfo() {
    let m = ((document.getElementById("Datainput1") || {}).value) || "";
    let infostring1 = "Die Gerade ist steigend"
    let infostring2 = "Die Gerade ist fallend"
    let infostring3 = "Die Gerade ist gerade"
    let Infotext = document.getElementById("lfinfo");
    if (m > 0) {
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
function pluslfunction() {
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
        document.getElementById("Schnittpunkt").style.display = "none"
        toggled = false
        return;
    }
}
function NstlfunctionØ() {
    let mØ = ((document.getElementById("Datainput3") || {}).value) || "";
    let tØ = ((document.getElementById("Datainput4") || {}).value) || "";
    let NullstelleØ = document.getElementById("NullstelleØ");
    if (document.getElementById("Datainput3").value.length == 0 && document.getElementById("Datainput4").value.length == 0) {
        console.error("Error 1 : Datainput is empty ");
        setTimeout(() => { document.getElementById("Datainput3").style.borderColor = "Red" }, 500)
        setTimeout(() => { document.getElementById("Datainput4").style.borderColor = "Red" }, 500)
        setTimeout(() => { document.getElementById("Datainput3").style.borderColor = "White" }, 3000)
        setTimeout(() => { document.getElementById("Datainput4").style.borderColor = "White" }, 3000)
    }
    else if (document.getElementById("Datainput3").value.length == 0) {
        console.error("Error 1 : Datainput is empty ");
        setTimeout(() => { document.getElementById("Datainput3").style.borderColor = "Red" }, 500)
        setTimeout(() => { document.getElementById("Datainput3").style.borderColor = "White" }, 3000)
    }
    else if (document.getElementById("Datainput4").value.length == 0) {
        console.error("Error 1 : Datainput is empty ");
        setTimeout(() => { document.getElementById("Datainput4").style.borderColor = "Red" }, 500)
        setTimeout(() => { document.getElementById("Datainput4").style.borderColor = "White" }, 3000)
    }
    else {
        let extratextØ = "|0)"
        let xkorØ =
            (0 - tØ) / (mØ)
        console.log("Die Nullstelle liegt bei " + xkorØ)
        let xkorroundedØ = Math.round(xkorØ * 100) / 100
        NullstelleØ.innerHTML = "Die Nullstelle liegt bei S(" + xkorroundedØ + extratextØ
        NullstelleØ.style.display = "inline"
    }
}
function LfunctioninfoØ() {
    let mØ = ((document.getElementById("Datainput3") || {}).value) || "";
    let infostring1Ø = "Die Gerade ist steigend"
    let infostring2Ø = "Die Gerade ist fallend"
    let infostring3Ø = "Die Gerade ist gerade"
    let InfotextØ = document.getElementById("lfinfoØ");
    if (mØ > 0) {
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
    let Schnittpunkt = document.getElementById("Schnittpunkt")
    let extratext2 = "|"
    let extratext3 = ")"
    let mØ = ((document.getElementById("Datainput3") || {}).value) || "";
    let tØ = ((document.getElementById("Datainput4") || {}).value) || "";
    let m = ((document.getElementById("Datainput1") || {}).value) || "";
    let t = ((document.getElementById("Datainput2") || {}).value) || "";
    if (t == tØ) {
        let sxspecial = 0
        let syspecial = t
        let sxspecialr = Math.round(sxspecial * 100) / 100
        let syspecialr = Math.round(syspecial * 100) / 100
        console.log("Der Schnittpunkt liegt bei S(" + sxspecial + extratext2 + syspecial + extratext3)
        Schnittpunkt.innerHTML = "Der Schnittpunkt liegt bei S(" + sxspecialr + extratext2 + syspecialr + extratext3
        Schnittpunkt.style.display = "inline"
    }
    else if (t < 0 || tØ < 0) {
        let sxspecial2 = (t - tØ) / (m - mØ)
        let sxpsecial2result = sxspecial2 * (-1)
        let syspecial2result = (m * sxpsecial2result) + (t * 1)
        let sxpsecial2resultr = Math.round(sxpsecial2result * 100) / 100
        let sypsecial2resultr = Math.round(syspecial2result * 100) / 100
        console.log("Der Schnittpunkt liegt bei S(" + sxpsecial2resultr + extratext2 + syspecial2result + extratext3)
        Schnittpunkt.innerHTML = "Der Schnittpunkt liegt bei S(" + sxpsecial2resultr + extratext2 + sypsecial2resultr + extratext3
        Schnittpunkt.style.display = "inline"
    }
    else if (m < 0 || mØ < 0) {
        let sxspecial3 = (t - tØ) / (m - mØ)
        let sxpsecial3result = sxspecial3 * (-1)
        let syspecial3result = (m * sxpsecial3result) + (t * 1)
        let sxpsecial3resultr = Math.round(sxpsecial3result * 100) / 100
        let syspecial3resultr = Math.round(syspecial3result * 100) / 100
        console.log("Der Schnittpunkt liegt bei S(" + sxpsecial3resultr + extratext2 + syspecial3result + extratext3)
        Schnittpunkt.innerHTML = "Der Schnittpunkt liegt bei S(" + sxpsecial3resultr + extratext2 + syspecial3resultr + extratext3
        Schnittpunkt.style.display = "inline"
    }
    else {
        let sx = (t - tØ) / (m - mØ)
        let syresult = (m * sx) + (t * 1)
        let sxr = Math.round(sx * 100) / 100
        let syresultr = Math.round(syresult * 100) / 100
        console.log("Der Schnittpunkt liegt bei S(" + sx + extratext2 + syresult + extratext3)
        Schnittpunkt.innerHTML = "Der Schnittpunkt liegt bei S(" + sxr + extratext2 + syresultr + extratext3
        Schnittpunkt.style.display = "inline"
    }
}
function Qnullstellen() {
    let a = ((document.getElementById("Qdatainput1") || {}).value) || "";
    let b = ((document.getElementById("Qdatainput2") || {}).value) || "";
    let c = ((document.getElementById("Qdatainput3") || {}).value) || "";
    let d2 = ((document.getElementById("Qdatainput4") || {}).value) || "";
    let e2 = ((document.getElementById("Qdatainput5") || {}).value) || "";
    if (SorAform == true) {
        if (document.getElementById("Qdatainput1").value.length == 0 && document.getElementById("Qdatainput4").value.length == 0
            && document.getElementById("Qdatainput5").value.length == 0) {
            let checkifemptyfors = true
            console.error("Error 1 : Datainput is empty ");
            setTimeout(() => { document.getElementById("Qdatainput1").style.borderColor = "Red" }, 500)
            setTimeout(() => { document.getElementById("Qdatainput4").style.borderColor = "Red" }, 500)
            setTimeout(() => { document.getElementById("Qdatainput5").style.borderColor = "Red" }, 500)
            setTimeout(() => { document.getElementById("Qdatainput1").style.borderColor = "White" }, 3000)
            setTimeout(() => { document.getElementById("Qdatainput4").style.borderColor = "White" }, 3000)
            setTimeout(() => { document.getElementById("Qdatainput5").style.borderColor = "White" }, 3000)
        }
        else if (document.getElementById("Qdatainput1").value.length == 0 && document.getElementById("Qdatainput4").value.length == 0) {
            let checkifemptyfors = true
            console.error("Error 1 : Datainput is empty ");
            setTimeout(() => { document.getElementById("Qdatainput1").style.borderColor = "Red" }, 500)
            setTimeout(() => { document.getElementById("Qdatainput4").style.borderColor = "Red" }, 500)
            setTimeout(() => { document.getElementById("Qdatainput1").style.borderColor = "White" }, 3000)
            setTimeout(() => { document.getElementById("Qdatainput4").style.borderColor = "White" }, 3000)
        }
        else if (document.getElementById("Qdatainput4").value.length == 0 && document.getElementById("Qdatainput5").value.length == 0) {
            let checkifemptyfors = true
            console.error("Error 1 : Datainput is empty ");
            setTimeout(() => { document.getElementById("Qdatainput4").style.borderColor = "Red" }, 500)
            setTimeout(() => { document.getElementById("Qdatainput5").style.borderColor = "Red" }, 500)
            setTimeout(() => { document.getElementById("Qdatainput4").style.borderColor = "White" }, 3000)
            setTimeout(() => { document.getElementById("Qdatainput5").style.borderColor = "White" }, 3000)
        }
        else if (document.getElementById("Qdatainput1").value.length == 0 && document.getElementById("Qdatainput5").value.length == 0) {
            let checkifemptyfors = true
            console.error("Error 1 : Datainput is empty ");
            setTimeout(() => { document.getElementById("Qdatainput1").style.borderColor = "Red" }, 500)
            setTimeout(() => { document.getElementById("Qdatainput5").style.borderColor = "Red" }, 500)
            setTimeout(() => { document.getElementById("Qdatainput1").style.borderColor = "White" }, 3000)
            setTimeout(() => { document.getElementById("Qdatainput5").style.borderColor = "White" }, 3000)
        }
        else if (document.getElementById("Qdatainput1").value.length == 0) {
            let checkifemptyfors = true
            console.error("Error 1 : Datainput is empty ");
            setTimeout(() => { document.getElementById("Qdatainput1").style.borderColor = "Red" }, 500)
            setTimeout(() => { document.getElementById("Qdatainput1").style.borderColor = "White" }, 3000)
        }
        else if (document.getElementById("Qdatainput4").value.length == 0) {
            let checkifemptyfors = true
            console.error("Error 1 : Datainput is empty ");
            setTimeout(() => { document.getElementById("Qdatainput4").style.borderColor = "Red" }, 500)
            setTimeout(() => { document.getElementById("Qdatainput4").style.borderColor = "White" }, 3000)
        }
        else if (document.getElementById("Qdatainput5").value.length == 0) {
            let checkifemptyfors = true
            console.error("Error 1 : Datainput is empty ");
            setTimeout(() => { document.getElementById("Qdatainput5").style.borderColor = "Red" }, 500)
            setTimeout(() => { document.getElementById("Qdatainput5").style.borderColor = "White" }, 3000)
        }
        else {
            let b2 = 2 * d2 * a
            let c2 = ((d2 * d2) * a) + (e2 * 1)
            let d3 = (b2 * b2) - (4 * a * c2)
            let d3wsqrt = Math.sqrt((b2 * b2) - (4 * a * c2))
            let extratext = "|0)"
            if (d3 < 0) {
                console.warn("There is no zero point")
            }
            else if (d3 == 0) {
                let Sqnstresult1 = (((-b2) + d3wsqrt) / (2 * a))
                let Sqnstresult1r = Math.round(Sqnstresult1 * 100) / 100
                console.log("Eine Nullstelle liebt bei S(" + Sqnstresult1 + extratext)
                document.getElementById("Qnullstellen").innerHTML = "Eine Nullstelle liegt bei S(" + Sqnstresult1r + extratext

            }
            else {

                let Sqnstresult1 = (((-b2) + d3wsqrt) / (2 * a))
                let Sqnstresult2 = (((-b2) - d3wsqrt) / (2 * a))
                let Sqnstresult1r = Math.round(Sqnstresult1 * 100) / 100
                let Sqnstresult2r = Math.round(Sqnstresult2 * 100) / 100
                console.log("Eine Nullstelle liebt bei S(" + Sqnstresult1 + extratext)
                console.log("Eine Nullstelle liebt bei S(" + Sqnstresult2 + extratext)
                document.getElementById("Qnullstellen").innerHTML = `Eine Nullstelle liegt bei S(${Sqnstresult1r}${extratext}   | Eine Nullstelle liegt bei S(${Sqnstresult2r}${extratext}`

            }
        }
    }

    else {
        if (
            document.getElementById("Qdatainput1").value.length == 0 && document.getElementById("Qdatainput2").value.length == 0
            && document.getElementById("Qdatainput3").value.length == 0) {
            console.error("Error 1 : Datainput is empty ");
            setTimeout(() => { document.getElementById("Qdatainput1").style.borderColor = "Red" }, 500)
            setTimeout(() => { document.getElementById("Qdatainput2").style.borderColor = "Red" }, 500)
            setTimeout(() => { document.getElementById("Qdatainput3").style.borderColor = "Red" }, 500)
            setTimeout(() => { document.getElementById("Qdatainput1").style.borderColor = "White" }, 3000)
            setTimeout(() => { document.getElementById("Qdatainput2").style.borderColor = "White" }, 3000)
            setTimeout(() => { document.getElementById("Qdatainput3").style.borderColor = "White" }, 3000)
        }
        else if (document.getElementById("Qdatainput1").value.length == 0 && document.getElementById("Qdatainput2").value.length == 0) {
            console.error("Error 1 : Datainput is empty ");
            setTimeout(() => { document.getElementById("Qdatainput1").style.borderColor = "Red" }, 500)
            setTimeout(() => { document.getElementById("Qdatainput2").style.borderColor = "Red" }, 500)
            setTimeout(() => { document.getElementById("Qdatainput1").style.borderColor = "White" }, 3000)
            setTimeout(() => { document.getElementById("Qdatainput2").style.borderColor = "White" }, 3000)
        }
        else if (document.getElementById("Qdatainput2").value.length == 0 && document.getElementById("Qdatainput3").value.length == 0) {
            console.error("Error 1 : Datainput is empty ");
            setTimeout(() => { document.getElementById("Qdatainput2").style.borderColor = "Red" }, 500)
            setTimeout(() => { document.getElementById("Qdatainput3").style.borderColor = "Red" }, 500)
            setTimeout(() => { document.getElementById("Qdatainput2").style.borderColor = "White" }, 3000)
            setTimeout(() => { document.getElementById("Qdatainput3").style.borderColor = "White" }, 3000)
        }
        else if (document.getElementById("Qdatainput1").value.length == 0 && document.getElementById("Qdatainput3").value.length == 0) {
            console.error("Error 1 : Datainput is empty ");
            setTimeout(() => { document.getElementById("Qdatainput1").style.borderColor = "Red" }, 500)
            setTimeout(() => { document.getElementById("Qdatainput3").style.borderColor = "Red" }, 500)
            setTimeout(() => { document.getElementById("Qdatainput1").style.borderColor = "White" }, 3000)
            setTimeout(() => { document.getElementById("Qdatainput3").style.borderColor = "White" }, 3000)
        }
        else if (document.getElementById("Qdatainput1").value.length == 0) {
            console.error("Error 1 : Datainput is empty ");
            setTimeout(() => { document.getElementById("Qdatainput1").style.borderColor = "Red" }, 500)
            setTimeout(() => { document.getElementById("Qdatainput1").style.borderColor = "White" }, 3000)
        }
        else if (document.getElementById("Qdatainput2").value.length == 0) {
            console.error("Error 1 : Datainput is empty ");
            setTimeout(() => { document.getElementById("Qdatainput2").style.borderColor = "Red" }, 500)
            setTimeout(() => { document.getElementById("Qdatainput2").style.borderColor = "White" }, 3000)
        }
        else if (document.getElementById("Qdatainput3").value.length == 0) {
            console.error("Error 1 : Datainput is empty ");
            setTimeout(() => { document.getElementById("Qdatainput3").style.borderColor = "Red" }, 500)
            setTimeout(() => { document.getElementById("Qdatainput3").style.borderColor = "White" }, 3000)
        }
        else {
            let d = (b * b) - (4 * a * c)
            let dwsqrt = Math.sqrt((b * b) - (4 * a * c))
            let extratext = "|0)"
            if (d < 0) {
                console.warn("There is no zero point")
            }
            else if (d == 0) {
                let qnstresult1 = (((-b) + dwsqrt) / (2 * a))
                let qnstresult1r = Math.round(qnstresult1 * 100) / 100
                console.log("Eine Nullstelle liegt bei S(" + qnstresult1 + extratext)
                document.getElementById("Qnullstellen").innerHTML = "Eine Nullstelle liegt bei S(" + qnstresult1r + extratext
            }
            else {

                let qnstresult1 = (((-b) + dwsqrt) / (2 * a))
                let qnstresult2 = (((-b) - dwsqrt) / (2 * a))
                let qnstresult1r = Math.round(qnstresult1 * 100) / 100
                let qnstresult2r = Math.round(qnstresult2 * 100) / 100
                console.log("Eine Nullstelle liegt bei S(" + qnstresult1 + extratext)
                console.log("Eine Nullstelle liegt bei S(" + qnstresult2 + extratext)
                document.getElementById("Qnullstellen").innerHTML = `Eine Nullstelle liegt bei S(${qnstresult1r}${extratext}   | Eine Nullstelle liegt bei S(${qnstresult2r}${extratext}`
            }
        }
    }
}
function StoAllform() {
    if (toggeled2 == false) {
        document.getElementById("Qdatainput2").style.display = "none"
        document.getElementById("Qdatainput3").style.display = "none"
        document.getElementById("Qdatainput4").style.display = "inline"
        document.getElementById("Qdatainput5").style.display = "inline"
        document.getElementById("Scheitelpunktform").innerHTML = "A"
        document.getElementById("QNullstellen").id = "QnullstellenS"
        document.getElementById("QnullstellenS").style.display = "inline"
        toggeled2 = true
        SorAform = true
        return;
    }
    if (toggeled2 == true) {
        document.getElementById("Qdatainput2").style.display = "inline"
        document.getElementById("Qdatainput3").style.display = "inline"
        document.getElementById("Qdatainput4").style.display = "none"
        document.getElementById("Qdatainput5").style.display = "none"
        document.getElementById("Scheitelpunktform").innerHTML = "S"
        document.getElementById("QnullstellenS").id = "QNullstellen"
        toggeled2 = false
        SorAform = false
        return;
    }
}
function Qfunctioninfo() {
    let a = ((document.getElementById("Qdatainput1") || {}).value) || "";
    if (checkifemptyfors == true) {
        console.log(checkifemptyfors)
        console.error("Can not give Infomartion aboubt Function(Datainput is empty)")
    }
    else {
        if (a < 0) {
            console.log(checkifemptyfors)
            console.log("Die Parabel ist nach unten geöffnet")
            document.getElementById("Qfunctioninfo").innerHTML = "Die Parabel ist nach unten geöffnet"
        }
        else {
            // Hier wird morgen weitergearbeit und zwar den Scheitel ausrechen von der allgemeinenform (18.02.23 | 19:46)//
            /* Yo es ist jetzt der (25.03.23 | 20:09) und ich arbeite grade weiter an der Qfunctioninfo function
            muss ein bug fixen weil die function auch ergebnisse auspsuckt obwohl die datinputs empty sind also prüfe ich dann
            am anfang mit einem boolean ob alles mit werten versehen wurde(ich für jetzt so eine art "Tagebuch") by the way
            gibt jetzt schon die Version Alpha 1.0 als programm per Elektron gibt noch ein paar bug aber theorethisch könnte man 
            über Early acces nachdenken*/
        }
    }
}




