function calculateProfit() {

    let Pc = parseFloat(document.getElementById("Pc").value); // Середньодобова потужність (МВт)
    let sigma1 = parseFloat(document.getElementById("sigma1").value); // Початкове σ (МВт)
    let sigma2 = parseFloat(document.getElementById("sigma2").value); // Покращене σ (МВт)
    let price = parseFloat(document.getElementById("price").value); // Вартість електроенергії (грн/кВт·год)


    if (isNaN(Pc) || isNaN(sigma1) || isNaN(sigma2) || isNaN(price) || sigma2 >= sigma1) {
        alert("Будь ласка, введіть коректні значення. Покращене σ повинно бути менше за початкове.");
        return;
    }


    let delta_m1 = 0.2;  // 20% до покращення
    let delta_m2 = 0.68; // 68% після покращення


    let W1 = Pc * 24 * delta_m1;
    let P1 = W1 * price * 1000;
    let W2 = Pc * 24 * (1 - delta_m1);
    let S1 = W2 * price * 1000;
    let profit1 = P1 - S1;


    let W3 = Pc * 24 * delta_m2;
    let P2 = W3 * price * 1000;
    let W4 = Pc * 24 * (1 - delta_m2);
    let S2 = W4 * price * 1000;
    let profit2 = P2 - S2;


    document.getElementById("result").innerHTML = `
        <div class="alert alert-primary">
            <h5>📊 Результати розрахунків:</h5>
            <ul>
                <li><b>До покращення:</b></li>
                <ul>
                    <li>Енергія без небалансів: <b>${W1.toFixed(2)}</b> МВт·год</li>
                    <li>Прибуток: <b>${(P1 / 1000).toFixed(1)}</b> тис. грн</li>
                    <li>Енергія з небалансами: <b>${W2.toFixed(2)}</b> МВт·год</li>
                    <li>Штрафи: <b>${(S1 / 1000).toFixed(1)}</b> тис. грн</li>
                    <li>Чистий прибуток: <b>${(profit1 / 1000).toFixed(1)}</b> тис. грн</li>
                </ul>
                <li><b>Після покращення:</b></li>
                <ul>
                    <li>Енергія без небалансів: <b>${W3.toFixed(2)}</b> МВт·год</li>
                    <li>Прибуток: <b>${(P2 / 1000).toFixed(1)}</b> тис. грн</li>
                    <li>Енергія з небалансами: <b>${W4.toFixed(2)}</b> МВт·год</li>
                    <li>Штрафи: <b>${(S2 / 1000).toFixed(1)}</b> тис. грн</li>
                    <li>Чистий прибуток: <b>${(profit2 / 1000).toFixed(1)}</b> тис. грн</li>
                </ul>
            </ul>
        </div>
    `;
}
