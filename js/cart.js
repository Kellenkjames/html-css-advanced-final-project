let cartNotification;

function buyNow(e) {
  cartNotification.innerText = Number(cartNotification.innerText) + 1;
  const buyNowButton = e.target;
  const removeItemButton = document.querySelector(`.products__list__link__remove[data-id="${e.target.dataset.id}"]`)
  buyNowButton.classList.add("hidden");
  removeItemButton.classList.remove("hidden");
}

function removeItem(e) {
  cartNotification.innerText = Number(cartNotification.innerText) - 1;
  const removeItemButton = e.target;
  const buyNowButton = document.querySelector(`.products__list__link__desc[data-id="${e.target.dataset.id}"]`)
  buyNowButton.classList.remove("hidden");
  removeItemButton.classList.add("hidden");
}

export function cartInit() {
  cartNotification = document.querySelector('.header__nav__list__item__link__notification');
  const buyNowButtons = document.querySelectorAll('.products__list__link__desc');
  const removeItemButtons = document.querySelectorAll('.products__list__link__remove');

  for (let idx = 0; idx < buyNowButtons.length; idx++) {
    buyNowButtons[idx].addEventListener('click', buyNow);
    removeItemButtons[idx].addEventListener('click', removeItem)
  }
}
