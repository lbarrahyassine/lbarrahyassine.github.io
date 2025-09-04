document.addEventListener('DOMContentLoaded', function() {
    const themeToggle = document.getElementById('theme-toggle');
    const htmlElement = document.documentElement;
    
    // Check for saved theme preference or use default (light theme)
    const savedTheme = localStorage.getItem('theme') || 'light';
    
    // Set initial theme
    if (savedTheme === 'light') {
        htmlElement.classList.add('light-theme');
        themeToggle.checked = false; // Sun should be highlighted for light theme
    } else {
        htmlElement.classList.remove('light-theme');
        themeToggle.checked = true; // Moon should be highlighted for dark theme
    }
    
    // Toggle theme when switch is clicked
    themeToggle.addEventListener('change', function() {
        if (this.checked) {
            // Switch to dark theme (moon highlighted)
            htmlElement.classList.remove('light-theme');
            localStorage.setItem('theme', 'dark');
        } else {
            // Switch to light theme (sun highlighted)
            htmlElement.classList.add('light-theme');
            localStorage.setItem('theme', 'light');
        }
    });
});