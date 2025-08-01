

function documentHeight() {
  const doc = document.documentElement;
  doc.style.setProperty("--doc-height", `${window.innerHeight}px`);
}

window.addEventListener("load", documentHeight);
window.addEventListener("resize", documentHeight);
window.addEventListener("scroll", documentHeight);



window.sr = ScrollReveal({ reset: true });

sr.reveal("#aboutTexts", {
  distance: "100%",
  origin: "left",
  duration: 1000,
});

sr.reveal("#aboutImg", {
  distance: "100%",
  origin: "right",
  duration: 1000,
});

sr.reveal("#iscool", { duration: 2000 });
sr.reveal("#dbgeral", { duration: 2000 });

sr.reveal("#contact", {
  duration: 1000,
  distance: "50px",
  easing: "cubic-bezier(0.5, -0.01, 0, 1.005)",
  interval: 64,
  origin: "bottom",
  viewFactor: 0.32,
});



const scrollBtns =
  document.getElementById("scrollBtns"); 

document.querySelector("ul#menu .fa-xmark").addEventListener("click", () => {
  openMenu(false);
});

document.querySelector("nav > i.fa-bars").addEventListener("click", () => {
  openMenu(true);
});

function openMenu(action) {
  if (window.innerWidth > 440) {
    action
      ? (document.getElementById("menu").style.right = "0px")
      : (document.getElementById("menu").style.right = "-160px");
  } else {
    action
      ? (document.getElementById("menu").style.right = "0px")
      : (document.getElementById("menu").style.right = "-135px");
  }

  const backgroundColor = document.body.style.backgroundColor;
  const currentColor = backgroundColor ? rgbToHex(backgroundColor) : "";

  if (action) {
    scrollBtns.style.display = "none";

    if (currentColor === "#e2e2e2") {
      document.querySelector("ul#menu > li:nth-of-type(2) > a").style.color =
        "#fff";
      document.querySelector("ul#menu > li:nth-of-type(3) > a").style.color =
        "#fff";
      document.querySelector("ul#menu > li:nth-of-type(4) > a").style.color =
        "#fff";
      document.querySelector("nav:not(h1)").style.color = "#fff";
    }
  } else {
    if (currentColor === "#e2e2e2") {
      document.querySelector("ul#menu > li:nth-of-type(2) > a").style.color =
        "#000";
      document.querySelector("ul#menu > li:nth-of-type(3) > a").style.color =
        "#000";
      document.querySelector("ul#menu > li:nth-of-type(4) > a").style.color =
        "#000";
      document.querySelector("nav:not(h1)").style.color = "#000";
    }

    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      scrollBtns.style.display = "flex";
      animateCSS("#scrollBtns", "flipInX");
    }
  }
}

let larguraAnterior = window.innerWidth;

window.addEventListener("resize", () => {
  const larguraAtual = window.innerWidth;

  if (
    larguraAtual >= 440 &&
    larguraAnterior < 440 &&
    document.getElementById("menu").style.right !== "0px"
  ) {
    document.getElementById("menu").style.right = "-160px";
    larguraAnterior = larguraAtual;
  }

  if (
    (larguraAtual >= 1001 && larguraAnterior < 1001) ||
    (larguraAtual <= 1000 && larguraAnterior > 1000)
  ) {
    document.getElementById("menu").style.right = "-160px";
    larguraAnterior = larguraAtual;
    showButtons();
  }

  if (
    (larguraAtual >= 441 && larguraAnterior < 441) ||
    (larguraAtual <= 440 && larguraAnterior > 440)
  ) {
    larguraAnterior = larguraAtual;
  }
});



document
  .querySelector("ul#menu > li:nth-of-type(2)")
  .addEventListener("click", () => {
    openMenu(false);
  });

document
  .querySelector("ul#menu > li:nth-of-type(3)")
  .addEventListener("click", () => {
    openMenu(false);
  });

document
  .querySelector("ul#menu > li:nth-of-type(4)")
  .addEventListener("click", () => {
    openMenu(false);
  });


document.querySelector("ul#menu > li > i").addEventListener("click", () => {
  animateCSS("ul#menu > li > i", "flipOutY").then(() => {
    animateCSS("ul#menu > li > i", "flipInY").then(() => {
      openMenu(false);
    });
    changeTheme(); 
  });
});

document
  .querySelector("div#headerTextAndImage > img")
  .addEventListener("click", () => {
    animateCSS("div#headerTextAndImage > img", "zoomOutLeft").then(() => {
      animateCSS("div#headerTextAndImage > img", "zoomInRight");
    });
  });

document.querySelector("#headerText > h1").addEventListener("mouseover", () => {
  if (!isScrolling()) animateCSS("#headerText > h1", "rubberBand");
});

