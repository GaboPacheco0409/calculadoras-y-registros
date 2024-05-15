function IMC(){
    const a = parseFloat(document.getElementById("n1").value);
    const b = parseFloat(document.getElementById("n2").value);
    const D = b/a**2;
    document.getElementById('res').innerHTML=D.toFixed(0)
}
