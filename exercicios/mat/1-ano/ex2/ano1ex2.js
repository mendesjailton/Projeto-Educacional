// nós
let listSeq = document.getElementById('listSeq')
let count = 1
let respC
let btnCorr =  document.getElementById('correcao2')
var  txtTit = document.getElementById('txtTit')
var textoTit = txtTit.innerText
var tit2 = 'Sequência numérica'
var lousa2 = document.getElementById('lousa2')
var acerto2 = document.getElementById('acerto2')
    acerto2.style.display = 'none'
var erro2 = document.getElementById('erro2')
    erro2.style.display = 'none'

// Gerando números em sequência

function sequencia(){
    var numAlet = Math.floor(Math.random()*20) + 7
    let seqIni = numAlet - 6
    for(let c = seqIni; c < numAlet; c++){
        let newN = document.createElement('li')
        // let idN = 'n'+ c
        newN.id = 'n' + count
        if (count == 4){
            respC = c + 1
            newN.innerHTML = "<input type='text' size='1' id='fill' maxlength='2' required></input>"
            listSeq.appendChild(newN)
        } else {
            newN.innerText = seqIni + count
            listSeq.appendChild(newN)
        }
        count++
    }
}

window.addEventListener('load', sequencia)
// corrigindo

function corrigindo(){
    let nFill = document.getElementById('fill').value
    console.log(nFill)
    
    if(nFill == respC){
        function correto(){
            lousa2.style.display = 'none'
            acerto2.style.display = ''
        }
        correto()
    } else {
        function revisao(){
            lousa2.style.display = 'none'
            erro2.style.display = ''
            var erro = document.getElementById('SeuErro')
            erro.innerText = nFill
        }
        revisao()
    }

}

btnCorr.addEventListener('click', corrigindo)

//próxima questão

let prox = document.getElementById('prox')
let proxi = document.getElementById('proxi')

function proxima(){
    location.reload();
}

prox.addEventListener('click',proxima)
proxi.addEventListener('click',proxima)



