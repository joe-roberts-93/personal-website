import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="menu"
export default class extends Controller {

  showMenu() {
    console.log("click")
    const verticalMenu = document.querySelector(".vertical-menu")
    verticalMenu.classList.toggle("is-hidden")
  }
}
