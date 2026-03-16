---
layout: page
title: Profile
permalink: /profile/
---

<style>
  .cv-container {
    max-width: 800px;
    margin: 0 auto;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  }
  
  .cv-header {
    text-align: center;
    border-bottom: 2px solid #0056b3;
    padding-bottom: 1rem;
    margin-bottom: 2rem;
  }
  
  .cv-header h1 {
    margin-bottom: 0.2rem;
    color: #2b2b2b;
  }
  
  .cv-contact {
    color: #666;
    font-size: 0.95rem;
  }
  
  .cv-section {
    margin-bottom: 2.5rem;
  }
  
  .cv-section-title {
    color: #0056b3;
    text-transform: uppercase;
    font-size: 1.25rem;
    font-weight: 600;
    margin-bottom: 1rem;
    padding-bottom: 0.25rem;
    border-bottom: 1px solid #eee;
  }
  
  .cv-item {
    margin-bottom: 1.5rem;
  }
  
  .cv-item-header {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    margin-bottom: 0.5rem;
  }
  
  .cv-role {
    font-weight: 600;
    font-size: 1.1rem;
    color: #333;
  }
  
  .cv-company {
    font-weight: 500;
    color: #555;
  }
  
  .cv-date {
    color: #777;
    font-size: 0.9rem;
    font-style: italic;
  }
  
  .cv-details {
    list-style-type: disc;
    padding-left: 1.5rem;
    color: #444;
  }
  
  .cv-details li {
    margin-bottom: 0.25rem;
  }

  .skills-list {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    padding: 0;
    list-style: none;
  }

  .skills-list li {
    background-color: #f0f8ff;
    color: #0056b3;
    padding: 0.25rem 0.75rem;
    border-radius: 15px;
    font-size: 0.9rem;
    font-weight: 500;
  }
</style>

<div class="cv-container">
  
  <header class="cv-header">
    <h1>Laxmi Kant Dhruw</h1>
    <div class="cv-contact">
      Software Engineer | ldhruw3@gmail.com | <a href="https://github.com/lkdhruw">GitHub</a>
    </div>
  </header>

  <section class="cv-section">
    <h2 class="cv-section-title">Professional Summary</h2>
    <p>
      An enthusiastic and dedicated Software Engineer with a passion for building robust applications and exploring modern technologies. Proven ability to architect solutions and write clean, maintainable code. Always eager to learn new stacks and contribute to meaningful projects.
    </p>
  </section>

  <section class="cv-section">
    <h2 class="cv-section-title">Experience</h2>
    
    <div class="cv-item">
      <div class="cv-item-header">
        <div>
          <span class="cv-role">Software Engineer</span> | <span class="cv-company">Company Name</span>
        </div>
        <span class="cv-date">Month Year - Present</span>
      </div>
      <ul class="cv-details">
        <li>Developed and maintained key features for scalable web applications.</li>
        <li>Collaborated with cross-functional teams to define, design, and ship new features.</li>
        <li>Improved application performance and reduced loading times through code optimization.</li>
      </ul>
    </div>
    
  </section>

  <section class="cv-section">
    <h2 class="cv-section-title">Education</h2>
    
    <div class="cv-item">
      <div class="cv-item-header">
        <div>
          <span class="cv-role">Degree Name</span> | <span class="cv-company">University Name</span>
        </div>
        <span class="cv-date">Graduation Year</span>
      </div>
      <p style="margin-top: 0.25rem; color: #444;">Relevant coursework or achievements can be listed here.</p>
    </div>
    
  </section>

  <section class="cv-section">
    <h2 class="cv-section-title">Technical Skills</h2>
    <ul class="skills-list">
      <li>Python</li>
      <li>Android Development</li>
      <li>Arduino</li>
      <li>MATLAB</li>
      <li>HTML/CSS</li>
      <li>JavaScript</li>
      <li>Jekyll</li>
      <li>Git/GitHub Actions</li>
    </ul>
  </section>

</div>
