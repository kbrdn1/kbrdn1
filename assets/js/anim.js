//When window is loaded

//init animations
let Status = {
    about: null,
    skills: null,
    projects: null,
    contact: null
};
anime({
    targets: ".about, .skills, .projects, .contact, .header_picture, .header_content",
    opacity: 0,
    translateY: 50,
    duration: 0
})

//init About
anime({
    targets: ".about_left, .about_right",
    opacity: 0,
    translateY: 25,
    duration: 0
})

//init Skills
anime({
    targets: ".skills_content, .skills_footer",
    opacity: 0,
    translateY: 25,
    duration: 0
})

//init Projects
anime({
    targets: ".projects_nav, .projects_list, .projects_more",
    opacity: 0,
    translateY: 25,
    duration: 0
})

//init Contact
anime({
    targets: ".contact_form, .contact_info",
    opacity: 0,
    translateY: 25,
    duration: 0
})

//Timeline
let tlAbout = anime.timeline({
        duration: 1000
    }),
    tlSkills = anime.timeline({
        duration: 1000
    }),
    tlProjects = anime.timeline({
        duration: 1000
    }),
    tlContact = anime.timeline({
        duration: 1000
    })

function onDisplaySection(section) {
    if (section === "about" && Status.about === null) {
        tlAbout.add({
            targets: "." + section,
            opacity: 1,
            translateY: "0px"
        });
        tlAbout.add({
            targets: ".about_right",
            opacity: 1,
            translateY: "0px"
        })
        tlAbout.add({
            targets: ".about_left",
            opacity: 1,
            translateY: "0px"
        })
        Status.about = "loaded"
    }
    if (section === "skills" && Status.skills === null) {
        tlSkills.add({
            targets: "." + section,
            opacity: 1,
            translateY: "0px"
        });
        tlSkills.add({
            targets: ".skills_content",
            opacity: 1,
            translateY: "0px"
        });
        tlSkills.add({
            targets: ".skills_footer",
            opacity: 1,
            translateY: "0px"
        });
        Status.skills = "loaded"
    }
    if (section === "projects" && Status.projects === null) {
        tlProjects.add({
            targets: "." + section,
            opacity: 1,
            translateY: "0px"
        });
        tlProjects.add({
            targets: ".projects_nav",
            opacity: 1,
            translateY: "0px"
        });
        tlProjects.add({
            targets: ".projects_nav",
            opacity: 1,
            translateY: "0px"
        })
        tlProjects.add({
            targets: ".projects_list",
            opacity: 1,
            translateY: "0px"
        })
        tlProjects.add({
            targets: ".projects_more",
            opacity: 1,
            translateY: "0px"
        })
        Status.projects = "loaded"
    }
    if (section === "contact" && Status.contact === null) {
        tlContact.add({
            targets: "." + section,
            opacity: 1,
            translateY: "0px"
        });
        tlContact.add({
            targets: ".contact_form",
            opacity: 1,
            translateY: "0px"
        })
        tlContact.add({
            targets: ".contact_info",
            opacity: 1,
            translateY: "0px"
        })
        Status.contact = "loaded"
    }
}

function onLoadDocument() {
    anime({
        targets: ".header_picture, .header_content",
        opacity: 1,
        translateY: "0px",
        duration: 1500,
    });
}