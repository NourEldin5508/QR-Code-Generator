let imgBox = document.getElementById("img-box");
let qrImg = document.getElementById("qr-image");
let qrText = document.getElementById("qr-text");

function generateQr() {
    if (qrText.value !== "" || qrText.value.length > 0) {
        qrImg.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrText.value;
        imgBox.classList.add("show-img");
    } else {
        // alert("You Must Write Something");
        qrText.classList.add("error");
        setTimeout(() => {
            qrText.classList.remove("error");
        }, 1000)
    }
}

qrText.addEventListener("keypress", function (event) {
    if (event.key === "Enter" && qrText.value !== "") {
        qrImg.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrText.value;
        imgBox.classList.add("show-img");
    }
})