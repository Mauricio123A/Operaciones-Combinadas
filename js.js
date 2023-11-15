// ⁰¹²³⁴⁵⁶⁷⁸⁹
OperacionesFaciles = [["(+2) x (+3)", 6],["(+5) x (-8)", -40],["(+10) x (+2)", 20],["(+7) x (-3)", -21],["(-24) + (+20)", -4],["(+15) + (-18)", -3],["(-25) + (+32)", 7],["(-11) + (+5)", -6],["(-29) x (-10)", 290],["(+125) x (-1)", -25]]
SignosFaciles = [" + ", " - "]
OperacionesNormales = [["(-5³)", -125],["(-2²)", 4],["(-10³)", -1000],["(+15¹) x (+2²)", 60],["(-8) + (-2³)", 0],["(+10) x (+6²)", 360],["(-3) x (-4³)", 81],["(-5²) x (+2²)", 100], ["(-8²) + (2² x 2), 56"], ["(+2) x (+2) x (+2) x (+2) x (+2²)", 64], ["-1 x -1² + 1", 0], ["(+20/10) x (+2²)", 8],["(-5/10) + (-2/2)³", -1.5], ["(-2/3)²  + (+1/3) - (-2/9)", 1], ["(-3/2)¹ + (+5/10)",-1], ["3² + 8/18 - 4/6²",9], ["3³ - 4/2²",23]]
SignosNormales = [" + ", " x ", " - "]
OperacionesDificiles = [["(+8²) + (-2³)", 56],["(-20) x (-1⁴)", -20],["(+5 x (-2))²", 100]]
SignosDificiles = [" + ", " x ", " - ", " x "]

Texto = document.getElementById("texto")
BotonFacil = function() {
    PrimerR = Math.floor(Math.Random() * OperacionesFaciles.length)
    SegundoR = Math.floor(Math.Random() * OperacionesFaciles.length)
    TercerR = Math.floor(Math.Random() * 2)
    PrimerN = OperacionesFaciles[PrimerR][1]
    SegundoN = OperacionesFaciles[SegundoR][1]
    if (SignosFaciles[TercerR] == " + ") {
        Resultado = PrimerN + SegundoN
    }
    if (SignosFaciles[TercerR] == " - ") {
        Resultado = PrimerN - SegundoN
    }
    if (SignosFaciles[TercerR] == " x ") {
        Resultado = PrimerN * SegundoN
    }
    text = OperacionesFaciles[PrimerR][0] + SignosFaciles[TercerR] + OperacionesFaciles[SegundoR][0] + " = " toString(Resultado)
    Texto.innerHTML = text
}
BotonNormal = function() {
    PrimerR = Math.floor(Math.Random() * OperacionesNormales.length)
    SegundoR = Math.floor(Math.Random() * OperacionesNormales.length)
    TercerR = Math.floor(Math.Random() * 3)
    PrimerN = OperacionesNormales[PrimerR][1]
    SegundoN = OperacionesNormales[SegundoR][1]
    if (SignosNormales[TercerR] == " + ") {
        Resultado = PrimerN + SegundoN
    }
    if (SignosNormales[TercerR] == " - ") {
        Resultado = PrimerN - SegundoN
    }
    if (SignosNormales[TercerR] == " x ") {
        Resultado = PrimerN * SegundoN
    }
    
    text = OperacionesNormales[PrimerR][0] + SignosNormales[TercerR] + OperacionesNormales[SegundoR][0] + " = " + toString(Resultado)
    Texto.innerHTML = text
}
BotonDificil = function() {
    PrimerR = Math.floor(Math.Random() * OperacionesDificiles.length)
    SegundoR = Math.floor(Math.Random() * OperacionesDificiles.length)
    TercerR = Math.floor(Math.Random() * 4)
    PrimerN = OperacionesDificiles[PrimerR][1]
    SegundoN = OperacionesDificiles[SegundoR][1]
    if (SignosDificiles[TercerR] == " + ") {
        Resultado = PrimerN + SegundoN
    }
    if (SignosDificiles[TercerR] == " - ") {
        Resultado = PrimerN - SegundoN
    }
    if (SignosDificiles[TercerR] == " x ") {
        Resultado = PrimerN * SegundoN
    }
    
    text = OperacionesDificiles[PrimerR][0] + SignosDificiles[TercerR] + OperacionesDificiles[SegundoR][0] + " = " + toString(Resultado)
    Texto.innerHTML = text
}
warn(OperacionesFaciles.length)
warn(OperacionesNormales.length)
warn(OperacionesDificiles.length)