document.querySelector("#about .title").addEventListener("click", () => {
  animateCSS("#about .title", "hinge").then(() => {
    animateCSS("#about .title", "fadeInDownBig");
  });
});

document.querySelector("#portfolio .title").addEventListener("click", () => {
  animateCSS("#portfolio .title", "hinge").then(() => {
    animateCSS("#portfolio .title", "zoomInDown");
  });
});

document.querySelector("#contact .title").addEventListener("click", () => {
  animateCSS("#contact .title", "hinge").then(() => {
    animateCSS("#contact .title", "bounceInDown");
  });
});

window.addEventListener("scroll", () => {
  window.lastScrollTime = new Date().getTime();
});

function isScrolling() {
  return (
    window.lastScrollTime && new Date().getTime() < window.lastScrollTime + 500
  );
}

const animateCSS = (element, animation, prefix = "animate__") =>
  new Promise((resolve) => {
    const animationName = `${prefix}${animation}`;
    const node = document.querySelector(element);

    node.classList.add(`${prefix}animated`, animationName);

    function handleAnimationEnd(event) {
      event.stopPropagation();
      node.classList.remove(`${prefix}animated`, animationName);
      resolve("Animation ended");
    }

    node.addEventListener("animationend", handleAnimationEnd, { once: true });
  });



function changeTheme() {
  const backgroundColor = document.body.style.backgroundColor;
  const currentColor = backgroundColor ? rgbToHex(backgroundColor) : "";

  if (currentColor !== "#e2e2e2") {
    
    document.body.style.backgroundColor = "#e2e2e2";

    changeBackground();

    window.addEventListener("resize", changeBackground);

    document.querySelector("nav > h1:not(span)").style.color = "#232323";
    document.querySelector("nav:not(h1)").style.color = "#000";
    document.querySelector("ul#menu > li:nth-of-type(2) > a").style.color =
      "#000";
    document.querySelector("ul#menu > li:nth-of-type(3) > a").style.color =
      "#000";
    document.querySelector("ul#menu > li:nth-of-type(4) > a").style.color =
      "#000";
    document.querySelector("#headerText:not(span)").style.color = "#000";

    /* Seção sobre mim */
    document
      .querySelectorAll(".title")
      .forEach((el) => (el.style.color = "#232323"));

    document.querySelector("section#about").style.color = "#2e2e2e";

    document
      .querySelectorAll(".institution")
      .forEach((el) => (el.style.color = "#000"));

    /* Seção Portfólio */
    document.querySelectorAll("div#iscool h2").forEach(h2 => h2.style.color = "#454545");
    document.querySelectorAll("#iscoolTexts p").forEach(p => p.style.color = "#2e2e2e");
    document.querySelectorAll("div#dbgeral h2").forEach(h2 => h2.style.color = "#454545");
    document.querySelectorAll("#dbgeralTexts p").forEach(p => p.style.color = "#2e2e2e");

    /* Seção Contato */
    document.querySelector(
      "div#contactLeft > div:first-child > a"
    ).style.color = "#000";
    document.querySelector("div#contactLeft > div > p:not(i)").style.color =
      "#000";
    document
      .querySelectorAll("#contactLeft > div > #socialMediaBox > a")
      .forEach((link) => {
        link.style.setProperty("--socialMediaColor", "#2e2e2e");
      });

    document
      .querySelectorAll("#contact input")
      .forEach((p) => (p.style.background = "#fff"));
    document.querySelector("#contact textarea").style.background = "#fff";
    document
      .querySelectorAll("#contact input")
      .forEach((p) => (p.style.color = "#000"));
    document.querySelector("#contact textarea").style.color = "#000";
    document
      .querySelector("#contact button ")
      .style.setProperty("--submitBtnColor", "#000");
  } else {
    /* Remove alterações */
    document.body.style.backgroundColor = null;
    document.querySelector("main").classList.remove("whitePortraitBackground");
    document.querySelector("main").classList.remove("whiteLandscapeBackground");
    window.removeEventListener("resize", changeBackground);

    document.querySelector("nav > h1:not(span)").style.color = null;
    document.querySelector("nav:not(h1)").style.color = null;
    document.querySelector("ul#menu > li:nth-of-type(2) > a").style.color =
      null;
    document.querySelector("ul#menu > li:nth-of-type(3) > a").style.color =
      null;
    document.querySelector("ul#menu > li:nth-of-type(4) > a").style.color =
      null;
    document.querySelector("#headerText:not(span)").style.color = null;

    /* Seção sobre mim */
    document
      .querySelectorAll(".title")
      .forEach((el) => (el.style.color = null));

    document.querySelector("section#about").style.color = null;

    document
      .querySelectorAll(".institution")
      .forEach((el) => (el.style.color = null));

    /* Seção Portfólio */
    document.querySelector("div#iscool h2").style.color = null;
    document
      .querySelectorAll("#iscoolTexts p")
      .forEach((p) => (p.style.color = null));
    document.querySelector("div#dbgeral h2").style.color = null;
    document
      .querySelectorAll("#dbgeralTexts p")
      .forEach((p) => (p.style.color = null));

    /* Seção Contato */
    document.querySelector(
      "div#contactLeft > div:first-child > a"
    ).style.color = null;
    document.querySelector("div#contactLeft > div > p:not(i)").style.color =
      null;
    document
      .querySelectorAll("#contactLeft > div > #socialMediaBox > a")
      .forEach((link) => {
        link.style.setProperty("--socialMediaColor", "#ababab");
      });

    document
      .querySelectorAll("#contact input")
      .forEach((p) => (p.style.background = null));
    document.querySelector("#contact textarea").style.background = null;
    document
      .querySelectorAll("#contact input")
      .forEach((p) => (p.style.color = null));
    document.querySelector("#contact textarea").style.color = null;
    document
      .querySelector("#contact button ")
      .style.setProperty("--submitBtnColor", "#fff");
  }
}

