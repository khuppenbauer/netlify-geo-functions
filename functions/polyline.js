const polyline = require('@mapbox/polyline');

exports.handler = async (event, context) => {
  const type= event.queryStringParameters.type;
  const data = event.body;
  let geoJson, coordinates, res, headers;
  switch (type) {
    case 'toGeoJSON':
      geoJson = polyline.toGeoJSON(data);
      res = JSON.stringify(geoJson);
      headers = {
        'Content-Type': 'application/json'
      }
      break;
    case 'fromGeoJSON':
      geoJson = JSON.parse(data);
      res = polyline.fromGeoJSON(geoJson);
      headers = {
        'Content-Type': 'text/plain'
      }
      break;
    case 'encode':
      coordinates = JSON.parse(data);
      res = polyline.encode(coordinates);
      headers = {
        'Content-Type': 'text/plain'
      }
      break;
    case 'decode':
      coordinates = polyline.decode(data);
      res = JSON.stringify(coordinates);
      headers = {
        'Content-Type': 'application/json'
      }
      break;
    default:
      res = 'Type doesn\'t exist';
      headers = {
        'Content-Type': 'text/plain'
      }
  }
  return {
      statusCode: 200,
      headers: headers,
      body: res
  };
};
