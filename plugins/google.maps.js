let hasScript = false;
let maps = [];

window.downloadedGoogleMapsScript = function(){
    hasScript = true;

    while (maps.length) {
        initMap(maps.pop());
    }
};

function initMap({ el, lat, lng }) {
    if (!hasScript) {
        maps.push({ el, lat, lng });
        return;
    }
    
    const map = new window.google.maps.Map(el, {
        zoom: 18,
        center: { lat, lng },
    });
    
    const marker = new window.google.maps.Marker({
        position: { lat, lng },
        map: map,
    });
}

export default ({ env }, inject) => {
    inject('initGoogleMap', el => {
        const lat = parseFloat(env.officeLocationLat, 10);
        const lng = parseFloat(env.officeLocationLng, 10);

        return initMap({ el, lat, lng });
    });

    
    const script = window.document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=${env.googleKey}&callback=downloadedGoogleMapsScript`;
    script.defer = "true";
    window.document.body.appendChild(document.body.appendChild(script));
}