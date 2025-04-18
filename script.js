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






const items = document.querySelectorAll('.timeline-item');

window.addEventListener('scroll', () => {
  const trigger = window.innerHeight * 0.8;

  items.forEach(item => {
    const rect = item.getBoundingClientRect();
    if (rect.top < trigger) {
      item.classList.add('visible');
    }
  });
});




