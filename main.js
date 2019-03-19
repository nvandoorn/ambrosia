async function drawUI() {
  let root = document.getElementById("root");
  let markets = await cp.markets();
  let stockData = markets[0].quotes.USD.price;
  root.innerHTML = `<h1> BTC USD ${stockData}</ h1>`;
}

drawUI();

setInterval(drawUI, 2000);
