(function () {
  var image = document.getElementById('user-photo');
  image.className += ' circle';

  image.addEventListener('click', morph);

  function morph() {
    image.classList.toggle('circle');
  }
})();
