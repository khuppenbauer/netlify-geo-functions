const turf = require('@turf/turf');

exports.handler = async (event, context) => {
  if (event.httpMethod === 'POST') {
    const geoJson = JSON.parse(event.body);
    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(turf.dissolve(geoJson))
    };
  } else {
    return {
      statusCode: 405,
      body: 'Method Not Allowed'
    };
  }
};