function changeBackground() {
  if (window.innerWidth <= 1000) {
    document.querySelector("main").classList.add("whitePortraitBackground");
  } else {
    document.querySelector("main").classList.add("whiteLandscapeBackground");
  }
}

function rgbToHex(color) {
  if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(color)) {
    return color;
  }

  const [, r, g, b] = color.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);

  const hex = [r, g, b]
    .map((v) => parseInt(v, 10).toString(16).padStart(2, "0"))
    .join("");

  return `#${hex}`;
}

/* Voltar ao topo: */

let isAnimated = false;

window.addEventListener("scroll", () => {
  showButtons();
});

function showButtons() {
  /* Barra de progresso */
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  let scrollHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  let scrollPercent = (scrollTop / scrollHeight) * 100;
  document.querySelector(".progress").style.width = scrollPercent + "%";

  if (
    (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) &&
    document.getElementById("menu").style.right !== "0px"
  ) {
    scrollBtns.style.display = "flex";

    if (window.innerWidth <= 1000) {
      document.getElementById("openMenuTwo").style.display = "block";
    } else {
      document.getElementById("openMenuTwo").style.display = "none";
    }

    isAnimated == false &&
      animateCSS("#scrollBtns", "flipInX").then(() => {
        isAnimated = true;
      });
  } else {
    isAnimated = false;
    scrollBtns.style.display = "none";
  }
}

document.getElementById("openMenuTwo").addEventListener("click", () => {
  openMenu(true);
});

document.getElementById("backToTop").addEventListener("click", () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});

/* Mudar aba na seção "Sobre Mim": */

function openTab(tabName) {
  let tabLinks = document.getElementsByClassName("tabLinks");
  let tabContents = document.getElementsByClassName("tabContents");

  for (tabLink of tabLinks) {
    tabLink.classList.remove("activeLink");
  }
  for (tabContent of tabContents) {
    tabContent.classList.remove("activeTab");
  }

  switch (tabName) {
    case "skills":
      document.getElementById("skillsLink").classList.add("activeLink");
      break;

    case "education":
      document.getElementById("educationLink").classList.add("activeLink");
      break;

    case "experience":
      document.getElementById("experienceLink").classList.add("activeLink");
      break;
  }

  document.getElementById(tabName).classList.add("activeTab");
}

/* Reposicionamento de elementos por conta da responsividade: */

window.addEventListener("load", changePlaces);

window.addEventListener("resize", changePlaces);

function changePlaces() {
  const aboutTitle = document.querySelector("section#about h1");
  const iscoolTitle = document.querySelector("div#iscool h2");
  const dbgeralTitle = document.querySelector("div#dbgeral h2");

  if (window.innerWidth <= 1000) {
    const aboutImage = document.querySelector("div#aboutImg");
    const iscoolImages = document.querySelector("div#iscoolImages");
    const gbgeralImage = document.querySelector("div#dbgeralImages");

    aboutImage.insertAdjacentElement("afterbegin", aboutTitle);
    gbgeralImage.insertAdjacentElement("beforebegin", dbgeralTitle);
    iscoolImages.insertAdjacentElement("beforebegin", iscoolTitle);
  }

  if (window.innerWidth > 1000) {
    const aboutTexts = document.querySelector("div#aboutTexts");
    const iscoolTexts = document.querySelector("div#iscoolTexts");
    const dbgeralTexts = document.querySelector("div#dbgeralTexts");

    aboutTexts.insertAdjacentElement("afterbegin", aboutTitle);
    iscoolTexts.insertAdjacentElement("afterbegin", iscoolTitle);
    dbgeralTexts.insertAdjacentElement("afterbegin", dbgeralTitle);
  }
}

