import logo from'./logo512.png'
import './App.css';
import Map, { Layer, Source } from 'react-map-gl'
import { movingAssets } from './movingassets';

function App() {
  return (
    <>
      <Map 
      mapLib={import('mapbox-gl')}
      mapboxAccessToken={process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}
      initialViewState={{
        longitude: -100,
        latitude: 40,
        zoom: 3.5
      }}
      style={{width: 600, height: 400}}
      mapStyle="mapbox://styles/mapbox/streets-v9"
    >
      <Source id="vehicles" type="geojson" data={movingAssets}>
        <Layer type="symbol"
          layout={{
            'icon-image': 'vehicle-icon',
            'icon-size': 1,
            'text-field': ['get', 'name']
          }}
        />
      </Source>
    </Map>
  </>
  );
}

export default App;
