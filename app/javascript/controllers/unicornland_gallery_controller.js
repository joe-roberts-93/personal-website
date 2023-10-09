import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="unicornland-gallery"
export default class extends Controller {
  changeUnicornlandImage(event) {
    const mainImage = document.getElementById("mainunicornimg");
    const newImage = event.srcElement;
    mainImage.src = newImage.src;
    mainImage.alt = newImage.alt;
  }
}
