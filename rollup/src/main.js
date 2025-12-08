const $body = document.querySelector("body");
const API = "https://api.escuelajs.co/api/v1/products/?offset=5&limit=10";

import logo from "./assets/cmd-logo.svg";
import "./assets/cmd-logo.png";
import "./styles/styles.css";

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
    newImage.src = logo;
    newTitle.textContent = "Carla Mendía Díaz";
    
    newHeader.appendChild(newImage);
    newHeader.appendChild(newTitle);
    $body.appendChild(newHeader);
    $body.appendChild(newItem); 
};
main();
