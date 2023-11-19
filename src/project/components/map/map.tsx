import { useEffect, useRef } from 'react';
import { Icon, layerGroup, Marker } from 'leaflet';
import 'leaflet/dist/leaflet.css';

import { OfferPreviewProps, Location } from '../../types/Offers.type';

import { useMap } from '../../hooks/use-map';

type TIconConfig = {
  url: string;
  width: number;
  height: number;
  anchorX: number;
  anchorY: number;
};

type TMapProps = {
  location: Location;
  offers: OfferPreviewProps;
  specialOfferId: OfferPreviewProps['id'] | null;
};

const defaultIconConfig = {
  url: 'img/pin.svg',
  width: 28,
  height: 40,
  anchorX: 14,
  anchorY: 40
};
const activeIconConfig = {
  url: 'img/pin-active.svg',
  width: 28,
  height: 40,
  anchorX: 14,
  anchorY: 40
};

function createIcon(config: TIconConfig) {
  return new Icon ({
    iconUrl: config.url,
    iconSize: [config.width, config.height],
    icomAncor: [config.anchorX, config.anchorY],
  });
}

function Map({ location, offers, specialOfferId }:TMapProps) {
  const mapRef = useRef(null);
  const map = useMap(mapRef, location);

  useEffect(() => {
    if(map) {
      map.setView([location.latitude, location.longitude], location.zoom); //усановка координат
    }
  }, [map, location]);


  useEffect(() => {
    if (map) {
      const markerLayer = layerGroup().addTo(map);

      //создание отдельного маркера
      offers.forEach((offer) => {
        const marker = new Marker ({
          lat: offer.location.latitude,
          lng: offer.location.longitude,
        });

        //ставим иконку
        marker
          .setIcon(
            offer.id === specialOfferId
              ? createIcon(activeIconConfig)
              : createIcon(defaultIconConfig)
          )
          .addTo(markerLayer);
      });

      return () => {
        map.removeLayer(markerLayer);
      };
    }
  }, [map, offers, specialOfferId]);

  return (
    <div
      style={{
        height: '100%',
        minHeight: '500px',
        width: '100%',
        maxWidth: '1140px',
        margin: '0 auto',
      }}
      ref={mapRef}
    >
    </div>
  );
}


export { Map };
