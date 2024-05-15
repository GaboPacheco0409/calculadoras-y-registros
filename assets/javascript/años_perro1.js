function formula(){
    const c = parseFloat(document.getElementById("n1").value);
    const R = 16 * Math.log(c) + 31;
    document.getElementById('res1').innerHTML=R.toFixed(2);
}
function regla7(){
    const b = parseFloat(document.getElementById("n1").value);
    const E = 7 * b;
    document.getElementById('res1').innerHTML=E.toFixed(2);
}