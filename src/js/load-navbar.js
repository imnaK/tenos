document.addEventListener("DOMContentLoaded", function (event) {
  const navElements = [
    {
      name: "Home",
      link: "index.html",
      faIcon: ["fa-solid", "fa-circle-notch", "nord-a-100"],
    },
    {
      name: "Windows",
      link: "windows.html",
      faIcon: ["fa-brands", "fa-microsoft", "nord-a-300"],
    },
    {
      name: "MacOS",
      link: "apple.html",
      faIcon: ["fa-brands", "fa-apple", "nord-a-400"],
    },
    {
      name: "Linux",
      link: "linux.html",
      faIcon: ["fa-brands", "fa-linux", "nord-a-200"],
    },
    {
      name: "Android",
      link: "android.html",
      faIcon: ["fa-brands", "fa-android", "nord-a-500"],
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

  // add nav to body
  document.body.prepend(nav);
});
