import 'ol/ol.css';
import {Map, View} from 'ol';
import TileLayer from 'ol/layer/Tile';
import {XYZ} from "ol/source.js";


export default class MapProject extends Map{
    constructor() {
        const mapSource = 'https://b.tile.openstreetmap.org/{z}/{x}/{y}.png';
        const mapLayer = new TileLayer({
            source: new XYZ({ url: mapSource })
        });
        const infoLayer = new TileLayer({
            source: new XYZ(
                { url: "https://xdworld.vworld.kr/2d/Hybrid/service/{z}/{x}/{y}.png" })
        });

        super({
            target: "map",
            layers: [mapLayer, infoLayer],
            view: new View({
                projection: "EPSG:3857",
                center: [14135616.994334137, 4518476.294273571],
                rotation: 0,
                zoom: 11,
                enableRotation: false
            })
        });

        this.on('moveend', () => {
            let center = this.getView().getCenter();
            window.history.pushState(center, "map", `/#/dev/devmap/${this.getView().getZoom()}/${center[0]}/${center[1]}`);
        })
    }
}