let selecionar = document.querySelector('.select');
let chaveCifra = document.getElementById('chaveCont');
let radioBtn = document.querySelector('.radiobtn');
let codificar = document.getElementById('codificar');
let decodificar = document.getElementById('decodificar');
let resultBtn = document.getElementById('resultbtn');
let texto = document.getElementById('texto');
let resultado = document.getElementById('resultado');


// Somente se Cifra de César for escolhido, aparecerá a chave.
function selecao() {
    selecionar.addEventListener("click", function () {
        if (selecionar.value === "cifra") {
            chaveCifra.style.display = "block";
        } else {
            chaveCifra.style.display = "none";
        }
    });
}

// Radio Button e botão de resultado!
radioBtn.addEventListener("click", function () {
    if (codificar.checked) {
        resultBtn.innerHTML = "Codificar!";
    } else if (decodificar.checked) {
        resultBtn.innerText = "Decodificar!";
    }
});

// Base64 criptography
function base64() {
    let texto = document.getElementById('texto').value;

    if (codificar.checked) {
        let encodeBase64 = btoa(texto)
        return encodeBase64;
    } else if (decodificar.checked) {
        let decodeBase64 = atob(texto)
        return decodeBase64;
    }   
}

// Cifra de César criptography
function cifraDeCesar() {
    let texto = document.querySelector('#texto').value;
    let chave = parseInt(document.querySelector('#rangenumber').value);
    let saida = '';
  
    if (codificar.checked) {
      for (let i = 0; i < texto.length; i++) {
        if (texto[i] === texto[i].toUpperCase()) {
          saida += String.fromCharCode((texto.charCodeAt(i) + chave - 65) % 26 + 65); 
        } else {
          saida += String.fromCharCode((texto.charCodeAt(i) + chave - 97) % 26 + 97);
        }
      }
      return saida;
  
    } else if (decodificar.checked) {
      for (let i = 0; i < texto.length; i++) {
        if (texto.charCodeAt(i) >= 97 && texto.charCodeAt(i) <= 122) {
          saida += String.fromCharCode((texto.charCodeAt(i) - 97 -  chave + 26) % 26 + 97);
        } else if (texto.charCodeAt(i) >= 65 && texto.charCodeAt(i) <= 90) {
          saida += String.fromCharCode((texto.charCodeAt(i) - 65 - chave + 26) % 26 + 65);
        } else {
          saida += String.fromCharCode(texto.charCodeAt(i));
        }
      }
      return saida;
    }
  }

// Mostrando o resultado
resultBtn.addEventListener("click", function (event) {
    event.preventDefault();
    if (selecionar.value == "cifra") {
        resultado.value = cifraDeCesar();
    } else if (selecionar.value == 'base64') {
        resultado.value = base64();
    }
});

// Modal Base64

function abreInfo(infoID) {
  alert("A codificação Base64 é um processo de conversão de dados binários em um formato de string ASCII, convertendo esses dados binários em uma representação de caracteres de 6 bits. O método Base64 de codificação é usado quando dados binários, como imagens ou vídeo, são transmitidos por sistemas projetados para transmitir dados em formato de texto simples (ASCII).");
}

const tagBase64 = document.querySelector('.tag64');
tagBase64.addEventListener('click', () => abreInfo('infoContainer'));

// Modal Cifra de Cesar

function abreCesar(cesarID) {
  alert("É um tipo de cifra de substituição na qual cada letra do texto é substituída por outra, que se apresenta no alfabeto abaixo dela um número fixo de vezes. Por exemplo, com uma troca de três posições, A seria substituído por D, B se tornaria E, e assim por diante. O nome do método é em homenagem a Júlio César, que o usou para se comunicar com os seus generais.");
}

const tagCifra = document.querySelector('.tagcifra');
tagCifra.addEventListener('click', () => abreInfo('cesarContainer'));

