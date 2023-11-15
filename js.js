// ⁰¹²³⁴⁵⁶⁷⁸⁹
let OperacionesFaciles = [["(+2) x (+3)", 6],["(+5) x (-8)", -40],["(+10) x (+2)", 20],["(+7) x (-3)", -21],["(-24) + (+20)", -4],["(+15) + (-18)", -3],["(-25) + (+32)", 7],["(-11) + (+5)", -6],["(-29) x (-10)", 290],["(+125) x (-1)", -25]];
let SignosFaciles = [" + ", " - "];
let OperacionesNormales = [["(-5³)", -125],["(-2²)", 4],["(-10³)", -1000],["(+15¹) x (+2²)", 60],["(-8) + (-2³)", 0],["(+10) x (+6²)", 360],["(-3) x (-4³)", 81],["(-5²) x (+2²)", 100], ["(-8²) + (2² x 2), 56"], ["(+2) x (+2) x (+2) x (+2) x (+2²)", 64], ["-1 x -1² + 1", 0], ["(+20/10) x (+2²)", 8],["(-5/10) + (-2/2)³", -1.5], ["(-2/3)²  + (+1/3) - (-2/9)", 1], ["(-3/2)¹ + (+5/10)",-1], ["3² + 8/18 - 4/6²",9], ["3³ - 4/2²",23]];
let SignosNormales = [" + ", " x ", " - "];
let OperacionesDificiles = [["(+8²) + (-2³)", 56],["(-20) x (-1⁴)", -20],["(+5 x (-2))²", 100]];
let SignosDificiles = [" + ", " x ", " - ", " x "];

let Texto = document.getElementById("texto");
let BotonFacil = function() {
    let PrimerR = Math.floor(Math.Random() * OperacionesFaciles.length);
    let SegundoR = Math.floor(Math.Random() * OperacionesFaciles.length);
    let TercerR = Math.floor(Math.Random() * 2);
    let PrimerN = OperacionesFaciles[PrimerR][1];
    let SegundoN = OperacionesFaciles[SegundoR][1];
    let Resultado;
    console.warn(PrimerR, SegundoR, TercerR);
    if (SignosFaciles[TercerR] == " + ") {
        Resultado = PrimerN + SegundoN;
    }
    if (SignosFaciles[TercerR] == " - ") {
        Resultado = PrimerN - SegundoN;
    }
    if (SignosFaciles[TercerR] == " x ") {
        Resultado = PrimerN * SegundoN;
    }
    let text = OperacionesFaciles[PrimerR][0] + SignosFaciles[TercerR] + OperacionesFaciles[SegundoR][0] + " = " + Resultado;
    Texto.innerHTML = text;
};
let BotonNormal = function() {
    let PrimerR = Math.floor(Math.Random() * OperacionesNormales.length);
    let SegundoR = Math.floor(Math.Random() * OperacionesNormales.length);
    let TercerR = Math.floor(Math.Random() * 3);
    let PrimerN = OperacionesNormales[PrimerR][1];
    let SegundoN = OperacionesNormales[SegundoR][1];
    let Resultado;
    console.warn(PrimerR, SegundoR, TercerR);
    if (SignosNormales[TercerR] == " + ") {
        Resultado = PrimerN + SegundoN;
    }
    if (SignosNormales[TercerR] == " - ") {
        Resultado = PrimerN - SegundoN;
    }
    if (SignosNormales[TercerR] == " x ") {
        Resultado = PrimerN * SegundoN;
    }
    
    let text = OperacionesNormales[PrimerR][0] + SignosNormales[TercerR] + OperacionesNormales[SegundoR][0] + " = " + Resultado;
    Texto.innerHTML = text;
};
let BotonDificil = function() {
    let PrimerR = Math.floor(Math.Random() * OperacionesDificiles.length);
    let SegundoR = Math.floor(Math.Random() * OperacionesDificiles.length);
    let TercerR = Math.floor(Math.Random() * 4);
    let PrimerN = OperacionesDificiles[PrimerR][1];
    let SegundoN = OperacionesDificiles[SegundoR][1];
    let Resultado;
    console.warn(PrimerR, SegundoR, TercerR);
    if (SignosDificiles[TercerR] == " + ") {
        Resultado = PrimerN + SegundoN;
    }
    if (SignosDificiles[TercerR] == " - ") {
        Resultado = PrimerN - SegundoN;
    }
    if (SignosDificiles[TercerR] == " x ") {
        Resultado = PrimerN * SegundoN;
    }
    
    let text = OperacionesDificiles[PrimerR][0] + SignosDificiles[TercerR] + OperacionesDificiles[SegundoR][0] + " = " + Resultado;
    Texto.innerHTML=text;
};
console.warn(OperacionesFaciles.length);
console.warn(OperacionesNormales.length);
console.warn(OperacionesDificiles.length);
