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


window.addEventListener('scroll', () => {
  const timeline = document.querySelector('.timeline');
  const scrollY = window.scrollY;
  timeline.style.transform = `translateX(-${scrollY}px)`;
});


