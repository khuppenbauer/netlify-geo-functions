const geojsonTidy = require('@mapbox/geojson-tidy');

exports.handler = async (event, context) => {
  const data = event.body;
  const distance = event.queryStringParameters.distance || 5;
  const time = event.queryStringParameters.time || 2;
  const points = event.queryStringParameters.points || 1000;
  const options = {
    minimumDistance: distance,
    minimumTime: time,
    maximumPoints: points
  }
  const geoJson = JSON.parse(data);
  const tidyLineString = geojsonTidy.tidy(geoJson, options);
  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(tidyLineString)
  }
};
