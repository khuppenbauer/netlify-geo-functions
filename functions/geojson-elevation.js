const geoJsonElevation = require('geojson-elevation');
const nodeHgt = require('node-hgt');

exports.handler = async (event, context) => {
  const addElevation = geoJsonElevation.addElevation;
  const TileSet = nodeHgt.TileSet;
  const ImagicoElevationDownloader = nodeHgt.ImagicoElevationDownloader;
  const tileDirectory = '/tmp';
  const tiles = new TileSet(tileDirectory, {
    downloader: new ImagicoElevationDownloader(tileDirectory)
  });
  const geoJson = JSON.parse(event.body);
  return new Promise((resolve) => {
    addElevation(geoJson, tiles, function(err, geoJson) {
      if (err) {
        return {
          statusCode: 500,
          body: err
        }
      }
      resolve({
        statusCode: 200,
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(geoJson)
      })
    })
  })
};
