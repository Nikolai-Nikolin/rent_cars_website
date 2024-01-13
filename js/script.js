"use strict";

const cars = [
    {
        name: "Koenigsegg",
        type: "sport",
        capacity: 2,
        category: "popular",
        price: 99,
        fuel: 90,
        gearBox: "Manual",
    },

    {
        name: "Nissan GT - R",
        type: "sport",
        capacity: 2,
        category: "popular",
        price: 80,
        previousPrice: 100,
        fuel: 80,
        gearBox: "Manual",
    },

    {
        name: "Rolls-Royce",
        type: "sedan",
        capacity: 4,
        category: "popular",
        price: 96,
        fuel: 70,
        gearBox: "Manual",
    },

    {
        name: "Nissan GT - R",
        type: "sport",
        capacity: 2,
        category: "popular",
        price: 80,
        previousPrice: 100,
        fuel: 70,
        gearBox: "Manual",
    },

    {
        name: "All New Rush",
        type: "suv",
        capacity: 6,
        category: "recomend",
        price: 72,
        previousPrice: 100,
        fuel: 70,
        gearBox: "Manual",
    },

    {
        name: "CR - V",
        type: "suv",
        capacity: 6,
        category: "recomend",
        price: 80,
        fuel: 80,
        gearBox: "Manual",
    },

    {
        name: "All New Terios",
        type: "sedan",
        capacity: 6,
        category: "recomend",
        price: 74,
        fuel: 90,
        gearBox: "Manual",
    },

    {
        name: "CR - V",
        type: "suv",
        capacity: 4,
        category: "recomend",
        price: 80,
        fuel: 80,
        gearBox: "Manual",
    },

    {
        name: "MG ZX Exclusive",
        type: "hatchback",
        capacity: 4,
        category: "recomend",
        price: 76,
        previousPrice: 100,
        fuel: 70,
        gearBox: "Electric",
    },

    {
        name: "New MG ZS",
        type: "suv",
        capacity: 6,
        category: "recomend",
        price: 80,
        fuel: 80,
        gearBox: "Manual",
    },

    {
        name: "MG ZX Excite",
        type: "hatchback",
        capacity: 4,
        category: "recomend",
        price: 74,
        fuel: 90,
        gearBox: "Electric",
    },

    {
        name: "New MG ZS",
        type: "suv",
        capacity: 6,
        category: "recomend",
        price: 80,
        fuel: 80,
        gearBox: "Manual",
    },

    {
        name: "All New Rush",
        type: "suv",
        capacity: 6,
        category: "recomend",
        price: 72,
        previousPrice: 100,
        fuel: 70,
        gearBox: "Manual",
        showing: false,
    },

    {
        name: "CR - V",
        type: "suv",
        capacity: 6,
        category: "recomend",
        price: 80,
        fuel: 80,
        gearBox: "Manual",
        showing: false,
    },

    {
        name: "All New Terios",
        type: "sedan",
        capacity: 6,
        category: "recomend",
        price: 74,
        fuel: 90,
        gearBox: "Manual",
        showing: false,
    },

    {
        name: "CR - V",
        type: "suv",
        capacity: 4,
        category: "recomend",
        price: 80,
        fuel: 80,
        gearBox: "Manual",
        showing: false,
    },
]

function filterByCategory(cars, category) {
    return cars.filter(car => car.category === category);
}

const popularCarsListEl = document.querySelector(".cars-container");
const recomendationCarsListEl = document.querySelector('.recomendation-cars');

