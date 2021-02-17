import icons from "../../img/icons.svg";

export default class View {
  _mapContainer = document.getElementById("map");

  mapInstance(data = [37.259404626114815, 127.08043107361158]) {
    const mapOption = {
      center: new kakao.maps.LatLng(...data), // 지도의 중심좌표
      level: 7, // 지도의 확대 레벨
    };

    const map = new kakao.maps.Map(this._mapContainer, mapOption);

    return map;
  }

  renderSpinner() {
    this.clear();
    const markup = `
    <div class="spinner">
     <svg>
       <use href="${icons}#icon-spinner11"></use>
     </svg>
    </div>
    `;

    this._parentEl.insertAdjacentHTML("afterbegin", markup);
  }

  removeSpinner() {
    const spinner = document.querySelector(".spinner");
    spinner.parentNode.removeChild(spinner);
  }

  removeChild(el) {
    while (el.hasChildNodes()) {
      el.removeChild(el.lastChild);
    }
  }
  clear() {
    this._parentEl.innerHTML = "";
  }
  mapInstance(data = [37.259404626114815, 127.08043107361158]) {
    const mapOption = {
      center: new kakao.maps.LatLng(...data), // 지도의 중심좌표
      level: 7, // 지도의 확대 레벨
    };

    const map = new kakao.maps.Map(this._mapContainer, mapOption);

    return map;
  }
}
