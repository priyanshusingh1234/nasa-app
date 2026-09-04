import './styles-and-stuff/my-style.css' // styles

var apiKey = import.meta.env.VITE_NASA_API_KEY;

  // console.log("key is", apiKey); // checking if it works
    // i hope vercel works plsss

let url = 'https://api.nasa.gov/planetary/apod?api_key=' + apiKey;

// saves apod to local storage history
// -- added this for the dashboard page
function saveToHistory(dat) {
  try {
    var HISTORY_KEY = 'apod_history';
    var existing = JSON.parse(localStorage.getItem(HISTORY_KEY) || '[]');

    // don't add duplicates for same apod date
    var alreadyThere = existing.some(function(h) { return h.apod_date === dat.date; });
    if (alreadyThere) {
      console.log('already in history, skipping'); // debug
      return;
    }

    existing.push({
      title:      dat.title,
      url:        dat.url,
      apod_date:  dat.date,
      media_type: dat.media_type || 'image',
      viewedAt:   new Date().toISOString()
    });

    // only keep last 50 to not fill up storage lol
    if (existing.length > 50) existing = existing.slice(-50);

    localStorage.setItem(HISTORY_KEY, JSON.stringify(existing));
    console.log('saved to history!'); // keep this
  } catch(e) {
    console.log('could not save history', e);
  }
}

  async function getNASA() {
      console.log("fetching...");
    
try {
  var response = await fetch(url);
        var dat = await response.json();
      console.log("here is data:", dat); // leave this here so I can see what comes back

  document.getElementById('stuff').innerHTML = `
        <h2>${dat.title}</h2>
        <br>
        <img src="${dat.url}" alt="nasa img" id="myImg">
        <br>
        <p id="textData">${dat.explanation}</p>
        <br>
        <a href="/dashboard.html" id="dashBtn">📊 go to my dashboard →</a>
      `;

  saveToHistory(dat); // save this view to history for dashboard

    } catch(e) {
  console.log("err", e)
  document.getElementById('stuff').innerHTML = "error getting data from nasa oh no";
    }
  }

getNASA();
