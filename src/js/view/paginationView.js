import View from "./View.js";
import icons from "../../img/icons.svg";

class paginationView extends View {
  parentEl = document.querySelector(".results-pagination");

  renderPages(pagination) {
    console.log("WORK??");
    // var paginationEl = document.getElementById("pagination")
    const fragment = document.createDocumentFragment();
    let i;

    // 기존에 추가된 페이지번호를 삭제합니다
    while (this.parentEl.hasChildNodes()) {
      this.parentEl.removeChild(this.parentEl.lastChild);
    }

    for (i = 1; i <= pagination.last; i++) {
      var el = document.createElement("a");
      el.href = "#";
      el.innerHTML = i;

      if (i === pagination.current) {
        el.className = "on";
      } else {
        el.onclick = (function (i) {
          console.log("clicked!!");
          return function () {
            pagination.gotoPage(i);
          };
        })(i);
      }

      fragment.appendChild(el);
    }
    this.parentEl.appendChild(fragment);
  }
}

export default new paginationView();
