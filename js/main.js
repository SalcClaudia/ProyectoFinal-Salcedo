
const cookieCart = JSON.parse(localStorage.getItem("cookieCart")) || [];


const cookieInventory = [
    {
        id: 0,
        cookie: "MonsterChip",
        price: 1.5,
        img: "https://imgs.search.brave.com/FYCe2yVgpxWuw9RlSCi6IZB7nTDb88kYDDT_raQTX4k/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9saWxs/dW5hLmNvbS93cC1j/b250ZW50L3VwbG9h/ZHMvMjAxMy8xMC9n/b29leS1tb250ZXIt/Y29va2llcy1yZXNp/emUtNy5qcGc",
        description: "Sumérgete en el mundo de los monstruos con nuestras MonsterChip, deliciosas galletas de chocolate con trozos de chocolate oscuro y blanco. Crujientes por fuera y suaves por dentro, estas galletas son un verdadero festín para cualquier monstruo hambriento.",
    },
    {
        id: 1,
        cookie: "Spots & Strawberries",
        price: 2,
        img: "https://imgs.search.brave.com/aia_6kRiXWB5TIf6VpN3gAuRpynK2FEwHr8Ku6Fb66s/rs:fit:860:0:0/g:ce/aHR0cHM6Ly90b2dl/dGhlcmFzZmFtaWx5/LmNvbS93cC1jb250/ZW50L3VwbG9hZHMv/MjAxOC8wNy9tb25z/dGVyLWNvb2tpZXMt/cmVjaXBlLTEuanBn",
        description: "Disfruta de un toque monstruosamente dulce con nuestras Spots & Strawberries. Galletas de vainilla salpicadas con generosos trozos de chocolate y fresas deshidratadas que explotan de sabor en cada mordisco. ¡Un deleite colorido y tentador!",
    },
    {
        id: 2,
        cookie: "Vampire Velvet Cookies",
        price: 3,
        img: "https://imgs.search.brave.com/FRLiYRSjT0bdlOg_GtS48SSIsmpduktUjhyDMpyUmZw/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pMC53/cC5jb20vd3d3LmF0/YXN0ZW9mbWFkbmVz/cy5jb20vd3AtY29u/dGVudC91cGxvYWRz/LzIwMTkvMTAvQ2hv/Y29sYXRlLU1vbnN0/ZXItQ29va2llcy0x/LTEuanBnP3Jlc2l6/ZT02ODEsMTAyNCZz/c2w9MQ",
        description: "Déjate seducir por el encanto oscuro de nuestras Vampire Velvet Cookies. Galletas de terciopelo rojo con un centro suave y un sabor intenso a cacao, coronadas con un toque de queso crema dulce. Perfectas para saciar el antojo más oscuro.",
    },
    {
        id: 3,
        cookie: "Zombie Brain Bites (with raspberry filling)",
        price: 2.5,
        img: "https://imgs.search.brave.com/al_JgXVrD1CUsztqPVWV-5IOHkRIigAwRN5XXZ5qPiE/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9oaXBz/LmhlYXJzdGFwcHMu/Y29tL2htZy1wcm9k/L2ltYWdlcy9oYWxs/b3dlZW4tY29va2ll/cy1oYWxsb3dlZW4t/Y29va2llcy1jcmVh/bS1jb29raWUtYmFy/cy02NDhjYWEyMmFi/ODQ5LmpwZWc_Y3Jv/cD0xeHc6MC44MzMz/MzMzMzMzMzMzMzM0/eGg7Y2VudGVyLHRv/cCZyZXNpemU9OTgw/Oio",
        description: "Atrévete a probar nuestras Zombie Brain Bites, galletas con un sorprendente y delicioso relleno de frambuesa. Su exterior crujiente oculta un corazón jugoso y explosivo, haciendo de cada mordida una experiencia monstruosamente deliciosa.",
    },
    {
        id: 4,
        cookie: "Mummy's Peanut Butter Fingers",
        price: 2,
        img: "https://imgs.search.brave.com/8VCKNeKIIGkkaeuQbSje0DIJZx_VNwq_B9aZFSTxxNY/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9mYW1p/bHljb29raWVyZWNp/cGVzLmNvbS93cC1j/b250ZW50L3VwbG9h/ZHMvMjAyMi8wNy9D/b29raWUtTW9uc3Rl/ci1Db29raWVzLTIy/LTg1OHgxMDI0Lmpw/Zw",
        description: "Deléitate con las Mummy's Peanut Butter Fingers, crujientes galletas de mantequilla de maní envueltas en delicadas capas de chocolate blanco que imitan las vendas de una momia. Una combinación perfecta de sabores que te hará volver por más.",
    },
];

function addYourCookie(id) {
    const cookieSelection = cookieInventory.find(el => el.id === id);
    cookieCart.push(cookieSelection);
    console.log(cookieCart);
    localStorage.setItem("cookieCart", JSON.stringify(cookieCart));
};