import "core-js/stable"; // Convert new features to ES5
import "regenerator-runtime/runtime"; // Convert async await to ES5
import { async } from "regenerator-runtime";

import * as model from "./model.js";
import mapView from "./view/mapView.js";
import searchView from "./view/searchView.js";
import markerView from "./view/markerView.js";
import resultsView from "./view/resultsView.js";
import paginationView from "./view/paginationView.js";

const controlMapInstance = async function () {
  try {
    mapView.renderSpinner();
    await model.createMapInstance();
    mapView.removeSpinner();
  } catch (err) {
    console.log(err);
  }
};

const controlSearchPlaces = async function (e) {
  try {
    e.preventDefault();

    const query = searchView.getQuery();

    model.searchPlaces(query);
    resultsView.renderSpinner();

    setTimeout(() => {
      resultsView.renderResults(model.state.data);

      // markerView.renderMarkers(model.state.data);
    }, 500);
  } catch (err) {
    console.log(err);
  }
};

const controlPages = function (e) {};

//! -- INIT --

const init = function () {
  //! CREATE A MAP
  controlMapInstance();

  //! SUBMIT EVENT
  searchView.addHandlerSearch(controlSearchPlaces);

  //! Page Button Event
  paginationView.addHandlerPage(controlPages);
};

init();
