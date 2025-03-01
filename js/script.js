document.addEventListener("DOMContentLoaded", function () {
  // ANIMASI FADE-IN SAAT SCROLL
  let elements = document.querySelectorAll(".fade-in");

  let observer = new IntersectionObserver(
    function (entries) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    { threshold: 0.3 }
  );

  elements.forEach((element) => observer.observe(element));

  // FUNGSI KIRIM FORM KE WHATSAPP
  document
    .getElementById("bookingForm")
    .addEventListener("submit", function (event) {
      event.preventDefault();

      // Mengambil data dari form
      let name = document.getElementById("name").value;
      let phone = document.getElementById("phone").value;
      let packageType = document.getElementById("package").value;
      let message = document.getElementById("message").value;

      // Format pesan WhatsApp
      let whatsappMessage =
        `Halo, saya ingin memesan Jeep Tour Gunung Batur!%0A%0A` +
        `Nama: ${name}%0A` +
        `Nomor HP: ${phone}%0A` +
        `Paket: ${packageType}%0A%0A` +
        `Pesan: ${message}`;

      // Nomor WhatsApp tujuan (ganti dengan nomor bisnis Anda)
      let phoneNumber = "6281344374965"; // Ganti dengan nomor WhatsApp bisnis Anda

      // Redirect ke WhatsApp
      let whatsappURL = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${whatsappMessage}`;

      window.open(whatsappURL, "_blank");
    });
});
