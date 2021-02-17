import View from "./View.js";
import icons from "../../img/icons.svg";

class paginationView extends View {
  parentEl = document.querySelector(".results-pagination");

  addHandlerPage(handler) {
    this.parentEl.addEventListener("click", handler);
  }
}

export default new paginationView();
