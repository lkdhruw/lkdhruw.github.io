---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: home
list_title: Code Stacks
---

<style>
  .hero-section {
    text-align: center;
    padding: 3rem 1rem;
    background-color: #f8f9fa;
    border-radius: 8px;
    margin-bottom: 2rem;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  }
  .hero-title {
    font-size: 2.5rem;
    font-weight: 700;
    color: #2b2b2b;
    margin-bottom: 0.5rem;
  }
  .hero-subtitle {
    font-size: 1.25rem;
    color: #555;
    margin-bottom: 2rem;
  }
  .hero-buttons {
    display: flex;
    justify-content: center;
    gap: 1rem;
    flex-wrap: wrap;
  }
  .btn-primary, .btn-secondary {
    display: inline-block;
    padding: 0.75rem 1.5rem;
    font-size: 1rem;
    font-weight: 600;
    text-decoration: none;
    border-radius: 4px;
    transition: all 0.3s ease;
  }
  .btn-primary {
    background-color: #0056b3;
    color: white !important;
    border: 2px solid #0056b3;
  }
  .btn-primary:hover {
    background-color: #004494;
    border-color: #004494;
    transform: translateY(-2px);
    text-decoration: none;
  }
  .btn-secondary {
    background-color: transparent;
    color: #0056b3 !important;
    border: 2px solid #0056b3;
  }
  .btn-secondary:hover {
    background-color: #f0f8ff;
    transform: translateY(-2px);
    text-decoration: none;
  }
</style>

<div class="hero-section">
  <h1 class="hero-title">Hello, I'm Laxmi Kant Dhruw</h1>
  <p class="hero-subtitle">Software Engineer & Technology Enthusiast</p>
  <div class="hero-buttons">
    <a href="{{ '/profile/' | relative_url }}" class="btn-primary">Professional Profile</a>
    <a href="{{ '/project/' | relative_url }}" class="btn-secondary">My Projects</a>
  </div>
</div>
