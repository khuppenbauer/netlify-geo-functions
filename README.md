# netlify-geo-functions
Collection of geo utilities use as netlify function

## [tmcw/togeojson](https://github.com/tmcw/togeojson)

Pass the url to the gpx or kml file as GET parameter or the
XML Content as Body in an POST Request

**Method:** GET

 `/togeojson?url=https://developers.google.com/kml/documentation/KML_Samples.kml`

**Query:**
 `url` - absolute URL to the input file

**Method:** POST

 `/togeojson`

**Query:**
 `body` - XML Content