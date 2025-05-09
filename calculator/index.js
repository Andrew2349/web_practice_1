const percentH = document.getElementById("percentH");
const percentC = document.getElementById("percentC");
const percentS = document.getElementById("percentS");
const percentN = document.getElementById("percentN");
const percentO = document.getElementById("percentO");
const percentW = document.getElementById("percentW");
const percentA = document.getElementById("percentA");
const calculatorForm = document.getElementById("calculatorForm");
const result_div = document.getElementById("result");

const create_result_div = (hC, cC, sC, nC, oC, aC, hG, cG, sG, nG, oG, qPh, qCh, qGh, kPC, kPG)=>{
    result_div.innerHTML = "";

    const addResult = (text) => {
        const div = document.createElement("h4");
        div.textContent = text;
        result_div.appendChild(div);
    };

    addResult(`Коефіцієнт переходу від робочої до сухої маси становить: ${kPC.toFixed(2)}`);
    addResult(`Коефіцієнт переходу від робочої до горючої маси становить: ${kPG.toFixed(2)}`);
    addResult(`Склад сухої маси палива становитиме: ${hC.toFixed(2)}%, ${cC.toFixed(2)}%, ${sC.toFixed(2)}%, ${nC.toFixed(2)}%, ${oC.toFixed(2)}%, ${aC.toFixed(2)}%`);
    addResult(`Склад горючої маси палива становитиме: ${hG.toFixed(2)}, ${cG.toFixed(2)}, ${sG.toFixed(2)}, ${nG.toFixed(2)}, ${oG.toFixed(2)}`);
    addResult(`Нижча теплота згоряння для робочої маси за заданим складом компонентів палива становить: ${qPh.toFixed(2)} МДж/кг`);
    addResult(`Нижча теплота згоряння для сухої маси за заданим складом компонентів палива становить: ${qCh.toFixed(2)} МДж/кг`);
    addResult(`Нижча теплота згоряння для горючої маси за заданим складом компонентів палива становить: ${qGh.toFixed(2)} МДж/кг`);
}



let kPC = 0
let kPG = 0

let hC = 0
let cC = 0
let sC = 0
let nC = 0
let oC = 0
let aC = 0

let hG = 0
let cG = 0
let sG = 0
let nG = 0
let oG = 0


let qPh = 0
let qCh = 0
let qGh = 0


const calculate_qPh = (C, H, O, S, W) =>{
    return ((339 * C) + (1030 * H) - (108.8 * (O - S)) - (25 * W))/1000
}
const calculate_qCh = (qPh, W) =>{
    return (qPh + 0.025*W)*(100/(100-W))
}
const calculate_qGh = (qPh, W, A) =>{
    return (qPh + 0.025*W)*(100/(100-W-A))
}

calculatorForm.addEventListener("submit", () => {
    console.log("calculatorForm");
    const H = parseFloat(percentH.value);
    const C = parseFloat(percentC.value);
    const S = parseFloat(percentS.value);
    const N = parseFloat(percentN.value);
    const O = parseFloat(percentO.value);
    const W = parseFloat(percentW.value);
    const A = parseFloat(percentA.value);
    const sum =H+C+S+N+O+W+A
    console.log("sum", sum);
    if(Math.abs(sum-100) > 0.0001){
        alert("Сума всіх значеннь має дорівнювати 100%")
        return false
    }

    kPC = 100/(100-W)
    kPG = 100/(100-W - A)

    console.log("kPC", kPC);

    hC = H*kPC
    cC = C*kPC
    sC = S*kPC
    nC = N*kPC
    oC = O*kPC
    aC = A*kPC

    hG = H*kPG
    cG = C*kPG
    sG = S*kPG
    nG = N*kPG
    oG = O*kPG


    qPh = calculate_qPh(C, H, O, S, W);
    qCh = calculate_qCh(qPh, W);
    qGh = calculate_qGh(qPh, W, A);

    const sum_= hC+cC+sC+nC+oC+aC
    const sum_1= hG+cG+sG+nG+oG
    console.log("sum", sum);
    console.log("sum_1", sum_1);

    create_result_div(hC, cC, sC, nC, oC, aC, hG, cG, sG, nG, oG, qPh, qCh, qGh, kPC, kPG)
    return false
})


