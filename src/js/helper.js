export const getCoordinates = function () {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

export const searchPlaces = function (query) {
  const ps = new kakao.maps.services.Places();

  if (!query.replace(/^\s+|\s+$/g, "")) {
    alert("키워드를 입력해주세요!");
    return false;
  }

  query = query + " 만두";

  return new Promise((resolve, reject) => {
    // 장소검색 객체를 통해 키워드로 장소검색을 요청합니다
    // ps.keywordSearch(query, placesSearchCB);
    ps.keywordSearch(
      query,
      function (data, status, pagination) {
        if (status === kakao.maps.services.Status.OK) {
          // 정상적으로 검색이 완료됐으면
          // 검색 목록과 마커를 표출합니다
          const obj = { data, status, pagination };
          // displayPlaces(obj.data);
          resolve(obj);
          // 페이지 번호를 표출합니다
          // displayPagination(pagination);
        } else if (status === kakao.maps.services.Status.ZERO_RESULT) {
          alert("검색 결과가 존재하지 않습니다.");
          reject(status);
        } else if (status === kakao.maps.services.Status.ERROR) {
          alert("검색 결과 중 오류가 발생했습니다.");
          reject(status);
        }
      },
      {
        useMapCenter: true,
        useMapBounds: true,
        size: 5,
      }
    );
  });
};
