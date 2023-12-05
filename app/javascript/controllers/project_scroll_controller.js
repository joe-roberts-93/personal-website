import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  nextProject(event) {
    const farmland = document.querySelector(".farmland");
    const unicornland = document.querySelector(".unicornland");
    farmland.classList.toggle("is-hidden");
    unicornland.classList.toggle("is-hidden");
  }
}
