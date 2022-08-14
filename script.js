const h1 = document.querySelector('#h1');
const form = document.querySelector('#form');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const pResult = document.querySelector('#result');
const pAct = document.querySelector('#effect')

// form.addEventListener('submit', sumarImputValues);

// function sumarImputValues(event) {
//     // console.log({event});
//     event.preventDefault();
//     const sumaImputs = Number(input1.value) + Number(input2.value);
//     pResult.innerText = "Resultado: " + sumaImputs;
// }

btn.addEventListener('click', btnOnClick);
h1.addEventListener('mouseOver', RespondMouseOver);

function RespondMouseOver() {
    document.getElementById("effect").innerText = "MouseOver" + "<br>";
}

function btnOnClick(event) {
    // console.log({event});
    // event.btnOnClick();
    const sumaImputs = Number(input1.value) + Number(input2.value);
    pResult.innerText = "Resultado: " + sumaImputs;
}