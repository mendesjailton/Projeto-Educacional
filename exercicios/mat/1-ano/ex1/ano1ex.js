// nós

let figuras = document.getElementById('figuras')
let contagem = document.getElementById('contagem')
let cont = 0
let correcao = document.getElementById('correcao')
let qtd
let erro = document.getElementById('erro')
    erro.style.display = 'none'
let acerto = document.getElementById('acerto')
    acerto.style.display = 'none'
let lousatxt = document.getElementById('lousa')
let prox = document.getElementById('prox')
let proxi = document.getElementById('proxi')
// gerando frutas randômicas


function geraFruta(){
    var numAlet = Math.floor(Math.random()*10) + 2;
    for (let c = 1; c < numAlet; c++){
        let newFig = document.createElement('span')
        let idFig = 'f'+ c
        newFig.id = idFig
        newFig.classList.add('fruta')
        newFig.innerHTML = '&#x1F951'
        figuras.appendChild(newFig)
    }
    qtd = numAlet -1
}

window.addEventListener('load',geraFruta)

// contador de frutas

function contando(){
    if(cont < 10){
        cont++
        contagem.innerHTML = cont
    }
}

figuras.addEventListener('click', contando)

// Resposta 

var resp1 = document.getElementById('resp1')
var resp2 = document.getElementById('resp2')
var resp3 = document.getElementById('resp3')
var resp4 = document.getElementById('resp4')
var resp5 = document.getElementById('resp5')
var resp6 = document.getElementById('resp6')
var resp7 = document.getElementById('resp7')
var resp8 = document.getElementById('resp8')
var resp9 = document.getElementById('resp9')
var resp10 = document.getElementById('resp10')

let check = 0
var resp = ''

function marca(event){
    let x = document.getElementById(event.target.id)
    if(check == 0){
    x.style.background = 'rgb(48, 196, 255)'
    resp = x.innerText
    check = 1
} else if(x.style.background == 'rgb(48, 196, 255)'){
    x.style.background = 'white'
    check = 0
}}

function blue(event){
    if(check == 0){
    let change = document.getElementById(event.target.id)  
    change.style.background = 'blue'
}}
function white(event){
    if(check == 0){
    let change2 = document.getElementById(event.target.id)
    change2.style.background = 'white'
}}

resp1.addEventListener('click', marca)
resp1.addEventListener('mouseenter', blue)
resp1.addEventListener('mouseout', white)
resp2.addEventListener('click', marca)
resp2.addEventListener('mouseenter', blue)
resp2.addEventListener('mouseout', white)
resp3.addEventListener('click', marca)
resp3.addEventListener('mouseenter', blue)
resp3.addEventListener('mouseout', white)
resp4.addEventListener('click', marca)
resp4.addEventListener('mouseenter', blue)
resp4.addEventListener('mouseout', white)
resp5.addEventListener('click', marca)
resp5.addEventListener('mouseenter', blue)
resp5.addEventListener('mouseout', white)
resp6.addEventListener('click', marca)
resp6.addEventListener('mouseenter', blue)
resp6.addEventListener('mouseout', white)
resp7.addEventListener('click', marca)
resp7.addEventListener('mouseenter', blue)
resp7.addEventListener('mouseout', white)
resp8.addEventListener('click', marca)
resp8.addEventListener('mouseenter', blue)
resp8.addEventListener('mouseout', white)
resp9.addEventListener('click', marca)
resp9.addEventListener('mouseenter', blue)
resp9.addEventListener('mouseout', white)
resp10.addEventListener('click', marca)
resp10.addEventListener('mouseenter', blue)
resp10.addEventListener('mouseout', white)

// Correção

function correto(){
    acerto.style.display = ''
    lousatxt.style.display = 'none'
}

function revisao(){
    let seuErro = document.getElementById('seuErro')
    let answer = document.getElementById('answer')
    answer.innerHTML = `A <strong> resposta correta </strong> é: ${qtd}`
    seuErro.innerText = `Você respondeu: ${resp}`
    erro.style.display = ''
    lousatxt.style.display = 'none'
}

function corrigir(){
    if (resp == qtd){
        correto()
    } else{
        revisao()
    }
}

function proxima(){
    location.reload();
}

correcao.addEventListener('click', corrigir)
prox.addEventListener('click',proxima)
proxi.addEventListener('click',proxima)