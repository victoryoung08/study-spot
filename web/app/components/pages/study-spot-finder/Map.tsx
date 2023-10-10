"use client";
import "mapbox-gl/dist/mapbox-gl.css";
import { useCallback, useMemo, useRef } from "react";
import Map, { FullscreenControl, Marker } from "react-map-gl";
import mapboxgl from "mapbox-gl";

const MapView = ({ cafe }: any) => {
  const markerRef = useRef<mapboxgl.Marker>();

  console.log(cafe);

  const popup = useMemo(() => {
    return new mapboxgl.Popup().setText("Hello world!");
  }, []);

  const togglePopup = useCallback(() => {
    markerRef.current?.togglePopup();
  }, []);

  return (
    <>
      <button onClick={togglePopup} className="btn btn-primary z-10">
        Toggle popup
      </button>
      <Map
        mapboxAccessToken="pk.eyJ1Ijoic3R1ZHlzcG90Y2FmZSIsImEiOiJjbG5qOWV1aGMxZzVtMmxsZnZyNmxlc2djIn0.vJPppkgvvnh0nz90LgpWmQ"
        mapLib={import("mapbox-gl")}
        initialViewState={{
          longitude: 151.08748596035767,
          latitude: -33.86306206110525,
          zoom: 10,
        }}
        style={{ width: "100%", height: "100%" }}
        mapStyle="mapbox://styles/mapbox/streets-v9"
      >
        <Marker
          color="red"
          popup={popup}
          ref={markerRef}
          longitude={151.0874859603576}
          latitude={-33.86306206110525}
          //   anchor="bottom"
        >
          {/* <img src="https://www.iconsdb.com/icons/preview/red/map-marker-2-xxl.png" /> */}
        </Marker>
      </Map>
    </>
  );
};

export default MapView;
