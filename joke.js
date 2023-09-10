const btnEl = document.getElementById("btn");
const jokeEl = document.getElementById("joke");

 const apiKey = "rx0OjzpRCGEHu/G+8OpL1A==DqBLV8ACh3e1dJz5";
 const options = {
    method: "GET",
    headers: {
        "X-Api-Key":apiKey,
    },

 };
 const apiURL = "https://api.api-ninjas.com/v1/dadjokes?limit=1";
 async function getJoke() {
    const response = await fetch(apiURL, options);
    const data = await response.json();
    jokeEl.innerText = data[0].joke;
 }


btnEl.addEventListener("click",getJoke)
