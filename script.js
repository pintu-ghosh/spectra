function showTab(id) {
  document.querySelectorAll('.tab').forEach(tab => tab.style.display = 'none');
  document.querySelectorAll('.tab-buttons button').forEach(btn => btn.classList.remove('active'));
  document.getElementById(id).style.display = 'block';
  event.target.classList.add('active');
}


function updateDateTime() {
  const now = new Date();

  const date = now.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  const time = now.toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: '2-digit',
    second: '2-digit'
  });

  document.getElementById('datetime').textContent = `${date} – ${time}`;
}

updateDateTime();
setInterval(updateDateTime, 1000); // update every second



window.addEventListener("scroll", () => {
  const milestones = document.querySelectorAll(".milestone.hidden");
  const triggerPoint = window.innerHeight * 0.8;

  milestones.forEach((el, index) => {
    const rect = el.getBoundingClientRect();
    if (rect.top < triggerPoint) {
      setTimeout(() => {
        el.classList.remove("hidden");

        // Set color from data attribute
        const color = el.getAttribute("data-color");
        el.querySelector(".dot").style.backgroundColor = color;
        el.querySelector(".line").style.backgroundColor = color;
      }, index * 200);
    }
  });
});



