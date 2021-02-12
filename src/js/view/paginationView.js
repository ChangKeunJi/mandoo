import View from "./View.js";
import icons from "../../img/icons.svg";

class paginationView extends View {
  parentEl = document.querySelector(".results-pagination");
  pages;

  renderPages(pagination) {
    // var paginationEl = document.getElementById("pagination")
    const fragment = document.createDocumentFragment();
    let i;

    // 기존에 추가된 페이지번호를 삭제합니다
    while (this.parentEl.hasChildNodes()) {
      this.parentEl.removeChild(this.parentEl.lastChild);
    }

    for (i = 1; i <= pagination.last; i++) {
      var el = document.createElement("a");
      //   el.href = `#${i}`;
      el.href = "#";
      el.innerHTML = i;
      el.classList.add("page");

      if (i === pagination.current) {
        el.classList.add("on");
      } else {
        el.addEventListener("click", (i) => {
          pagination.gotoPage(i);
          console.log(pagination);
        });

        //   el.onclick = (function (i) {
        //     return function () {
        //       console.log("clicked!");
        //       pagination.gotoPage(i);
        //     };
        //   })(i);
      }

      fragment.appendChild(el);
    }
    this.parentEl.appendChild(fragment);

    // this.pages = Array.from(this.parentEl.childNodes);
  }

  pageClickEvent(pagination, i) {
    this.pages.forEach((page) => {
      page.addEventListener("click", () => {
        if (i === pagination.current) {
          page.classList.add("on");
        } else {
          console.log(i);
          pagination.gotoPage(i);
        }
      });
    });
  }
}

export default new paginationView();
