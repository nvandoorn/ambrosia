# ambrosia

A small project to fetch financial data from [coinpaprika](https://coinpaprika.com/) and then display them.

## Status

This app will fetch the latest USD market price of the first market (usually BTC) and then display it in an `<h1>` tag. A small demo to illustrate the concept.

## Expansion Ideas

Use the Chart.js library to chart price history. The process usually looks like this.

Note that this is only one possible way of doing it, and many others are just as valid.

1. Fetch the data from your API (coinpaprika in this case)
2. Transform it into the correct "shape" for Chart.js (what do the objects need to look like?)
3. Pass this "transformed" object into a Chart.js object and draw it on the DOM (usually involves a `<canvas>`/`<svg>`)
4. Perform those 3 steps on an interval to make it seem real-time.
