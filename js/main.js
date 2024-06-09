const count = document.querySelector("#count");
const cookieCart = JSON.parse(localStorage.getItem("cookieCart")) || [];


const cookieInventory = [
    {
        id: 0,
        cookie: "MonsterChip",
        price: 1.5,
        img: "https://imgs.search.brave.com/32jDi8MBxvuJrnZyjnBwf6lFmwQni2sjH1c8AZfYBso/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/ZG9udHN3ZWF0dGhl/cmVjaXBlLmNvbS93/cC1jb250ZW50L3Vw/bG9hZHMvMjAyMi8w/OS9oYWxsb3dlZW4t/bW9uc3Rlci1jb29r/aWVzLTIyLTc2OHgx/MDI0LmpwZw",
    },
    {
        id: 1,
        cookie: "Spots & Strawberries",
        price: 2,
        img: "https://imgs.search.brave.com/aia_6kRiXWB5TIf6VpN3gAuRpynK2FEwHr8Ku6Fb66s/rs:fit:860:0:0/g:ce/aHR0cHM6Ly90b2dl/dGhlcmFzZmFtaWx5/LmNvbS93cC1jb250/ZW50L3VwbG9hZHMv/MjAxOC8wNy9tb25z/dGVyLWNvb2tpZXMt/cmVjaXBlLTEuanBn",
    },
    {
        id: 2,
        cookie: "Vampire Velvet Cookies",
        price: 3,
        img: "https://imgs.search.brave.com/FRLiYRSjT0bdlOg_GtS48SSIsmpduktUjhyDMpyUmZw/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pMC53/cC5jb20vd3d3LmF0/YXN0ZW9mbWFkbmVz/cy5jb20vd3AtY29u/dGVudC91cGxvYWRz/LzIwMTkvMTAvQ2hv/Y29sYXRlLU1vbnN0/ZXItQ29va2llcy0x/LTEuanBnP3Jlc2l6/ZT02ODEsMTAyNCZz/c2w9MQ",
    },
    {
        id: 3,
        cookie: "Zombie Brain Bites (with raspberry filling)",
        price: 2.5,
        img: "https://imgs.search.brave.com/ItOmsnyKtTReb7Z9GLqcgFRCmaOBDbVcNs_pIy4IviE/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9zcC1h/by5zaG9ydHBpeGVs/LmFpL2NsaWVudC90/b193ZWJwLHFfZ2xv/c3N5LHJldF9pbWcs/d180NjcsaF83MDAv/aHR0cHM6Ly9wYXJl/bnRpbmdjaGFvcy5j/b20vd3AtY29udGVu/dC91cGxvYWRzLzIw/MTUvMTAvYmxvb2Qt/c2hvdC1leWUtY3Vw/LWNha2VzLTQ2N3g3/MDAuanBn",
    },
    {
        id: 4,
        cookie: "Mummy's Peanut Butter Fingers",
        price: 2,
        img: "https://imgs.search.brave.com/UbYMYPacBB6nBwAR3xPMtggOSk9BuEY5S11d4LZYFwU/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9oaXBz/LmhlYXJzdGFwcHMu/Y29tL2htZy1wcm9k/L2ltYWdlcy9oYWxs/b3dlZW4tY29va2ll/cy1naG9zdC0xNTMw/ODkxNDE4LmpwZz9j/cm9wPTEuMDB4dzow/LjgzNHhoOzAsMC4w/MTU5eGgmcmVzaXpl/PTk4MDoq",
    },
    {
        id: 5,
        cookie: "Monsters & Bats",
        price: 4,
        img: "https://imgs.search.brave.com/8Ojxk_PYBAnJiOXZUGb3Lz0eem2pVPSIeE1BvE5LHNE/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9wdWJs/aXNoLnB1cmV3b3cu/bmV0L3dwLWNvbnRl/bnQvdXBsb2Fkcy9z/aXRlcy8yLzIwMjEv/MDkvaGFsbG93ZWVu/LWNvb2tpZXMtZGVj/b3JhdGVkLWhhbGxv/d2Vlbi1zdWdhci1j/b29raWVzLTE2Lmpw/ZWc_Zml0PTY4MCw4/NjA",
    },
];

function updateCartNumber() {
    let cookieCount = cookieCart.reduce((acc, el) => acc + el.cookieQuantity, 0);
    count.innerText = cookieCount;
};


function addYourCookie(id) {
    const cookieSelection = cookieInventory.find(el => el.id === id);
    if (cookieCart.some(el => el.id === cookieSelection)) {
        const cookieIndex = cookieCart.findIndex(el => el.id === cookieSelection);
        cookieCart[index].cookieQuantity++;
    } else {
        cookieSelection.cookieQuantity = 1;
        cookieCart.push(cookieSelection);
        localStorage.setItem("cookieCart", JSON.stringify(cookieCart));
        console.log(cookieCart);
    };
    updateCartNumber();
};


function deleteYourCookie(id) {
    let deletedCookie = cookieCart.filter(el => el.id !== id);
    localStorage.setItem("cookieCart", JSON.stringify(deletedCookie));
    cookieCart = deletedCookie;
};

const cookiesInCart = JSON.parse(localStorage.getItem("cookieCart"));

const fullCart = document.querySelector("#wrapper-cookie");


function cardCart(cart) {

    const orderContainer = document.createElement("div");
    orderContainer.className = "cookie-wrapper";

    const orderContainerDiv = document.createElement("div");
    orderContainerDiv.className = "wrapper";

    const orderImage = document.createElement("img");
    orderImage.src = cart.img
    orderImage.className = "galleta";

    const titlesDiv = document.createElement("div");
    titlesDiv.className = "order-name";




};