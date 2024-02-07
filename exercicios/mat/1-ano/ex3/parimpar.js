// tela de erro e acerto

let acerto = document.getElementById('acerto')
    acerto.style.display = 'none'
let exibEx3 = document.getElementById('exibEx3')
    exibEx3.style.display = ''
let erro = document.getElementById('erro')
    erro.style.display = 'none'
let par = []

// Gerando números aleatórios

let listaN = document.getElementById('listaN')
let repete = []
let count = 1
let idCount

function sort(){
    for(let c = 1; c <= count; c++){
        if(count == 7){
            break;
        }
        let newN = document.createElement('li')
        newN.id = 'r' + count
        newN.classList.add('pointer')
        let numAlet = Math.floor(Math.random()*25) + 1
        newN.innerText = numAlet
        
        if(repete.indexOf(numAlet)==-1){
            repete.push(numAlet)
            listaN.appendChild(newN)
            count++
        } else {
            sort()
        }
    }
}

window.addEventListener('load', sort)

// seleção de resposta

function nosResp(){
    let r1 = document.getElementById('r1')
    let r2 = document.getElementById('r2')
    let r3 = document.getElementById('r3')
    let r4 = document.getElementById('r4')
    let r5 = document.getElementById('r5')
    let r6 = document.getElementById('r6')

    r1.addEventListener('click',xis)
    r2.addEventListener('click',xis)
    r3.addEventListener('click',xis)
    r4.addEventListener('click',xis)
    r5.addEventListener('click',xis)
    r6.addEventListener('click',xis)
}

window.addEventListener('load',nosResp)

let resps = []

function xis(event){
    let idXis = event.target.id
    let passaId = document.getElementById(idXis)
    let n = Number(passaId.innerText)
    let valid = resps.indexOf(n)
    if(valid == -1){
        resps.push(n)
        passaId.style.borderColor = 'blue'
    } else {
        passaId.style.borderColor = ''
        resps.splice(valid,1)
    }
}

//correção

let correcao = document.getElementById('correcao')
correcao.addEventListener('click', corrigir)

function corrigir(){
    if(resps.length == 0){
        location.reload();
    } else {
    let parImpar 
    let impar = []
    let seuErro = document.getElementById('seuErro')
    for(let c = 0; c < repete.length; c++){
        parImpar = repete[c]%2
        if(parImpar == 0){
            par.push(repete[c])
        } else{
            impar.push(repete[c])
        }
    }
    
    for (let c in resps){
        if (resps[c] == par[c] & resps.length == par.length){
            exibEx3.style.display = 'none'
            acerto.style.display = ''
            console.log(par)
            console.log(resps)
        } else {
            exibEx3.style.display = 'none'
            erro.style.display = ''
            seuErro.innerText = `Você respondeu: ${String(resps).replace('e',' , ')}.` 
        }
    }

    

    } 
  }


//próxima questão

let prox = document.getElementById('prox')
let proxi = document.getElementById('proxi')

function proxima(){
    location.reload();
}

prox.addEventListener('click',proxima)
proxi.addEventListener('click',proxima)