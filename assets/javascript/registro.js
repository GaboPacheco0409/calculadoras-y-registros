function Registro() {
    let a = (document.getElementById("n1").value).split(' ')
    let a1 = a[0]
    let a2 = a[1]
    let b = (document.getElementById("a1").value).split(' ')
    let b1 = b[0]
    let b2 = b[2]
    let c = (document.getElementById("f1").value).split(' ')
    let c1 = c.toString()
    document.getElementById("res1").innerHTML = (a1.at(0)).toLowerCase() + a2.at(0).toLowerCase() + a2.at(a2.length - 1).toLowerCase() + "z" + b1.substr(b1.length - 3, 3).toLowerCase() + c1.substr(2, 2) + c1.substr(c1.length - 2, 2) + c1.substr(5, 2) + "@gmail.com"

}