/* Animação de digitação na tela principal: */

const texts = [
  "Cientista de Dados",
  "Python e Machine Learning",
  "R",
  "SQL",
  "Javascript",
  "HTML e CSS",
];
const delay = 1300;
const textDelay = 75;
let index = 0;
let textIndex = 0;

function typeWrite() {
  if (textIndex < texts[index].length) {
    const typingElement = document.getElementById("typing-effect");
    typingElement.innerHTML += texts[index].charAt(textIndex);
    textIndex++;
    setTimeout(typeWrite, textDelay);
  } else {
    setTimeout(eraseWrite, delay);
  }
}

function eraseWrite() {
  if (textIndex > 0) {
    const typingElement = document.getElementById("typing-effect");
    typingElement.innerHTML = texts[index].substring(0, textIndex - 1);
    textIndex--;
    setTimeout(eraseWrite, textDelay);
  } else {
    index++;
    if (index >= texts.length) {
      index = 0;
    }
    setTimeout(typeWrite, delay);
  }
}

typeWrite();

/* Validação e envio de formulário: */

window.addEventListener("load", initFormValidation);

function initFormValidation() {
  const form = document.querySelector("#contact form");
  const name = document.querySelector('#contact input[type="text"]');
  const email = document.querySelector('#contact input[type="email"]');
  const message = document.querySelector("#contact textarea");
  const submitBtn = document.querySelector("#contact button");
  let error = false;

  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    submitBtn.disabled = true;
    name.disabled = true;
    email.disabled = true;
    message.disabled = true;
    submitBtn.textContent = "Enviando...";

    const nameValue = name.value.trim();
    const emailValue = email.value.trim();
    const messageValue = message.value.trim();

    if (nameValue === "") {
      name.parentElement.classList.add("error");
      error = true;
    }

    if (emailValue === "") {
      email.parentElement.classList.add("error");
      error = true;
    }

    if (messageValue === "") {
      message.parentElement.classList.add("error");
      error = true;
    }

    if (!error) {
      await fetch("https://formsubmit.co/ajax/alisoncsousa97@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: nameValue,
          email: emailValue,
          message: messageValue,
        }),
      })
        .then(() => {
          submitBtn.textContent = "Enviado";
          submitBtn.style.border = "2px solid #4eca64";
          submitBtn.style.boxShadow = "0px 0px 10px #4eca6572";
          submitBtn.style.color = "#4eca64";

          name.parentElement.classList.add("success");
          email.parentElement.classList.add("success");
          message.parentElement.classList.add("success");

          setTimeout(() => {
            animateCSS("#contact button", "tada");
          }, 3000);

          setTimeout(() => {
            submitBtn.textContent = "Enviar";
            submitBtn.style.border = null;
            submitBtn.style.boxShadow = null;
            submitBtn.style.color = null;

            submitBtn.removeAttribute("disabled");
            name.removeAttribute("disabled");
            email.removeAttribute("disabled");
            message.removeAttribute("disabled");

            name.parentElement.classList.remove("success");
            email.parentElement.classList.remove("success");
            message.parentElement.classList.remove("success");

            name.value = "";
            email.value = "";
            message.value = "";
          }, 7000);
        })
        .catch((error) => {
          console.log(error);
          submitBtn.textContent = "Erro";
          submitBtn.style.border = "2px solid #d31717";
          submitBtn.style.boxShadow = "0px 0px 10px #d317177b";
          submitBtn.style.color = "#d31717";

          name.parentElement.classList.add("error");
          email.parentElement.classList.add("error");
          message.parentElement.classList.add("error");

          setTimeout(() => {
            animateCSS("#contact button", "headShake");
          }, 3000);

          alert("Ocorreu um erro ao enviar a mensagem: " + error);

          setTimeout(() => {
            submitBtn.textContent = "Enviar";
            submitBtn.style.border = null;
            submitBtn.style.boxShadow = null;
            submitBtn.style.color = null;

            submitBtn.removeAttribute("disabled");
            name.removeAttribute("disabled");
            email.removeAttribute("disabled");
            message.removeAttribute("disabled");

            name.parentElement.classList.remove("error");
            email.parentElement.classList.remove("error");
            message.parentElement.classList.remove("error");

            name.value = "";
            email.value = "";
            message.value = "";
          }, 7000);
        });
    }
  });
}
