document.getElementById("loginbtn").addEventListener("click", function(event) {
    event.preventDefault();

    let email = document.getElementById("email_login").value.trim();
    let lozinka = document.getElementById("lozinka_login").value;

    let sviKorisnici = JSON.parse(localStorage.getItem("sviKorisnici")) || [];
    if(sviKorisnici.length === 0) {
        alert("Nema registrovanih korisnika!");
        return; // Stop login if no users are registered
    }

    for(let i = 0; i < sviKorisnici.length; i++) {
        if(sviKorisnici[i].email === email && sviKorisnici[i].lozinka === lozinka) {
            alert("Uspješno ste se prijavili!");
            window.location.href = "index.html"; // Redirect to the main page after successful login
            return; // Stop further processing after successful login
        }
    }
    alert("Neispravni podaci za prijavu! Molimo pokušajte ponovo.");

});