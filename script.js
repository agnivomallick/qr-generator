const wrapper = document.querySelector('.wrapper'),
qrInput = wrapper.querySelector('.form input'),
generateBtn = wrapper.querySelector('.form button'),
qrImg = wrapper.querySelector('.qr-code img'),
downloadBtn = wrapper.querySelector('.download');

generateBtn.addEventListener('click', () => {
    let qrinput = qrInput.value;
    if(!qrinput) return;
    generateBtn.innerText = "Generating QR Code...";
    qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=170x170&data=${qrinput}`;
    qrImg.addEventListener('load', () => {
        wrapper.classList.add('active')
        generateBtn.innerText = "Generate QR Code";
    })
    downloadBtn.addEventListener('click', () => {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        canvas.width = qrImg.naturalWidth;
        canvas.height = qrImg.naturalHeight;
        ctx.drawImage(qrImg, 0, 0, canvas.width, canvas.height);
        const link= document.createElement('a');
        link.href = canvas.toDataURL();
        link.download = `qrImage ${new Date().getTime()}`;
        link.click();
    })
})


qrInput.addEventListener('keyup', ()=> {
    if(!qrInput.value) {
        wrapper.classList.remove('active')
    }
})