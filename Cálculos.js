function calcular (){
    var a1 = document.getElementById("carga1")
    var a2 = document.getElementById("carga2")
    var a3 = document.getElementById("distancia")

    var q1 = Number(a1.value)/1000000
    var q2 = Number(a2.value)/1000000
    var d = Number(a3.value)
    const K = 9000000000

    var distancia = d*d
    var x = K*q1*q2*100
    var y = x/distancia
    var forca = Math.abs(y)

    document.getElementById("caixinha").innerText = "F = K.q1.q2/d^2 =" + "9.10^9."+ q1 + "." + q2 + "/" + distancia + " = " + forca + " N"
}