import { cartInit } from './cart.js'

/* LAX JS */
window.onload = function () {
  cartInit(); 
  lax.setup() // init

  const updateLax = () => {
    lax.update(window.scrollY)
    window.requestAnimationFrame(updateLax)
  }

  window.requestAnimationFrame(updateLax)
}
