// ⁰¹²³⁴⁵⁶⁷⁸⁹
OperacionesFaciles = [["(+2) x (+3)", 6],["(+5) x (-8)", -40],["(+10) x (+2)", 20],["(+7) x (-3)", -21],["(-24) + (+20)", -4],["(+15) + (-18)", -3],["(-25) + (+32)", 7],["(-11) + (+5)", -6],["(-29) x (-10)", 290],["(+125) x (-1)", -25]]
SignosFaciles = [" + ", " - "]
OperacionesNormales = [["(-5³)", -125],["(-2²)", 4],["(-10³)", -1000],["(+15¹) x (+2²)", 60],["(-8) + (-2³)", 0],["(+10) x (+6²)", 360],["(-3) x (-4³)", 81],["(-5²) x (+2²)", 100]]
SignosNormales = [" + ", " x ", " - "]
OperacionesDificiles = [["(+8²) + (-2³)", 56],["(-20) x (-1⁴)", -20],["(+5 x (-2))²", 100]]
SignosDificiles = [" + ", " x ", " - ", " x "]

Texto = document.getElementById("texto")
BotonFacil = function() {
    text = OperacionesFaciles[Math.floor(Math.random() * OperacionesFaciles.length)][0] + SignosFaciles[Math.floor(Math.random()*2)] + OperacionesFaciles[Math.floor(Math.random() * OperacionesFaciles.length)][0] + " ="
    Texto.innerHTML = text
}
BotonNormal = function() {
    text = OperacionesNormales[Math.floor(Math.random() * OperacionesNormales.length)][0] + SignosNormales[Math.floor(Math.random()*2)] + OperacionesNormales[Math.floor(Math.random() * OperacionesNormales.length)][0] + " ="
    Texto.innerHTML = text
}
BotonDificil = function() {
    text = OperacionesDificiles[Math.floor(Math.random() * OperacionesDificiles.length)][0] + SignosDificiles[Math.floor(Math.random()*2)] + OperacionesDificiles[Math.floor(Math.random() * OperacionesDificiles.length)][0] + " ="
    Texto.innerHTML = text
}