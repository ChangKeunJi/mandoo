import View from "./View.js";

class mapView extends View {
  _data; // => Position [lat,lng]
  _parentEl = document.querySelector(".map-container");

  render(position) {
    this._data = position;
    this.mapInstance(this._data);
    this.removeSpinner();
  }

  addHandlerRenderMap(handler) {
    window.addEventListener("load", handler);
  }
}

export default new mapView();
