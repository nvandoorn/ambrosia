// Use the "Document Object Model" API to fetch
// our "root" node as defined in index.html
let root = document.getElementById("root");

// Define an "asyncrhonous" function (i.e we need to "await" it)
// to "draw" the market price onto our UI
async function drawUI() {
  // consult the coinpaprika API for better info
  // on these objects
  let markets = await cp.markets();
  let stockData = markets[0].quotes.USD.price;
  // set the `innerHTML` property of our root node
  root.innerHTML = `<h1>BTC USD ${stockData}</h1>`;
}

// initial draw
drawUI();

// redraw every 2000ms
setInterval(drawUI, 2000);
