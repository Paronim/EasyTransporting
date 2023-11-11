// import Openrouteservice from "openrouteservice-js";
import polyline from "polyline";

// const Elevation = new Openrouteservice.Elevation({
//   api_key: "5b3ce3597851110001cf62483ce96d01fd9549118fb8784548556389",
// });

async function elevation() {
  //   try {
  //     let response = Elevation.lineElevation({
  //       format_in: "geojson",
  //       format_out: "geojson",
  //       geometry: {
  //         coordinates: [
  //           [35.398, 52.2924],
  //           [35.4253, 52.2727],
  //         ],
  //         type: "LineString",
  //       },
  //     });
  //     // Add your own result handling here
  //     console.log(response);
  //   } catch (err) {
  //     console.log("An error occurred: " + err.status);
  //     console.error(await err.response.json());
  //   }
  try {
    let routing = await fetch(
      "http://router.project-osrm.org/route/v1/driving/35.398,52.2924;35.4253,52.2727?alternatives=true&geometries=polyline"
    ).then(async (result) => {
      result = await result.json();
      console.log(result);
      return polyline.decode(result.routes[0].geometry);
    });
    return await routing;
  } catch (er) {
    console.log(er);
  }
}

export default elevation;
