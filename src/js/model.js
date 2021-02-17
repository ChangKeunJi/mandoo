// import { search } from "core-js/fn/symbol";
import { async } from "regenerator-runtime";
import { getCoordinates } from "./helper.js";

export const state = {
  curPlace: { lat: 0, lng: 0 },
  map: {},
  ps: {},
  data: {},
  pagination: {},
};

export const currentPlace = async function () {
  try {
    const cur = await getCoordinates();

    const { latitude: lat, longitude: lng } = cur.coords;

    state.curPlace.lat = lat;
    state.curPlace.lng = lng;
  } catch (_) {
    state.curPlace.lat = 37.566826;
    state.curPlace.lng = 126.9786567;
  }
};

export const createMapInstance = async function () {
  try {
    await currentPlace();

    const mapContainer = document.getElementById("map"); // 지도를 표시할 div
    const mapOption = {
      center: new kakao.maps.LatLng(state.curPlace.lat, state.curPlace.lng), // 지도의 중심좌표
      level: 3, // 지도의 확대 레벨
    };

    // 지도를 생성합니다
    var map = new kakao.maps.Map(mapContainer, mapOption);

    state.map = map;

    var ps = new kakao.maps.services.Places();

    state.ps = ps;
  } catch (err) {
    console.log(err);
  }
};

export const searchPlaces = function (query) {
  if (!query.replace(/^\s+|\s+$/g, "")) {
    alert("키워드를 입력해주세요!");
    return false;
  }

  query = query + " 만두";

  state.ps.keywordSearch(query, placesSearchCB, { size: 5 });
};

//! KEY CallBack FUNCTION!
export const placesSearchCB = function (data, status, pagination) {
  if (status === kakao.maps.services.Status.OK) {
    state.data = data.map((el) => {
      return {
        id: el.id,
        name: el.place_name,
        address: el.address_name,
        x: el.x,
        y: el.y,
      };
    });

    state.pagination = pagination;

    // 정상적으로 검색이 완료됐으면
    // 검색 목록과 마커를 표출합니다
    // displayPlaces(data);

    // 페이지 번호를 표출합니다
    // displayPagination(pagination);
  } else if (status === kakao.maps.services.Status.ZERO_RESULT) {
    alert("검색 결과가 존재하지 않습니다.");
    return;
  } else if (status === kakao.maps.services.Status.ERROR) {
    alert("검색 결과 중 오류가 발생했습니다.");
    return;
  }
};
