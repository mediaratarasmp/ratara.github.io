const WA_ADMINS = ['6281276274398'];
const WA_REPORT = WA_ADMINS[Math.floor(Math.random() * WA_ADMINS.length)];

document.getElementById('rpKirim').addEventListener('click', () => {
  const username  = document.getElementById('rpUsername').value.trim();
  const subjek    = document.getElementById('rpSubjek').value;
  const deskripsi = document.getElementById('rpDeskripsi').value.trim();

  if (!username) {
    alert('Masukkan username Minecraft kamu dulu!');
    return;
  }
  if (!subjek) {
    alert('Pilih subjek laporan dulu!');
    return;
  }
  if (!deskripsi) {
    alert('Isi deskripsi masalah kamu dulu!');
    return;
  }

  const pesan =
`Halo Admin Ratara SMP! 👋

📋 Laporan / Pertanyaan Baru:
👤 Username MC : ${username}
📌 Subjek      : ${subjek}

📝 Deskripsi:
${deskripsi}

Mohon ditindaklanjuti, terima kasih! 🙏`;

  const url = 'https://wa.me/' + WA_REPORT + '?text=' + encodeURIComponent(pesan);
  window.open(url, '_blank');
});

