function showTab(id) {
  document.querySelectorAll('.tab').forEach(tab => tab.style.display = 'none');
  document.querySelectorAll('.tab-buttons button').forEach(btn => btn.classList.remove('active'));
  document.getElementById(id).style.display = 'block';
  event.target.classList.add('active');
}

function updateDateTime() {
  const now = new Date();
  const formatted = now.toLocaleString();
  document.getElementById('datetime').textContent = formatted;
}

updateDateTime();
setInterval(updateDateTime, 1000);
