import View from "./View.js";

class markerView extends View {
  markers = [];
  map;
  bounds;

  renderMarkers(results) {
    this.removeMarker();

    this.map = this.mapInstance();
    this.bounds = new kakao.maps.LatLngBounds();

    this.removeMarker();

    results.forEach((result, i) => {
      // 마커를 생성하고 지도에 표시합니다
      const placePosition = new kakao.maps.LatLng(result.y, result.x);
      const marker = this.addMarker(placePosition, i);
      // const itemEl = getListItem(i, results[i]);

      // 검색된 장소 위치를 기준으로 지도 범위를 재설정하기위해
      // LatLngBounds 객체에 좌표를 추가합니다
      this.bounds.extend(placePosition);
    });

    this.map.setBounds(this.bounds);

    console.log(this.markers);
  }

  addMarker(position, idx, title) {
    var imageSrc =
        "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/marker_number_blue.png", // 마커 이미지 url, 스프라이트 이미지를 씁니다
      imageSize = new kakao.maps.Size(36, 37), // 마커 이미지의 크기
      imgOptions = {
        spriteSize: new kakao.maps.Size(36, 691), // 스프라이트 이미지의 크기
        spriteOrigin: new kakao.maps.Point(0, idx * 46 + 10), // 스프라이트 이미지 중 사용할 영역의 좌상단 좌표
        offset: new kakao.maps.Point(13, 37), // 마커 좌표에 일치시킬 이미지 내에서의 좌표
      },
      markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imgOptions),
      marker = new kakao.maps.Marker({
        position: position, // 마커의 위치
        image: markerImage,
      });

    marker.setMap(this.map); // 지도 위에 마커를 표출합니다
    this.markers.push(marker); // 배열에 생성된 마커를 추가합니다

    return marker;
  }

  removeMarker() {
    for (var i = 0; i < this.markers.length; i++) {
      this.markers[i].setMap(null);
    }
    this.markers = [];
  }
}

export default new markerView();
