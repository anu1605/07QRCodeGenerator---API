var submit = document.getElementById('submit');
var input = document.getElementById('input');
var qrCode;



function generateQR(content) {
    return new QRCode(
        document.getElementById('main'), {
            text: content,
            width: 256,
            height: 256,
            colorDark: "#000000",
            colorLight: "#ffffff",
            correctLevel: QRCode.CorrectLevel.H,

    });
    
}

submit.addEventListener("click", function (event) {
    event.preventDefault();
    let qrContent = input.value;
    if (qrCode == null) {
        qrCode = generateQR(qrContent);
    } else {
        qrCode.makeCode(qrContent);
    }

});


