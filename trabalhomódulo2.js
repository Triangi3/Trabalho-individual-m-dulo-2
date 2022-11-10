let encode = document.querySelector("#encode");
let decode = document.querySelector("#decode");
let output = document.querySelector("textarea");
let selecionar = document.querySelector('.select');
let chaveCifra = document.getElementById('chaveCont');
let radioBtn = document.querySelector('.radiobtn');
let codificar = document.getElementById('codificar');
let decodificar = document.getElementById('decodificar');
let resultBtn = document.getElementById('resultbtn');
let texto = document.getElementById('texto');


encode.addEventListener("click", () => {
output.value = btoa(output.value);
});

decode.addEventListener("click", () => {
output.value = atob(output.value);
});

function select() {
    select.addEventListener("click", function () {
        if (select.value === "cifra") {
            chaveCifra.style.display = "block";
        } else {
            chaveCifra.style.display = "none";
        }
    });
}

