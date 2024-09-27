document.addEventListener('DOMContentLoaded', function() {

    const openNav = document.getElementById("openNav")
    const closeNav = document.getElementById("closeNav")
    const sideBar = document.getElementById("sidebar")
    openNav.addEventListener('click', () => {
      sideBar.style.height = "auto"
      sideBar.style.overflow = "visible"
      sideBar.style.padding = "20px"
    })
    closeNav.addEventListener('click', () => {
      sideBar.style.height = "0px"
      sideBar.style.overflow = "hidden"
      sideBar.style.padding = "0"
    })

    function updateClock() {
        const now = new Date();
        let hours = now.getHours();
        let Days = now.getDay();
        let Month = now.getMonth();
        let Year = now.getFullYear();
        const meridiem = hours >= 12 ? "PM" : "AM";
        hours = hours % 12 || 12;
        hours = hours.toString().padStart(2, 0);
        Month = Month.toString().padStart(2, 0);
        Year = Year.toString().padStart(2, 0);
        Days = Days.toString().padStart(2, 0);
        const minutes = now.getMinutes().toString().padStart(2, 0);
        const seconds = now.getSeconds().toString().padStart(2, 0);
        const timeString = `${Days}/${Month}/${Year}  ${hours}:${minutes}:${seconds} ${meridiem}`;
        document.getElementById("time").textContent = timeString;
      }
      
      updateClock();
      setInterval(updateClock, 1000);
  });