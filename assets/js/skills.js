var skills = [
  (html = {
    fa: true,
    name: "HTML 5",
    icon: "fa-html5",
  }),
  (css = {
    fa: true,
    name: "CSS 3",
    icon: "fa-css3",
  }),
  (js = {
    fa: true,
    name: "JavaScript",
    icon: "fa-js",
  }),
  (bootstrap = {
    fa: true,
    name: "Bootstrap",
    icon: "fa-bootstrap",
  }),
  (tailwind = {
    fa: false,
    name: "Tailwind",
    icon: "tailwind",
  }),
  (mysql = {
    fa: false,
    name: "MySQL",
    icon: "mysql-icon",
  }),
  (symfony = {
    fa: true,
    name: "Symfony",
    icon: "fa-symfony",
  }),
  (node = {
    fa: true,
    name: "NodeJS",
    icon: "fa-node",
  }),
  (react = {
    fa: true,
    name: "ReactJS",
    icon: "fa-react",
  }),
  (mongodb = {
    fa: false,
    name: "MongoDB",
    icon: "mongodb-icon",
  }),
  (git = {
    fa: true,
    name: "GIT",
    icon: "fa-git-alt",
  }),
];

var front = [
  (html = {
    fa: true,
    name: "HTML 5",
    icon: "fa-html5",
  }),
  (css = {
    fa: true,
    name: "CSS 3",
    icon: "fa-css3",
  }),
  (js = {
    fa: true,
    name: "JavaScript",
    icon: "fa-js",
  }),
  (bootstrap = {
    fa: true,
    name: "Bootstrap",
    icon: "fa-bootstrap",
  }),
  (tailwind = {
    fa: false,
    name: "Tailwind",
    icon: "tailwind",
  }),
  (react = {
    fa: true,
    name: "ReactJS",
    icon: "fa-react",
  }),
];

var back = [
  (mysql = {
    fa: false,
    name: "MySQL",
    icon: "mysql-icon",
  }),
  (symfony = {
    fa: true,
    name: "Symfony",
    icon: "fa-symfony",
  }),
  (node = {
    fa: true,
    name: "NodeJS",
    icon: "fa-node",
  }),
  (mongodb = {
    fa: false,
    name: "MongoDB",
    icon: "mongodb-icon",
  }),
  (git = {
    fa: true,
    name: "GIT",
    icon: "fa-git-alt",
  }),
];

var list = document.getElementById("skills_list1");

// skills.map((skill) => {
//   skill.fa
//     ? (list.innerHTML += `<div class="skills_cards container">
//                             <i class="fa-brands ${skill.icon} skills_icon"></i>
//                             <p class="skills_name">${skill.name}</p>
//                         </div>`)
//     : (list.innerHTML += `<div class=" skills_cards container">
//                             <img src="./assets/img/${skill.icon}.svg" alt="${skill.icon}" class="skills_icon">
//                             <p class="skills_name sp">${skill.name}</p>
//                         </div>`);
// });

front.map((skill) => {
  skill.fa
      ? (list.innerHTML += `<div class="skills_cards">
                              <i class="fa-brands ${skill.icon} skills_icon"></i>
                              <p class="skills_name">${skill.name}</p>
                          </div>`)
      : (list.innerHTML += `<div class=" skills_cards">
                              <img src="./assets/img/${skill.icon}.svg" alt="${skill.icon}" class="skills_icon">
                              <p class="skills_name sp">${skill.name}</p>
                          </div>`);
});

var list2 = document.getElementById("skills_list2");

var graph = [
  photoshop = {
    name: "Photoshop",
    icon: "fa-pencil-alt",
    },
    illustrator = {
        name: "Illustrator",
        icon: "fa-pen-fancy",
    },
    xd = {
        name: "XD",
        icon: "fa-window-restore",
    }
];

back.map((skill) => {
  skill.fa
    ? (list2.innerHTML += `<div class="skills_cards">
                              <i class="fa-brands ${skill.icon} skills_icon"></i>
                              <p class="skills_name">${skill.name}</p>
                          </div>`)
    : (list2.innerHTML += `<div class=" skills_cards">
                              <img src="./assets/img/${skill.icon}.svg" alt="${skill.icon}" class="skills_icon">
                              <p class="skills_name sp">${skill.name}</p>
                          </div>`);
});

// graph.map((skill) => {
//     list2.innerHTML += `<div class="skills_cards container">
//                             <i class="fa-solid ${skill.icon} skills_icon"></i>
//                             <p class="skills_name">${skill.name}</p>
//                         </div>`;
// })

var list3 = document.getElementById("skills_list3");

graph.map((skill) => {
    list3.innerHTML += `<div class="skills_cards">
                            <i class="fa-solid ${skill.icon} skills_icon"></i>
                            <p class="skills_name">${skill.name}</p>
                        </div>`;
})