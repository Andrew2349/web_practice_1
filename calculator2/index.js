const percentH = document.getElementById("percentH");
const percentC = document.getElementById("percentC");
const percentS = document.getElementById("percentS");
const percentV = document.getElementById("percentV");
const percentO = document.getElementById("percentO");
const percentW = document.getElementById("percentW");
const percentA = document.getElementById("percentA");
const percentQ = document.getElementById("percentQ");
const calculatorForm = document.getElementById("calculatorForm");
const result_div = document.getElementById("result");

const create_result_div = (hP, cP, sP, vP, oP, aP, qRi)=>{
    result_div.innerHTML = "";

    const addResult = (text) => {
        const div = document.createElement("h4");
        div.innerHTML = text;
        result_div.appendChild(div);
    };

    addResult(`Склад робочої маси мазуту становитиме: ` +
        `H<sup>P</sup>: ${hP.toFixed(2)}%, ` +
        `C<sup>P</sup>: ${cP.toFixed(2)}%, ` +
        `S<sup>P</sup>: ${sP.toFixed(2)}%, ` +
        `O<sup>P</sup>: ${oP.toFixed(2)}%, ` +
        `V<sup>P</sup>: ${vP.toFixed(2)} мг/кг, ` +
        `A<sup>P</sup>: ${aP.toFixed(2)}%`);
    addResult(`Нижча теплота згоряння мазуту на робочу масу для робочої маси за заданим складом 
    компонентів палива становить: ${qRi.toFixed(2)} МДж/кг`);

}




let hP = 0
let cP = 0
let sP = 0
let vP = 0
let oP = 0
let aP = 0

let qRi = 0




calculatorForm.addEventListener("submit", () => {
    console.log("calculatorForm");
    const H = parseFloat(percentH.value);
    const C = parseFloat(percentC.value);
    const S = parseFloat(percentS.value);
    const V = parseFloat(percentV.value);
    const O = parseFloat(percentO.value);
    const W = parseFloat(percentW.value);
    const A = parseFloat(percentA.value);
    const Q = parseFloat(percentQ.value);

    hP = H*(100-W-A)/100
    cP = C*(100-W-A)/100
    sP = S*(100-W-A)/100
    vP = V*(100-W-A)/100
    oP = O*(100-W-A)/100
    aP = A*(100-W-A)/100

    qRi = (Q*(100-W-A)/100)-0.025*W

    create_result_div(hP, cP, sP, vP, oP, aP, qRi)
    return false
})


