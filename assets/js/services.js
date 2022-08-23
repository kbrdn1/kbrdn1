var services = [
    web = {
        icon: "fa-code",
        name: 'Web Développement',
        description: "Développement de fonctionnalités front-end et back-end pour améliorer, poursuivre ou convertir un projet web déjà existant."
    },
    ui = {
        icon: "fa-pencil-alt",
        name: 'UI Design',
        description: "Réalisation complète d'une maquette et d'une charte graphique prête à l'emploi ou d'éléments spécifiques au sein d'un projet web, je communique à travers le graphisme une véritable identité."
    },
    ux = {
        icon: "fa-user-group",
        name: 'UX Design',
        description: "Amélioration de l'expérience utilisateur en prenant en compte la diversité et les exigences à travers des méthodes de travail spécifiques."
    }
];

var services_container = document.getElementById("services");

services.map((service) => {
    services_container.innerHTML += `<div class="services_cards container">
                                        <i class="fa-solid ${service.icon} services_icon"></i>
                                        <div class="services_name">${service.name}</div>
                                        <div class="services_description">${service.description}</div>
                                    </div>`;
});