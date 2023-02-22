var submit = document.getElementById('submit');
var input = document.getElementById('input');
var qrCode;

submit.addEventListener('click', generateQR(input.value));

function generateQR(content) {
    return new QRCode(
        document.getElementById('img'), {
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

    console.log(document.getElementById('img'));
    var source = qrCode._el.childNodes[3].currentSrc;
    console.log(qrCode._el.childNodes,source);
    document.getElementById('img').src= source;
    document.getElementById('img').style.display = 'block';
});


