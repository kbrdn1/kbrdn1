var projects = [
  myhackount = {
    name: "MyHackount",
    project: "MyHackount",
    type: "site",
    img: "MyHackount.png",
    description: "Projet MERN. Il s'agit d'un réseau social réaliser avec Nodes.js pour créer une API avec MongoDB et Express puis React.js afin de créer l'interface de l'application.",
    list: [
        "NodeJS",
        "ReactJS",
        "Redux",
        "MongoDB",
        "Express",
        "SASS",
        "NPM"
        ],
    link: "https://github.com/kbrdn1/MyHackount-MERN-Project"
    },
    hg = {
        name: "House & Garden",
        project: "H&G",
        type: "site",
        img: "project_H&G.png",
        description: "Site internet pour un paysagiste, avec demande de devis et espace administrateur.",
        list: [
            "HTML",
            "CSS",
            "JavaScript",
            "Symfony",
            "Twig",
            "Doctrine",
            "MySQL"
        ],
        link: "https://github.com/kbrdn1/House-and-Garden"
    },
    reactworld = {
        name: "React World",
        project: "reactWorld",
        type: "site",
        img: "reactworld.jpg",
        description: "Site contenant différentes information sur les pays du monde via une API",
        list: [
            "ReactJS",
            "SASS",
            "restcountries API"
        ],
        link: "https://github.com/kbrdn1/React-World"
    },
    hgimg = {
        name: "House & Garden",
        project: "portfolio3",
        type: "image",
        img: "HGimg",
        description: "Chartre graphique pour la société House and Garden",
        list: [
            "Photoshop",
            "Illustrator",
            "InDesign"
        ],
        link: "./assets/Charte graphique_H&G.pdf"
    },
    mvc = {
        name: "CRUD MVC",
        project: "portfolio1",
        type: "site",
        img: "portfolio1.jpg",
        description: "Réalisation d'un CRUD avec le modèle d'architecture MVC",
        list: [
            "HTML",
            "CSS",
            "PHP",
            "Bootstrap",
            "MySQL"
        ],
        link: "https://github.com/kbrdn1/crud-mvc"
    },
    php = {
        name: "CRUD PHP",
        project: "portfolio2",
        type: "site",
        img: "portfolio2.jpg",
        description: "Réalisation d'un CRUD en PHP",
        list: [
            "HTML",
            "CSS",
            "PHP",
            "MySQL"
        ],
        link: "https://github.com/kbrdn1/Crud-PHP"
    }
];

var list = document.getElementById("portfolio_list");
var list2 = document.getElementById("body");

projects.map((project) => {
    project.type === "site"
        ? list.innerHTML += `<div class="portfolio_cards" project="${project.project}" type="${project.type}">
                    <div class="portfolio_cards_content btn" btn="${project.project}">
                        <i class="fa-solid fa-plus portfolio_more"></i>
                        <div class="portfolio_type">Site Web</div>
                        <h3 class="portfolio_name">${project.name}</h3>
                        <div class="before"></div>
                    </div>
                </div>`
        : list.innerHTML += `<div class="portfolio_cards" project="${project.project}" type="${project.type}">
                    <div class="portfolio_cards_content btn" btn="${project.project}">
                        <i class="fa-solid fa-plus portfolio_more"></i> 
                        <div class="portfolio_type">Image</div>
                        <h3 class="portfolio_name">${project.name}</h3>
                        <div class="before"></div>  
                    </div>
                    </div>`;
});

projects.map((project) => {
    project.type === "site" ?
        list2.innerHTML += `<div class="portfolio_modal" modal="${project.project}">
        <div class="modal">
            <i class="fa-solid fa-xmark modal_x" close="${project.project}"></i>
            <img src="./assets/img/${project.img}" alt="modal_bg" class="modal_bg">
            <div class="modal_content">
                <div class="modal_type">Site Web</div>

                <div class="modal_title title">${project.name}</div>

                <div class="modal_description">${project.description}
                </div>

                <div class="modal_construct title">Construit avec:</div>

                <ul class="construct_list">
                    ${project.list.map((item) => `<li class="construct_items">${item}</li>`).join("")}
                </ul>

                <a href="${project.link}" target="_blank">
                    <div class="btn" btn="modal">Voir le projet
                        <div class="before"></div>
                    </div>
                </a>
            </div>
        </div>
    </div>`
        :
    list2.innerHTML += `<div class="portfolio_modal" modal="${project.project}">
        <div class="modal">
            <i class="fa-solid fa-xmark modal_x" close="${project.project}"></i>
            <img src="./assets/img/${project.img}.png" alt="modal_bg" class="modal_bg">
            <div class="modal_content">
                <div class="modal_type">Image de marque</div>

                <div class="modal_title title">${project.name}</div>

                <div class="modal_description">${project.description}
                </div>

                <div class="modal_construct title">Construit avec:</div>

                <ul class="construct_list">
                    ${project.list.map((item) => `<li class="construct_items">${item}</li>`).join("")}
                </ul>

                <a href="${project.link}" target="_blank">
                    <div class="btn" btn="modal">Voir le projet
                        <div class="before"></div>
                    </div>
                </a>
            </div>
        </div>
    </div>`;
})
