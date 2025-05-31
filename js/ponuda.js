const kursevi = [
  {
    id: 1,
    slika: "https://i.pinimg.com/736x/ac/18/7a/ac187a87c572f8b49444a7c1e9cbcd41.jpg",
    naziv: "Engleski",
    opis: "Usavršite poslovni i svakodnevni engleski uz naše sertifikovane predavače.",
    staraCena: 12000,
    novaCena: 9900
  },
  {
    id: 2,
    slika: "https://i.pinimg.com/736x/0b/09/f1/0b09f1e91f45d5577f75f8dafa7dfae7.jpg",
    naziv: "Nemački",
    opis: "Idealno za rad u inostranstvu i polaganje Goethe ispita.",
    staraCena: 12000,
    novaCena: 9900
  },
  {
    id: 3,
    slika: "https://i.pinimg.com/736x/99/45/49/994549e7fcd110c1dee07e76d73df685.jpg",
    naziv: "Italijanski",
    opis: "Naučite jezik umetnosti, mode i muzike uz dinamične časove.",
    staraCena: 12000,
    novaCena: 9900
  },
  {
    id: 4,
    slika: "https://i.pinimg.com/736x/1e/73/eb/1e73eba1388e76741ec6354f6a1f1ac0.jpg",
    naziv: "Ruski",
    opis: "Upoznajte rusku kulturu i savladajte jezik korak po korak.",
    staraCena: 12500,
    novaCena: 10200
  },
  {
    id: 5,
    slika: "https://i.pinimg.com/736x/f5/37/99/f53799a5eec6eddc778daef7319d5116.jpg",
    naziv: "Francuski",
    opis: "Ovladavanje francuskim otvara vrata diplomacije, umetnosti i gastronomije.",
    staraCena: 13000,
    novaCena: 10900
  },
  {
    id: 6,
    slika: "https://i.pinimg.com/736x/e7/b4/5a/e7b45afa6ed34490901f89ecff9c97d4.jpg",
    naziv: "Španski",
    opis: "Jedan od najrasprostranjenijih jezika na svetu – učite kroz muziku i konverzaciju.",
    staraCena: 12000,
    novaCena: 9900
  }
];

function dodajUKorpu(index) {
   let korpa = JSON.parse(localStorage.getItem("korpa")) || [];
   korpa.push(proizvodi[index]);

}

function ucitajProizvode(){
    const sviProizvodi = document.getElementById("sviproizvodi");
    sviProizvodi.innerHTML = ""; // Očisti prethodni sadržaj

    kursevi.forEach(kurs => {
        const proizvodDiv = document.createElement("div");
        proizvodDiv.classList.add("proizvod");
        proizvodDiv.innerHTML = `
            <img src="${kurs.slika}" alt="${kurs.naziv}">
            <strong><p>${kurs.naziv}</p></strong>
            <p>${kurs.opis}</p>
            <i class="fa-solid fa-tag"></i>
            <span class="cena">Stara cena: <span class="staraCena">${kurs.staraCena} RSD</span> <br>
            <i class="fa-solid fa-tag"></i>
            <span class="cena">Nova cena: <span class="novaCena">${kurs.novaCena} RSD</span></span>
            <button class="dodaj" data-id="${index}"><i class="fa-solid fa-cart-plus">Dodaj u korpu</button>`;

        sviProizvodi.appendChild(proizvodDiv);
    });

    const dugmici = document.querySelectorAll(".dodaj");
    dugmici.forEach((dugme,index) => {
        dugme.addEventListener("click", function() {
            const index = dugme.getAttribute("data-id");
            dodajUKorpu();
        });
    });
}
window.addEventListener("DOMContentLoaded", ucitajProizvode);
