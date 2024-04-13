function displayQuote(response) {
  new Typewriter("#quote", {
    strings: response.data.answer,
    autoStart: true,
    cursor: "",
    delay: 18,
  });
}

function generateQuote(event) {
  event.preventDefault();

  searchInput = document.querySelector("#user-search");
  let apiKey = "6dc2ff988bo9e47td8b8fab65e339a00";
  let aiPrompt = `User instructions: Generate an affirmation about ${searchInput}`;
  let context =
    "You are a human life coach that loves giving motivational affirmations that are precise,helpful and makes you feel good. Write a short affirmation using what is written in the user instructions. Do NOT write [object HTMLInputElement]";

  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${aiPrompt}&context=${context}&key=${apiKey}`;

  axios.get(apiUrl).then(displayQuote);
}

let quoteFormElement = document.querySelector("#quote-form");
quoteFormElement.addEventListener("submit", generateQuote);
