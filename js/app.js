let cartNotification;

function buyNow(e){
  cartNotification.innerText = Number(cartNotification.innerText) + 1;
  const removeItemButton = document.querySelector(`.products__list__link__remove[data-id='${e.target.dataset.id}]'`)
  console.log(removeItemButton);
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