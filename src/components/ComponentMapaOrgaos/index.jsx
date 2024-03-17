import { useEffect } from "react";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

function MapaOrgaos({ markers }) {

  useEffect(() => {
    const mapa = new Map("mapa").setView(
      [-9.974721908999932, -67.80999756099993],
      100
    );

    const camadaOSM = new TileLayer(
      "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      {
        attribution: "© OpenStreetMap contributors",
      }
    );
    camadaOSM.addTo(mapa);

    markers.forEach((marker) => {
        const { id, lat, lng, name } = marker;
        const marcador = new Marker([lat, lng]).addTo(mapa);
        marcador.bindPopup(`Marcador ${id}: ${name}`);
      });
    }, [markers]);

  return <div id="mapa" style={{ width: "100%", height: "400px" }}></div>;
}
export default MapaOrgaos;
