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
 
**Method:** `POST`
 
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
  
**Body:**
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


## [mapbox/geobuf](https://github.com/mapbox/geobuf)

Pass the GeoJSON or the encoding bytes string as Body in an POST Request and add the type (encode|decode) as query param

### Examples:

#### Type: `encode

**Method:** POST

**Endpoint:** `/geobuf?type=encode`

**Body:**
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
*
ÖÈÙÛ°"ýUð'
```

#### Type: `decode`

**Method:** POST

**Endpoint:** `/geobuf?type=decode`

**Body:**
```
*
ÖÈÙÛ°"ýUð'
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

## [mapbox/geojson-tidy](https://github.com/mapbox/geojson-tidy)

Create a tidy geojson by resmapling points in the feature based on sampling time and distance. Handy when geometries that have been converted from a noisy GPS/GPX output.

- Set a minimum sampling time between successive points
- Set a minimum distance between successive points
- Set a maximum feature length to split long segments

### Examples:
**distance:** optional | default: 5
**time:** optional | default: 2
**point:** optional | default: 1000

**Method:** `POST`

**Endpoint:** `/.netlify/functions/geojson-tidy`