function setAllPopularCars(carList) {
    // clearing previos data
    popularCarsListEl.innerHTML = '';

    // adding new data
    for (let i = 0; i < carList.length; i++) {

        const rootCarDivEl = document.createElement("div");
        rootCarDivEl.id = "carId" + i;
        rootCarDivEl.classList.add("car");
        popularCarsListEl.appendChild(rootCarDivEl);

        const carNameDivEl = document.createElement("div");
        carNameDivEl.classList.add("car-name");
        rootCarDivEl.appendChild(carNameDivEl);

        const carImgEl = document.createElement("img");
        carImgEl.classList.add("car-img");
        carImgEl.src = `./img/car${i ? i : ''}.svg `;
        carImgEl.alt = "car";
        rootCarDivEl.appendChild(carImgEl);

        const carImgShadowEl = document.createElement("img");
        carImgShadowEl.classList.add("shadow");
        carImgShadowEl.src = "./img/shadow.svg";
        carImgShadowEl.alt = "shadow";
        rootCarDivEl.appendChild(carImgShadowEl);

        const carFeatureDivEl = document.createElement("div");
        carFeatureDivEl.classList.add("car-features");
        rootCarDivEl.appendChild(carFeatureDivEl);

        const carPriceDivEl = document.createElement("div");
        carPriceDivEl.classList.add("car-price");
        rootCarDivEl.appendChild(carPriceDivEl);

        const carPriceRowEl = document.createElement("div");
        carPriceRowEl.classList.add("car-price-div");
        carPriceDivEl.appendChild(carPriceRowEl);

        const carPriceRowDescriptionEl = document.createElement("div");
        carPriceRowEl.appendChild(carPriceRowDescriptionEl);

        const carPriceRowSpanEl = document.createElement("span");
        carPriceRowSpanEl.innerText = "$" + carList[i].price + ".00/";
        carPriceRowDescriptionEl.appendChild(carPriceRowSpanEl);

        const carPriceRowDayEl = document.createElement("p");
        carPriceRowDayEl.innerText = "day";
        carPriceRowDescriptionEl.appendChild(carPriceRowDayEl);

        const carPriceStrikethroughDivEl = document.createElement("div");
        carPriceRowEl.appendChild(carPriceStrikethroughDivEl);

        const carPriceTextEl = document.createElement("p");
        carPriceTextEl.classList.add("strikethrough");
        carPriceTextEl.innerText = carList[i].previousPrice ? "$" + carList[i].previousPrice + ".00" : "";
        carPriceStrikethroughDivEl.appendChild(carPriceTextEl);

        const carPriceBtnEl = document.createElement("button");
        carPriceBtnEl.innerText = "Rent Now";
        carPriceDivEl.appendChild(carPriceBtnEl);

        const carNameDivWithoutNameEl = document.createElement("div");
        carNameDivEl.appendChild(carNameDivWithoutNameEl);

        const carLikeButtonEl = document.createElement("button");
        carLikeButtonEl.classList.add("like");
        carNameDivEl.appendChild(carLikeButtonEl);

        const carNameEl = document.createElement("h3");
        carNameEl.innerText = carList[i].name;
        carNameDivWithoutNameEl.appendChild(carNameEl);

        const carTypeEl = document.createElement("p");
        carTypeEl.innerText = carList[i].type;
        carNameDivWithoutNameEl.appendChild(carTypeEl);

        const carFeatureFirstDivEl = document.createElement("div");
        carFeatureDivEl.appendChild(carFeatureFirstDivEl);

        const carFeatureFirstImgDivEl = document.createElement("img");
        carFeatureFirstImgDivEl.src = "./img/gas-station.svg";
        carFeatureFirstImgDivEl.alt = "gas-station";
        carFeatureFirstDivEl.appendChild(carFeatureFirstImgDivEl);

        const carFeatureFirstDivFuelEl = document.createElement("p");
        carFeatureFirstDivFuelEl.innerText = carList[i].fuel + "L";
        carFeatureFirstDivEl.appendChild(carFeatureFirstDivFuelEl);

        const carFeatureSecondDivEl = document.createElement("div");
        carFeatureDivEl.appendChild(carFeatureSecondDivEl);

        const carFeatureSecondImgDivEl = document.createElement("img");
        carFeatureSecondImgDivEl.src = "./img/wheel.svg";
        carFeatureSecondImgDivEl.alt = "wheel";
        carFeatureSecondDivEl.appendChild(carFeatureSecondImgDivEl);

        const carFeatureSecondDivGearEl = document.createElement("p");
        carFeatureSecondDivGearEl.innerText = carList[i].gearBox;
        carFeatureSecondDivEl.appendChild(carFeatureSecondDivGearEl);

        const carFeatureThirdDivEl = document.createElement("div");
        carFeatureDivEl.appendChild(carFeatureThirdDivEl);

        const carFeatureThirdImgDivEl = document.createElement("img");
        carFeatureThirdImgDivEl.src = "./img/profile-2user.svg";
        carFeatureThirdImgDivEl.alt = "profile";
        carFeatureThirdDivEl.appendChild(carFeatureThirdImgDivEl);

        const carFeatureThirdDivCapacityEl = document.createElement("p");
        carFeatureThirdDivCapacityEl.innerText = carList[i].capacity;
        carFeatureThirdDivEl.appendChild(carFeatureThirdDivCapacityEl);
    }
}

