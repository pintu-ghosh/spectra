<script>
  function updateDateTime() {
    const now = new Date();
    const formatted = now.toLocaleString(); // e.g., "4/15/2025, 3:45:30 PM"
    document.getElementById('datetime').textContent = formatted;
  }

  updateDateTime(); // Show immediately
  setInterval(updateDateTime, 1000); // Update every second
</script>

