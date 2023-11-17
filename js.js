// ⁰¹²³⁴⁵⁶⁷⁸⁹
let OperacionesNormales = [["(-5³)", -125],["(-2²)", 4],["(-10³)", -1000],["((+15¹) x (+2²))", 60],["((-8) + (-2³))", 0],["((+10) x (+6²))", 360],["((-3) x (-4³))", 192],["((-5²) x (+2²))", 100], ["((-8²) - (2² x 2))", 56], ["((+2) x (+2) x (+2²))", 16], ["(-1 x -1² + 1)", 0], ["((+20/10) x (+2²))", 8],["((-5/10) + (-2/2)³)", -1.5], ["((-2/3)²  + (+1/3) - (-2/9))", 1], ["((-3/2)¹ + (+5/10))",-1], ["(3² + 8/18 - 4/6²)",9], ["(3³ - 4/2²)",23]];
let OperacionesDificiles = [["((+8²) + (-2³))", 56],["((-20) x (-1⁴))", -20],["(+5 x (-2))²", 100]];
let SignosDificiles = [" + ", " x ", " - ", " x "];

let Texto = document.getElementById("texto");
var Multi = false;
let BotonMultiplicacion = function(){
    if (Multi == true){
        Multi = false;
        document.getElementById("multi").style.backgroundColor = "red"
    }else{
        Multi = true;
        document.getElementById("multi").style.backgroundColor = "green"
    };
};
let BotonFacil = function() {
    let SignosFaciles = [" + ", " - "];
    let NumerosRandomFaciles = [Math.floor(Math.random() *99 +1), Math.floor(Math.random() *99 +1), Math.floor(Math.random() *99 +1), Math.floor(Math.random() *99 +1)];
    let OperacionesFaciles = [
    [NumerosRandomFaciles[0] + " - " + NumerosRandomFaciles[1], NumerosRandomFaciles[0] - NumerosRandomFaciles[1]],
    [NumerosRandomFaciles[0] + " + " + NumerosRandomFaciles[1], NumerosRandomFaciles[0] + NumerosRandomFaciles[1]],
    [NumerosRandomFaciles[0] + " - " + "(" + (NumerosRandomFaciles[1] * -1) + ")", NumerosRandomFaciles[0] - (NumerosRandomFaciles[1] * -1)],
    [NumerosRandomFaciles[0] + " + " + "(" + (NumerosRandomFaciles[1] * -1) + ")", NumerosRandomFaciles[0] + (NumerosRandomFaciles[1] * -1)],
    ["(" + (NumerosRandomFaciles[1] * -1) + ")" + " - " + NumerosRandomFaciles[0], (NumerosRandomFaciles[1] * -1) - NumerosRandomFaciles[0]],
    ["(" + (NumerosRandomFaciles[1] * -1) + ")" + " + " + NumerosRandomFaciles[0], (NumerosRandomFaciles[1] * -1) + NumerosRandomFaciles[0]],
    ["(" + (NumerosRandomFaciles[1] * -1) + ")" + " - " + "(" + (NumerosRandomFaciles[0] * -1) + ")", (NumerosRandomFaciles[1] * -1) - (NumerosRandomFaciles[0] * -1)],
    ["(" + (NumerosRandomFaciles[1] * -1) + ")" + " + " + "(" + (NumerosRandomFaciles[0] * -1) + ")", (NumerosRandomFaciles[1] * -1) + (NumerosRandomFaciles[0] * -1)]
    ];
    let OperacionesFaciles2 = [
        [NumerosRandomFaciles[2] + " - " + NumerosRandomFaciles[3], NumerosRandomFaciles[2] - NumerosRandomFaciles[3]],
        [NumerosRandomFaciles[2] + " + " + NumerosRandomFaciles[3], NumerosRandomFaciles[2] + NumerosRandomFaciles[3]],
        [NumerosRandomFaciles[2] + " - " + "(" + (NumerosRandomFaciles[3] * -1) + ")", NumerosRandomFaciles[2] - (NumerosRandomFaciles[3] * -1)],
        [NumerosRandomFaciles[2] + " + " + "(" + (NumerosRandomFaciles[3] * -1) + ")", NumerosRandomFaciles[2] + (NumerosRandomFaciles[3] * -1)],
        ["(" + (NumerosRandomFaciles[3] * -1) + ")" + " - " + NumerosRandomFaciles[2], (NumerosRandomFaciles[3] * -1) - NumerosRandomFaciles[2]],
        ["(" + (NumerosRandomFaciles[3] * -1) + ")" + " + " + NumerosRandomFaciles[2], (NumerosRandomFaciles[3] * -1) + NumerosRandomFaciles[2]],
        ["(" + (NumerosRandomFaciles[3] * -1) + ")" + " - " + "(" + (NumerosRandomFaciles[2] * -1) + ")", (NumerosRandomFaciles[3] * -1) - (NumerosRandomFaciles[2] * -1)],
        ["(" + (NumerosRandomFaciles[3] * -1) + ")" + " + " + "(" + (NumerosRandomFaciles[2] * -1) + ")", (NumerosRandomFaciles[3] * -1) + (NumerosRandomFaciles[2] * -1)]
    ];

    let PrimerR = Math.floor(Math.random() * OperacionesFaciles.length);
    let SegundoR = Math.floor(Math.random() * OperacionesFaciles.length);
    let TercerR = Math.floor(Math.random() * 2);
    let PrimerN = OperacionesFaciles[PrimerR][1];
    let SegundoN = OperacionesFaciles2[SegundoR][1];
    let Resultado;
    if (SignosFaciles[TercerR] == " + ") {
        Resultado = PrimerN + SegundoN;
    }
    if (SignosFaciles[TercerR] == " - ") {
        Resultado = PrimerN - SegundoN;
    }
    if (SignosFaciles[TercerR] == " x ") {
        Resultado = PrimerN * SegundoN;
    }
    let text = OperacionesFaciles[PrimerR][0] + SignosFaciles[TercerR] + OperacionesFaciles2[SegundoR][0] + " = " + Resultado;
    text = text.replace("(", "");    text = text.replace(")", "");
    Texto.innerHTML = text;
    if (Multi == true){
        Texto.innerHTML = Texto.innerHTML.replaceAll("x", ".")
        console.warn(Multi)
    }
};
let BotonNormal = function() {
    let NumerosPotencias = [Math.floor(Math.random() *4), Math.floor(Math.random() *4), Math.floor(Math.random() *4), Math.floor(Math.random() *4)];
    let Potencias = [];
    for (i = 0; i < 4; i++){
        if (NumerosPotencias[i] == 0){
            Potencias[i] = ""
        }else if (NumerosPotencias[i] == 1){
            Potencias[i] = "¹"
        }else if (NumerosPotencias[i] == 2){
            Potencias[i] = "²"
        }else{
            Potencias[i] = "³"
        };
    };

    let NumerosRandomNormales = [Math.floor(Math.random() *14 +1), Math.floor(Math.random() *14 +1), Math.floor(Math.random() *14 +1), Math.floor(Math.random() *14 +1)];
    let OperacionesNormales = [
        [NumerosRandomNormales[0] + Potencias[0] + " - " + NumerosRandomNormales[1] + Potencias[1]],
        [NumerosRandomNormales[0] + Potencias[0] + " + " + NumerosRandomNormales[1] + Potencias[1]],
        [NumerosRandomNormales[0] + Potencias[0] + " * " + NumerosRandomNormales[1] + Potencias[1]],
        [NumerosRandomNormales[0] + Potencias[0] + " - " + "(" + (NumerosRandomNormales[1] * -1) + ")" + Potencias[1]],
        [NumerosRandomNormales[0] + Potencias[0] + " + " + "(" + (NumerosRandomNormales[1] * -1) + ")" + Potencias[1]],
        [NumerosRandomNormales[0] + Potencias[0] + " * " + "(" + (NumerosRandomNormales[1] * -1) + ")" + Potencias[1]],
        ["(" + (NumerosRandomNormales[1] * -1) + ")" + Potencias[1] + " - " + NumerosRandomNormales[0] + Potencias[0]],
        ["(" + (NumerosRandomNormales[1] * -1) + ")" + Potencias[1] + " + " + NumerosRandomNormales[0] + Potencias[0]],
        ["(" + (NumerosRandomNormales[1] * -1) + ")" + Potencias[1] + " * " + NumerosRandomNormales[0] + Potencias[0]],
        ["(" + (NumerosRandomNormales[1] * -1) + ")" + Potencias[1] + " - " + "(" + (NumerosRandomNormales[0] * -1) + ")" + Potencias[0]],
        ["(" + (NumerosRandomNormales[1] * -1) + ")" + Potencias[1] + " + " + "(" + (NumerosRandomNormales[0] * -1) + ")" + Potencias[0]],
        ["(" + (NumerosRandomNormales[1] * -1) + ")" + Potencias[1] + " * " + "(" + (NumerosRandomNormales[0] * -1) + ")" + Potencias[0]]
    ];
    let OperacionesNormales2 = [
        [NumerosRandomNormales[2] + Potencias[2] + " - " + NumerosRandomNormales[3] + Potencias[3]],
        [NumerosRandomNormales[2] + Potencias[2] + " + " + NumerosRandomNormales[3] + Potencias[3]],
        [NumerosRandomNormales[2] + Potencias[2] + " * " + NumerosRandomNormales[3] + Potencias[3]],
        [NumerosRandomNormales[2] + Potencias[2] + " - " + "(" + (NumerosRandomNormales[3] * -1) + ")" + Potencias[3]],
        [NumerosRandomNormales[2] + Potencias[2] + " + " + "(" + (NumerosRandomNormales[3] * -1) + ")" + Potencias[3]],
        [NumerosRandomNormales[2] + Potencias[2] + " * " + "(" + (NumerosRandomNormales[3] * -1) + ")" + Potencias[3]],
        ["(" + (NumerosRandomNormales[3] * -1) + ")" + Potencias[3] + " - " + NumerosRandomNormales[2] + Potencias[2]],
        ["(" + (NumerosRandomNormales[3] * -1) + ")" + Potencias[3] + " + " + NumerosRandomNormales[2] + Potencias[2]],
        ["(" + (NumerosRandomNormales[3] * -1) + ")" + Potencias[3] + " * " + NumerosRandomNormales[2] + Potencias[2]],
        ["(" + (NumerosRandomNormales[3] * -1) + ")" + Potencias[3] + " - " + "(" + (NumerosRandomNormales[2] * -1) + ")" + Potencias[2]],
        ["(" + (NumerosRandomNormales[3] * -1) + ")" + Potencias[3] + " + " + "(" + (NumerosRandomNormales[2] * -1) + ")" + Potencias[2]],
        ["(" + (NumerosRandomNormales[3] * -1) + ")" + Potencias[3] + " * " + "(" + (NumerosRandomNormales[2] * -1) + ")" + Potencias[2]]
    ];
    let SignosNormales = [" + ", " * ", " - "];
    let PrimerR = Math.floor(Math.random() * OperacionesNormales.length);
    let SegundoR = Math.floor(Math.random() * OperacionesNormales.length);
    let TercerR = Math.floor(Math.random() * 3);
    let text = OperacionesNormales[PrimerR][0] + SignosNormales[TercerR] + OperacionesNormales2[SegundoR][0];
    let Resultado;
    
    let Corchete1 = [];
    let Corchete2 = [];

    text = text.replaceAll("¹", "**1");
    text = text.replaceAll("²", "**2");
    text = text.replaceAll("³", "**3");
    Resultado = eval(text);
    text = text.replaceAll("**1", "¹");
    text = text.replaceAll("**2", "²");
    text = text.replaceAll("**3", "³");
    
    text = text.replace("(", "");    text = text.replace(")", "");
    text = text + " = " + Resultado;
    Texto.innerHTML = text;
    if (Multi == true){
        Texto.innerHTML = Texto.innerHTML.replaceAll("*", ".");
    }else{
        Texto.innerHTML = Texto.innerHTML.replaceAll("*", "x");
    };
    if (Resultado > 10000 || Resultado < -10000){
        BotonNormal();
    };
};
let BotonDificil = function() {
    let PrimerR = Math.floor(Math.random() * OperacionesDificiles.length);
    let SegundoR = Math.floor(Math.random() * OperacionesDificiles.length);
    let TercerR = Math.floor(Math.random() * 4);
    let PrimerN = OperacionesDificiles[PrimerR][1];
    let SegundoN = OperacionesDificiles[SegundoR][1];
    let Resultado;
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
    if (Multi == true){
        Texto.innerHTML = Texto.innerHTML.replaceAll("x", ".")
        console.warn(Multi)
    }
};
console.warn(Multi)
