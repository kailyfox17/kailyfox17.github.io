
const endpoint = 'https://type.fit/api/quotes'

async function getQuote() {
   // console.log("It works!");
   try {
    const response = await fetch(endpoint)
    if (!response.ok) {
        throw Error(response.statusText)
    }
    const json = await response.json();
    //console.log(json.question);
    displayQuote(json[Math.floor(Math.random() * 250)].text);
   }
   catch (err) {
    console.log(err);
    alert('Failed to fetch new trivia')
   }
}

function displayQuote(quote){
    const quoteText = document.querySelector("#js-quote-text");
    quoteText.textContent = quote;
}

getQuote();
