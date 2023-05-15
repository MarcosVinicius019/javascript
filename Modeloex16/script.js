function verificar() {
 var ini = document.getElementById('txtini')
 var fim = document.getElementById('txtfim')
 var passos = document.getElementById('txtpass')

if (ini.value.length == 0 || fim.value.length == 0 || passos.value.length == 0)
 { window.alert("(ERRO) Faltam dados")
}

else{
var i = Number(ini.value)
var f = Number(fim.value)
var p = Number(passos.value)

for(var c = i; c <= f; c += p) {
   res.innerHTML += `${c} \u{1f92f}`
}
}
}
    

 

 
