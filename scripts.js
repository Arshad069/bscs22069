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
};





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
