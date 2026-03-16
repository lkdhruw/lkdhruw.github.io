---
layout: page
title: Projects
permalink: /project/
---

<style>
  .projects-container {
    max-width: 1000px;
    margin: 0 auto;
    padding: 1rem 0;
  }
  
  .projects-intro {
    text-align: center;
    margin-bottom: 3rem;
    color: #555;
    font-size: 1.1rem;
  }

  .projects-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 2rem;
  }

  .project-card {
    background: #fff;
    border: 1px solid #eaeaea;
    border-radius: 8px;
    overflow: hidden;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    display: flex;
    flex-direction: column;
  }

  .project-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0,0,0,0.1);
  }

  .project-img {
    width: 100%;
    height: 180px;
    background-color: #f0f8ff;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #0056b3;
    font-size: 3rem;
  }

  .project-content {
    padding: 1.5rem;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
  }

  .project-title {
    font-size: 1.25rem;
    font-weight: 600;
    color: #2b2b2b;
    margin-top: 0;
    margin-bottom: 0.5rem;
  }

  .project-desc {
    color: #666;
    font-size: 0.95rem;
    margin-bottom: 1.5rem;
    flex-grow: 1;
  }

  .project-tech {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-bottom: 1rem;
  }

  .project-tech span {
    font-size: 0.8rem;
    background: #eee;
    padding: 0.2rem 0.6rem;
    border-radius: 4px;
    color: #555;
  }

  .project-links {
    display: flex;
    gap: 1rem;
    margin-top: auto;
  }

  .project-link {
    text-decoration: none;
    font-size: 0.9rem;
    font-weight: 500;
    color: #0056b3;
    display: inline-flex;
    align-items: center;
    transition: color 0.2s;
  }
  
  .project-link:hover {
    color: #004494;
    text-decoration: underline;
  }
</style>

<div class="projects-container">
  
  <p class="projects-intro">
    A selection of projects that I am currently working on or have completed.
  </p>

  <div class="projects-grid">
    
    <!-- Project 1 -->
    <div class="project-card">
      <div class="project-img">
        <!-- Placeholder for actual image -->
        <svg fill="currentColor" viewBox="0 0 24 24" width="48" height="48"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"/></svg>
      </div>
      <div class="project-content">
        <h3 class="project-title">Awesome Project One</h3>
        <p class="project-desc">A brief description of the project detailing the problem it solves and its main features. Keep it concise but informative.</p>
        <div class="project-tech">
          <span>Python</span>
          <span>Django</span>
        </div>
        <div class="project-links">
          <a href="#" class="project-link">View Source &rarr;</a>
        </div>
      </div>
    </div>

    <!-- Project 2 -->
    <div class="project-card">
      <div class="project-img">
        <svg fill="currentColor" viewBox="0 0 24 24" width="48" height="48"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"/></svg>
      </div>
      <div class="project-content">
        <h3 class="project-title">Android Utility App</h3>
        <p class="project-desc">An Android application built to improve daily productivity with intuitive UI and seamless background syncing.</p>
        <div class="project-tech">
          <span>Android</span>
          <span>Kotlin</span>
        </div>
        <div class="project-links">
          <a href="#" class="project-link">View Source &rarr;</a>
        </div>
      </div>
    </div>

    <!-- Project 3 -->
    <div class="project-card">
      <div class="project-img">
        <svg fill="currentColor" viewBox="0 0 24 24" width="48" height="48"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"/></svg>
      </div>
      <div class="project-content">
        <h3 class="project-title">Embedded System Controller</h3>
        <p class="project-desc">Arduino based controller for home automation using various sensors and wireless communication protocols.</p>
        <div class="project-tech">
          <span>Arduino</span>
          <span>C++</span>
        </div>
        <div class="project-links">
          <a href="#" class="project-link">View Source &rarr;</a>
        </div>
      </div>
    </div>

  </div>
</div>
