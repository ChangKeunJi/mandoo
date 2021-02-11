import View from "./View.js";

class mapView extends View {
  _data; // => Position [lat,lng]
  //   _mapContainer = document.getElementById("map");

  //   mapInstance() {
  //     const mapOption = {
  //       center: new kakao.maps.LatLng(...this._data), // 지도의 중심좌표
  //       level: 5, // 지도의 확대 레벨
  //     };

  //     return new Promise((resolve, reject) => {
  //       const map = new kakao.maps.Map(this._mapContainer, mapOption);

  //       this._map = map;

  //       if (kakao.maps.services.Status.OK) {
  //         resolve(this._map);
  //       } else {
  //         reject(status);
  //       }
  //     });
  //   }

  render(position) {
    this._data = position;
    this.mapInstance(this._data);
  }

  addHandlerRenderMap(handler) {
    window.addEventListener("load", handler);
  }
}

export default new mapView();
