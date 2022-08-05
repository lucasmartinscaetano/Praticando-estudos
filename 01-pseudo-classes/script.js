function clicar(){
    var caixa = document.querySelector("input#caixa")
    var res = document.querySelector('div#res') 
    if (caixa == Number){
        window.alert = 'Não aceitamos números!!!'
    } 
    else{
        res.innerHTML = `Seu nome é: ${caixa.value}`
    }
}