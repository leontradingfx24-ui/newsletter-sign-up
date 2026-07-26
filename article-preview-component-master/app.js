const share = document.querySelector('.share');
const sharePopup = document.querySelector('.sharePopup');
 
function togglePopup() {
  const isActive = sharePopup.classList.toggle('active');
  share.classList.toggle('active', isActive);
  share.setAttribute('aria-expanded', isActive);
}
 
share.addEventListener('click', (e) => {
  e.stopPropagation();
  togglePopup();
});
 
// Close the popup when clicking anywhere else on the page
document.addEventListener('click', (e) => {
  if (!sharePopup.contains(e.target) && !share.contains(e.target)) {
    sharePopup.classList.remove('active');
    share.classList.remove('active');
    share.setAttribute('aria-expanded', 'false');
  }
});
 
