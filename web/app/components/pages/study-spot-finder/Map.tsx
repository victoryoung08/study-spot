/* eslint-disable @next/next/no-img-element */
"use client";
import "mapbox-gl/dist/mapbox-gl.css";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Map, {
  FullscreenControl,
  Marker,
  Popup,
  ScaleControl,
} from "react-map-gl";
import mapboxgl from "mapbox-gl";
import Image from "next/image";
import pinIcon from "@/public/images/pin.svg";
const MapView = ({ cafe }: any) => {
  const [showPopup, setShowPopup] = useState(false);
  const [popUpData, setPopupData] = useState<any>();

  return (
    <>
      <Map
        mapboxAccessToken="pk.eyJ1Ijoic3R1ZHlzcG90Y2FmZSIsImEiOiJjbG5qOWV1aGMxZzVtMmxsZnZyNmxlc2djIn0.vJPppkgvvnh0nz90LgpWmQ"
        mapLib={import("mapbox-gl")}
        initialViewState={{
          latitude: cafe[0]?.attributes?.Latitute,
          longitude: cafe[0]?.attributes?.Longitude,
          zoom: 10,
        }}
        style={{
          width: "100%",
          height: "100%",
          borderRadius: "20px",
          borderColor: "white",
          borderWidth: "3px",
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
            className="w-[500px] h-[500px] p-0 m-0 "
            anchor="top"
            longitude={popUpData?.attributes?.Longitude}
            latitude={popUpData?.attributes?.Latitute}
          >
            <div className="border-2 border-white bg-[#454545] rounded-xl p-4">
              <div>
                <img
                  className="border-2 border-white rounded-xl w-full h-full"
                  alt="marker"
                  src={popUpData?.attributes?.images?.data[0]?.attributes?.url}
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

                  <div className="flex gap-2 mt-2">
                    {popUpData?.attributes?.features?.data?.map((item: any) => {
                      return (
                        <div
                          key={item.id}
                          className="border p-1 rounded-xl bg-primary"
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
                          className="border p-1 rounded-xl bg-primary"
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
                          className="border p-1 rounded-xl bg-primary"
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
            </div>
          </Popup>
        )}
        {cafe.map((item: any) => {
          return (
            <>
              {item.attributes.Latitute && item.attributes.Longitude && (
                <Marker
                  style={{ zIndex: 1000 }}
                  onClick={(e) => {
                    e.originalEvent.stopPropagation();
                    setShowPopup(true);
                    setPopupData(item);
                  }}
                  key={item.id}
                  latitude={item.attributes.Latitute}
                  longitude={item.attributes.Longitude}

                  //   anchor="bottom"
                >
                  <img
                    alt="marker"
                    src={
                      popUpData
                        ? item.id === popUpData.id
                          ? "https://res.cloudinary.com/dz9t8ncms/image/upload/v1696958014/marker_631477ea83.svg"
                          : "https://res.cloudinary.com/dz9t8ncms/image/upload/v1696963244/graymarker_8a7239412c.svg"
                        : "https://res.cloudinary.com/dz9t8ncms/image/upload/v1696958014/marker_631477ea83.svg"
                    }
                  />
                </Marker>
              )}
            </>
          );
        })}
      </Map>
    </>
  );
};
export default MapView;
