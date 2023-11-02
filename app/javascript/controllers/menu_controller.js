import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="menu"
export default class extends Controller {

  showMenu() {
    const verticalMenu = document.querySelector(".vertical-menu")
    verticalMenu.classList.toggle("is-hidden")
  }
}
