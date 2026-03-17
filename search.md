---
layout: page
title: Search
permalink: /search/
---

<div id="search-container">
  <input type="text" id="search-input" placeholder="Search blog posts..." autocomplete="off">
  <ul id="search-results"></ul>
</div>

<script>
  window.searchDataUrl = "{{ '/search.json' | relative_url }}";
</script>
<script src="{{ '/assets/js/search.js' | relative_url }}"></script>

<style>
#search-container {
  max-width: 600px;
  margin: 0 auto;
}
#search-input {
  width: 100%;
  padding: 10px;
  font-size: 16px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
}
#search-results {
  list-style-type: none;
  padding: 0;
}
#search-results li {
  margin-bottom: 20px;
}
#search-results a {
  font-size: 18px;
  font-weight: bold;
  text-decoration: none;
}
#search-results a:hover {
  text-decoration: underline;
}
.search-date {
  color: #777;
  font-size: 0.9em;
}
.search-category {
  color: #555;
  font-size: 0.85em;
  margin-left: 5px;
}
.search-excerpt {
  margin-top: 5px;
  font-size: 0.95em;
  color: #444;
}
</style>
