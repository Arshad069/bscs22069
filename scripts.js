const portfolioData = {
  name: "Arshad Ali",
  contact: {
      email: "arshadjutt3266@gmail.com",
      phone: "+923204662505",
      whatsapp: "https://wa.me/923204662505"
  },
  hero: {
      title: "Hi, I'm Arshad Ali",
      description: "A passionate developer with a love for coding and design. I create efficient, elegant solutions for web development, UI/UX, and more",
      image: "Pictures.jpeg"
  },
  about: `I'm Arshad Ali, a dedicated web developer with a passion for crafting beautiful and efficient digital experiences. With a solid foundation in web technologies, I strive to create applications that are both user-friendly and powerful. My journey in development has been fueled by curiosity, continuous learning, and a drive to solve complex problems.

Whether working on front-end design or back-end architecture, I focus on delivering clean, scalable solutions. I enjoy collaborating with teams, learning new technologies, and constantly improving my craft.`,
  skills: {
      soft: ["Communication", "Team Member", "Team Leader", "Program Management"],
      hard: ["Programming: C++, C, Python", "Web Development: HTML, CSS"]
  },
  education: [
      "Intermediate in Computer Science - 2020-2022",
      "Matric in Computer Science - 2018-2020"
  ],
  projects: {
    description: "Au cours de mon parcours, j'ai travaillé sur divers projets qui mettent en valeur mes compétences techniques et mes capacités de résolution de problèmes. Chaque projet a été une opportunité d'appliquer mes connaissances dans des scénarios pratiques, allant du développement de solutions logicielles à la création d'applications attrayantes. Voici quelques-uns des projets clés que j'ai réalisés, soulignant mon expérience et mon expertise dans différents domaines :",
    list: [
        { name: "Chess Game in C++", date: "March 2023" },
        { name: "Snake Game in C++", date: "January 2023" },
        { name: "Paint App in C++", date: "June 2022" },
        { name: "CMS for a College", date: "June 2022" }
    ],
    video: "PaintApp.mp4"
  },
};



 // Populate the HTML with data from JavaScript object
 document.getElementById("logo").textContent = portfolioData.name;
  
 document.getElementById("contact-icons").innerHTML = `
   <a href="mailto:${portfolioData.contact.email}"><i class="fas fa-envelope"></i></a>
   <a href="tel:${portfolioData.contact.phone}"><i class="fas fa-phone-alt"></i></a>
   <a href="${portfolioData.contact.whatsapp}" target="_blank"><i class="fab fa-whatsapp"></i></a>
 `;

document.getElementById("hero-text").innerHTML = `
    <h1>${portfolioData.hero.title}</h1>
    <p>${portfolioData.hero.description}</p>
  `;
  
document.getElementById("hero-image").src = portfolioData.hero.image;
  
document.getElementById("about-text").innerHTML = `
    <h2 style="color: yellow;">About Me</h2>
    <p>${portfolioData.about.replace(/\n/g, '</p><p>')}</p>
  `;

document.getElementById("skills-container").innerHTML = `
  <div class="skill-category">
      <h3 style="color: black;">Soft Skills</h3>
      <ul>${portfolioData.skills.soft.map(skill => `<li>${skill}</li>`).join('')}</ul>
  </div>
  <div class="skill-category">
      <h3 style="color: black;">Hard Skills</h3>
      <ul>${portfolioData.skills.hard.map(skill => `<li>${skill}</li>`).join('')}</ul>
  </div>
`;

document.getElementById("education-list").innerHTML = portfolioData.education
  .map(educationItem => `<li>${educationItem}</li>`)
  .join("");

document.getElementById("projects-para").textContent = portfolioData.projects.description;

document.getElementById("projects-list").innerHTML = portfolioData.projects.list
  .map(project => `<li>${project.name} - ${project.date}</li>`)
  .join("");

document.getElementById("project-video").src = portfolioData.projects.video;
