import PropTypes from 'prop-types';
import GoogleMapReact from 'google-map-react';
import { useState, useCallback } from 'react';

import Box from '@mui/material/Box';

import { GOOGLE_MAP_API } from 'src/config-global';

import MapPopup from './map-popup';
import { mapStyle } from './styles';
import MapMarker from './map-marker';

// ----------------------------------------------------------------------

export default function Map({ offices, sx, ...other }) {
  const [tooltip, setTooltip] = useState(null);

  const [centerMap, setCenterMap] = useState({
    lat: 47.908672,
    lng: 106.9255007
  });

  const handleOpen = useCallback(
    (lat, lng, office) => {
      setCenterMap({
        ...centerMap,
        lat,
        lng,
      });
      setTooltip(office);
    },
    [centerMap]
  );

  return (
    <Box sx={{ height: 480, overflow: 'hidden', ...sx }} {...other}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: GOOGLE_MAP_API }}
        center={centerMap}
        zoom={15}
        options={{
          styles: mapStyle,
          disableDefaultUI: true,
        }}
      >
        {offices.map((office, index) => (
          <MapMarker
            key={index}
            lat={47.908672}
            lng={106.9255007}
            onOpen={() => handleOpen(47.908672, 106.9255007, office)}
          />
        ))}

        {tooltip && (
          <MapPopup
            lat={47.908672}
            lng={106.9255007}
            office={tooltip}
            onClose={() => setTooltip(null)}
          />
        )}
      </GoogleMapReact>
    </Box>
  );
}

Map.propTypes = {
  offices: PropTypes.array,
  sx: PropTypes.object,
};
