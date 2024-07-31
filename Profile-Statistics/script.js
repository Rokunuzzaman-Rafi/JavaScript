const countersEl = document.querySelectorAll(".counter");

countersEl.forEach((counterEl) => {
  counterEl.innerText = "0";

  increementCounter();
  function increementCounter() {
    const dataCiel = counterEl.getAttribute("data-ceil");
    let currentNum = +counterEl.innerText;

    const increment = dataCiel / 15;
    currentNum = Math.ceil(currentNum + increment);

    if (currentNum < dataCiel) {
      counterEl.innerText = currentNum;
      setTimeout(increementCounter, 50);
    } else {
      counterEl.innerText = dataCiel;
    }
  }
});
