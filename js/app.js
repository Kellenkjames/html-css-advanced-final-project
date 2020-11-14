let cartNotification;

function buyNow(e){
  cartNotification.innerText = Number(cartNotification.innerText) + 1;
  const buyNowButton = e.target;
  const removeItemButton = document.querySelector(`.products__list__link__remove[data-id="${e.target.dataset.id}"]`)
  buyNowButton.classList.add("hidden");
  removeItemButton.classList.remove("hidden");
}

function removeItem(e){
  cartNotification.innerText = Number(cartNotification.innerText) - 1;

}

window.onload = () => {
  cartNotification = document.querySelector('.header__nav__list__item__link__notification');
  const buyNowButtons = document.querySelectorAll('.products__list__link__desc');
  const removeItemButtons = document.querySelectorAll('.products__list__link__remove');

  for(let idx = 0; idx < buyNowButtons.length; idx++){
    buyNowButtons[idx].addEventListener('click', buyNow);
    removeItemButtons[idx].addEventListener('click', removeItem)
  }
}

/* LAX JS */
< !--JS -->
    <script>
        window.onload = function() {
            lax.init()

    // Add a driver that we use to control our animations
    lax.addDriver('scrollY', function() {
      return document.body.scrollTop
    })

    // Add animation bindings to elements
    lax.addElements('.selector', {
            scrollY: {
            translateX: [
          ["elInY", "elCenterY", "elOutY"],
          [0, 'screenWidth/2', 'screenWidth'],
        ]
      }
    }
  })
</script>