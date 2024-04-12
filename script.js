function generateQuote(event) {
  event.preventDefault();

  new Typewriter("#quote", {
    strings: "Today will be a productive day :]",
    autoStart: true,
    cursor: "",
    delay: 18,
  });
}

let quoteFormElement = document.querySelector("#quote-form");
quoteFormElement.addEventListener("submit", generateQuote);
