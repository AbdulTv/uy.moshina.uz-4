// Mashinalar ro'yxati
const cars = [
    {
        name: "Toyota Corolla",
        year: 2023,
        paint: "Tozza",
        transmission: "Avtomat",
        fuel: "Benzin",
        price: "123,000,000 so'm",
        image: "toyota-corolla.jpg",  // Tasvir fayl manzili
        details: "Halol: 32.300km",
        tel: '+998 97 318 59 46'
    },
    {
        name: "Lexus RX",
        year: 2020,
        paint: "Oldi chap kriloda petno bor",
        transmission: "Avtomat",
        fuel: "Benzin",
        price: "173,000,000 so'm",
        image: "Lexus-Rx.avif",  // Tasvir fayl manzili
        details: "Halol: 72.850km",
        tel: '+998 97 254 48 58'
    },
    {
        name: "Chevrolet Spark",
        year: 2014,
        paint: "Polniy bo'yalgan",
        transmission: "Mexanik",
        fuel: "Benzin",
        price: "37,000,000 so'm",
        image: "chevrolet-spark.jpg",  // Tasvir fayl manzili
        details: "Aylangani: 182.452km. Xammasi bilan: 458.150km",
        tel: '+998 99 185 28 46'
    },
    // Qo'shishingiz mumkin bo'lgan boshqa mashinalar
    {
        name: "BMW X5",
        year: 2018,
        paint: "Orqa ong kriloda",
        transmission: "Avtomat",
        fuel: "Diesel",
        price: "210,000,000 so'm",
        image: "BMW-X5.webp",  // Tasvir fayl manzili
        details: "Aylangani: 52.353km. Xammasi bilan: 354.215km",
        tel: '+998 97 318 59 46'
    },

    {
        name: "Chevrolet Lacetti",
        year: 2024,
        paint: "Tozza",
        transmission: "Avtomat",
        fuel: "Benzin",
        price: "183,000,000 so'm",
        image: "chevrolet-lacetti.jpg",  // Tasvir fayl manzili
        details: "Halol: 3.210km",
        tel: '+998 33 845 77 66'
    },

    {
        name: "Mersedes Banan",
        year: 2016,
        paint: "Orqa ong kriloda",
        transmission: "Avtomat",
        fuel: "Benzin",
        price: "236,000,000 so'm",
        image: "mers-banan.jpg",  // Tasvir fayl manzili
        details: "Halol: 213.843km",
        tel: '+998 88 555 88 88'
    },

    {
        name: "Chevrolet Cobalt",
        year: 2022,
        paint: "Kapot kraska",
        transmission: "Mexanika",
        fuel: "Benzin va Gaz",
        price: "142,000,000 so'm",
        image: "chevrolet-cobalt.jpg",  // Tasvir fayl manzili
        details: "Aylangani: 42.863km. Xammasi bilan: 289.356km",
        tel: '+998 97 918 87 18'
    },

    {
        name: "Li 9",
        year: 2023,
        paint: "Tozza",
        transmission: "Avtomat",
        fuel: "Elektro va Benzin",
        price: "481,000,000 so'm",
        image: "Li9.webp",  // Tasvir fayl manzili
        details: "Xalol: 23.000km",
        tel: '+998 33 115 55 55'
    },

    {
        name: "Daewoo Matiz",
        year: 2006,
        paint: "Ong oldi eshik va ong oldi krilo",
        transmission: "Mexanika",
        fuel: "Diesel",
        price: "39,800,000 so'm",
        image: "Daewoo-Matiz.jpg",  // Tasvir fayl manzili
        details: "Aylangani: 92.128km. Xammasi bilan: 643.842km",
        tel: '+998 97 756 29 68'
    },
    // 15 ta mashina ro'yxati
    // Qo'shing...
];

// Mashinalarni ro'yxatga chiqarish
function displayCars(carsToDisplay) {
    const carsList = document.getElementById('carsList');
    carsList.innerHTML = ''; // Ro'yxatni tozalash

    carsToDisplay.forEach(car => {
        const carCard = document.createElement('div');
        carCard.classList.add('car-card');

        carCard.innerHTML = `
            <img src="${car.image}" alt="${car.name}">
            <h3>${car.name}</h3>
            <p>${car.year} | ${car.transmission} | ${car.fuel}</p>
            <p><strong>Narxi:</strong> ${car.price}</p>
        `;

        // Mashina kartasiga bosilganda, alohida oynada batafsil ma'lumotlarni ko'rsatish
        carCard.onclick = function() {
            openModal(car);
        };

        carsList.appendChild(carCard);
    });
}

// Mashinalarni qidirish
function searchCars() {
    const query = document.getElementById('searchBox').value.toLowerCase();
    const filteredCars = cars.filter(car => car.name.toLowerCase().includes(query));
    displayCars(filteredCars);
}

// Modal oynasini ochish
function openModal(car) {
    document.getElementById('carName').textContent = car.name;
    document.getElementById('carImage').src = car.image;
    document.getElementById('carYear').textContent = car.year;
    document.getElementById('carPaint').textContent = car.paint;
    document.getElementById('carTransmission').textContent = car.transmission;
    document.getElementById('carFuel').textContent = car.fuel;
    document.getElementById('carPrice').textContent = car.price;
    document.getElementById('carDetails').textContent = car.details;
    document.getElementById('carTel').textContent = car.tel;

    document.getElementById('carModal').style.display = "block";
}

// Modal oynasini yopish
function closeModal() {
    document.getElementById('carModal').style.display = "none";
}

// Sayt ochilganda mashinalarni ko'rsatish
window.onload = function() {
    displayCars(cars);
};
