const simplify = require('simplify-js');

exports.handler = async (event, context) => {
  const input = JSON.parse(event.body);
  const points = input.points;
  const tolerance = input.tolerance || 1;
  const highQuality = input.highQuality || false;
  const geoJson = simplify(points, tolerance, highQuality);
  const res = JSON.stringify(geoJson);
  const headers = {
    'Content-Type': 'application/json'
  }
  console.log([input, points, tolerance, highQuality, geoJson, res]);
  return {
      statusCode: 200,
      headers: headers,
      body: res
  };
};
