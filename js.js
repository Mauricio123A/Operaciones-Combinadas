// ⁰¹²³⁴⁵⁶⁷⁸⁹
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
var ResultadoBool = false;
let BotonResultado = function(){
    if (ResultadoBool == true){
        ResultadoBool = false;
        document.getElementById("res").style.backgroundColor = "red"
    }else{
        ResultadoBool = true;
        document.getElementById("res").style.backgroundColor = "green"
    };
}
let BotonFacil = function() {
    if (typeof spanRes !== "undefined"){
        spanRes.remove();
    };
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
    let text = OperacionesFaciles[PrimerR][0] + SignosFaciles[TercerR] + OperacionesFaciles2[SegundoR][0];
    if (text.search(/[(]/) == 0){
        text = text.replace("(", "");    text = text.replace(")", "");
    }
    
    if (ResultadoBool == false){
        spanRes = document.createElement("button");
        spanRes.innerHTML = "Mostrar";
        spanRes.style = "font-size: calc(2vw + 5px); color: white; background-Color: black;";
        spanRes.addEventListener("click",function(){
            text = text + " = " + Resultado;
            Texto.innerHTML = text;
            spanRes.remove();
        });
        document.body.appendChild(spanRes);
    }else{
        text = text + " = " + Resultado;
    }
    Texto.innerHTML = text;
    if (Multi == true){
        Texto.innerHTML = Texto.innerHTML.replaceAll("x", ".")
        console.warn(Multi)
    }

};
let BotonNormal = function() {
    if (typeof spanRes !== "undefined"){
        spanRes.remove();
    };
    let NumerosPotencias = [Math.floor(Math.random() *4), Math.floor(Math.random() *4), Math.floor(Math.random() *4), Math.floor(Math.random() *4)];
    let Potencias = [];
    for (i = 0; i < 4; i++){
        if (NumerosPotencias[i] == 0){
            Potencias[i] = "";
        }else if (NumerosPotencias[i] == 1){
            Potencias[i] = "¹";
        }else if (NumerosPotencias[i] == 2){
            Potencias[i] = "²";
        }else{
            Potencias[i] = "³";
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

    text = text.replaceAll("¹", "**1");
    text = text.replaceAll("²", "**2");
    text = text.replaceAll("³", "**3");
    Resultado = eval(text);
    text = text.replaceAll("**1", "¹");
    text = text.replaceAll("**2", "²");
    text = text.replaceAll("**3", "³");
    
    if (text.search(/[(]/) == 0){
        text = text.replace("(", "");    text = text.replace(")", "");
    };

    if (ResultadoBool == false){
        spanRes = document.createElement("button");
        spanRes.innerHTML = "Mostrar";
        spanRes.style = "font-size: calc(2vw + 5px); color: white; background-Color: black;";
        spanRes.addEventListener("click",function(){
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
            spanRes.remove();
        });
        document.body.appendChild(spanRes);
    }else{
        text = text + " = " + Resultado;
    }
    Texto.innerHTML = text;
    if (Multi == true){
        Texto.innerHTML = Texto.innerHTML.replaceAll("*", ".");
    }else{
        Texto.innerHTML = Texto.innerHTML.replaceAll("*", "x");
    };
    if (Resultado > 10000 || Resultado < -10000){
        if (ResultadoBool == false) {spanRes.remove();}
        BotonNormal();
    };
};
let BotonDificil = function() {
    // Soy un vago de mierda, no quería cambiar el nombre de normal a díficil 😁
    if (typeof spanRes !== "undefined"){
        spanRes.remove();
    };
    let NumerosPotencias = [Math.floor(Math.random() *4), Math.floor(Math.random() *4), Math.floor(Math.random() *4), Math.floor(Math.random() *4)];
    let Potencias = [];
    for (i = 0; i < 4; i++){
        if (NumerosPotencias[i] == 0){
            Potencias[i] = "¹";
        }else if (NumerosPotencias[i] == 1){
            Potencias[i] = "²";
        }else if (NumerosPotencias[i] == 2){
            Potencias[i] = "³";
        }else{
            Potencias[i] = "⁴";
        };
    };

    let FraccionesRandomNormales = [[Math.floor(Math.random() *19 +1),Math.floor(Math.random() *4 +1)], [Math.floor(Math.random() *19 +1),Math.floor(Math.random() *4 +1)], [Math.floor(Math.random() *19 +1),Math.floor(Math.random() *4 +1)], [Math.floor(Math.random() *19 +1),Math.floor(Math.random() *4 +1)]]
    let NumerosRandomNormales = [Math.floor(Math.random() *19 +1), Math.floor(Math.random() *19 +1), Math.floor(Math.random() *19 +1), Math.floor(Math.random() *19 +1)];
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
        ["(" + (NumerosRandomNormales[1] * -1) + ")" + Potencias[1] + " * " + "(" + (NumerosRandomNormales[0] * -1) + ")" + Potencias[0]],

        ["(" + "(" +(NumerosRandomNormales[1] * -1) + ")" + Potencias[1] + " - " + "(" + (NumerosRandomNormales[0] * -1) + ")" + ")" + Potencias[0]],
        ["(" + "(" +(NumerosRandomNormales[1] * -1) + ")" + Potencias[1] + " + " + "(" + (NumerosRandomNormales[0] * -1) + ")" + ")" + Potencias[0]],
        ["(" + "(" + (NumerosRandomNormales[1] * -1) + ")" + Potencias[1] + " * " + "(" + (NumerosRandomNormales[0] * -1) + ")" + ")" + Potencias[0]],

        ["(" + (FraccionesRandomNormales[0][0] + "/" + FraccionesRandomNormales[0][1])+ ") + Potencias[0] + " - " + NumerosRandomNormales[1] + Potencias[1]],
        ["(" + (FraccionesRandomNormales[0][0] + "/" + FraccionesRandomNormales[0][1])+ ") + Potencias[0] + " + " + NumerosRandomNormales[1] + Potencias[1]],
        ["(" + (FraccionesRandomNormales[0][0] + "/" + FraccionesRandomNormales[0][1])+ ") + Potencias[0] + " * " + NumerosRandomNormales[1] + Potencias[1]],
        ["(" + "-" + "(" + (FraccionesRandomNormales[0][0] + "/" + FraccionesRandomNormales[0][1]) + ")" + ")" + Potencias[0] + " - " + NumerosRandomNormales[1] + Potencias[1]],
        ["(" + "-" + "(" + (FraccionesRandomNormales[0][0] + "/" + FraccionesRandomNormales[0][1]) + ")" + ")" + Potencias[0] + " + " + NumerosRandomNormales[1] + Potencias[1]],
        ["(" + "-" + "(" + (FraccionesRandomNormales[0][0] + "/" + FraccionesRandomNormales[0][1]) + ")" + ")" + Potencias[0] + " * " + NumerosRandomNormales[1] + Potencias[1]],
        [NumerosRandomNormales[1] + Potencias[1] + " - " + "(" + (FraccionesRandomNormales[0][0] + "/" + FraccionesRandomNormales[0][1]) + ") + Potencias[0]],
        [NumerosRandomNormales[1] + Potencias[1] + " + " + "(" + (FraccionesRandomNormales[0][0] + "/" + FraccionesRandomNormales[0][1]) + ") + Potencias[0]],
        [NumerosRandomNormales[1] + Potencias[1] + " * " + "(" + (FraccionesRandomNormales[0][0] + "/" + FraccionesRandomNormales[0][1]) + ") + Potencias[0]],
        [NumerosRandomNormales[1] + Potencias[1] + " - " + "(" + "-" + "(" + (FraccionesRandomNormales[0][0] + "/" + FraccionesRandomNormales[0][1]) + ")" + ")" + Potencias[0]],
        [NumerosRandomNormales[1] + Potencias[1] + " + " + "(" + "-" + "(" + (FraccionesRandomNormales[0][0] + "/" + FraccionesRandomNormales[0][1]) + ")" + ")" + Potencias[0]],
        [NumerosRandomNormales[1] + Potencias[1] + " * " + "(" + "-" + "(" + (FraccionesRandomNormales[0][0] + "/" + FraccionesRandomNormales[0][1]) + ")" + ")" + Potencias[0]],
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
        ["(" + (NumerosRandomNormales[3] * -1) + ")" + Potencias[3] + " * " + "(" + (NumerosRandomNormales[2] * -1) + ")" + Potencias[2]],

        ["(" + "(" + (NumerosRandomNormales[3] * -1) + ")" + Potencias[3] + " - " + "(" + (NumerosRandomNormales[2] * -1) + ")" + ")" + Potencias[2]],
        ["(" + "(" + (NumerosRandomNormales[3] * -1) + ")" + Potencias[3] + " + " + "(" + (NumerosRandomNormales[2] * -1) + ")" + ")" + Potencias[2]],
        ["(" + "(" + (NumerosRandomNormales[3] * -1) + ")" + Potencias[3] + " * " + "(" + (NumerosRandomNormales[2] * -1) + ")" + ")" + Potencias[2]]
    ];
    let SignosNormales = [" + ", " * ", " - ", " * "];
    let PrimerR = Math.floor(Math.random() * OperacionesNormales.length);
    let SegundoR = Math.floor(Math.random() * OperacionesNormales2.length);
    let TercerR = Math.floor(Math.random() * 3);
    console.warn(Potencias, NumerosRandomNormales)
    console.warn(OperacionesNormales[PrimerR][0], OperacionesNormales2[SegundoR][0])
    let text = OperacionesNormales[PrimerR][0] + SignosNormales[TercerR] + OperacionesNormales2[SegundoR][0];
    let Resultado;

    text = text.replaceAll("¹", "**1");
    text = text.replaceAll("²", "**2");
    text = text.replaceAll("³", "**3");
    text = text.replaceAll("⁴", "**4");
    Resultado = eval(text);
    text = text.replaceAll("**1", "¹");
    text = text.replaceAll("**2", "²");
    text = text.replaceAll("**3", "³");
    text = text.replaceAll("**4", "⁴");
    
    if (text.search(/[(]/) == 0){
        text = text.replace("(", "");    text = text.replace(")", "");
    };
    if (ResultadoBool == false){
        spanRes = document.createElement("button");
        spanRes.innerHTML = "Mostrar";
        spanRes.style = "font-size: calc(2vw + 5px); color: white; background-Color: black;";
        spanRes.addEventListener("click",function(){
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
            spanRes.remove();
        });
        document.body.appendChild(spanRes);
    }else{
        text = text + " = " + Resultado;
    }
    Texto.innerHTML = text;
    if (Multi == true){
        Texto.innerHTML = Texto.innerHTML.replaceAll("*", ".");
    }else{
        Texto.innerHTML = Texto.innerHTML.replaceAll("*", "x");
    };
    if (Resultado > 10000 || Resultado < -10000){
        if (ResultadoBool == false) {spanRes.remove();}
        BotonDificil();
    };
};
console.warn(Multi)
