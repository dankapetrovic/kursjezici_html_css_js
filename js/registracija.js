document.getElementById("regbtn").addEventListener("click", function(event) {
    event.preventDefault(); // Prevent the default form submission
    let imePrezime = document.getElementById("ime_prezime").value.trim();
    let email = document.getElementById("email").value.trim();
    let lozinka = document.getElementById("lozinka").value;
    let lozinkaPonovo = document.getElementById("ponovi_lozinku").value;
    let telefon = document.getElementById("telefon").value.trim();
    let adresa = document.getElementById("adresa").value.trim();
    let datumRodjenja = document.getElementById("datum_rodjenja").value.trim();
    let pol = document.getElementById("pol").value;

if (lozinka !== lozinkaPonovo) {
    alert("Lozinke se ne podudaraju!");
    return; // Stop registration if passwords do not match
}
let danas = new Date();
if (new Date(datumRodjenja) >= danas) {
    alert("Datum rođenja mora biti prije današnjeg datuma!");
    return; // Stop registration if date of birth is invalid
}
    let sviKorisnici = JSON.parse(localStorage.getItem("sviKorisnici")) || [];
    let sviMejlovi = sviKorisnici.map(k => k.email);
    if (sviMejlovi.includes(email)) {
        alert("Korisnik s tim emailom već postoji!");
        return; // Stop registration if email already exists
    }

    let noviKorisnik = {
        ime_prezime: imePrezime,
        email: email,
        lozinka: lozinka,
        lozinka_ponovo: lozinkaPonovo,
        telefon: telefon,
        adresa: adresa,
        datum_rodjenja: datumRodjenja,
        pol: pol
    };
    sviKorisnici.push(noviKorisnik);
    localStorage.setItem("sviKorisnici", JSON.stringify(sviKorisnici));
    alert("Registracija uspješna!");
    window.location.href = "login.html";
    document.getElementById("regform").reset(); // Reset the form after successful registration
});