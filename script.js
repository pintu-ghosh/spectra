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






const milestones = document.querySelectorAll(".milestone");

window.addEventListener("scroll", () => {
  const triggerPoint = window.innerHeight * 0.7;
  let allVisible = true;

  milestones.forEach((el, i) => {
    const rect = el.getBoundingClientRect();

    if (rect.top < triggerPoint && el.classList.contains("hidden")) {
      el.classList.remove("hidden");
      const color = el.getAttribute("data-color");
      el.querySelector(".bar").style.backgroundColor = color;
      el.querySelector(".dot").style.backgroundColor = color;
      el.querySelector(".line").style.backgroundColor = color;
    }

    if (el.classList.contains("hidden")) {
      allVisible = false;
    }
  });

  // Optional: if all revealed, do something else here
  if (allVisible) {
    console.log("All milestones are now visible!");
  }
});


