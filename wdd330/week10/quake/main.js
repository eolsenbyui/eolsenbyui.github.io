'use strict';

import { getJson, getLocation } from './utilities.js';
import QuakesController from './controller.js';

const BASE_URL = "https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2021-11-01&endtime=2021-11-18"

window.addEventListener("load", async (event) => {
    let controller = new QuakesController("#quakeList > tbody");

    await controller.init();
});
