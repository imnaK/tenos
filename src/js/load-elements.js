document.addEventListener("DOMContentLoaded", function (event) {
  document.body.prepend(getNavElement());

  document.body.append(getScrollToTopElement());
  // add scroll event listener and only show scroll-to-top when scrolled down
  window.addEventListener("scroll", function () {
    updateScrollToTop();
  });
  updateScrollToTop();
});

function updateScrollToTop() {
  var scroll = document.getElementById("scroll-to-top");
  if (window.scrollY > 0) {
    scroll.style.bottom = "1rem";
  } else {
    scroll.style.bottom = "-3rem";
  }
}

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

function getScrollToTopElement() {
  var scrollToTop = document.createElement("div");
  scrollToTop.setAttribute("id", "scroll-to-top");
  scrollToTop.setAttribute("class", "scroll-to-top");
  scrollToTop.setAttribute("onclick", "scrollToTop()");
  scrollToTop.innerHTML = `
    <span class="icon fa-solid fa-arrow-up nord-a-100"></span>
  `;

  return scrollToTop;
}

function getNavElement() {
  const navElements = [
    {
      name: "Home",
      link: "index.html",
      faIcon: ["fa-solid", "fa-circle-notch", "nord-a-100"],
    },
    {
      name: "Windows",
      link: "windows.html",
      faIcon: ["fa-brands", "fa-microsoft", "nord-f-400"],
    },
    {
      name: "MacOS",
      link: "macos.html",
      faIcon: ["fa-brands", "fa-apple", "nord-a-200"],
    },
    {
      name: "Linux",
      link: "linux.html",
      faIcon: ["fa-brands", "fa-linux", "nord-a-300"],
    },
    {
      name: "Android",
      link: "android.html",
      faIcon: ["fa-brands", "fa-android", "nord-a-400"],
    },
  ];

  // create nav with #nav
  var nav = document.createElement("nav");
  nav.setAttribute("id", "navbar");
  nav.setAttribute("class", "navbar");

  // add ul to nav
  var ul = document.createElement("ul");
  ul.setAttribute("class", "navbar-nav");

  // for every element in navElements create a nav-item
  navElements.forEach((element) => {
    // create nav-item
    var li = document.createElement("li");
    li.setAttribute("class", "nav-item");

    // create nav-link
    var a = document.createElement("a");
    a.setAttribute("class", "nav-link");
    a.setAttribute("href", element.link);

    // create icon
    var icon = document.createElement("span");
    icon.setAttribute("class", "icon " + element.faIcon.join(" "));

    // create text
    var text = document.createElement("span");
    text.innerText = element.name;

    // add text and icon to nav-link
    a.appendChild(icon);
    a.appendChild(text);

    // add nav-link to nav-item
    li.appendChild(a);

    // add nav-item to ul
    ul.appendChild(li);
  });

  // add ul to nav
  nav.appendChild(ul);

  return nav;
}
