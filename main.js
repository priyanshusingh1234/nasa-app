import './styles-and-stuff/my-style.css' // styles

var apiKey = import.meta.env.VITE_NASA_API_KEY;

// console.log("key is", apiKey); // checking if it works

let url = 'https://api.nasa.gov/planetary/apod?api_key=' + apiKey;

async function getNASA() {
  console.log("fetching...");
  
  try {
    var response = await fetch(url);
    var dat = await response.json();
    console.log(dat); // leave this here so I can see what comes back

    document.getElementById('stuff').innerHTML = `
      <h2>${dat.title}</h2>
      <br>
      <img src="${dat.url}" alt="nasa img" id="myImg">
      <br>
      <p id="textData">${dat.explanation}</p>
    `;

  } catch(e) {
    console.log("err", e)
    document.getElementById('stuff').innerHTML = "error getting data from nasa";
  }
}

getNASA();
