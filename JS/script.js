// tirando bug resize
let bugResize  

// Variáveis menu inicial
let materia = document.getElementById('materia')
let btnMat = document.querySelector('#mat')
let btnPort = document.querySelector('#por')
let btnCien = document.querySelector('#cien')
let btnGeo = document.querySelector('#geo')
let imgAula = document.querySelector('#img')
let titulo = document.querySelector('#titulo')

// Trocando a imagem lateral
btnMat.addEventListener('mouseenter', () => imgAula.style.backgroundImage = 'url(imagens/mat.jpg)')
btnPort.addEventListener('mouseenter', () => imgAula.style.backgroundImage = 'url(imagens/port.jpg)')
btnCien.addEventListener('mouseenter', () => imgAula.style.backgroundImage = 'url(imagens/cien.jpg)')
btnGeo.addEventListener('mouseenter', () => imgAula.style.backgroundImage = 'url(imagens/geo.jpg)')

    //sala de aula
// Variáveis da sala
let sala = document.getElementById('sala')
let titSala = document.querySelector("#titSala")
let anoUm = document.querySelector('#anoUm')
let anoDois = document.querySelector('#anoDois')
let anoTres = document.querySelector('#anoTres')
let back = document.querySelector('#back')
let lousa = document.querySelector('#lousa') 
// Botão voltar seleção de ano 
let backAno = document.createElement('div')
backAno.id = 'voltaAno'
backAno.classList.add('opcao')
backAno.innerText = 'Ano do curso'
backAno.style.display = 'none'
sala.appendChild(backAno)
let voltaAno = document.getElementById('voltaAno')
// Redimensionando layout

btnMat.addEventListener('click', classTime)
btnPort.addEventListener('click', classTime)
btnCien.addEventListener('click', classTime)
btnGeo.addEventListener('click', classTime)

function classTime(event) {
    let qualAula = document.getElementById(event.target.id)
    materia.style.display = 'none'
    sala.style.display = 'grid'
    sala.style.height = '95vh'
    // Ajustes Sala
    
    switch (qualAula.id) {
        case 'mat':
            titSala.innerText = 'Matemática'
            titSala.style.webkitTextFillColor = 'var(--cor16)'
            sala.style.borderColor = 'var(--cor6)'
            break;
        case 'por':
            titSala.innerText = 'Português'
            titSala.style.webkitTextFillColor = 'var(--cor7)'
            sala.style.borderColor = 'var(--cor8)'
            anoUm.style.borderColor = 'var(--cor9)'
            anoDois.style.borderColor = 'var(--cor9)'
            anoTres.style.borderColor = 'var(--cor9)'
            back.style.borderColor = 'var(--cor9)'
            voltaAno.style.borderColor = 'var(--cor9)'
            break;
        case 'cien':
            titSala.innerText = 'Ciência'
            titSala.style.webkitTextFillColor = 'var(--cor10)'
            sala.style.borderColor = 'var(--cor11)'
            anoUm.style.borderColor = 'var(--cor12)'
            anoDois.style.borderColor = 'var(--cor12)'
            anoTres.style.borderColor = 'var(--cor12)'
            back.style.borderColor = 'var(--cor12)'
            voltaAno.style.borderColor = 'var(--cor12)'
            break;
        case 'geo':
            titSala.innerText = 'Geografia'
            titSala.style.webkitTextFillColor = 'var(--cor14)'
            sala.style.borderColor = 'var(--cor19)'
            anoUm.style.borderColor = 'var(--cor15)'
            anoDois.style.borderColor = 'var(--cor15)'
            anoTres.style.borderColor = 'var(--cor15)'
            back.style.borderColor = 'var(--cor15)'
            voltaAno.style.borderColor = 'var(--cor15)'
            break;
    }
}

// Lousa - quadro negro

anoUm.addEventListener('click', exibLousa)
anoDois.addEventListener('click', exibLousa)
anoTres.addEventListener('click', exibLousa)
    //exercícios - lista
function qualCurso(idAno) {
    switch(titSala.innerText){
        case 'Matemática':
            switch(idAno){
                case 'anoUm':
                    lousa.innerHTML = '<ol class="listaEx" id="matList"> <li id="mA1E1">Aprendendo a contar</li> <li id="mA1E2"> Sequência Numérica </li> <li id="mA1E3"> Par ou ímpar</li></ol>'
                    // Exibindo os exercícios
                    let mA1E1 = document.getElementById('mA1E1')
                    let mA1E2 = document.getElementById('mA1E2')
                    let mA1E3 = document.getElementById('mA1E3')
                    let matList = document.getElementById('matList')
                    mA1E1.addEventListener('click', listaExs)
                    mA1E2.addEventListener('click', listaExs)
                    mA1E3.addEventListener('click', listaExs)
                    break
                case 'anoDois':
                    alert("Lista ano dois")
                    break
                case 'anoTres':
                    alert("Lista ano três")
                    break
            }
            break;
        case 'Português':
            alert('Crie a lista')
            break;
        case 'Ciência':
            alert('Crie a lista')
            break;
        case 'Geografia':
            alert('Crie a lista')
            break;
    }

    function listaExs(event){
        matList.style.display = 'none'
        let exibiExs = document.createElement('iframe')
        exibiExs.id = 'exercicios'
        let idExs = event.target.id
        switch(idExs){
            case 'mA1E1':
                exibiExs.src = 'exercicios/mat/1-ano/ex1/contar.html'
                break;
            case 'mA1E2':
                exibiExs.src = 'exercicios/mat/1-ano/ex2/preencher.html'
                break;
            case 'mA1E3':
                exibiExs.src = 'exercicios/mat/1-ano/ex3/parimpar.html'
                break;
        }
        lousa.appendChild(exibiExs)
    }
}

function exibLousa(event){
    let getIdAno = event.target.id
    qualCurso(getIdAno)

    if(window.innerWidth < 768){
        anoUm.style.display = 'none'
        anoDois.style.display = 'none'
        anoTres.style.display = 'none'
        voltaAno.style.display = 'grid'
        lousa.style.display = 'block'
        bugResize = 1
    } 
}

//Adicionando função botão voltar ano 

voltaAno.addEventListener('click', () => {
    anoUm.style.display = 'grid'
    anoDois.style.display = 'grid'
    anoTres.style.display = 'grid'
    voltaAno.style.display = 'none'
    lousa.style.display = 'none'
    bugResize = 0
})

// tirando bug resize

window.addEventListener('resize', () => {
    if (window.innerWidth >= 768 && bugResize == 1){
        voltaAno.style.display = 'none'
        sala.style.gridTemplateColumns = 'auto auto'
        sala.style.gridTemplateRows = 'auto auto auto auto auto'

        anoUm.style.display = 'grid'
        anoDois.style.display = 'grid'
        anoTres.style.display = 'grid'
        lousa.style.display = 'grid'
        bugResize = 0
    } else if (window.innerWidth < 768 && bugResize == 0){
        
        voltaAno.style.display = 'grid'
        sala.style.gridTemplateColumns = 'auto'
        sala.style.gridTemplateRows = 'auto auto auto auto auto'

        anoUm.style.display = 'none'
        anoDois.style.display = 'none'
        anoTres.style.display = 'none'
        lousa.style.display = 'block'
        bugResize = 1        
    }
})


