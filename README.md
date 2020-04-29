# netlify-geo-functions
Collection of geo utilities use as netlify function

## [tmcw/togeojson](https://github.com/tmcw/togeojson)

Pass the url to the gpx or kml file as GET parameter or the
XML Content as Body in an POST Request


**Method:** `GET`

**Endpoint:** `/togeojson?url=https://developers.google.com/kml/documentation/KML_Samples.kml`

**Query:**
 `url` - absolute URL to the input file

---

**Method:** `POST`

**Endpoint:** `/togeojson`

**Query:**
 `body` - XML Content
 
 
## [mapbox/polyline](https://github.com/mapbox/polyline)
 
Pass the GeoJSON Linestring or [Lat, Lng] coordinates pair as Body in an POST Request and add the type (encode|decode|toGeoJSON|fromGeoJSON) as query param
 
### Examples:

#### Type `decode`
 
**Method**: `POST`
 
**Endpoint:** `/polyline?type=decode`
 
**Body:**
```
_p~iF~ps|U_ulLnnqC_mqNvxq`@'
```

**Response:**
```
 [
    [38.5, -120.2], 
    [40.7, -120.95], 
    [43.252, -126.453]
 ]
```

___ 

#### Type `encode`
 
**Method:** `POST`
 
**Endpoint:** `/polyline?type=encode`
 
**Body:**
```
  [
     [38.5, -120.2], 
     [40.7, -120.95], 
     [43.252, -126.453]
  ]
```

**Response:**
```
_p~iF~ps|U_ulLnnqC_mqNvxq`@G?
```

___
 
#### Type `toGeoJSON`
 
**Method:** `POST`
 
**Endpoint:** `/polyline?type=toGeoJSON`
 
**Body:**
```
_p~iF~ps|U_ulLnnqC_mqNvxq`@'
```

**Response:**
```
  { "type": "Feature",
    "geometry": {
      "type": "LineString",
      "coordinates": [[-120.2, 38.5], [-120.95, 40.7], [-126.453, 43.252]]
    }
  } 
```
 
___

#### Type `fromGeoJSON`
 
**Method:** `POST`
 
**Endpoint:** `/polyline?type=fromGeoJSON`
  
**Body**
```
  { "type": "Feature",
    "geometry": {
      "type": "LineString",
      "coordinates": [[-120.2, 38.5], [-120.95, 40.7], [-126.453, 43.252]]
    }
  } 
```

**Response:**
```
_p~iF~ps|U_ulLnnqC_mqNvxq`@
```