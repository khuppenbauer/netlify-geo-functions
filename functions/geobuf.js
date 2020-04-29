const geobuf = require('geobuf');
const Pbf = require('pbf');

exports.handler = async (event, context) => {
  const type= event.queryStringParameters.type;
  const data = event.body;
  let geoJson, buffer, i, headers;
  let res = '';
  switch (type) {
    case 'encode':
      geoJson = JSON.parse(data);
      buffer = geobuf.encode(geoJson, new Pbf());
      const bufView = new Uint16Array(buffer);
      for (i = 0; i < bufView.length; i++) {
        res = res + String.fromCharCode(bufView[i]);
      }
      headers = {
        'Content-Type': 'text/plain'
      }
      break;
    case 'decode':
      buffer = new ArrayBuffer(data.length*2); // 2 bytes for each char
      const bytes = new Uint16Array(buffer);
      let strLen;
      for (i = 0, strLen = data.length; i < strLen; i++) {
        bytes[i] = data.charCodeAt(i);
      }
      geoJson = geobuf.decode(new Pbf(bytes));
      res = JSON.stringify(geoJson);
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