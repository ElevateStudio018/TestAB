// Sidhuvud och meny.
// - Listen är genomskinlig över hero-sektionen och blir marinblå när sidan scrollas.
// - Menyknappen öppnar en helskärmspanel där länkarna glider upp en i taget.
//   Panelen stängs med knappen, med Esc eller när en länk väljs. Fokus stannar i menyn medan den är öppen.
(function () {
  var header = document.getElementById("sidhuvud");
  var button = document.querySelector(".menu-button");
  var menu = document.getElementById("huvudmeny");
  var label = document.querySelector(".menu-button__label");
  if (!header || !button || !menu) return;

  // Varje menyrad får sitt nummer i ordningen, så att de kan glida in efter varandra.
  menu.querySelectorAll(".menu__list li").forEach(function (item, index) {
    item.style.setProperty("--i", index);
  });

  function updateHeader() {
    header.classList.toggle("is-scrolled", window.scrollY > 24);
  }
  updateHeader();
  window.addEventListener("scroll", updateHeader, { passive: true });

  var closeTimer;

  function openMenu() {
    clearTimeout(closeTimer);
    menu.hidden = false;
    document.documentElement.classList.add("menu-open");
    button.setAttribute("aria-expanded", "true");
    button.setAttribute("aria-label", "Stäng menyn");
    if (label) label.textContent = "Stäng";
    // Två bildrutor efter att panelen visats, så att övergångarna hinner starta.
    requestAnimationFrame(function () {
      requestAnimationFrame(function () {
        menu.classList.add("is-open");
        var first = menu.querySelector("a");
        if (first) first.focus({ preventScroll: true });
      });
    });
  }

  function closeMenu(returnFocus) {
    menu.classList.remove("is-open");
    document.documentElement.classList.remove("menu-open");
    button.setAttribute("aria-expanded", "false");
    button.removeAttribute("aria-label");
    if (label) label.textContent = "Meny";
    closeTimer = setTimeout(function () {
      menu.hidden = true;
    }, 300);
    if (returnFocus) button.focus();
  }

  function isOpen() {
    return button.getAttribute("aria-expanded") === "true";
  }

  button.addEventListener("click", function () {
    if (isOpen()) closeMenu(true);
    else openMenu();
  });

  menu.addEventListener("click", function (event) {
    if (event.target.closest("a")) closeMenu(false);
  });

  document.addEventListener("keydown", function (event) {
    if (!isOpen()) return;
    if (event.key === "Escape") {
      closeMenu(true);
      return;
    }
    if (event.key !== "Tab") return;
    // Fokusfälla: menyknappen (som stänger) och länkarna i panelen.
    var items = [button].concat(Array.prototype.slice.call(menu.querySelectorAll("a")));
    var first = items[0];
    var last = items[items.length - 1];
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  });
})();
