function clicou(){

    var data = new Date()
    var anoAtual = data.getFullYear()

    var ano = window.document.getElementById("ano")
    var h = window.document.getElementById("hom")
    var m = window.document.getElementById("mul")
    var butao = window.document.getElementById("verificar")
 

    if(ano.value.length == 1 || ano.value >anoAtual){
        window.alert("[ERRO] verifica o ano e tente novamente")
    }
    else{
        var sexF = document.getElementsByName('radio')
        var idade = anoAtual - Number(ano.value)
       
        var genero = ""
        if(sexF[0].checked){
            genero = "Homem"
        }
        else if(sexF[1].checked){
            genero = "Mulher"
        }
        butao.innerHTML = "Detectamos "+genero+" com "+idade+" anos"
    }
}
