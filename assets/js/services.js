var services = [
  (web = {
    icon: "fa-code",
    img: "./assets/img/serv.png",
    name: "Web Développement",
    description:
      "Développement de fonctionnalités front-end et back-end pour améliorer, poursuivre ou convertir un projet web déjà existant.",
  }),
  (ui = {
    icon: "fa-pencil-alt",
    img: "./assets/img/web_design.png",
    name: "UI Design",
    description:
      "Réalisation complète d'une maquette et d'une charte graphique prête à l'emploi ou d'éléments spécifiques au sein d'un projet web, je communique à travers le graphisme une véritable identité.",
  }),
  (ux = {
    icon: "fa-user-group",
    img: "./assets/img/dev_web.png",
    name: "UX Design",
    description:
      "Amélioration de l'expérience utilisateur en prenant en compte la diversité et les exigences à travers des méthodes de travail spécifiques.",
  }),
];

var services_container = document.getElementById("services");

services.map((service) => {
  services_container.innerHTML += `<div class="services_cards container">
                                         <img class="services_icon-img" src="${service.img}"/>
                                         <div class="services_name">${service.name}</div>
                                         <div class="services_description">${service.description}</div>
                                        `/*<div class="services_before"></div>*/ + `
                                     </div>`;
  //`<div class="services_cards container">
  //                                     <i class="fa-solid ${service.icon} services_icon"></i>
  //                                     <div class="services_name">${service.name}</div>
  //                                     <div class="services_description">${service.description}</div>
  //                                 </div>`;
});
