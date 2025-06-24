function followToggle() {
  const btn = document.getElementById('follow-btn');
  if (btn.classList.contains('following')) {
    btn.classList.remove('following');
    btn.textContent = 'Follow';
  } else {
    btn.classList.add('following');
    btn.textContent = 'Following';
  }
}
