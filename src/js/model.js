// import { search } from "core-js/fn/symbol";
import { getCoordinates, searchPlaces } from "./helper.js";

export const state = {
  mapObject: {},
  position: [],
  search: {
    query: "",
    results: [],
    page: 1,
    resultsPerPage: 5,
  },
};

// Updating a Current position or default position
export const getLocation = async function () {
  try {
    const response = await getCoordinates();

    state.position = [response.coords.latitude, response.coords.longitude];
  } catch (_) {
    state.position = [37.259404626114815, 127.08043107361158];
  }
};

// Updating Search results
export const getResults = async function (query) {
  try {
    state.search.query = query;

    const response = await searchPlaces(query);
    // { data, status, pagination }

    console.log(response);

    if (response.status === "OK") {
      state.search.results = response.data;

      history.pushState(null, null, `/${query}`);
    } else {
      throw new Error(response.status);
    }
  } catch (err) {
    throw err;
  }
};
