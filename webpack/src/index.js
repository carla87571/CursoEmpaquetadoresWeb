import profileImage from './assets/images/CarlaLinkTree.png';

const $links = document.getElementById("links");
const $name = document.querySelector("h1");

const data = {
  name: "Carla Mendía Díaz",
  nickname: "cmd",
  description: "...",
  avatar: profileImage,
  links: [
    {
      name: "mentorías",
      url: "https://example.com/",
      color: "fuchsia",
      emoji: "🎯",
    },
    {
      name: "blog",
      url: "https://example.com/",
      color: "red",
      emoji: "✍️",
    },
    {
      name: "podcast",
      url: "https://example.com/",
      color: "yellow",
      emoji: "🎙️",
    },
    {
      name: "cursos",
      url: "https://example.com/",
      color: "lime",
      emoji: "💡",
    },
    {
      name: "sponsors",
      url: "https://example.com/",
      color: "rose",
      emoji: "🚀",
    },
  ],
};

const main = () => {
  let name = document.createTextNode(data.name);
  
  // Seleccionar el elemento de la imagen y actualizar su src
  const $avatar = document.querySelector('img');
  if ($avatar) {
    $avatar.src = data.avatar;
    $avatar.alt = data.name;
  }
  
  let links = data.links
    .map((link) => {
      return `
    <div class="bg-${link.color}-200 px-4 py-5 w-full flex justify-between">
      <a
        class="text-sm font-bold text-${link.color}-600 text-center hover:text-${link.color}-800 cursor-pointer"
        href=${link.url}
        target="_blank"
      >
        ${link.name}
      </a>
      <span>${link.emoji}</span>
    </div>`;
    })
    .join("");
  let newItem = document.createElement("section");
  newItem.innerHTML = links;
  $links.appendChild(newItem);
  $name.appendChild(name);
};

main();

