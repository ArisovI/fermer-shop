import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import styles from './Client.module.scss';
import { useState } from 'react';
import { LatLngTuple } from 'leaflet';

const districts: { country: string; location: [number, number] }[] = [
    {
        country: 'Nukus',
        location: [42.460341, 59.617996]
    },
    {
        country: 'Muynak',
        location: [43.766605, 59.028055]
    },
    {
        country: 'Kungirot',
        location: [43.045816, 58.847529]
    },
    {
        country: 'Shumanay',
        location: [42.662505, 58.902884]
    },
    {
        country: 'Kanlykul',
        location: [42.786029, 59.083472]
    },
    {
        country: 'Khojayli',
        location: [42.412544, 59.453057]
    },
    {
        country: 'Takhiaash',
        location: [42.333846, 59.575506]
    },
    {
        country: 'Nukus Rayon',
        location: [42.539086, 59.585432]
    },
    {
        country: 'Kegeyli',
        location: [42.740576, 59.698414]
    },
    {
        country: 'Karaozyak',
        location: [42.760365, 60.157920]
    },
    {
        country: 'Chimbay',
        location: [42.934882, 59.770027]
    },
    {
        country: 'Takhtakupir',
        location: [43.159008, 61.186275]
    },
    {
        country: 'Amudarya',
        location: [42.151624, 60.140205]
    },
    {
        country: 'Beruniy',
        location: [41.691312, 60.756800]
    },
    {
        country: 'Ellikkala',
        location: [41.907782, 61.026977]
    },
    {
        country: 'Bozatov',
        location: [42.962202, 59.350227]
    }
];

export const Client = () => {
    const [loc, setLoc] = useState<LatLngTuple>([42.460341, 59.617996]);

    return (
        <div className={styles.client}>
            <div className={styles.map}>
                <MapContainer className={styles['leaflet-container']} center={loc} zoom={13}>
                    <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={loc}>
                        <Popup>
                            A pretty CSS3 popup. <br /> Easily customizable.
                        </Popup>
                    </Marker>
                    <MapComponent loc={loc} />
                </MapContainer>
            </div>

            <div className={styles.right}>
                <ul>
                    {districts.map((district, index) => (
                        <li key={index} onClick={() => setLoc(district.location)}>
                            {district.country}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};
const MapComponent = ({ loc }: { loc: LatLngTuple }) => {
    const map = useMap();
    map.setView(loc);
    return null;
};
