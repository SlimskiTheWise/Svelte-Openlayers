<script>
    import {onMount} from "svelte";
    import MapProject from "./map.js";

    let map;

    onMount(async () => {
        map = new MapProject(map)
    })


</script>

<html>
<head>
    <meta charset="utf-8">
    <title></title>
    <style>
        #map {
            width: 800px;
            height: 500px;
        }
    </style>
</head>
<body>
<div id="map"></div>
</body>
</html>