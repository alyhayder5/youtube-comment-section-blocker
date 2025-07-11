function hideComments() {
  const comments = document.getElementById('comments');
  if (comments) {
    comments.style.display = 'none';
  }
}

hideComments();

const observer = new MutationObserver(hideComments);

observer.observe(document.body, {
  childList: true,
  subtree: true,
});