function setAllRecomendationCars(carList) {
    // clearing previos data
    recomendationCarsListEl.innerHTML = "";

    // adding new data
    for (let i = 0; i < carList.length; i++) {
        const rootCarDivEl = document.createElement("div");
        rootCarDivEl.id = "recomendCarId" + i;
        rootCarDivEl.classList.add("recommended-car-card");
        if (carList[i].showing === false) {
            rootCarDivEl.classList.add("hidden", "showCar");
        }
        recomendationCarsListEl.appendChild(rootCarDivEl);

        const carNameDivEl = document.createElement("div");
        carNameDivEl.classList.add("car-name");
        rootCarDivEl.appendChild(carNameDivEl);

        const recomendationCarsCenterEl = document.createElement("div");
        recomendationCarsCenterEl.classList.add('recomendation-cars-center');
        rootCarDivEl.appendChild(recomendationCarsCenterEl);

        const carImgEl = document.createElement("img");
        carImgEl.classList.add("recomendation-car-img");
        carImgEl.src = `./img/recomended-car${i ? i : ''}.svg `;
        carImgEl.alt = "recomended-car";
        recomendationCarsCenterEl.appendChild(carImgEl);

        const carImgShadowEl = document.createElement("img");
        carImgShadowEl.classList.add("shadow2");
        carImgShadowEl.src = "./img/shadow.svg";
        carImgShadowEl.alt = "shadow";
        recomendationCarsCenterEl.appendChild(carImgShadowEl);

        const carFeatureDivEl = document.createElement("div");
        carFeatureDivEl.classList.add("recomendation-car-features");
        recomendationCarsCenterEl.appendChild(carFeatureDivEl);

        const carPriceDivEl = document.createElement("div");
        carPriceDivEl.classList.add("car-price");
        rootCarDivEl.appendChild(carPriceDivEl);

        const carPriceRowEl = document.createElement("div");
        carPriceRowEl.classList.add("car-price-div");
        carPriceDivEl.appendChild(carPriceRowEl);

        const carPriceRowDescriptionEl = document.createElement("div");
        carPriceRowEl.appendChild(carPriceRowDescriptionEl);

        const carPriceRowSpanEl = document.createElement("span");
        carPriceRowSpanEl.innerText = "$" + carList[i].price + ".00/";
        carPriceRowDescriptionEl.appendChild(carPriceRowSpanEl);

        const carPriceRowDayEl = document.createElement("p");
        carPriceRowDayEl.innerText = "day";
        carPriceRowDescriptionEl.appendChild(carPriceRowDayEl);

        const carPriceStrikethroughDivEl = document.createElement("div");
        carPriceRowEl.appendChild(carPriceStrikethroughDivEl);

        const carPriceTextEl = document.createElement("p");
        carPriceTextEl.classList.add("strikethrough");
        carPriceTextEl.innerText = carList[i].previousPrice ? "$" + carList[i].previousPrice + ".00" : "";
        carPriceStrikethroughDivEl.appendChild(carPriceTextEl);

        const carPriceBtnEl = document.createElement("button");
        carPriceBtnEl.innerText = "Rent Now";
        carPriceDivEl.appendChild(carPriceBtnEl);

        const carNameDivWithoutNameEl = document.createElement("div");
        carNameDivEl.appendChild(carNameDivWithoutNameEl);

        const carLikeButtonEl = document.createElement("button");
        carLikeButtonEl.classList.add("like");
        carNameDivEl.appendChild(carLikeButtonEl);

        const carNameEl = document.createElement("h3");
        carNameEl.innerText = carList[i].name;
        carNameDivWithoutNameEl.appendChild(carNameEl);

        const carTypeEl = document.createElement("p");
        carTypeEl.innerText = carList[i].type;
        carNameDivWithoutNameEl.appendChild(carTypeEl);

        const carFeatureFirstDivEl = document.createElement("div");
        carFeatureDivEl.appendChild(carFeatureFirstDivEl);

        const carFeatureFirstImgDivEl = document.createElement("img");
        carFeatureFirstImgDivEl.src = "./img/gas-station.svg";
        carFeatureFirstImgDivEl.alt = "gas-station";
        carFeatureFirstDivEl.appendChild(carFeatureFirstImgDivEl);

        const carFeatureFirstDivFuelEl = document.createElement("p");
        carFeatureFirstDivFuelEl.innerText = carList[i].fuel + "L";
        carFeatureFirstDivEl.appendChild(carFeatureFirstDivFuelEl);

        const carFeatureSecondDivEl = document.createElement("div");
        carFeatureDivEl.appendChild(carFeatureSecondDivEl);

        const carFeatureSecondImgDivEl = document.createElement("img");
        carFeatureSecondImgDivEl.src = "./img/wheel.svg";
        carFeatureSecondImgDivEl.alt = "wheel";
        carFeatureSecondDivEl.appendChild(carFeatureSecondImgDivEl);

        const carFeatureSecondDivGearEl = document.createElement("p");
        carFeatureSecondDivGearEl.innerText = carList[i].gearBox;
        carFeatureSecondDivEl.appendChild(carFeatureSecondDivGearEl);

        const carFeatureThirdDivEl = document.createElement("div");
        carFeatureDivEl.appendChild(carFeatureThirdDivEl);

        const carFeatureThirdImgDivEl = document.createElement("img");
        carFeatureThirdImgDivEl.src = "./img/profile-2user.svg";
        carFeatureThirdImgDivEl.alt = "profile";
        carFeatureThirdDivEl.appendChild(carFeatureThirdImgDivEl);

        const carFeatureThirdDivCapacityEl = document.createElement("p");
        carFeatureThirdDivCapacityEl.innerText = carList[i].capacity;
        carFeatureThirdDivEl.appendChild(carFeatureThirdDivCapacityEl);
    }
}

