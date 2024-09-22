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
  coCurricular: {
    description: "پنی تعلیمی زندگی کے دوران، میں نے مختلف غیر نصابی سرگرمیوں میں فعال طور پر شرکت کی، جنہوں نے میرے تجربات کو بڑھایا اور کلاس روم کے باہر اہم مہارتوں کو ترقی دی۔ ان سرگرمیوں میں حصہ لینے سے مجھے دوسروں کے ساتھ مل کر کام کرنے، اپنی قیادت کی صلاحیتوں کو بہتر بنانے، اور مختلف ٹیموں اور پروجیکٹس میں اپنا کردار ادا کرنے کا موقع ملا۔ یہاں کچھ اہم غیر نصابی سرگرمیاں ہیں جن میں میں شامل رہا ہوں:",
    list: [
        "Member of ITU Cricket Team - 2022-2023",
        "Member of School Cricket Team - 2018-2020"
    ]
 },
   awards: {
        description: "لقد كنت محظوظًا بالحصول على العديد من الجوائز والجوائز المرموقة في مسيرتي الأكاديمية واللامنهجية. هذه الجوائز تعكس جديتي وتفانيي في العمل والشغف الذي أضعه في كل ما أقوم به. على مر السنوات، اجتهدت كثيرًا في تطوير مهاراتي والمشاركة الفعالة في الأنشطة المختلفة، مما أتاح لي الفرصة لتحقيق هذه  الإنجازات. وفيما يلي بعض من أبرز الجوائز التي حصلت عليها والتي أعتبرها فخرًا لي وتقديرًا للجهود التي بذلتها:",
        list: [
            { name: "Medal: Runners Up for ITU Cricket Team", date: "2023" },
            { name: "Trophy: In Cricket as Man of the Match", date: "2019" },
            { name: "Shield: In Debate Competition", date: "2017" }
        ],
        images: [
            { name: "Award In Cricket Competition", src: "Medal.jpeg" },
            { name: "Award In Debate Competition", src: "Shield.jpeg" }
        ]
    },
  socialLinks: {
  facebook: "https://www.facebook.com/profile.php?id=100069413407558",
  instagram: "https://www.instagram.com/arshadali2156/?hl=en",
  linkedin: "https://www.linkedin.com/in/arshad-ali-93b2ba304/",
  github: "https://github.com/Arshad069"
}
};

 // Populate the HTML with data from JavaScript object
document.getElementById("nav-links").innerHTML = `
    <li><a href="#about">About</a></li>
    <li><a href="#skills">Skills</a></li>
    <li><a href="#Education">Education</a></li>
    <li><a href="#projects">Projects</a></li>
    <li><a href="#cocoricular">Co-Coricular</a></li>
    <li><a href="#Awards">Awards</a></li>
    <li><a href="#Contact">Contact</a></li>
  `;

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
  <div class="skills-wrapper" style=" display: flex;
    justify-content: space-around;
    align-items: flex-start;
    flex-wrap: wrap;
    background-color: #050505;
    max-width: 1200px;
    margin: 0 auto;
    gap: 2rem;">
      <div class="skill-category">
          <h3 style="color: black;">Soft Skills</h3>
          <ul>${portfolioData.skills.soft.map(skill => `<li>${skill}</li>`).join('')}</ul>
      </div>
      <div class="skill-category">
          <h3 style="color: black;">Hard Skills</h3>
          <ul>${portfolioData.skills.hard.map(skill => `<li>${skill}</li>`).join('')}</ul>
      </div>
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


document.getElementById("co-curricular-para").textContent = portfolioData.coCurricular.description;
  
  document.getElementById("co-curricular-list").innerHTML = portfolioData.coCurricular.list
    .map(activity => `<li>${activity}</li>`)
    .join("");
document.getElementById("awards-para").textContent = portfolioData.awards.description;
  
document.getElementById("awards-list").innerHTML = portfolioData.awards.list
  .map(award => `<li>${award.name} - ${award.date}</li>`)
  .join("");

document.getElementById("awards-images").innerHTML = portfolioData.awards.images
      .map(image => `<img src="${image.src}" alt="${image.name}" width="150px">`)
      .join("");
    
document.getElementById("social-icons").innerHTML = `
    <a href="${portfolioData.socialLinks.facebook}" target="_blank"><i class="fab fa-facebook-f"></i></a>
    <a href="${portfolioData.socialLinks.instagram}" target="_blank"><i class="fab fa-instagram"></i></a>
    <a href="${portfolioData.socialLinks.linkedin}" target="_blank"><i class="fab fa-linkedin-in"></i></a>
    <a href="${portfolioData.socialLinks.github}" target="_blank"><i class="fab fa-github"></i></a>
  `;
