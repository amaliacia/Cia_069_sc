document.addEventListener("DOMContentLoaded", function () {
    // Ambil elemen "Lanjut?" berdasarkan ID
    const lanjutButton = document.getElementById("lanjutButton");

    lanjutButton.addEventListener("click", function () {
        console.log('click');   
        window.location.href = "https://www.netflix.com/id/";
    });
});
