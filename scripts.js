let skills = [
  {
    category: "Frontend",
    items: ["HTML5", "CSS3", "JavaScript", "TypeScript", "Bootstrap"],
  },
  { category: "Frameworks", items: ["Angular"] },
  { category: "Tools", items: ["Git", "GitHub", "VS Code", "npm"] },
];

let projects = [
  {
    title: "My Art Gallery",
    technology: "HTML",
    description:
      "A responsive gallery page built with semantic HTML and CSS to present artworks.",
    liveUrl: "myArtGallery/index.html",
  },
  {
    title: "My Book Tracker",
    technology: "JavaScript",
    description:
      "A JavaScript app that renders book cards from an array and lets you interact with them.",
    liveUrl: "myBookTracker/index.html",
  },
  {
    title: "My Travel Agency",
    technology: "Angular",
    description:
      "An Angular single-page app with routing and a bookings service. Browse destinations, view details, add trips and see the bill including service fee and discount.",
    liveUrl: "myTravelAgency/",
  },
];

const skillsContainer = document.getElementById("skills-container");
const projectsContainer = document.getElementById("projects-container");

function renderSkills() {
  skillsContainer.innerHTML = "";

  for (let i = 0; i < skills.length; i++) {
    let badges = "";
    for (let j = 0; j < skills[i].items.length; j++) {
      badges += `<span class="badge">${skills[i].items[j]}</span>`;
    }

    skillsContainer.innerHTML += `
      <div class="skill-group">
        <h3>${skills[i].category}</h3>
        <div class="badges">${badges}</div>
      </div>
    `;
  }
}

function renderProjects() {
  projectsContainer.innerHTML = "";

  for (let i = 0; i < projects.length; i++) {
    let project = projects[i];
    projectsContainer.innerHTML += `
      <div class="project-card">
        <span class="project-tag">${project.technology}</span>
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        <div class="project-links">
          <a class="btn" href="${project.liveUrl}" target="_blank" rel="noopener">Live Demo</a>
        </div>
      </div>
    `;
  }
}

renderSkills();
renderProjects();

document.getElementById("year").textContent = new Date().getFullYear();

function calculateAge(birthDate) {
  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();

  const monthDiff = today.getMonth() - birthDate.getMonth();
  if (
    monthDiff < 0 ||
    (monthDiff === 0 && today.getDate() < birthDate.getDate())
  ) {
    age--;
  }
  return age;
}

const ageElements = document.querySelectorAll(".age");
const age = calculateAge(new Date(1999, 7, 16));

for (let i = 0; i < ageElements.length; i++) {
  ageElements[i].textContent = age;
}
