const fetch = (...args) =>
	import('node-fetch').then(({ default: fetch }) => fetch(...args));

let data;

function getProducts() {
	return fetch('http://127.0.0.1:5500/data.json')
		.then((response) => response.json())
		.then((json) => {
			return json;
		});
}

getProducts().then((response) => {
	const products = response.products;
	console.log(products.length);
	const newData = products.map((product) => {
		return {
			articleCode: product.articleCode,
			price: product.price,
			title: product.link,
			category: product.category,
			link: product.link,
		};
	});
	console.log(newData);
})
