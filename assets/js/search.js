document.addEventListener("DOMContentLoaded", function() {
  const searchInput = document.getElementById('search-input');
  const searchResults = document.getElementById('search-results');
  let posts = [];

  const dataUrl = window.searchDataUrl || '/search.json';

  // Fetch the search JSON index
  fetch(dataUrl)
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      posts = data;
    })
    .catch(error => console.error('Error fetching search data:', error));

  // Listen for text input
  searchInput.addEventListener('input', function() {
    const query = this.value.toLowerCase();
    
    // Clear previous results
    searchResults.innerHTML = '';
    
    if (query.trim() === '') {
      return;
    }

    const filteredPosts = posts.filter(post => {
      return (
        (post.title && post.title.toLowerCase().includes(query)) ||
        (post.category && post.category.toLowerCase().includes(query)) ||
        (post.excerpt && post.excerpt.toLowerCase().includes(query))
      );
    });

    if (filteredPosts.length > 0) {
      filteredPosts.forEach(post => {
        const li = document.createElement('li');
        
        // Link wrapper
        const a = document.createElement('a');
        a.href = post.url;
        a.textContent = post.title;
        
        // Date
        const dateSpan = document.createElement('span');
        dateSpan.className = 'search-date';
        dateSpan.textContent = ` - ${post.date}`;

        li.appendChild(a);
        li.appendChild(dateSpan);
        
        // Category
        if (post.category) {
          const categorySpan = document.createElement('span');
          categorySpan.className = 'search-category';
          categorySpan.textContent = ` [${post.category}]`;
          li.appendChild(categorySpan);
        }

        // Excerpt
        if (post.excerpt) {
           const excerptPara = document.createElement('p');
           excerptPara.className = 'search-excerpt';
           excerptPara.textContent = post.excerpt + '...';
           li.appendChild(excerptPara);
        }

        searchResults.appendChild(li);
      });
    } else {
      const li = document.createElement('li');
      li.textContent = 'No results found for "' + query + '".';
      searchResults.appendChild(li);
    }
  });
});
