function Cubo(){
    const a = parseFloat(document.getElementById("n1").value)
    let D = a**3
    document.getElementById('res1').innerHTML= "volumen =" + D.toFixed(0)
}
function Cilindro(){
    const a = parseFloat(document.getElementById("n1").value)
    const b = parseFloat(document.getElementById("n2").value)
    let D = Math.PI*a**2*b
    document.getElementById('res1').innerHTML= "volumen =" + D.toFixed(0)
}
function Cono(){
    const a = parseFloat(document.getElementById("n1").value)
    const b = parseFloat(document.getElementById("n2").value)
    let D = (1/3)* Math.PI*a**2*b
    document.getElementById('res1').innerHTML= "volumen =" + D.toFixed(0)
}
function Esfera(){
    const a = parseFloat(document.getElementById("n1").value)
    const b = parseFloat(document.getElementById("n2").value)
    let D = (4/3)*Math.PI*a**3
    document.getElementById('res1').innerHTML= "volumen =" + D.toFixed(0)
}