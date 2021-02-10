import { getCoordinates } from "./helper.js";

export const state = {
  mapObject: {},
  currentPosition: [],
};

// Generates Map Object
const renderMap = function (lat, lng) {
  const mapContainer = document.getElementById("map"), // 지도를 표시할 div
    mapOption = {
      center: new kakao.maps.LatLng(lat, lng), // 지도의 중심좌표
      level: 5, // 지도의 확대 레벨
    };

  // 지도를 생성합니다
  const map = new kakao.maps.Map(mapContainer, mapOption);

  state.mapObject = map;
};

// Updating a Current position or default position
export const getLocation = async function () {
  try {
    const response = await getCoordinates();
    // console.log(response);

    state.currentPosition = [
      response.coords.latitude,
      response.coords.longitude,
    ];
    console.log(state.currentPosition);

    renderMap(state.currentPosition[0], state.currentPosition[1]);
  } catch (_) {
    // console.log(err);
    state.currentPosition = [37.259404626114815, 127.08043107361158];
    renderMap(state.currentPosition[0], state.currentPosition[1]);
  }
};
