// ── TABS ──
const tabs     = document.querySelectorAll('.tab');
const sections = document.querySelectorAll('.category-block');

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    tabs.forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    const cat = tab.dataset.cat;
    sections.forEach(sec => {
      if (cat === 'all' || sec.dataset.section === cat) {
        sec.classList.remove('hidden');
      } else {
        sec.classList.add('hidden');
      }
    });
  });
});

// ── MODAL ──
const overlay    = document.getElementById('modalOverlay');
const modalTitle = document.getElementById('modalTitle');
const modalPrice = document.getElementById('modalPrice');
const modalClose = document.getElementById('modalClose');
const btnKirim   = document.getElementById('btnKirim');

// Nomor WA admin (tanpa +)
const WA_ADMIN = '6285143590943';

function formatRupiah(n) {
  return 'Rp' + Number(n).toLocaleString('id-ID');
}

// Buka modal saat klik Beli
document.querySelectorAll('.btn-buy').forEach(btn => {
  btn.addEventListener('click', () => {
    const card  = btn.closest('.card');
    modalTitle.textContent = card.dataset.name;
    modalPrice.textContent = formatRupiah(card.dataset.price);
    document.getElementById('inputUsername').value = '';
    overlay.classList.add('open');
  });
});

// Tutup modal
modalClose.addEventListener('click', () => overlay.classList.remove('open'));
overlay.addEventListener('click', e => {
  if (e.target === overlay) overlay.classList.remove('open');
});

// Kirim bukti → buka WA
btnKirim.addEventListener('click', () => {
  const username = document.getElementById('inputUsername').value.trim();
  const mctype   = document.querySelector('input[name="mctype"]:checked').value;
  const item     = modalTitle.textContent;
  const harga    = modalPrice.textContent;

  if (!username) {
    alert('Masukkan username Minecraft kamu dulu!');
    return;
  }

  const pesan =
`Halo Admin Ratara SMP! 👋

Saya sudah melakukan pembayaran untuk:
🛒 Item   : ${item}
💰 Harga  : ${harga}

📋 Data Saya:
👤 Username MC : ${username}
📱 Minecraft : ${mctype}

Mohon dikonfirmasi ya, terima kasih! 🙏`;

  const url = 'https://wa.me/' + WA_ADMIN + '?text=' + encodeURIComponent(pesan);
  window.open(url, '_blank');
  overlay.classList.remove('open');
});
