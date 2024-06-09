
const cardMenu = document.querySelector("#menu-container");

function mainCookieCard(cookies) {

    const divMenu = document.createElement("div");
    divMenu.className = "container-image";

    const cookieImg = document.createElement("img");
    cookieImg.src = cookies.img;
    cookieImg.alt = "MonsterChip";
    cookieImg.className = "cookie-image";

    const containerCookie = document.createElement("div");
    containerCookie.className = "cookie-container";

    const titleCookie = document.createElement("h3");
    titleCookie.className = "title-cookie";
    titleCookie.innerText = cookies.cookie;

    const cookiePrices = document.createElement("p");
    cookiePrices.innerText = `$${cookies.price}`;
    cookiePrices.className = "price";

    const cookieButton = document.createElement("button");
    cookieButton.innerText = "Seleccionar"
    cookieButton.className = "button-select";
    cookieButton.onclick = () => addYourCookie(cookies.id);
    cookieButton.onclick = () => Swal.fire({
        position: "top-end",
        icon: "success",
        title: "¡Tu mounstro vive!",
        showConfirmButton: false,
        timer: 1500
    });
    containerCookie.appendChild(titleCookie);
    containerCookie.appendChild(cookiePrices);
    containerCookie.appendChild(cookieButton);

    divMenu.appendChild(cookieImg);
    divMenu.appendChild(containerCookie);

    cardMenu.appendChild(divMenu);

};

cookieInventory.forEach(el => mainCookieCard(el));



