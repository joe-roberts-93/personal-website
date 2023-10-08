import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="gallery"
export default class extends Controller {
  changeImage(event) {
    const mainImage = document.getElementById("mainimgid");
    const newImage = event.srcElement.src;
    mainImage.src = newImage;
     }
}
