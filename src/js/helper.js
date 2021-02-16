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
          // 페이지 번호를 표출합니다
          displayPagination(pagination);

          resolve(obj);
        } else if (status === kakao.maps.services.Status.ZERO_RESULT) {
          alert("검색 결과가 존재하지 않습니다.");
          reject(status);
        } else if (status === kakao.maps.services.Status.ERROR) {
          alert("검색 결과 중 오류가 발생했습니다.");
          reject(status);
        }
      },
      {
        // useMapCenter: true,
        // useMapBounds: true,
        size: 5,
      }
    );
  });
};

// 검색결과 목록 하단에 페이지번호를 표시는 함수입니다
function displayPagination(pagination) {
  var paginationEl = document.querySelector(".results-pagination"),
    fragment = document.createDocumentFragment(),
    i;

  // 기존에 추가된 페이지번호를 삭제합니다
  while (paginationEl.hasChildNodes()) {
    paginationEl.removeChild(paginationEl.lastChild);
  }

  for (i = 1; i <= pagination.last; i++) {
    var el = document.createElement("a");
    el.href = "#";
    el.innerHTML = i;

    if (i === pagination.current) {
      el.className = "on";
    } else {
      // 왜 클릭 이벤트를 이런식으로 호출 할까?
      el.onclick = (function (i) {
        return function () {
          pagination.gotoPage(i);
        };
      })(i);
    }

    fragment.appendChild(el);
  }
  paginationEl.appendChild(fragment);

  console.log(pagination);
}

//! Page 클릭 할 때 새롭게 api 요청
// 현재 그 요청한 data를 어떻게 받아올지 방법을 찾아야함.
