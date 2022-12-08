const url = "https://platzi-avo.vercel.app/api/avo";
const appNode = document.getElementById("app");

const formatPrice = (price) => {
	const newPrice = new window.Intl.NumberFormat("en-EN", {
		style: "currency",
		currency: "USD",
	}).format(price);
	return newPrice;
};

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
			image.className = "h-16 w-16 md:h-24 md:w-24 rounded-full mx-auto md:mx-0 md:mr-6";
			image.src = `https://platzi-avo.vercel.app/${item.image}`;

			const title = document.createElement("h2");
			title.className = "text-md text-black font-bold";
			title.textContent = item.name;

			const price = document.createElement("div");
			price.className = "text-gray-600 text-sm";
			price.textContent = formatPrice(item.price);

			const container = document.createElement("div");
			const subContainer = document.createElement("div");
			subContainer.className = "text-center md:text-left";
			subContainer.append(title, price);

			container.className = "md:flex bg-white rounded-lg p-6 hover:bg-gray-300";
			container.append(image, subContainer);
			allItems.push(container);
		});
		appNode.append(...allItems);
	});
