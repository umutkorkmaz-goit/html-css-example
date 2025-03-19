document.addEventListener("DOMContentLoaded", function () {
  // Gerekli elemanları seçiyoruz
  const loginBtn = document.getElementById("loginBtn");
  const registerBtn = document.getElementById("registerBtn");
  const loginModal = document.getElementById("loginModal");
  const registerModal = document.getElementById("registerModal");
  const closeButtons = document.querySelectorAll(".close-modal");
  const hamburgerMenu = document.getElementById("hamburgerMenu");
  const mobileMenu = document.getElementById("mobileMenu");

  // Hamburger menü işlevselliği
  hamburgerMenu.addEventListener("click", function () {
    // Hamburger menü ikonuna 'active' sınıfını ekleyip çıkarıyoruz
    this.classList.toggle("active");
    // Mobil menüye 'active' sınıfını ekleyip çıkarıyoruz
    mobileMenu.classList.toggle("active");

    // Menü açıkken body'nin kaydırılmasını engelliyoruz
    if (mobileMenu.classList.contains("active")) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  });

  // Menü linklerine tıklandığında menüyü kapatıyoruz
  const menuLinks = mobileMenu.querySelectorAll("a");
  menuLinks.forEach(function (link) {
    link.addEventListener("click", function () {
      hamburgerMenu.classList.remove("active");
      mobileMenu.classList.remove("active");
      document.body.style.overflow = "";
    });
  });

  // Giriş Yap butonuna tıklandığında modal açılır
  loginBtn.addEventListener("click", function () {
    loginModal.classList.add("active");
    // Modal açıldığında kaydırma çubuğunu devre dışı bırakıyoruz
    document.body.style.overflow = "hidden";
    // Eğer hamburger menü açıksa kapatıyoruz
    hamburgerMenu.classList.remove("active");
    mobileMenu.classList.remove("active");
  });

  // Kayıt Ol butonuna tıklandığında modal açılır
  registerBtn.addEventListener("click", function () {
    registerModal.classList.add("active");
    // Modal açıldığında kaydırma çubuğunu devre dışı bırakıyoruz
    document.body.style.overflow = "hidden";
    // Eğer hamburger menü açıksa kapatıyoruz
    hamburgerMenu.classList.remove("active");
    mobileMenu.classList.remove("active");
  });

  // Tüm kapatma butonlarına olay dinleyicisi ekliyoruz
  closeButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      // Butonun bulunduğu modalı buluyoruz
      const modal = button.closest(".modal");

      // Modalı kapatıyoruz
      modal.classList.remove("active");

      // Modal kapandığında kaydırma çubuğunu tekrar etkinleştiriyoruz
      document.body.style.overflow = "";
    });
  });

  // Modalın dışına tıklandığında kapanması için
  window.addEventListener("click", function (event) {
    if (event.target.classList.contains("modal")) {
      event.target.classList.remove("active");
      // Modal kapandığında kaydırma çubuğunu tekrar etkinleştiriyoruz
      document.body.style.overflow = "";
    }
  });

  // Form gönderimi öncesi doğrulama için örnek
  const forms = document.querySelectorAll(".modal-content");
  forms.forEach(function (form) {
    form.addEventListener("submit", function (event) {
      event.preventDefault(); // Formun normal gönderimini engelliyoruz

      // Burada form doğrulama işlemleri yapılabilir
      // Örnek: şifre ve şifre tekrar kontrolü
      if (form.querySelector("#confirmPassword")) {
        const password = form.querySelector("#registerPassword").value;
        const confirmPassword = form.querySelector("#confirmPassword").value;

        if (password !== confirmPassword) {
          alert("Şifreler eşleşmiyor!");
          return false;
        }
      }

      // Doğrulama başarılıysa işlemlere devam edilebilir
      alert("Form başarıyla gönderildi!");

      // Modalı kapatıyoruz
      form.closest(".modal").classList.remove("active");
      document.body.style.overflow = "";
    });
  });
});
