function calcular(){
    const K = 8.9875 * Math.pow(10, 9);
    const Q1 = parseFloat (document.getElementById('Q1').value);
    const Q2 = parseFloat (document.getElementById('Q2').value);
    const D = parseFloat (document.getElementById('D').value);
const result =9000000 * (Q1 *Q2) / (D * D);
document.getElementById('result').innerText = result.toExponential(2);
}

function calcular1(){
    const Q = parseFloat (document.getElementById('Q').value);
    const v = parseFloat (document.getElementById('v').value);
    const B = parseFloat (document.getElementById('B').value);
    const θ = parseFloat (document.getElementById('θ').value);
const force =(Q * v * B) * (θ);
document.getElementById('force').innerText = force

}

