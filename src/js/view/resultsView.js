import View from "./View.js";
import icons from "../../img/icons.svg";

class resultsView extends View {
  _data; // => Position [lat,lng]
  _parentEl = document.querySelector(".results-container");

  renderResults(results) {
    const fragment = document.createDocumentFragment();

    results.forEach((result, i) => {
      const itemEl = this.getListItem(i, result);
      fragment.appendChild(itemEl);
    });

    this._parentEl.appendChild(fragment);
    //   menuEl.scrollTop = 0;
  }

  getListItem(index, result) {
    const el = document.createElement("li");

    const markup = `
    <div class="preview__marker markerbg marker_${index + 1}"></div>
    <div class="preview__info">
      <div class="preview__info--name">${result.place_name}</div>
      <div class="preview__info--address">${result.road_address_name}</div>
    </div>
    <svg class="preview__bookmark--icon">
      <use xlink:href="${icons}#icon-star-empty"></use>
    </svg>
    `;

    el.innerHTML = markup;
    el.className = "preview";

    return el;

    // var el = document.createElement("li"),
    //   itemStr =
    //     '<span class="markerbg marker_' +
    //     (index + 1) +
    //     '"></span>' +
    //     '<div class="info">' +
    //     "   <h5>" +
    //     places.place_name +
    //     "</h5>";

    // if (places.road_address_name) {
    //   itemStr +=
    //     "    <span>" +
    //     places.road_address_name +
    //     "</span>" +
    //     '   <span class="jibun gray">' +
    //     places.address_name +
    //     "</span>";
    // } else {
    //   itemStr += "    <span>" + places.address_name + "</span>";
    // }

    // itemStr += '  <span class="tel">' + places.phone + "</span>" + "</div>";

    // el.innerHTML = itemStr;
    // el.className = "item";

    // return el;
  }
}

export default new resultsView();
