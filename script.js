const bankData = {
  bidv: {
    title: "BIDV",
    qr: "bidv.jpg",
    account: "8812766424",
    name: "NGUYEN DUC HUY"
  },
  mbbank: {
    title: "MB Bank",
    qr: "mb.jpg",
    account: "0966030929",
    name: "NGUYEN DUC HUY"
  },
  momo: {
    title: "Momo",
    qr: "momo.jpg",
    account: "0966030929",
    name: "NGUYEN DUC HUY"
  }
};

const qrData = {
  qrImage: "qr.jpg"
};

// Xử lý popup ngân hàng
const bankButtons = document.querySelectorAll('.bank-btn');
const popup = document.getElementById('bank-popup');
const closePopup = document.getElementById('close-popup');
const bankTitle = document.getElementById('bank-title');
const bankQR = document.getElementById('bank-qr');
const bankAccount = document.getElementById('bank-account');
const bankName = document.getElementById('bank-name');
const downloadQR = document.getElementById('download-qr');

bankButtons.forEach(button => {
  button.addEventListener('click', () => {
    const bank = button.dataset.bank;
    const data = bankData[bank];
    bankTitle.textContent = data.title;
    bankQR.src = data.qr;
    bankAccount.textContent = data.account;
    bankName.textContent = data.name;
    downloadQR.onclick = () => {
      const link = document.createElement('a');
      link.href = data.qr;
      link.download = `${bank}-qr.jpg`;
      link.click();
    };
    popup.classList.remove('hidden');
  });
});

closePopup.addEventListener('click', () => {
  popup.classList.add('hidden');
});

// Xử lý popup QR
const qrButton = document.getElementById('qr-btn');
const qrPopup = document.getElementById('qr-popup');
const closeQrPopup = document.getElementById('close-qr-popup');
const qrImage = document.getElementById('qr-image');

qrButton.addEventListener('click', () => {
  qrImage.src = qrData.qrImage;
  qrPopup.classList.remove('hidden');
});

closeQrPopup.addEventListener('click', () => {
  qrPopup.classList.add('hidden');
});

// Xử lý nút Copy Link
const copyLinkButton = document.getElementById('copy-link-btn');
copyLinkButton.addEventListener('click', () => {
  const currentUrl = window.location.href;
  navigator.clipboard.writeText('https://huiinguen.github.io/introduction-/');
  alert('Đã sao chép liên kết!');
});
