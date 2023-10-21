const btnEl = document.getElementById("btn");
const jokeEl = document.getElementById("joke");

const apiKey = "vS/Z3tQlbg/z6XXQIAPNPQ==5xD0sGN2IOiVub7v";

const options = {
  method: "GET",
  headers: {
    "X-Api-key": apiKey,
  },
};

const apURL = "https://api.api-ninjas.com/v1/dadjokes?limit=1"

async function getJoke() {
  try {
  jokeEl.innerHTML = "Updating...";
  btnEl.disabled = true;
  btnEl.innerHTML = "Loading...";
  const response = await fetch(apURL, options)
  const data = await response.json();
  btnEl.disabled = false;
  btnEl.innerHTML = "Tell me a joke";

  //console.log(data[0].joke);
  jokeEl.innerHTML = data[0].joke;
  
  } catch (error) {
    jokeEl.innerHTML = "An error happened, try again later";
    btnEl.disabled = false;
    btnEl.innerHTML = "Tell me a joke";
    console.log(error);
}

  
}

btnEl.addEventListener("click",getJoke)