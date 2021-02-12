import "core-js/stable"; // Convert new features to ES5
import "regenerator-runtime/runtime"; // Convert async await to ES5
import { async } from "regenerator-runtime";

import * as model from "./model.js";
import mapView from "./view/mapView.js";
import searchView from "./view/searchView.js";
import markerView from "./view/markerView.js";
import resultsView from "./view/resultsView.js";
import paginationView from "./view/paginationView.js";

// if (module.hot) {
//   module.hot.accept();
// }

const controlPosition = async function () {
  try {
    // Remove results list
    resultsView.clear();

    // Render spinner
    mapView.renderSpinner();

    // Get & Updating a Position
    await model.getLocation();

    // Render a Map based on position in State
    mapView.render(model.state.position);
  } catch (err) {
    console.log(err);
  }
};

const constrolSearch = async function (e) {
  try {
    e.preventDefault();

    // Updating search results
    const query = searchView.getQuery();
    await model.getResults(query);
    console.log(model.state.search.results);

    // Render Markers
    markerView.renderMarkers(model.state.search.results);

    // Render Results
    resultsView.clear();
    resultsView.renderResults(model.state.search.results);

    // Render Pagination
    // paginationView.renderPages(model.state.pagination);
  } catch (err) {
    console.log(err);
  }
};

function init() {
  // Render A map at first loading
  mapView.addHandlerRenderMap(controlPosition);

  // Submit & Load new Map and search Results
  searchView.addHandlerSearch(constrolSearch);
}

init();
