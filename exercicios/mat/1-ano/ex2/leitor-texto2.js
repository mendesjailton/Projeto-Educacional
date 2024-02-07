// Leitor de texto

var txtTit = document.getElementById('txtTit')
var txt1 = document.getElementById('txt1')
var txt2 = document.getElementById('txt2')
var voz1 = document.getElementById('voz1')
var voz2 = document.getElementById('voz2')
var voz3 = document.getElementById('voz3')
var voz4 = document.getElementById('voz4')
var synth = window.speechSynthesis

voz1.addEventListener('click', chamaVoz)
voz2.addEventListener('click', chamaVoz)
voz3.addEventListener('click', chamaVoz)
voz4.addEventListener('click', chamaVoz)
voz5.addEventListener('click', chamaVoz)
voz6.addEventListener('click', chamaVoz)
voz8.addEventListener('click', chamaVoz)
voz9.addEventListener('click', chamaVoz)

function chamaVoz(event){
    var idTxt = event.target.id
    var ler = ''
    switch(idTxt){
        case 'voz1':
            ler = voz1.nextElementSibling.innerText;
            break;
        case 'voz2':
            ler = voz2.nextElementSibling.innerText;
            break;
        case 'voz3':
            ler = voz3.nextElementSibling.innerText;
            break;
        case 'voz4':
            ler = voz4.nextElementSibling.innerText;
            break;
        case 'voz5':
            ler = voz5.nextElementSibling.innerText;
            break;
        case 'voz6':
            ler = voz6.nextElementSibling.innerText;
            break;
        case 'voz8':
            ler = voz8.nextElementSibling.innerText;
            break;
        case 'voz9':
            ler = voz9.nextElementSibling.innerText;
            break;
    }
        var toSpeak = new SpeechSynthesisUtterance(ler)
        var voices = synth.getVoices()
        var voice = voices.find(v => v.name === "Google português do Brasil")
        toSpeak.voice = voice
        synth.speak(toSpeak);
}
