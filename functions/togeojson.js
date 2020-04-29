const axios = require('axios');
const tj = require('@tmcw/togeojson');
const DOMParser = require('xmldom').DOMParser;

const parseXml = async (data) => {
  const xml = new DOMParser().parseFromString(data, 'text/xml');
  const nodeName = xml.documentElement.nodeName;
  if (nodeName === 'gpx') {
    return tj.gpx(xml);
  } else if (nodeName === 'kml') {
    return tj.kml(xml);
  } else {
    return false;
  }
}

exports.handler = async (event, context) => {
  if (event.httpMethod === 'GET') {
    const url = new URL(event.queryStringParameters.url).href;
    const geojson = await parseXml(await (await axios.get(url)).data);
    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(geojson)
    };
  } else if (event.httpMethod === 'POST') {
    const geojson = await parseXml(event.body);
    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(geojson)
    };
  } else {
    return {
      statusCode: 405,
      body: 'Method Not Allowed'
    };
  }
};
