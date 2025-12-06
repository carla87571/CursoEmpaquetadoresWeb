const $app=document.getElementById("app"),API="https://api.escuelajs.co/api/v1/products?offset=0&limit=10",main=async()=>{let a=await fetch("https://api.escuelajs.co/api/v1/products?offset=0&limit=10"),t=await a.json(),e=t?.map(a=>`
      <article class="Card">
        <img src="${a.images[0]}">
        <h2>
          ${a.title} <small>Precio $ ${a.price}</small>
        </h2>
      </article>
    `).join(""),i=document.createElement("section");i.classList.add("Items"),i.innerHTML=e,$app.appendChild(i)};main();
//# sourceMappingURL=parcel.ad19bf27.js.map
