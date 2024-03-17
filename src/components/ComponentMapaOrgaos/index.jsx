import { useEffect } from "react";
import { Map, TileLayer, Marker, Popup } from "leaflet";
import "leaflet/dist/leaflet.css";

function MapaOrgaosIbama() {
  const markers = [
    {
      id: 1,
      lat: -9.974721908999932,
      lng: -67.80999756099993,
      name: "Superintendência de RIO BRANCO",
    },
    {
      id: 2,
      lat: -11.016111107999933,
      lng: -68.74805557099992,
      name: "Unidade Técnica Nível I de Brasiléia",
    },
    {
      id: 3,
      lat: -7.631111114999933,
      lng: -72.67000001099993,
      name: "Unidade Técnica Nível I de Cruzeiro do Sul",
    },
    {
      id: 4,
      lat: -7.506111105999933,
      lng: -63.020833335999924,
      name: "Gerência Executiva de Humaitá",
    },
    {
      id: 5,
      lat: -3.1019444439999337,
      lng: -60.02500151699993,
      name: "Superintendência de MANAUS",
    },
    {
      id: 6,
      lat: -2.6283333279999335,
      lng: -56.735833338999925,
      name: "Unidade Técnica Nível I de Parintins",
    },
    {
      id: 7,
      lat: -4.252499993999933,
      lng: -69.93805556499993,
      name: "Unidade Técnica Nível I de Tabatinga",
    },
    {
      id: 8,
      lat: 0.038888891000066,
      lng: -51.066387186999926,
      name: "Superintendência de MACAPA",
    },
    {
      id: 9,
      lat: 3.8430555550000656,
      lng: -51.83499998999993,
      name: "Unidade Técnica Nível I de Oiapoque",
    },
    {
      id: 10,
      lat: -5.525833137999934,
      lng: -47.47555541599993,
      name: "Gerência Executiva de IMPERATRIZ",
    },
    {
      id: 11,
      lat: -2.5297222159999335,
      lng: -44.30277634699993,
      name: "Superintendência de SAO LUIS",
    },
    {
      id: 12,
      lat: -3.6666666599999336,
      lng: -45.38000000299993,
      name: "Unidade Técnica Nível I de Santa Inês",
    },
    {
      id: 13,
      lat: -15.880411999999932,
      lng: -52.26395299999993,
      name: "Gerência Executiva de Barra do Garças",
    },
    {
      id: 14,
      lat: -11.378333092999933,
      lng: -58.741111763999925,
      name: "Gerência Executiva de JUINA",
    },
    {
      id: 15,
      lat: -11.864444722999933,
      lng: -55.50388717599993,
      name: "Gerência Executiva de SINOP",
    },
    {
      id: 16,
      lat: -15.596111301999931,
      lng: -56.09666824999993,
      name: "Superintendência de CUIABA",
    },
    {
      id: 17,
      lat: -9.875555558999933,
      lng: -56.08611111599993,
      name: "Unidade Técnica Nível I de Alta Floresta",
    },
    {
      id: 18,
      lat: -7.147777776999933,
      lng: -55.381111110999925,
      name: "Base Avançada de Novo Progresso",
    },
    {
      id: 19,
      lat: -5.3686113279999335,
      lng: -49.11777877099993,
      name: "Gerência Executiva de MARABA",
    },
    {
      id: 20,
      lat: -2.4430556269999335,
      lng: -54.70833206299993,
      name: "Gerência Executiva de SANTAREM",
    },
    {
      id: 21,
      lat: -1.4558333229999338,
      lng: -48.50444412299993,
      name: "Superintendência de BELEM",
    },
    {
      id: 22,
      lat: -3.2033333239999338,
      lng: -52.206388888999925,
      name: "Unidade Técnica Nível I de Altamira",
    },
    {
      id: 23,
      lat: -10.882222168999933,
      lng: -61.94416808999993,
      name: "Gerência Executiva de JI-PARANA",
    },
    {
      id: 24,
      lat: -8.761944761999933,
      lng: -63.90388869499993,
      name: "Superintendência de PORTO VELHO",
    },
    {
      id: 25,
      lat: -10.782777787999933,
      lng: -65.33944444799992,
      name: "Unidade Técnica Nível I de Guajará Mirim",
    },
    {
      id: 26,
      lat: -12.740555559999933,
      lng: -60.145833333999924,
      name: "Unidade Técnica Nível I de Vilhena",
    },
    {
      id: 27,
      lat: 4.480608,
      lng: -61.148414,
      name: "Pacaraima Unidade Técnica Nível 1",
    },
    {
      id: 28,
      lat: 2.819722178000066,
      lng: -60.673332218999924,
      name: "Superintendência de BOA VISTA",
    },
    {
      id: 29,
      lat: -10.166666992999932,
      lng: -48.33333205899993,
      name: "Superintendência de PALMAS",
    },
    {
      id: 30,
      lat: -7.1911111059999335,
      lng: -48.20722221099993,
      name: "Unidade Técnica Nível I de Araguaína",
    }
];

  useEffect(() => {
    const mapa = new Map("mapa").setView(
      [ -3.1019444439999337, -60.02500151699993],
      3.6
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

  return <div id="mapa" style={{ width: "500px", height: "630px" }}></div>;
}
export default MapaOrgaosIbama;
