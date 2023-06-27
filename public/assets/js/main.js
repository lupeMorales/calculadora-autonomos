"use strict";
const form = document.querySelector(".form");
const taxBase = document.querySelector(".js-tax-base");
const iva = document.querySelector(".js-iva");
const ivaResult = document.querySelector(".js-iva-result");
const irpf = document.querySelector(".js-irpf");
const irpfResult = document.querySelector(".js-irpf-result");
const price = document.querySelector(".js-price");
const totalInvoice = document.querySelector(".js-total");
const totalToReceive = document.querySelector(".js-total-to-receive");

function onlyNumberAllow(ev) {
  if (isNaN(ev.key) && ev.key !== "Backspace" && ev.key !== "Enter") {
    ev.preventDefault();
  }
}
function calculate(percentage) {
  return (percentage * parseInt(taxBase.value)) / 100;
}

function calculateResult() {
  const ivaAmount = calculate(parseInt(iva.value));
  const irpfAmount = calculate(parseInt(irpf.value));
  const baseAmount = parseInt(taxBase.value);

  ivaResult.innerText = ivaAmount.toFixed(2) + "€";
  irpfResult.innerText = irpfAmount.toFixed(2) + "€";
  price.innerText = (baseAmount + ivaAmount).toFixed(2) + "€";
  totalInvoice.innerText =
    (baseAmount + ivaAmount - irpfAmount).toFixed(2) + "€";
  totalToReceive.innerText = (baseAmount - irpfAmount).toFixed(2) + "€";
}

taxBase.addEventListener("keydown", onlyNumberAllow);
form.addEventListener("change", calculateResult);

//# sourceMappingURL=main.js.map
