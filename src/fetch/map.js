// import Openrouteservice from "openrouteservice-js";
//import "/public/train_16069-199-2331_v_2.json";

export async function railways() {
  try {
    let data = await fetch("https://mapapi-uekwrfe6.b4a.run/railways").then(
      async (result) => {
        return await result.json();
      }
    );

    return await data;
  } catch (er) {
    console.log(er);
  }
}

export async function stationsFetch() {
  try {
    let data = await fetch(
      "https://bilal1-45fwqnr1.b4a.run/train/16069-199-2331"
    ).then(async (result) => {
      return await result.json();
    });

    return await data.train;
  } catch (er) {
    console.log(er);
  }
}

export async function elevation(staytions) {
  let dataСoordinates = "";

  staytions.forEach((element) => {
    element.forEach((el, i) => {
      el.join().replace(",", "%2C");
      if (i !== element.length - 1) {
        dataСoordinates = dataСoordinates + el + "%2C";
      } else {
        dataСoordinates = dataСoordinates + el;
      }
    });
  });

  try {
    let routing = await fetch(
      `https://overpass-api.de/api/interpreter?data=%2F*%0AThis%20query%20looks%20for%20nodes%2C%20ways%20and%20relations%20%0Awith%20the%20given%20key%2Fvalue%20combination.%0AChoose%20your%20region%20and%20hit%20the%20Run%20button%20above%21%0A*%2F%0A%5Bout%3Ajson%5D%5Btimeout%3A100%5D%3Bnwr%5Brailway%3Drail%5D%28${dataСoordinates}%29%3B%28node%28around%3A7000%2C%2052.2924%2C35.398%29%3Bnode%28around%3A7000%2C%2052.2727%2C35.4253%29%3B%29%3Bnwr%28around%3A7000%29%5B%22railway%22%3D%22rail%22%5D%3B%28._%3B%3E%3B%29%3Bout%3B`
    ).then(async (result) => {
      result = await result.json();
      console.log(result);

      let node = result.elements.filter((el) => el.type === "node");
      let resultWay = [];

      for (let i = 0; i < node.length; i++) {
        resultWay.push([node[i].lat, node[i].lon]);
      }
      console.log(resultWay);
      resultWay.sort(function (a, b) {
        if (a[1] < b[1]) {
          return -1;
        }
        if (a[1] > b[1]) {
          return 1;
        }
        return 0;
      });
      return resultWay;
      //polyline.decode(result.routes[0].geometry);
    });
    return await routing;
  } catch (er) {
    console.log(er);
  }
}
