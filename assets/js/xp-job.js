var xp = [
    CCI = {
        job: false,
        date: "Octobre 2021 - Juin 2022",
        name: "CCI Longwy - EESC",
        subname: "BAC+2 - Développeur Web et Web mobile",
        description: "Longwy"
    },
    lycee = {
        date: "2020",
        name: "Lycée Jean ZAY",
        subname: "Bacalauréat - STI2D option SIN",
        description: "Jarny"
    },
    college = {
        job: false,
        date: "2016",
        name: "Collège Paul VARLAINE",
        subname: "Brevet des collèges",
        description: "Longuyon"
    },
    eurostamp = {
        job: true,
        date: "Octobre 2020 - Octobre 2021",
        name: "EUROSTAMP",
        subname: "Opérateur de production",
        description: "Villers-la-Montagne"
    },
    serveur = {
        job: true,
        date: "Mars 2018",
        name: "Mairie de Longuyon",
        subname: "Serveur de restaurant",
        description: "Longuyon"
    },
];

var diplomes = document.getElementById("diplomes");
var job = document.getElementById("job");

xp.map((xp) => {
    xp.job ?
        job.innerHTML += `<div class="xp-job_cards container">
                                <p class="xp-job_date">${xp.date}</p>

                                <h4 class="xp-job_name">${xp.name}</h4>

                                <p class="xp-job_subname">${xp.subname}</p>

                                <p class="xp-job_description">${xp.description}</p>
                            </div>`
        :
        diplomes.innerHTML += `<div class="xp-job_cards container">
                                <p class="xp-job_date">${xp.date}</p>

                                <h4 class="xp-job_name">${xp.name}</h4>

                                <p class="xp-job_subname">${xp.subname}</p>

                                <p class="xp-job_description">${xp.description}</p>
                            </div>`;
});