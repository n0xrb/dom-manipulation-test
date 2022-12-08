/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/
const url = "https://platzi-avo.vercel.app/api/avo";
const appNode = document.getElementById("app");
/* WEB API
    1. Conectar al servidor
    2. Procesar la respuesta, y convertir dicho valor a JSON
    3. JSON -> DATA -> Renderizar info browser
*/
window
	.fetch(url)
	.then((response) => response.json())
	.then((responseParsed) => {
		const allItems = [];
		responseParsed.data.forEach((item) => {
			const image = document.createElement("img");
			image.src = `https://platzi-avo.vercel.app/${item.image}`;
			const title = document.createElement("h2");
			title.textContent = item.name;
			const price = document.createElement("div");
			price.textContent = item.price;

			const container = document.createElement("div");
			container.append(image, title, price);
			allItems.push(container);
		});
		appNode.append(...allItems);
	});
