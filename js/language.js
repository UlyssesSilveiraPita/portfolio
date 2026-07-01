const btnBR = document.getElementById("lang-br");
const btnUS = document.getElementById("lang-us");

function getCurrentPage() {
  return window.location.pathname.split("/").pop() || "index.html";
}

function isEnglishPage(page) {
  return page === "index-en.html" || page.endsWith("-en.html");
}

function selectLanguage(language) {
  btnBR.classList.remove("lang-selected");
  btnUS.classList.remove("lang-selected");

  if (language === "pt") btnBR.classList.add("lang-selected");
  if (language === "en") btnUS.classList.add("lang-selected");
}

function toEnglishPage(page) {
  if (page === "index.html") return "index-en.html";
  if (page.endsWith("-en.html")) return page;
  return page.replace(".html", "-en.html");
}

function toPortuguesePage(page) {
  if (page === "index-en.html") return "index.html";
  if (page.endsWith("-en.html")) return page.replace("-en.html", ".html");
  return page;
}

function updateInternalLinks(language) {
  const links = document.querySelectorAll("a[href$='.html']");

  links.forEach((link) => {
    const href = link.getAttribute("href");

    if (language === "en") {
      link.setAttribute("href", toEnglishPage(href));
    } else {
      link.setAttribute("href", toPortuguesePage(href));
    }
  });
}

function changeLanguage(language) {
  localStorage.setItem("portfolioLanguage", language);
  selectLanguage(language);

  const page = getCurrentPage();

  if (language === "en") {
    window.location.href = toEnglishPage(page);
  } else {
    window.location.href = toPortuguesePage(page);
  }
}

window.addEventListener("load", () => {
  const page = getCurrentPage();

  let language = localStorage.getItem("portfolioLanguage");

  if (!language) {
    language = isEnglishPage(page) ? "en" : "pt";
  }

  selectLanguage(language);
  updateInternalLinks(language);

  btnBR.addEventListener("click", () => changeLanguage("pt"));
  btnUS.addEventListener("click", () => changeLanguage("en"));
});