setAllPopularCars(filterByCategory(cars, "popular"));
setAllRecomendationCars(filterByCategory(cars, "recomend"));
 

/* === ДЕЛАЕМ ПЛАВНОЕ BURGER-MENU === */
const burgerMenuBtn = document.querySelector('.burger-menu')
const burgerMenuButtonsEl = document.querySelector('.burger-menu-container');

burgerMenuBtn.addEventListener("click", (evt) => {
    evt.preventDefault();
    
    burgerMenuButtonsEl.classList.toggle('burger-menu-container-show');

    const burgerSettingsBtn = document.querySelector('.burger-settings');
    const burgerBellBtn = document.querySelector('.burger-bell');
    const burgerHeartBtn = document.querySelector('.burger-heart');

    burgerSettingsBtn.classList.toggle('burger-settings-shown');
    burgerBellBtn.classList.toggle('burger-bell-shown');
    burgerHeartBtn.classList.toggle('burger-heart-shown');
})

/* === ДЕЛАЕМ ПОДМЕНЮ ДЛЯ АВАТАРА === */
const avatarBtn = document.querySelector('.avatar');
const profileMenuEl = document.querySelector('.profile-menu');
avatarBtn.addEventListener('click', () => {
    profileMenuEl.classList.toggle('active-profile-menu');
    profileMenuEl.classList.toggle('hidden');
});

/* === ПОКАЗ КАРТОЧЕК АВТО ПРИ НАЖАТИИ НА КНОПКУ  "SHOW MORE CARS" === */
const showCarEl = document.querySelectorAll(".showCar");
const showBtnEl = document.getElementById("showBtn");
showBtnEl.addEventListener("click", (evt) => {
    evt.preventDefault();

    showCarEl.forEach(el => el.classList.toggle("hidden"));
});

/* === ДОБАВЛЯЕМ АВТО В ИЗБРАННОЕ (ЛАЙКИ) === */
const likeBtnEl = document.querySelectorAll(".like");
likeBtnEl.forEach(function (el) {
    el.addEventListener("click", function (evt) {
        evt.target.classList.toggle("like-red");
    });
});

