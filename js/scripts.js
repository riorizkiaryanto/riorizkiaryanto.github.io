document.addEventListener('scroll', function() {
    const container = document.querySelector('.container');
    container.style.height = 'auto';
    container.style.height = container.scrollHeight + 'px';
  });