export default class View {
  // map;
  _mapContainer = document.getElementById("map");

  mapInstance(data = [37.259404626114815, 127.08043107361158]) {
    const mapOption = {
      center: new kakao.maps.LatLng(...data), // 지도의 중심좌표
      level: 7, // 지도의 확대 레벨
    };

    // return new Promise((resolve, reject) => {
    //   const map = new kakao.maps.Map(this._mapContainer, mapOption);

    //   if (kakao.maps.services.Status.OK) {
    //     resolve(map);
    //   } else {
    //     reject(status);
    //   }
    // });

    const map = new kakao.maps.Map(this._mapContainer, mapOption);

    return map;
  }
}
