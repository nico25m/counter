const divContainer = document.querySelector(".container");

const divCounter = document.createElement("div");
divCounter.className = "counter";
divContainer.append(divCounter);

const divMeno = document.createElement("div");
divMeno.className = "meno";
const buttonMeno = document.createElement("button");
buttonMeno.className = "meno-btn";
buttonMeno.textContent = "-";
divMeno.append(buttonMeno);

const divNumero = document.createElement("div");
divNumero.className = "numero";
let numero = document.createElement("input");
numero.className = "input-numero";
divNumero.appendChild(numero);
numero.value = 0;
numero.disabled = true;

const buttonReset = document.createElement("button");
buttonReset.className = "reset-btn";
buttonReset.textContent = "Reset";
divNumero.appendChild(buttonReset);

const divPiu = document.createElement("div");
divPiu.className = "piu";
const buttonPiu = document.createElement("button");
buttonPiu.className = "piu-btn";
buttonPiu.textContent = "+";
divPiu.append(buttonPiu);

divCounter.append(divMeno, divNumero, divPiu);

buttonMeno.addEventListener("click", () => {
  if (numero.value === "0") {
    alert("0 è il minimo!");
  } else {
    numero.value--;
  }
  nascondi();
});

buttonPiu.addEventListener("click", () => {
  numero.value++;
  nascondi();
});

buttonReset.addEventListener("click", () => {
  numero.value = "0";
  nascondi();
});

function nascondi() {
  if (numero.value === "0") {
    buttonReset.hidden = true;
  } else {
    buttonReset.hidden = false;
  }
}

nascondi();