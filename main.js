function toggleSize(image) {
    const active = document.querySelector('.active');
    if (active) {
        active.classList.remove('active');
    }
    image.classList.add('active');
  }