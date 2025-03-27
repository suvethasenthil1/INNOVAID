document.addEventListener("DOMContentLoaded", function () {
    console.log("INNOVAID Loaded!");

    // Get Dark Mode Toggle Button
    const toggleBtn = document.getElementById("darkModeToggle");

    if (!toggleBtn) {
        console.error("Dark Mode button not found!");
        return;
    }

    // Function to toggle dark mode
    function toggleDarkMode() {
        document.body.classList.toggle("dark-mode");

        if (document.body.classList.contains("dark-mode")) {
            localStorage.setItem("darkMode", "enabled");
            toggleBtn.textContent = "☀️"; // Change icon when dark mode is on
        } else {
            localStorage.setItem("darkMode", "disabled");
            toggleBtn.textContent = "🌙"; // Change icon when light mode is on
        }
    }

    // Load saved dark mode preference
    if (localStorage.getItem("darkMode") === "enabled") {
        document.body.classList.add("dark-mode");
        toggleBtn.textContent = "☀️"; // Set correct icon on page load
    }

    // Attach event listener to button
    toggleBtn.addEventListener("click", toggleDarkMode);
});
