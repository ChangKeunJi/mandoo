import View from "./View.js";
import icons from "../../img/icons.svg";

class resultsView extends View {
  _parentEl = document.querySelector(".results-container");

  renderResults(results) {
    this.clear();

    const fragment = document.createDocumentFragment();

    results.forEach((result, i) => {
      const itemEl = this.getListItem(i, result);
      fragment.appendChild(itemEl);
    });

    this._parentEl.appendChild(fragment);
    // menuEl.scrollTop = 0;
  }

  getListItem(index, result) {
    const el = document.createElement("li");

    const markup = `
    <div class="preview__marker markerbg marker_${index + 1}"></div>
    <div class="preview__info">
      <div class="preview__info--name">${result.name}</div>
      <div class="preview__info--address">${result.address}</div>
    </div>
    <svg class="preview__bookmark--icon">
      <use xlink:href="${icons}#icon-star-empty"></use>
    </svg>
    `;

    el.innerHTML = markup;
    el.className = "preview";

    return el;
  }
}

export default new resultsView();
