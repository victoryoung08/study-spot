/* eslint-disable @next/next/no-img-element */
"use client";
import "mapbox-gl/dist/mapbox-gl.css";
import { useRef, useState } from "react";
import Map, { Marker, Popup } from "react-map-gl";
import Image from "next/image";
import pinIcon from "@/public/images/pin.svg";
import Link from "next/link";
import useViewportWidth from "@/hooks/getViewportWidth";

const MapView = ({ cafe }: any) => {
  const [showPopup, setShowPopup] = useState(false);
  const [popUpData, setPopupData] = useState<any>();
  const vieportWidth = useViewportWidth();
  const [viewState, setViewState] = useState({
    latitude:
      popUpData?.attributes.Latitute ||
      cafe?.[0]?.attributes.Latitute ||
      -33.870453,
    longitude:
      popUpData?.attributes.Longitude ||
      cafe?.[0]?.attributes.Longitude ||
      151.208755,
    zoom: 11,
  });

  const mapRef = useRef(null);

  const handleMarkerClick = (item: any, e: any) => {
    if (item.attributes.Latitute && item.attributes.Longitude) {
      setShowPopup(true);
      setPopupData(item);
      e.originalEvent.stopPropagation();

      //@ts-expect-error - mapRef.current is not null
      mapRef.current?.flyTo({
        center: [item.attributes.Longitude, item.attributes.Latitute + 0.04],
        zoom: 11,
      });
    } else {
      // Handle the case where latitude or longitude is missing or undefined
      console.error("Invalid latitude or longitude for marker:", item);
    }
  };

  return (
    <>
      <Map
        ref={mapRef}
        mapboxAccessToken="pk.eyJ1Ijoic3R1ZHlzcG90Y2FmZSIsImEiOiJjbG5qOWV1aGMxZzVtMmxsZnZyNmxlc2djIn0.vJPppkgvvnh0nz90LgpWmQ"
        mapLib={import("mapbox-gl")}
        onMove={(evt) => setViewState(evt.viewState)}
        {...viewState}
        style={{
          width: "100%",
          height: vieportWidth && vieportWidth < 768 ? "100vh" : "75vh",
          borderRadius: "20px",
          borderColor: "white",
          borderWidth: vieportWidth && vieportWidth < 768 ? "" : "3px",
        }}
        mapStyle="mapbox://styles/studyspotcafe/cljwdrlf2008w01pygx57dfve"
      >
        {showPopup && (
          <Popup
            onClose={() => {
              setShowPopup(false);
              setPopupData(null);
            }}
            style={{ padding: 0, margin: 0 }}
            className=" w-[500px]  p-0 m-0 z-50  "
            anchor="bottom"
            longitude={popUpData?.attributes?.Longitude}
            latitude={popUpData?.attributes?.Latitute}
          >
            <div className=" bg-[#454545] p-4 z-50 border-2 rounded-3xl border-white">
              <div className="">
                <Link href={`/cafes/${popUpData.attributes.slug}`}>
                  <img
                    className="border-2 border-white  rounded-xl w-full h-full"
                    alt="marker"
                    src={
                      popUpData?.attributes?.images?.data[0]?.attributes?.url
                    }
                  />
                  <div className="mt-2">
                    <span className="text-lg font-bold">
                      {popUpData.attributes.cafe_name}
                    </span>
                    <div className="flex gap-1 ">
                      <Image
                        className="w-4 h-4"
                        src={pinIcon}
                        alt="Location Icon"
                      />
                      <a
                        target="_blank"
                        href={popUpData.attributes.google_map_link}
                      >
                        <span className="text-xs">
                          {popUpData.attributes.location}
                        </span>
                      </a>
                    </div>
                  </div>
                </Link>

                <div className="flex gap-2 mt-2">
                  {popUpData?.attributes?.features?.data?.map((item: any) => {
                    return (
                      <div
                        key={item.id}
                        className="border p-1 rounded-xl bg-primary tooltip"
                        data-tip={item?.attributes?.item}
                      >
                        <Image
                          width={5}
                          height={5}
                          src={
                            item?.attributes?.svg_icon?.data?.attributes?.url
                          }
                          alt={item?.attributes?.item}
                          className="w-5 h-5"
                        />
                      </div>
                    );
                  })}
                  {popUpData?.attributes?.vibes?.data?.map((item: any) => {
                    return (
                      <div
                        key={item.id}
                        className="border p-1 rounded-xl bg-primary tooltip"
                        data-tip={item?.attributes?.item}
                      >
                        <Image
                          width={5}
                          height={5}
                          src={
                            item?.attributes?.svg_icon?.data?.attributes?.url
                          }
                          alt={item?.attributes?.item}
                          className="w-5 h-5"
                        />
                      </div>
                    );
                  })}
                  {popUpData?.attributes?.styles?.data?.map((item: any) => {
                    return (
                      <div
                        key={item.id}
                        className="border p-1 rounded-xl bg-primary tooltip"
                        data-tip={item?.attributes?.item}
                      >
                        <Image
                          width={5}
                          height={5}
                          src={
                            item?.attributes?.svg_icon?.data?.attributes?.url
                          }
                          alt={item?.attributes?.item}
                          className="w-5 h-5"
                        />
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </Popup>
        )}
        {cafe.map((item: any) => {
          const isValid = isValidCoordinates(
            item.attributes.Latitute,
            item.attributes.Longitude
          );
          if (isValid) {
            return (
              <div key={item.id}>
                {item.attributes.Latitute && item.attributes.Longitude && (
                  <Marker
                    onClick={(e) => handleMarkerClick(item, e)}
                    latitude={item.attributes.Latitute || -33.870453}
                    longitude={item.attributes.Longitude || 151.208755}
                  >
                    <img
                      className={`${
                        vieportWidth && vieportWidth < 768
                          ? "h-16 w-16 "
                          : "h-20 w-20"
                      }z-0`}
                      alt="marker"
                      src={
                        popUpData
                          ? item.id === popUpData.id
                            ? "https://res.cloudinary.com/dz9t8ncms/image/upload/v1697819184/purple_marker_86dbd3e393.png"
                            : "https://res.cloudinary.com/dz9t8ncms/image/upload/v1696963244/graymarker_8a7239412c.svg"
                          : "https://res.cloudinary.com/dz9t8ncms/image/upload/v1697819184/purple_marker_86dbd3e393.png"
                      }
                    />
                  </Marker>
                )}
              </div>
            );
          }
        })}
      </Map>
    </>
  );
};
export default MapView;

function isValidCoordinates(latitude: number, longitude: number) {
  if (latitude < -90 || latitude > 90) {
    return false; // Latitude is invalid
  }
  if (longitude < -180 || longitude > 180) {
    return false; // Longitude is invalid
  }
  return true; // Both latitude and longitude are valid
}
