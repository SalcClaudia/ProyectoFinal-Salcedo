const cardMenu = document.getElementById("menu-container");

function cookieCard(cookies) {

    const listMenu = document.createElement("div");
    listMenu.className = "listMenu";

    const cookieTitle = document.createElement("h4");
    cookieTitle.innerText = cookies.cookie;
    cookieTitle.className = "cookieTitle";

    const cookieImg = document.createElement("img");
    cookieImg.src = cookies.img;
    cookieImg.alt = "MonsterChip";
    cookieImg.className = "cookieImg";

    const cookiePrices = document.createElement("p");
    cookiePrices.innerText = `$${cookies.price}`;
    cookiePrices.className = "cookiePrices";

    const cookieText = document.createElement("p");
    cookieText.innerText = cookies.description;
    cookieText.className = "cookieText";

    const cookieButton = document.createElement("button");
    cookieButton.innerText = "Seleccionar"
    cookieButton.className = "cookieButton";
    cookieButton.onclick = () => addYourCookie(cookies.id);

    cardMenu.appendChild(cookieTitle);
    cardMenu.appendChild(cookieImg);
    cardMenu.appendChild(cookiePrices);
    cardMenu.appendChild(cookieText);
    cardMenu.appendChild(cookieButton);

    cardMenu.appendChild(listMenu);
};

cookieInventory.forEach(el => cookieCard(el));


const createYourMonster = document.getElementById("monster-button");

const cookieAlert = document.createElement("button");
cookieAlert.innerText = "Crear";
cookieAlert.className = "createcookie";
cookieAlert.onclick = () => Swal.fire({
    position: "top-end",
    icon: "success",
    title: "Your work has been saved",
    showConfirmButton: false,
    timer: 1500
});

createYourMonster.appendChild(cookieAlert);