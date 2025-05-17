const bankData = {
  bidv: {
    title: "BIDV",
    qr: "bidv.jpg", // Đường dẫn đến ảnh cục bộ
    account: "8812766424",
    name: "NGUYEN DUC HUY"
  },
  mbbank: {
    title: "MB Bank",
    qr: "mb.jpg", // Đường dẫn đến ảnh cục bộ
    account: "0966030929",
    name: "NGUYEN DUC HUY"
  },
  momo: {
    title: "Momo",
    qr: "momo.jpg", // Đường dẫn đến ảnh cục bộ
    account: "0966030929",
    name: "NGUYEN DUC HUY"
  }
};

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

function copyAccount() {
  navigator.clipboard.writeText(bankAccount.textContent);
  alert('Đã sao chép số tài khoản!');
}