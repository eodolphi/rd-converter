import proj4 from 'proj4';
const projectionString = '+proj=sterea +lat_0=52.15616055555555 +lon_0=5.38763888888889 +k=0.999908 +x_0=155000 +y_0=463000 +ellps=bessel +units=m +towgs84=565.2369,50.0087,465.658,-0.406857330322398,0.350732676542563,-1.8703473836068,4.0812 +no_defs <>';

export let projection = proj4(projectionString);

function inRDRange(coordinates) {
  return (
      coordinates[0] > -700 &&
      coordinates[0] < 300000 &&
      coordinates[1] > 289000 &&
      coordinates[1] < 629000
  );
}

export default function convert(coordinates) {
  let converted = projection.forward(coordinates);
  if (inRDRange(converted)) {
    return {
      coordinates: converted, type: 'rd'
    };
  }

  converted = projection.inverse(coordinates);
  if (inRDRange(coordinates)) {
    return {
      coordinates: converted, type: 'gps'
    };
  }

  return null;
}
