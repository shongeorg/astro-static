form.addEventListener("submit", function (e) {
  if (!form.checkValidity()) {
    e.preventDefault();
    form.querySelectorAll("input,textarea").forEach(function (el) {
      if (!el.checkValidity()) {
        el.focus();
        return false;
      }
    });
    return;
  }
  e.preventDefault();
  var data = new FormData(form);
  fetch("/", { method: "POST", body: data })
    .then(function () {
      form.reset();
      alert("Дякуємо, повідомлення надіслано");
    })
    .catch(function () {
      alert("Помилка надсилання");
    });
});
