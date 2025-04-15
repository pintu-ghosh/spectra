function updateDateTime() {
  const now = new Date();
  const formatted = now.toLocaleString();
  document.getElementById('datetime').textContent = formatted;
}

updateDateTime();
setInterval(updateDateTime, 1000);
