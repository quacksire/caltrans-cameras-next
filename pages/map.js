
import Dynamic from 'next/dynamic';
//import "leaflet/dist/leaflet.css";
export default function Map() {
    const MapWithNoSSR = Dynamic(() => import('../components/map'), {
        ssr: false
      });
      return <MapWithNoSSR />
}