/* === ДОБАВЛЯЕМ БАННЕР ПРИ НАЖАТИИ НА КНОПКУ "VIEW ALL" === */
const viewAllBtnEl = document.getElementById("viewAllBtn");
const noticeBtnEl = document.getElementById("noticeBtn");
const noticeDivEl = document.getElementById("notice");
viewAllBtnEl.addEventListener("click", (show) => {
    noticeDivEl.style.opacity = "0.9";
    noticeDivEl.style.transition = "0.5s";
});
noticeBtnEl.addEventListener("click", (show) => {
    noticeDivEl.style.opacity = "0";
});

/* === ДОБАВЛЯЕМ SIDEBAR ПРИ НАЖАТИИ НА КНОПКУ "FILTER" === */
const filterBtnEl = document.querySelectorAll(".filter-btn");
const hiddenBlocksEl = document.querySelectorAll(".hidden-blocks");
const sidebarEl = document.querySelector(".sidebar");
const mainBlockEl = document.getElementById("mainBlock");
const mainContentEl = document.querySelector(".main-content-container");
filterBtnEl.forEach(function (btn) {
    btn.addEventListener("click", (flt) => {
        flt.preventDefault();

        sidebarEl.classList.toggle("hidden");
        sidebarEl.classList.toggle("active");

        hiddenBlocksEl.forEach(el => el.classList.toggle("hidden"));

        mainBlockEl.classList.toggle("main-properties-with-sidebar");

        mainContentEl.classList.toggle("content-with-sidebar");
    });
});

/* === ДЕЛАЕМ РАБОЧИЙ ФИЛЬТР === */
const checkboxArray = sidebarEl.querySelectorAll("input[type=checkbox]");
const popularCarsBoxEl = document.querySelector(".popular-cars-main");
const recomendationCarsBoxEl = document.querySelector(".recomendation-cars-main");

const filterParams = {
    types: [],
    capacities: [],
    categories: [],
}

let filteredCars = [];

sidebarEl.addEventListener("click", (evt) => {
    if (evt.target.type === "checkbox") {
        // checked
        if (evt.target.name === "type"
            && evt.target.checked
        ) {
            filterParams.types.push(evt.target.value);
        }

        if (evt.target.name === "capacity"
            && evt.target.checked
        ) {
            filterParams.capacities.push(+evt.target.value);
        }

        if (evt.target.name === "category"
            && evt.target.checked
        ) {
            filterParams.categories.push(evt.target.value);
        }

        // unchecked
        if (evt.target.name === "type"
            && !evt.target.checked
        ) {
            filterParams.types = filterParams.types.filter(type => type !== evt.target.value);
        }

        if (evt.target.name === "capacity"
            && !evt.target.checked
        ) {
            filterParams.capacities = filterParams.capacities.filter(capacity => capacity !== +evt.target.value);
        }

        if (evt.target.name === "category"
            && !evt.target.checked
        ) {
            filterParams.categories = filterParams.categories.filter(category => category !== evt.target.value);
        }

        //default values
        if (filterParams.types.length === 0
            && filterParams.capacities.length === 0
            && filterParams.categories.length !== 1
        ) {
            setAllPopularCars(filterByCategory(cars, "popular"));
            setAllRecomendationCars(filterByCategory(cars, "recomend"));
            return
        }

        // filtering
        filteredCars = filterParams.types.length
            ? cars.filter(car => filterParams.types.includes(car.type))
            : [...cars];

        filteredCars = filterParams.capacities.length
            ? filteredCars.filter(car => filterParams.capacities.includes(car.capacity))
            : filteredCars;

        filteredCars = filterParams.categories.length === 1
            ? filteredCars.filter(car => filterParams.categories.includes(car.category))
            : filteredCars;

        //upadating
        setAllPopularCars(filterByCategory(filteredCars, "popular"));
        setAllRecomendationCars(filterByCategory(filteredCars, "recomend"));
    }

    const recomendCarsBottomSpanEl = document.getElementById('recomendCarsBottomSpan');
    recomendCarsBottomSpanEl.classList.toggle('hidden');
    recomendCarsBottomSpanEl.classList.toggle('active');
});

