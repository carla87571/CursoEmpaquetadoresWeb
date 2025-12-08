var img = "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' width='512' height='512'%3e %3crect width='512' height='512' rx='80' fill='black'/%3e %3ctext x='256' y='330' font-family='Arial%2c Helvetica%2c sans-serif' font-size='180' font-weight='bold' fill='white' text-anchor='middle' letter-spacing='0'%3eCMD%3c/text%3e%3c/svg%3e";

const $body = document.querySelector("body");
const API = "https://api.escuelajs.co/api/v1/products/?offset=5&limit=10";

const main = async () => {
    const response = await fetch(API);
    const products = await response.json();
    const output = products.map((product) => {
        return `
        <article class="Card">
            <img src="${product.images[0]}" alt="${product.title}" />
            <h2>${product.title}</h2>
            <p>${product.price} $</p>
        </article>
        `;
    }).join("");
    const newItem = document.createElement("section");
    newItem.classList.add("Items");
    newItem.innerHTML = output;

    const newHeader = document.createElement("header");
    const newImage = document.createElement("img");
    const newTitle = document.createElement("h1");
    newImage.src = img;
    newTitle.textContent = "Carla Mendía Díaz";
    
    newHeader.appendChild(newImage);
    newHeader.appendChild(newTitle);
    $body.appendChild(newHeader);
    $body.appendChild(newItem); 
};
main();
//# sourceMappingURL=bundle.js.map
