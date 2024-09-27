function lightMode() {
    document.documentElement.style.setProperty('--main_background', '#fff');
    document.documentElement.style.setProperty('--grey', '#dee2e6');
    document.documentElement.style.setProperty('--white', '#fff');
    document.documentElement.style.setProperty('--text_hover', '#adb5bd');
    document.documentElement.style.setProperty('--text_color', 'black');
    localStorage.setItem('light_mode', true);
    localStorage.removeItem('dark_mode');
  }
  
  function darkMode() {
    document.documentElement.style.setProperty('--main_background', 'black');
    document.documentElement.style.setProperty('--grey', '#121212');
    document.documentElement.style.setProperty('--white', 'rgba(27, 27, 27, 0.5)');
    document.documentElement.style.setProperty('--text_hover', '#20c997');
    document.documentElement.style.setProperty('--text_color', '#B0B0B0');
    localStorage.setItem('dark_mode', true);
    localStorage.removeItem('light_mode');
  }
  
  document.addEventListener('DOMContentLoaded', function() {
    if (localStorage.getItem('dark_mode')) {
      darkMode();
    } else if (localStorage.getItem('light_mode')) {
      lightMode();
    } else {
      lightMode(); // Default to light mode
    }
    

    const signOtp = document.getElementById("signInOtp")
    const form = document.getElementById("form")
    const otpForm = document.getElementById("otpForm")
    const adminForm = document.getElementById("adminForm")

    adminForm.addEventListener('submit', (e) => {
        e.preventDefault();
        form.style.display = "none"
        otpForm.style.display = "flex";
    })

    signOtp.addEventListener('submit', (e) => {
        e.preventDefault();
        otpForm.style.display = "none"
        window.location.href ="./pages/dashboard.html"
      })
    

  });
