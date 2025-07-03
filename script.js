document.addEventListener('DOMContentLoaded', function() {
    const themeToggle = document.getElementById('theme-toggle');
    const htmlElement = document.documentElement;
    
    // Check for saved theme preference or use default (light theme)
    const savedTheme = localStorage.getItem('theme') || 'light';
    
    // Set initial theme
    if (savedTheme === 'light') {
        htmlElement.classList.add('light-theme');
        themeToggle.checked = true;
    } else {
        htmlElement.classList.remove('light-theme');
        themeToggle.checked = false;
    }
    
    // Toggle theme when switch is clicked
    themeToggle.addEventListener('change', function() {
        if (this.checked) {
            // Switch to light theme
            htmlElement.classList.add('light-theme');
            localStorage.setItem('theme', 'light');
        } else {
            // Switch to dark theme
            htmlElement.classList.remove('light-theme');
            localStorage.setItem('theme', 'dark');
        }
    });
});