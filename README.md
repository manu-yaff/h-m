index.js contains a simple script to fetch first page of H&M shoes page

Getting started

- Clone this repo
- Run `npm i`
- Run `npm run start-json`
- Run `node index.js` on another window or terminal
- You'll see 40 products

What did I do?

- In the H&M website, I searched for the world 'zapatos'
- I looked for the button to load more data ('Cargar más productos')
- I clicked the button and inspected the XHR requests
- I copied the url that was fetched. Then, I fetched it from Insomnia to get the data in json
- I saved the data in the file _data.json_
- I created a local server to use `fetchon the data`
- I fetched the json and return all products in the first page (40)
