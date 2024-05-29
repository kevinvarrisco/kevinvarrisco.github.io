var detailContainer = document.querySelectorAll(".detail-container a")
var linkMedsos = document.querySelectorAll(".contact a")

function alertNoSocial(){
    alert("Ini hanya contoh website. Tidak ada link alamat dan sosial media untuk website ini.")
}

for(var i = 0; i < 3; i++){
    detailContainer[i].onclick = alertNoSocial
}

for(var i = 0; i < 12; i++){
    linkMedsos[i].onclick = alertNoSocial
}