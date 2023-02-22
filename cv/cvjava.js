//seccion barra navegacion
var menu1 = document.querySelector(".menu");

var menuLinks = document.querySelectorAll('.menu a[href^="#"]');

var observer = new IntersectionObserver(
  (entradas) => {
    entradas.forEach((entrada) => {
      const id = entrada.target.getAttribute("id");
      const menuLink = document.querySelector(`.menu a[href="#${id}"]`);

      if (entrada.isIntersecting) {
        document.querySelector(".menu a.seleccion").classList.remove("seleccion");
        menuLink.classList.add("seleccion");
      }
    });
  },
 { rootMargin: "-50% 0px -50% 0px" }
);

menuLinks.forEach((menuLink) => {
  const hash = menuLink.getAttribute("href");
  const target = document.querySelector(hash);
  if (target) {
    observer.observe(target);
  }
});

// en esta seccion devuelvo datos 
var nombre = document.querySelector("h1");
console.log("Hola mi nombre es " + nombre.innerHTML);

var habilidades= document.getElementsByClassName("habilidades-habilidades"),
    array_de_strings = [];
console.log("y mis Habilidades son:")
for (var i = 0; i < habilidades.length; i++) {
    console.log(habilidades[i].textContent);
    array_de_strings.push(habilidades[i].textContent);
}